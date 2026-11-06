import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, CheckCircle, Share, PlusSquare, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const PWAInstallButton: React.FC<{ variant?: 'header' | 'card' | 'badge' }> = ({ variant = 'card' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const { t } = useLanguage();

  if (isInstalled) {
    if (variant === 'header') return null;
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1e17] border border-[#7ee787]/40 text-[#7ee787] text-xs font-mono">
        <CheckCircle className="w-3.5 h-3.5" />
        <span>{t('installedBadge', 'App bereits installiert')}</span>
      </div>
    );
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#c5a059] to-[#d8b46e] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0a0a0b] shadow-lg hover:brightness-110 transition cursor-pointer"
      >
        <Download className="w-4 h-4 text-[#0a0a0b]" />
        <span>{t('installAppBtn', 'GrimTarot App Installieren')}</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-[#c5a059]/50 bg-[#121214] px-3.5 py-2 text-xs font-mono text-[#c5a059] hover:bg-[#1a1a1c] transition cursor-pointer"
        >
          <Smartphone className="w-4 h-4" />
          <span>{t('installOnIOS', 'Auf iPhone/iPad installieren')}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-xl bg-[#121214] border border-[#c5a059]/50 p-6 shadow-2xl text-left space-y-4">
              <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                <h3 className="font-serif font-bold text-base text-[#f4f4f5] flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#c5a059]" />
                  <span>Installation auf iPhone / iPad</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  className="text-[#71717a] hover:text-[#f4f4f5]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-[#d4d4d8] leading-relaxed">
                <p>
                  Safari unterstützt direkte Offline-Installation als eigenständige Vollbild-App:
                </p>
                <div className="p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-2">
                  <div className="flex items-center gap-2 text-[#c5a059]">
                    <Share className="w-4 h-4" />
                    <span className="font-bold">1. Teilen-Button</span>
                  </div>
                  <p className="text-[11px] text-[#a1a1aa] pl-6">
                    Tippe in der Safari-Symbolleiste unten auf das <strong>Teilen</strong>-Symbol.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-2">
                  <div className="flex items-center gap-2 text-[#7ee787]">
                    <PlusSquare className="w-4 h-4" />
                    <span className="font-bold">2. Zum Home-Bildschirm</span>
                  </div>
                  <p className="text-[11px] text-[#a1a1aa] pl-6">
                    Scrolle nach unten und wähle <strong>"Zum Home-Bildschirm"</strong> aus.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-lg bg-[#18181b] border border-[#c5a059]/40 text-xs font-mono text-[#c5a059] hover:bg-[#202024]"
              >
                Verstanden
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback direct browser install action
  return null;
};
