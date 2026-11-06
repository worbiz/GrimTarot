package com.rhodon.grimtarot.security

import okhttp3.CertificatePinner
import okhttp3.OkHttpClient
import okhttp3.ConnectionSpec
import okhttp3.TlsVersion
import java.util.concurrent.TimeUnit

/**
 * 3. Netzwerkschicht (OWASP MASVS-NETWORK)
 *
 * - Erzwingung moderner TLS-Standards (TLS 1.3 / TLS 1.2)
 * - Public-Key Pinning mit Primär- und Backup-Pins
 * - Keinerlei Cleartext-Erlaubnis
 */
object NetworkSecurity {

    // Beispiel-Pins mit Primär- und Backup-Pin (Rotationsplan nach OWASP)
    private val certificatePinner = CertificatePinner.Builder()
        // Primärer Pin
        .add("api.grimtarot.local", "sha256/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=")
        // Backup-Pin für Schlüsselrotation
        .add("api.grimtarot.local", "sha256/BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB=")
        .build()

    private val modernTlsSpec = ConnectionSpec.Builder(ConnectionSpec.MODERN_TLS)
        .tlsVersions(TlsVersion.TLS_1_3, TlsVersion.TLS_1_2)
        .supportsTlsExtensions(true)
        .build()

    val secureHttpClient: OkHttpClient by lazy {
        OkHttpClient.Builder()
            .connectionSpecs(listOf(modernTlsSpec))
            .certificatePinner(certificatePinner)
            .connectTimeout(15, TimeUnit.SECONDS)
            .readTimeout(20, TimeUnit.SECONDS)
            .writeTimeout(20, TimeUnit.SECONDS)
            .followRedirects(false)
            .followSslRedirects(false)
            .retryOnConnectionFailure(false)
            .build()
    }
}
