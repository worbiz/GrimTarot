# GrimTarot R8 / ProGuard Optimized Hardening Rules
# OWASP MASVS-CODE & MASVS-RESILIENCE Compliance

# ===================================================================
# 1. Globale R8 Obfuskations- & Optimierungseinstellungen
# ===================================================================
-repackageclasses 'com.rhodon.grimtarot.obf'
-allowaccessmodification
-dontusemixedcaseclassnames
-verbose

# Entferne alle Android-Logging Aufrufe im Release-Build vollständig
-assumenosideeffects class android.util.Log {
    public static boolean isLoggable(java.lang.String, int);
    public static int v(...);
    public static int d(...);
    public static int i(...);
    public static int w(...);
    public static int e(...);
    public static int wtf(...);
}

# Keep Annotations & Signatures for reflection where strictly required
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod

# ===================================================================
# 2. OkHttp 3 & Network Stack Spezifische Regeln
# ===================================================================
# Erhalte PublicSuffixDatabase für OkHttp Cookie & Host Handling
-keepresources keep.xml
-dontwarn okhttp3.internal.platform.**
-dontwarn org.conscrypt.**
-dontwarn org.bouncycastle.**
-dontwarn org.openjsse.**

-keepclassmembers class okhttp3.internal.publicsuffix.PublicSuffixDatabase {
    *;
}

# ===================================================================
# 3. AndroidX Security Crypto & KeyStore Spezifische Regeln
# ===================================================================
-keep class androidx.security.crypto.EncryptedSharedPreferences { *; }
-keep class androidx.security.crypto.EncryptedFile { *; }
-keep class androidx.security.crypto.MasterKey { *; }
-dontwarn com.google.crypto.tink.**

# Erhalte Native JNI Methoden für AndroidKeyStore & Tink
-keepclasseswithmembernames class * {
    native <methods>;
}

# ===================================================================
# 4. AndroidX WebKit & JavaScript Interface Isolation
# ===================================================================
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keep class androidx.webkit.** { *; }

# ===================================================================
# 5. Kotlin Stdlib & Coroutines Rules
# ===================================================================
-dontwarn kotlin.font.**
-keepattributes RuntimeVisibleAnnotations,RuntimeVisibleParameterAnnotations
-keepclassmembers class * extends kotlin.coroutines.jvm.internal.ContinuationImpl {
    <init>(...);
}
