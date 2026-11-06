package com.rhodon.grimtarot.security

import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import java.security.KeyStore
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec
import java.util.Base64

/**
 * 4. Datenspeicherung und Krypto (OWASP MASVS-CRYPTO & MASVS-STORAGE)
 *
 * - Hardware-Backing via AndroidKeyStore (TEE/StrongBox)
 * - Ausschließlich AEAD-Verfahren (AES-256-GCM)
 * - Keine fest kodierten Secrets
 * - Keine unsicheren Algorithmen (MD5/SHA-1/DES/ECB)
 */
object CryptoVault {

    private const val ANDROID_KEYSTORE = "AndroidKeyStore"
    private const val MASTER_KEY_ALIAS = "grimtarot_vault_master_v1"
    private const val TRANSFORMATION = "AES/GCM/NoPadding"
    private const val GCM_TAG_LENGTH = 128
    private const val IV_LENGTH = 12

    init {
        ensureKeyExists(MASTER_KEY_ALIAS)
    }

    private fun ensureKeyExists(alias: String) {
        val keyStore = KeyStore.getInstance(ANDROID_KEYSTORE).apply { load(null) }
        if (!keyStore.containsAlias(alias)) {
            val keyGenerator = KeyGenerator.getInstance(
                KeyProperties.KEY_ALGORITHM_AES,
                ANDROID_KEYSTORE
            )
            val spec = KeyGenParameterSpec.Builder(
                alias,
                KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT
            )
                .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
                .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
                .setKeySize(256)
                .setRandomizedEncryptionRequired(true)
                .build()

            keyGenerator.init(spec)
            keyGenerator.generateKey()
        }
    }

    private fun getSecretKey(alias: String = MASTER_KEY_ALIAS): SecretKey {
        val keyStore = KeyStore.getInstance(ANDROID_KEYSTORE).apply { load(null) }
        return (keyStore.getEntry(alias, null) as KeyStore.SecretKeyEntry).secretKey
    }

    /**
     * Verschlüsselt Klartext mit AES-256-GCM.
     * Ausgabe: Base64(IV + Ciphertext + AuthTag)
     */
    fun encrypt(plaintext: String): String {
        val cipher = Cipher.getInstance(TRANSFORMATION)
        cipher.init(Cipher.ENCRYPT_MODE, getSecretKey())
        val iv = cipher.iv
        val encryptedBytes = cipher.doFinal(plaintext.toByteArray(Charsets.UTF_8))

        val combined = ByteArray(iv.size + encryptedBytes.size)
        System.arraycopy(iv, 0, combined, 0, iv.size)
        System.arraycopy(encryptedBytes, 0, combined, iv.size, encryptedBytes.size)

        return Base64.getEncoder().encodeToString(combined)
    }

    /**
     * Entschlüsselt einen Base64-codierten AES-GCM Payload.
     */
    fun decrypt(encodedCiphertext: String): String {
        val combined = Base64.getDecoder().decode(encodedCiphertext)
        if (combined.size < IV_LENGTH + 16) {
            throw IllegalArgumentException("Payload ungültig oder manipuliert (Länge unzureichend).")
        }

        val iv = ByteArray(IV_LENGTH)
        System.arraycopy(combined, 0, iv, 0, IV_LENGTH)
        val ciphertextLength = combined.size - IV_LENGTH
        val ciphertext = ByteArray(ciphertextLength)
        System.arraycopy(combined, IV_LENGTH, ciphertext, 0, ciphertextLength)

        val cipher = Cipher.getInstance(TRANSFORMATION)
        val spec = GCMParameterSpec(GCM_TAG_LENGTH, iv)
        cipher.init(Cipher.DECRYPT_MODE, getSecretKey(), spec)

        val decryptedBytes = cipher.doFinal(ciphertext)
        return String(decryptedBytes, Charsets.UTF_8)
    }
}
