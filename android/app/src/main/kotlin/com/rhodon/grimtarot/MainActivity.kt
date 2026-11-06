package com.rhodon.grimtarot

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import com.rhodon.grimtarot.security.AntiTamper

/**
 * 5. Plattform-Interaktion & Gehärteter WebView-Container (OWASP MASVS-PLATFORM)
 *
 * - Startzeit-Integritätsprüfung & Root-Erkennung in onCreate()
 * - Native Sicherheitswarnung (AlertDialog) bei kompromittierten Umgebungen
 * - Sandboxed WebView & JS-Interface für Audit-Transparenz
 */
class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var lastAuditResult: AntiTamper.SecurityAuditResult? = null

    @SuppressLint("SetJavaScriptEnabled", "JavascriptInterface")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // 1. Startzeit-Integritätsprüfung und Root-Erkennung
        val auditResult = AntiTamper.evaluateDeviceIntegrity(this)
        lastAuditResult = auditResult

        // Falls die Ausführungsumgebung kompromittiert ist (Root / Debugger / Test-Keys), zeige eine Sicherheitswarnung
        if (auditResult.isCompromised) {
            showSecurityWarningDialog(auditResult)
        }

        // 2. Gehärtete WebView-Sandbox
        webView = WebView(this).apply {
            settings.apply {
                javaScriptEnabled = true

                // Strikter Lockdown gegen Path-Traversal & Datei-Exfiltration
                allowFileAccess = false
                allowContentAccess = false
                allowFileAccessFromFileURLs = false
                allowUniversalAccessFromFileURLs = false

                domStorageEnabled = true
                databaseEnabled = true
                cacheMode = WebSettings.LOAD_DEFAULT

                mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
            }

            // Exponiere sichere JS-Brücke für den Integritäts-Audit im WebApp Frontend
            addJavascriptInterface(WebAppSecurityBridge(auditResult), "GrimTarotSecurityBridge")

            webViewClient = object : WebViewClient() {
                override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                    val url = request?.url?.toString() ?: return false
                    return if (url.startsWith("file:///android_asset/") || url.startsWith("https://appassets.androidplatform.net/")) {
                        false
                    } else {
                        // Externe URLs blockieren
                        true
                    }
                }
            }
        }

        setContentView(webView)

        // Offline Web-App aus gesichertem Asset-Bundle laden
        webView.loadUrl("file:///android_asset/www/index.html")

        // Zurück-Button Handler
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack()
                } else {
                    finish()
                }
            }
        })
    }

    /**
     * Zeigt einen nativer Sicherheitswarnungs-Dialog, wenn Root-Binaries oder ein Debugger erkannt wurden.
     */
    private fun showSecurityWarningDialog(audit: AntiTamper.SecurityAuditResult) {
        val details = audit.recommendations.joinToString("\n• ")
        val message = "GrimTarot hat ein erhöhtes Sicherheitsrisiko in der Ausführungsumgebung festgestellt:\n\n• $details\n\n" +
                "Ihre Legungen bleiben 100% lokal auf dem Gerät. Sensible Krypto-Schlüssel werden isoliert."

        AlertDialog.Builder(this)
            .setTitle("🛡️ Sicherheitswarnung: Systemumgebung")
            .setMessage(message)
            .setIcon(android.R.drawable.ic_dialog_alert)
            .setPositiveButton("Verstanden & Fortfahren") { dialog, _ ->
                dialog.dismiss()
            }
            .setNegativeButton("App Beenden") { _, _ ->
                finish()
            }
            .setCancelable(false)
            .show()
    }

    /**
     * Sichere JavaScript-Schnittstelle für die React SPA zur Abfrage des Systemintegritäts-Status.
     */
    inner class WebAppSecurityBridge(private val audit: AntiTamper.SecurityAuditResult) {
        @JavascriptInterface
        fun getRiskScore(): Int = audit.riskScore

        @JavascriptInterface
        fun isCompromised(): Boolean = audit.isCompromised

        @JavascriptInterface
        fun isRooted(): Boolean = audit.isRooted

        @JavascriptInterface
        fun isDebuggerAttached(): Boolean = audit.isDebuggerAttached

        @JavascriptInterface
        fun getRecommendationsJson(): String {
            val jsonArray = audit.recommendations.joinToString(prefix = "[\"", postfix = "\"]", separator = "\",\"")
            return if (audit.recommendations.isEmpty()) "[]" else jsonArray
        }
    }
}
