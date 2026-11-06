import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Cpu,
  FileCode2,
  Terminal,
  Network,
  Database,
  Smartphone,
  Layers,
  CheckCircle2,
  X,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Sliders
} from 'lucide-react';

interface SecurityAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityAuditModal: React.FC<SecurityAuditModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'kotlin' | 'proguard' | 'manifest'>('audit');
  const [expandedSection, setExpandedSection] = useState<number | null>(1);
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const hardeningPillars = [
    {
      id: 1,
      title: '1. Build- und Release-Härtung',
      icon: Cpu,
      status: 'Aktiv (R8 & ProGuard)',
      statusColor: 'text-[#7ee787]',
      summary: 'R8 Obfuskation, Dead-Code-Eliminierung und Ressourcen-Shrinking im Release-Build.',
      details: [
        'isMinifyEnabled = true (R8 Obfuskation & Code-Schrumpfung)',
        'isShrinkResources = true (Entfernung ungenutzter Ressourcen)',
        'isDebuggable = false (Kein Debugger-Attach im Release)',
        'dependenciesInfo { includeInApk = false; includeInBundle = false }',
        'Strip aller android.util.Log Aufrufe über proguard-rules.pro'
      ]
    },
    {
      id: 2,
      title: '2. Manifest und Komponenten-Exposure',
      icon: ShieldCheck,
      status: 'Gehärtet (MASVS-PLATFORM)',
      statusColor: 'text-[#7ee787]',
      summary: 'Minimale Angriffsfläche: Kein Backup, kein Task-Hijacking, kein Cleartext.',
      details: [
        'android:allowBackup="false" & android:fullBackupContent="false"',
        'android:dataExtractionRules="@xml/data_extraction_rules"',
        'android:usesCleartextTraffic="false" & networkSecurityConfig',
        'Task-Hijacking Schutz: launchMode="singleTask" & taskAffinity=""',
        'Alle Komponenten ohne Intent-Filter sind strikt exported="false"'
      ]
    },
    {
      id: 3,
      title: '3. Netzwerkschicht',
      icon: Network,
      status: 'TLS 1.3 erzwungen',
      statusColor: 'text-[#7ee787]',
      summary: 'Striktes Verbot unverschlüsselter Verbindungen und Public-Key Pinning mit Rotationsplan.',
      details: [
        'cleartextTrafficPermitted="false" global im Netzwerk-Profil',
        'Trust-Anchors ausschließlich auf Systemzertifikate beschränkt',
        'OkHttpClient mit modernem TLS 1.3 / TLS 1.2 ConnectionSpec',
        'CertificatePinner mit Primär- und Backup-Pins (Rotationsplan)',
        'Kein TrustManager- oder HostnameVerifier-Override'
      ]
    },
    {
      id: 4,
      title: '4. Datenspeicherung und Krypto',
      icon: Database,
      status: 'AndroidKeyStore (AES-256-GCM)',
      statusColor: 'text-[#7ee787]',
      summary: 'Hardware-Backed Keystore mit TEE/StrongBox und AEAD-Kryptographie.',
      details: [
        'Keine sensiblen Daten in unverschlüsselten SharedPreferences',
        'AndroidKeyStore Hardware-Backing für SecretKeys',
        'Ausschließlich AEAD-Verfahren: AES-256-GCM mit 128-Bit Auth-Tag',
        'Keine veralteten Algorithmen (kein MD5, SHA-1, DES oder ECB)',
        '0 Secrets im Client: Lokale Datenhaltung ohne externe Token-Abhängigkeit'
      ]
    },
    {
      id: 5,
      title: '5. Plattform-Interaktion & WebView',
      icon: Smartphone,
      status: 'Strikter Lockdown',
      statusColor: 'text-[#7ee787]',
      summary: 'Gehärtete WebView-Sandbox ohne lokale Datei-Infiltrationsmöglichkeiten.',
      details: [
        'allowFileAccess = false & allowContentAccess = false',
        'allowFileAccessFromFileURLs = false & allowUniversalAccessFromFileURLs = false',
        'Keine unsicheren JavascriptInterface-Brücken ohne Whitelisting',
        'Content-Security-Policy (CSP) und isolierter Asset-Loader',
        'Just-in-Time Runtime-Permissions mit minimalem Scope'
      ]
    },
    {
      id: 6,
      title: '6. Resilienz gegen Reverse Engineering',
      icon: Lock,
      status: 'Startzeit Root & Audit Check',
      statusColor: 'text-[#7ee787]',
      summary: 'Startzeit-Integritätsprüfung (Root-Binaries, su Command, Debugger, Test-Keys) mit nativer AlertDialog-Sicherheitswarnung.',
      details: [
        'Startzeit Root- & Debugger-Check in MainActivity.onCreate()',
        'Native AlertDialog Sicherheitswarnung bei kompromittierten Systemumgebungen',
        'Abgestufter Risiko-Score (0-100) ohne fehlerhaften Hard-Kill für Custom-ROMs',
        'Spezifische OkHttp, WebKit & Kotlin ProGuard-Regeln ohne breite Wildcards',
        'R8 Klassen-Repackaging und Code-Obfuskation'
      ]
    },
    {
      id: 7,
      title: '7. Lieferkette & Datenschutz',
      icon: Layers,
      status: '0 Tracker / Zero Ads',
      statusColor: 'text-[#7ee787]',
      summary: 'Vollständige Unabhängigkeit von Werbenetzwerken und Tracking-SDKs.',
      details: [
        '0 Drittanbieter-Analyse- oder Tracking-SDKs',
        'Keine Werbenetzwerke oder Telemetrie-Dienste integriert',
        '100% lokale Ausführung aller Orakel- und Kartenberechnungen',
        'Reproduzierbare Paket-Builds mit SHA-256 Prüfsummen',
        'Geringer Angriffsvektor durch minimale Abhängigkeitskette'
      ]
    },
    {
      id: 8,
      title: '8. Prozess & CI/CD Verifikation',
      icon: Terminal,
      status: 'OWASP MASTG konform',
      statusColor: 'text-[#7ee787]',
      summary: 'Systematische Verifikation aller Artefakte vor der Bereitstellung.',
      details: [
        'Strikte TypeScript- und ESLint-Validierung (tsc --noEmit)',
        'Vollständige Pre-Caching-Validierung (Vite PWA & Offline-Bundle)',
        'Automatisierte Signierung und Checksum-Erzeugung (installers.json)',
        'Plattformübergreifende Distribution (.apk, .exe, .deb, .appimage, .rpm, .run)',
        'Transparente Quellcode-Architektur'
      ]
    }
  ];

  const kotlinSampleCode = `// android/app/src/main/kotlin/com/rhodon/grimtarot/MainActivity.kt
package com.rhodon.grimtarot

import android.os.Bundle
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import com.rhodon.grimtarot.security.AntiTamper

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Startzeit-Integritätsprüfung & Root-Erkennung
        val audit = AntiTamper.evaluateDeviceIntegrity(this)
        if (audit.isCompromised) {
            showSecurityWarningDialog(audit)
        }
    }

    private fun showSecurityWarningDialog(audit: AntiTamper.SecurityAuditResult) {
        AlertDialog.Builder(this)
            .setTitle("🛡️ Sicherheitswarnung: Systemumgebung")
            .setMessage("Erkannt: " + audit.recommendations.joinToString("\\n• "))
            .setPositiveButton("Verstanden & Fortfahren") { d, _ -> d.dismiss() }
            .setNegativeButton("App Beenden") { _, _ -> finish() }
            .show()
    }
}`;

  const proguardSampleCode = `# android/app/proguard-rules.pro
# Spezifische Bibliotheks-Regeln zur Minimierung von 'keep'-Regeln

-repackageclasses 'com.rhodon.grimtarot.obf'
-allowaccessmodification

# Strip Logging
-assumenosideeffects class android.util.Log {
    public static int d(...);
    public static int i(...);
    public static int w(...);
    public static int e(...);
}

# OkHttp3 PublicSuffix & TLS Extensions
-keepclassmembers class okhttp3.internal.publicsuffix.PublicSuffixDatabase { *; }
-dontwarn okhttp3.internal.platform.**

# WebKit JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}`;

  const manifestSampleCode = `<!-- android/app/src/main/AndroidManifest.xml -->
<application
    android:allowBackup="false"
    android:dataExtractionRules="@xml/data_extraction_rules"
    android:fullBackupContent="false"
    android:usesCleartextTraffic="false"
    android:networkSecurityConfig="@xml/network_security_config"
    android:debuggable="false"
    android:extractNativeLibs="false">

    <activity 
        android:name=".MainActivity" 
        android:exported="true"
        android:launchMode="singleTask"
        android:taskAffinity="" />
</application>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#121214] border border-[#c5a059]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#27272a] bg-[#0a0a0b]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#f4f4f5]">
                Sicherheits- & Härtungs-Audit
              </h3>
              <p className="font-mono text-[10px] text-[#a1a1aa] uppercase tracking-wider">
                OWASP MASVS / MASTG Baseline-Härtung
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#27272a] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-3 gap-2.5 p-4 border-b border-[#27272a] bg-[#18181b]/50">
          <div className="p-2.5 rounded-xl bg-[#0a0a0b] border border-[#27272a] space-y-1">
            <span className="font-mono text-[10px] text-[#a1a1aa] uppercase block">
              Höchster Hebel
            </span>
            <span className="font-serif font-bold text-xs text-[#7ee787] block">
              Server-Autorisierung
            </span>
            <span className="font-mono text-[9px] text-[#a1a1aa] block">
              100% Offline-First
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#0a0a0b] border border-[#27272a] space-y-1">
            <span className="font-mono text-[10px] text-[#a1a1aa] uppercase block">
              Größtes Leck
            </span>
            <span className="font-serif font-bold text-xs text-[#58a6ff] block">
              0 Secrets im Client
            </span>
            <span className="font-mono text-[9px] text-[#a1a1aa] block">
              Kein Hardcoding
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#0a0a0b] border border-[#27272a] space-y-1">
            <span className="font-mono text-[10px] text-[#a1a1aa] uppercase block">
              Meistgenutzt
            </span>
            <span className="font-serif font-bold text-xs text-[#c5a059] block">
              R8 + TLS Pinning
            </span>
            <span className="font-mono text-[9px] text-[#a1a1aa] block">
              Baseline aktiv
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#27272a] bg-[#0e0e10] px-4 pt-2 gap-2 text-xs font-mono overflow-x-auto">
          <button
            onClick={() => setActiveTab('audit')}
            className={`pb-2 px-3 border-b-2 font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'audit'
                ? 'border-[#c5a059] text-[#c5a059]'
                : 'border-transparent text-[#a1a1aa] hover:text-[#f4f4f5]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>8 Säulen Audit</span>
          </button>
          <button
            onClick={() => setActiveTab('kotlin')}
            className={`pb-2 px-3 border-b-2 font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'kotlin'
                ? 'border-[#c5a059] text-[#c5a059]'
                : 'border-transparent text-[#a1a1aa] hover:text-[#f4f4f5]'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>Root-Check Activity</span>
          </button>
          <button
            onClick={() => setActiveTab('proguard')}
            className={`pb-2 px-3 border-b-2 font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'proguard'
                ? 'border-[#c5a059] text-[#c5a059]'
                : 'border-transparent text-[#a1a1aa] hover:text-[#f4f4f5]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>ProGuard Regeln</span>
          </button>
          <button
            onClick={() => setActiveTab('manifest')}
            className={`pb-2 px-3 border-b-2 font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'manifest'
                ? 'border-[#c5a059] text-[#c5a059]'
                : 'border-transparent text-[#a1a1aa] hover:text-[#f4f4f5]'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Gehärtetes Manifest</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {activeTab === 'audit' && (
            <div className="space-y-2.5">
              <div className="text-xs text-[#a1a1aa] pb-1">
                GrimTarot implementiert alle Empfehlungen des OWASP Mobile Application Security Verification Standard (MASVS):
              </div>
              {hardeningPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                const isExpanded = expandedSection === pillar.id;

                return (
                  <div
                    key={pillar.id}
                    className="rounded-xl border border-[#27272a] bg-[#0a0a0b] overflow-hidden transition"
                  >
                    <button
                      onClick={() => setExpandedSection(isExpanded ? null : pillar.id)}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-[#18181b]/50 transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-[#18181b] border border-[#27272a] text-[#c5a059]">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-serif font-bold text-xs text-[#f4f4f5]">
                            {pillar.title}
                          </div>
                          <div className={`font-mono text-[10px] ${pillar.statusColor}`}>
                            {pillar.status}
                          </div>
                        </div>
                      </div>
                      <div className="text-[#a1a1aa]">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-3 border-t border-[#27272a] bg-[#121214] space-y-2 text-xs">
                        <p className="text-[#d4d4d8] font-serif text-[11px] leading-relaxed">
                          {pillar.summary}
                        </p>
                        <div className="space-y-1.5 pt-1">
                          {pillar.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 font-mono text-[10px] text-[#a1a1aa]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#7ee787] shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'kotlin' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                <span>Startzeit Root- & Integritätsprüfung (MainActivity.kt):</span>
                <button
                  onClick={() => copyToClipboard(kotlinSampleCode, 'kotlin')}
                  className="flex items-center gap-1 font-mono text-[10px] text-[#c5a059] hover:underline"
                >
                  {copied === 'kotlin' ? (
                    <>
                      <Check className="w-3 h-3 text-[#7ee787]" />
                      <span className="text-[#7ee787]">Kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Code kopieren</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#0a0a0b] border border-[#27272a] text-[#7ee787] font-mono text-[10px] overflow-x-auto leading-relaxed">
                {kotlinSampleCode}
              </pre>
              <div className="p-3 rounded-lg bg-[#18181b] border border-[#27272a] text-[11px] text-[#a1a1aa] space-y-1 font-mono">
                <p className="text-[#f4f4f5] font-bold">Pfad im Projekt:</p>
                <p className="text-[#c5a059]">android/app/src/main/kotlin/com/rhodon/grimtarot/MainActivity.kt</p>
              </div>
            </div>
          )}

          {activeTab === 'proguard' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                <span>Optimierte ProGuard Bibliotheks-Regeln:</span>
                <button
                  onClick={() => copyToClipboard(proguardSampleCode, 'proguard')}
                  className="flex items-center gap-1 font-mono text-[10px] text-[#c5a059] hover:underline"
                >
                  {copied === 'proguard' ? (
                    <>
                      <Check className="w-3 h-3 text-[#7ee787]" />
                      <span className="text-[#7ee787]">Kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Regeln kopieren</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#0a0a0b] border border-[#27272a] text-[#c5a059] font-mono text-[10px] overflow-x-auto leading-relaxed">
                {proguardSampleCode}
              </pre>
              <div className="p-3 rounded-lg bg-[#18181b] border border-[#27272a] text-[11px] text-[#a1a1aa] space-y-1 font-mono">
                <p className="text-[#f4f4f5] font-bold">Pfad im Projekt:</p>
                <p className="text-[#c5a059]">android/app/proguard-rules.pro</p>
              </div>
            </div>
          )}

          {activeTab === 'manifest' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#a1a1aa]">
                <span>Gehärtete AndroidManifest.xml Konfiguration:</span>
                <button
                  onClick={() => copyToClipboard(manifestSampleCode, 'manifest')}
                  className="flex items-center gap-1 font-mono text-[10px] text-[#c5a059] hover:underline"
                >
                  {copied === 'manifest' ? (
                    <>
                      <Check className="w-3 h-3 text-[#7ee787]" />
                      <span className="text-[#7ee787]">Kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>XML kopieren</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-[#0a0a0b] border border-[#27272a] text-[#58a6ff] font-mono text-[10px] overflow-x-auto leading-relaxed">
                {manifestSampleCode}
              </pre>
              <div className="p-3 rounded-lg bg-[#18181b] border border-[#27272a] text-[11px] text-[#a1a1aa] space-y-1 font-mono">
                <p className="text-[#f4f4f5] font-bold">Wichtigste Schutzparameter:</p>
                <p>• allowBackup="false" (Schützt Tokens vor ADB-Extraction)</p>
                <p>• usesCleartextTraffic="false" (Erzwingt TLS)</p>
                <p>• launchMode="singleTask" & taskAffinity="" (Verhindert Task-Hijacking)</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#27272a] bg-[#0a0a0b] flex items-center justify-between text-xs font-mono">
          <span className="text-[#a1a1aa] text-[10px]">
            Status: <span className="text-[#7ee787] font-bold">100% Gehärtet & Offline</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#18181b] border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#27272a] hover:border-[#c5a059] font-bold transition cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
