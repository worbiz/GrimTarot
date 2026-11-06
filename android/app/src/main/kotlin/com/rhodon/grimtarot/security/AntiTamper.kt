package com.rhodon.grimtarot.security

import android.content.Context
import android.os.Build
import android.os.Debug
import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader

/**
 * 6. Resilienz gegen Reverse Engineering und Tampering (OWASP MASVS-RESILIENCE)
 *
 * Behandelt Root- und Manipulationsmerkmale als abgestuften Risiko-Score (0-100),
 * um eine präzise Integritätsanalyse ohne fehlerhaften Hard-Kill für Custom-ROMs durchzuführen.
 */
object AntiTamper {

    data class SecurityAuditResult(
        val riskScore: Int, // 0 = vertrauenswürdig, 100 = stark kompromittiert
        val isCompromised: Boolean,
        val isRooted: Boolean,
        val isDebuggerAttached: Boolean,
        val isEmulator: Boolean,
        val hasTestKeys: Boolean,
        val suspiciousFilesFound: List<String>,
        val recommendations: List<String>
    )

    private val ROOT_PATHS = listOf(
        "/system/app/Superuser.apk",
        "/sbin/su",
        "/system/bin/su",
        "/system/xbin/su",
        "/data/local/xbin/su",
        "/data/local/bin/su",
        "/system/sd/xbin/su",
        "/system/bin/failsafe/su",
        "/data/local/su",
        "/su/bin/su",
        "/system/xbin/daemonsu",
        "/system/etc/init.d/99SuperSUDaemon"
    )

    fun evaluateDeviceIntegrity(context: Context): SecurityAuditResult {
        var score = 0
        val detectedFiles = mutableListOf<String>()
        val tips = mutableListOf<String>()

        // 1. Root-Dateien im Dateisystem prüfen
        for (path in ROOT_PATHS) {
            try {
                if (File(path).exists()) {
                    detectedFiles.add(path)
                }
            } catch (_: Exception) {}
        }

        // 2. 'su' Befehl Ausführbarkeit
        val canExecuteSu = canExecuteSuCommand()
        if (canExecuteSu) {
            tips.add("Superuser (su) Binary ist auf dem System ausführbar")
        }

        val isRooted = detectedFiles.isNotEmpty() || canExecuteSu
        if (isRooted) {
            score += 45
            tips.add("Root-Artefakte oder Superuser-Zugriff auf dem Gerät erkannt")
        }

        // 3. Build Tags (test-keys vs release-keys)
        val hasTestKeys = Build.TAGS != null && Build.TAGS.contains("test-keys")
        if (hasTestKeys) {
            score += 20
            tips.add("Betriebssystem mit inoffiziellen Developer 'test-keys' signiert")
        }

        // 4. Debugger Check
        val debuggerActive = Debug.isDebuggerConnected() || Debug.waitingForDebugger()
        if (debuggerActive) {
            score += 35
            tips.add("Laufzeit-Debugger aktiv (Debug-Attach erkannt)")
        }

        // 5. Emulator-Prüfung
        val isEmu = isEmulator()
        if (isEmu) {
            score += 20
            tips.add("Ausführung in Emulator-Umgebung detektiert")
        }

        val finalScore = score.coerceIn(0, 100)
        val isCompromised = finalScore >= 40 || isRooted || debuggerActive

        return SecurityAuditResult(
            riskScore = finalScore,
            isCompromised = isCompromised,
            isRooted = isRooted,
            isDebuggerAttached = debuggerActive,
            isEmulator = isEmu,
            hasTestKeys = hasTestKeys,
            suspiciousFilesFound = detectedFiles,
            recommendations = tips
        )
    }

    private fun canExecuteSuCommand(): Boolean {
        var process: Process? = null
        return try {
            process = Runtime.getRuntime().exec(arrayOf("/system/xbin/which", "su"))
            val inReader = BufferedReader(InputStreamReader(process.inputStream))
            inReader.readLine() != null
        } catch (_: Exception) {
            false
        } finally {
            process?.destroy()
        }
    }

    private fun isEmulator(): Boolean {
        return (Build.FINGERPRINT.startsWith("generic")
                || Build.FINGERPRINT.startsWith("unknown")
                || Build.MODEL.contains("google_sdk")
                || Build.MODEL.contains("Emulator")
                || Build.MODEL.contains("Android SDK built for x86")
                || Build.BOARD == "QC_Reference_Phone"
                || Build.MANUFACTURER.contains("Genymotion")
                || Build.HOST.startsWith("Build")
                || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
                || "google_sdk" == Build.PRODUCT)
    }
}
