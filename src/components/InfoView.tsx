import React from 'react';
import { Sparkles, Globe, ShieldCheck, Cpu, HardDrive, Lock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { OfflineInstallersHub } from './OfflineInstallersHub';

export const InfoView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 pb-28 px-4 text-center max-w-md mx-auto animate-fade-in">
      {/* Title */}
      <div className="pt-2 space-y-1">
        <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-[0.2em] bg-[#121214] px-3 py-1 rounded border border-[#c5a059]/30">
          {t('infoPageBadge', 'System & App Manifest')}
        </span>
        <h2 className="text-2xl font-serif font-bold text-[#f4f4f5] pt-1">
          {t('infoTitle', 'Info zu GrimTarot')}
        </h2>
      </div>

      {/* Centered Image (rhodon_dh_chosen_mason_f6d06090.jpeg) - 33% of viewport height on Y axis */}
      <div className="flex justify-center items-center my-4">
        <img
          src="/assets/aistudio/rhodon_dh_chosen_mason_f6d06090.jpeg"
          alt="GrimTarot Mason Eye Emblem"
          className="h-[33vh] w-auto max-w-full object-contain rounded-full border-2 border-[#c5a059]/50 shadow-2xl shadow-[#c5a059]/20 hover:border-[#c5a059] transition-all duration-300 transform hover:scale-105"
        />
      </div>

      {/* GrimTarot Heading & Version */}
      <div className="space-y-1">
        <h3 className="text-3xl font-serif font-bold text-[#f4f4f5] tracking-wide">
          GrimTarot
        </h3>
        <div className="inline-block">
          <span className="font-mono text-xs font-bold text-[#c5a059] bg-[#121214] px-3 py-1 rounded-full border border-[#c5a059]/40 shadow-sm">
            1.0.1
          </span>
        </div>
      </div>

      {/* App Description Box */}
      <div className="p-5 rounded-xl bg-[#121214] border border-[#27272a] space-y-4 text-xs text-[#d4d4d8] leading-relaxed shadow-lg">
        <div className="p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-[#c5a059] font-mono text-[10px] uppercase font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Cross-Platform Engine</span>
          </div>
          <p className="text-[#f4f4f5] font-serif text-sm">
            GrimTarot ist eine Plattformübergreifende (Android/Apple-IPhone/Linux/Windows) Applikation für eine Tarot/Orakel-Legung. Direkt auf dem Endgerät des Benutzers mischen, ziehen, legen!
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-[#7ee787] font-mono text-[10px] uppercase font-bold">
            <HardDrive className="w-3.5 h-3.5" />
            <span>100% Lokal & Offline</span>
          </div>
          <p className="text-[#d4d4d8]">
            Die Applikation sowie alle anfallenden Daten des Benutzers verbleiben auf seinem Endgerät, eine Internetverbindung zum benutzen ist also nicht notwendig.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-[#58a6ff] font-mono text-[10px] uppercase font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Werbefrei & Transparent</span>
          </div>
          <p className="text-[#d4d4d8]">
            Die Applikation läuft auf dem Endgerät des Benutzers ohne Werbung/Coins/Credits für das legen zu berechnen!
          </p>
        </div>
      </div>

      {/* Offline Installers Section for Android, Windows, Linux (.apk, .exe, .deb, .appimage, .rpm, .run) */}
      <OfflineInstallersHub />

      {/* Website / Repository Link */}
      <div className="pt-2">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#18181b] border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#27272a] hover:border-[#c5a059] text-xs font-mono font-bold uppercase tracking-wider transition shadow-md cursor-pointer"
        >
          <Globe className="w-4 h-4 text-[#c5a059]" />
          <span>Webseite</span>
        </a>
      </div>

      {/* Copyright Footer Lines */}
      <div className="pt-4 border-t border-[#27272a] space-y-1 font-mono text-xs text-[#a1a1aa]">
        <p className="font-semibold text-[#d4d4d8]">Copyright ©® 2026 GrimTarot</p>
        <p className="text-[#c5a059]">Copyright ©® 2026 Rhodon™</p>
        <p className="text-[#c5a059]">Copyright ©® 2026 D.H.™</p>
      </div>
    </div>
  );
};
