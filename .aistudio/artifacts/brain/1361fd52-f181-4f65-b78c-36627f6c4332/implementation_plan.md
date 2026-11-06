# Implementierungsplan: Spezifische ProGuard-Regeln & Startzeit-Integritätsprüfung

## 1. Spezifische R8/ProGuard-Regeln (`android/app/proguard-rules.pro`)
Ersetzung allgemeiner Keep-Regeln durch präzise, bibliotheksspezifische Regeln, um maximale Obfuskation bei voller Funktionsfähigkeit zu gewährleisten:
- **OkHttp3**:
  - Exklusive Keep-Regeln für `okhttp3.internal.publicsuffix.PublicSuffixDatabase`
  - Preservation von CipherSuites und TLS Extensions
  - Donwarns für optional genutzte Netty/Conscrypt/BouncyCastle Klassen
- **AndroidX Security Crypto & Conscrypt**:
  - Erhalt der JNI-Nativschnittstellen von Google Conscrypt & Tink
  - Schutz der KeyGenParameterSpec-Reflektionspfade
- **AndroidX WebKit & JavaScript-Bridge**:
  - Präziser Erhalt nur von `@JavascriptInterface` annotierten Methoden
- **Kotlin Stdlib & Coroutines**:
  - Erhalt von `kotlin.Metadata` nur dort wo nötig
  - Optimization-Flags für R8 Full Mode (`-repackageclasses`, `-allowaccessmodification`)

---

## 2. Startzeit-Integritätsprüfung & Sicherheitswarnung in `MainActivity.kt`
- **Erweiterte Root- & Integritätsprüfung beim Start**:
  - Aufrufen von `AntiTamper.evaluateDeviceIntegrity(this)` während `onCreate()`.
  - Prüfung auf Root-Binaries (`su`, `Superuser.apk`, Magisk, Busybox-Su-Pfade), aktiven Laufzeit-Debugger (`Debug.isDebuggerConnected()`) oder Test-Keys.
- **Benutzerfreundliche Sicherheitswarnung (`AlertDialog`)**:
  - Falls der Risk-Score ein definiertes Sicherheitsrisiko anzeigt (z.B. Root oder aktiv angehängter Debugger):
    - Anzeige eines Warn-Dialogs beim App-Start: *"Sicherheitswarnung: Kompromittierte Ausführungsumgebung erkannt"*.
    - Option für den Benutzer, die Warnung zur Kenntnis zu nehmen und im eingeschränkten Modus fortzufahren oder die Anwendung sicher zu beenden.
    - Speicherung des Integritätsstatus zur Anzeige im UI.

---

## 3. UI-Integration im Sicherheits-Audit (`src/components/SecurityAuditModal.tsx`)
- Erweiterung des Sicherheits-Audit-Modals um den Live-Status des Startzeit-Integritätschecks.
- Anzeige der spezifischen R8/ProGuard-Optimierungsregeln im Modal.

---

## 4. Kompilierung & Verifikation
- Verifikation via `lint_applet` (`tsc --noEmit`) und `compile_applet`.
- Aktualisierung der Dokumentation.
