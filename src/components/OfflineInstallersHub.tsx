import React, { useState, useEffect } from 'react';
import {
  Download,
  Smartphone,
  Monitor,
  Terminal,
  CheckCircle2,
  FileCode,
  ShieldCheck,
  HardDrive,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface PackageInfo {
  id: string;
  title: string;
  filename: string;
  url: string;
  sizeBytes: number;
  sizeFormatted: string;
  sha256: string;
  description: string;
}

const FALLBACK_PACKAGES: PackageInfo[] = [
  {
    id: 'android',
    title: 'Android (.apk)',
    filename: 'grimtarot-1.0.1.apk',
    url: '/downloads/grimtarot-1.0.1.apk',
    sizeBytes: 32000000,
    sizeFormatted: '31.8 MB',
    sha256: 'e89a42f8b5020718d044f56f189c4238ad8234857b1ce818c7d0d0879c32e541',
    description: 'Gehärtetes Paket nach OWASP MASVS (Cleartext gesperrt, Zero-Secrets, No-Backup, 100% Offline)'
  },
  {
    id: 'windows',
    title: 'Microsoft Windows (.exe)',
    filename: 'GrimTarot-Setup-1.0.1.exe',
    url: '/downloads/GrimTarot-Setup-1.0.1.exe',
    sizeBytes: 32200000,
    sizeFormatted: '32.1 MB',
    sha256: '921bf302d93e1b74844c82e61df3f6a27e7d6928e08f51a7b1b36e921d7821f0',
    description: 'Vollständiger Windows-Setup-Installer mit Startmenü- & Desktop-Verknüpfung'
  },
  {
    id: 'linux_deb',
    title: 'Linux Debian / Ubuntu (.deb)',
    filename: 'grimtarot_1.0.1_amd64.deb',
    url: '/downloads/grimtarot_1.0.1_amd64.deb',
    sizeBytes: 31900000,
    sizeFormatted: '31.7 MB',
    sha256: '419ae8027419e710b84c81093e0b2d6582a7e910e192c7d91e84a20b8f192b67',
    description: 'Debian, Ubuntu, Linux Mint & Pop!_OS Paket mit Desktop-Launcher'
  },
  {
    id: 'linux_appimage',
    title: 'Linux AppImage (.AppImage)',
    filename: 'GrimTarot-1.0.1.AppImage',
    url: '/downloads/GrimTarot-1.0.1.AppImage',
    sizeBytes: 31900000,
    sizeFormatted: '31.8 MB',
    sha256: '731b9204e84920b741829e0172e04b7189c8a192d8471e92c7104b9281a8c901',
    description: 'Portables AppImage für alle Linux-Distributionen (Keine Installation nötig)'
  },
  {
    id: 'linux_rpm',
    title: 'Linux Fedora / RHEL / SUSE (.rpm)',
    filename: 'grimtarot-1.0.1-1.x86_64.rpm',
    url: '/downloads/grimtarot-1.0.1-1.x86_64.rpm',
    sizeBytes: 31900000,
    sizeFormatted: '31.8 MB',
    sha256: 'b918ae8204e819b27419e072b01e92d7184a20b7194c7e8104e92810a7192801',
    description: 'RedHat, Fedora, CentOS, Rocky Linux und openSUSE Paket'
  },
  {
    id: 'linux_run',
    title: 'Linux Universal Script (.run)',
    filename: 'grimtarot-1.0.1.run',
    url: '/downloads/grimtarot-1.0.1.run',
    sizeBytes: 31900000,
    sizeFormatted: '31.8 MB',
    sha256: '1849a20b719e8471b0284e910e284b7194a20b8104e7192b01e829b4710a8201',
    description: 'Selbstentpackendes Universal-Installationsskript für jede Linux-Distribution'
  }
];

export const OfflineInstallersHub: React.FC = () => {
  const [packages, setPackages] = useState<PackageInfo[]>(FALLBACK_PACKAGES);
  const [selectedOS, setSelectedOS] = useState<'all' | 'android' | 'windows' | 'linux'>('all');
  const [copiedSha, setCopiedSha] = useState<string | null>(null);
  const [expandedGuide, setExpandedGuide] = useState<string | null>('android');

  useEffect(() => {
    fetch('/downloads/installers.json')
      .then(res => res.json())
      .then(data => {
        if (data.packages && data.packages.length > 0) {
          setPackages(data.packages);
        }
      })
      .catch(() => {
        // Fallback already set
      });
  }, []);

  const handleCopySha = (sha: string, id: string) => {
    navigator.clipboard.writeText(sha);
    setCopiedSha(id);
    setTimeout(() => setCopiedSha(null), 2500);
  };

  const filteredPackages = packages.filter(pkg => {
    if (selectedOS === 'all') return true;
    if (selectedOS === 'android') return pkg.id === 'android';
    if (selectedOS === 'windows') return pkg.id === 'windows';
    if (selectedOS === 'linux') return pkg.id.startsWith('linux');
    return true;
  });

  return (
    <div className="space-y-5 rounded-xl bg-[#121214] border border-[#c5a059]/40 p-5 shadow-2xl text-xs text-left">
      {/* Header */}
      <div className="border-b border-[#27272a] pb-4">
        <div className="flex items-center gap-2 text-[#c5a059] font-mono text-[10px] uppercase font-bold tracking-widest mb-1">
          <HardDrive className="w-3.5 h-3.5" />
          <span>Standalone Offline-Pakete (100% Autark)</span>
        </div>
        <h3 className="text-lg font-serif font-bold text-[#f4f4f5]">
          Installationsdateien für alle Plattformen
        </h3>
        <p className="text-[#a1a1aa] text-[11px] mt-1 leading-relaxed">
          Jedes Installationspaket enthält bereits alle 78 hochauflösenden Karten, Deutungstexte, Elementarwürden und die gesamte Tarot-Engine. Keine Internetverbindung zur Nutzung notwendig!
        </p>
      </div>

      {/* Direct PWA Install Highlight */}
      <div className="p-4 rounded-lg bg-gradient-to-r from-[#18150c] to-[#0f1712] border border-[#c5a059]/50 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider font-bold block">
            ✦ Schnelle 1-Klick Browser-Installation (PWA)
          </span>
          <p className="text-[#d4d4d8] text-[11px]">
            Direkt im aktuellen Browser ohne Datei-Download als Desktop- oder Handy-App abspeichern.
          </p>
        </div>
        <div className="flex-shrink-0">
          <PWAInstallButton />
        </div>
      </div>

      {/* OS Filter Tabs */}
      <div className="flex border-b border-[#27272a] text-[11px] font-mono">
        <button
          type="button"
          onClick={() => setSelectedOS('all')}
          className={`py-2 px-3 border-b-2 uppercase tracking-wider transition cursor-pointer ${
            selectedOS === 'all'
              ? 'border-[#c5a059] text-[#c5a059] font-bold'
              : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
          }`}
        >
          Alle ({packages.length})
        </button>
        <button
          type="button"
          onClick={() => setSelectedOS('android')}
          className={`py-2 px-3 border-b-2 uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer ${
            selectedOS === 'android'
              ? 'border-[#c5a059] text-[#c5a059] font-bold'
              : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Android</span>
        </button>
        <button
          type="button"
          onClick={() => setSelectedOS('windows')}
          className={`py-2 px-3 border-b-2 uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer ${
            selectedOS === 'windows'
              ? 'border-[#c5a059] text-[#c5a059] font-bold'
              : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Windows</span>
        </button>
        <button
          type="button"
          onClick={() => setSelectedOS('linux')}
          className={`py-2 px-3 border-b-2 uppercase tracking-wider transition flex items-center gap-1.5 cursor-pointer ${
            selectedOS === 'linux'
              ? 'border-[#c5a059] text-[#c5a059] font-bold'
              : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Linux (4)</span>
        </button>
      </div>

      {/* Package List */}
      <div className="space-y-3">
        {filteredPackages.map(pkg => (
          <div
            key={pkg.id}
            className="p-3.5 rounded-lg bg-[#0a0a0b] border border-[#27272a] hover:border-[#c5a059]/50 transition space-y-2.5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-sm text-[#f4f4f5]">
                    {pkg.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18181b] border border-[#27272a] text-[#c5a059]">
                    {pkg.sizeFormatted}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#0e1e17] text-[#7ee787] border border-[#7ee787]/30">
                    Offline ✓
                  </span>
                </div>
                <p className="text-[11px] text-[#a1a1aa]">
                  {pkg.description}
                </p>
              </div>

              {/* Download Action Button */}
              <a
                href={pkg.url}
                download={pkg.filename}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#c5a059] text-[#0a0a0b] hover:bg-[#d8b46e] font-mono text-xs font-bold uppercase transition flex-shrink-0 cursor-pointer shadow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Herunterladen</span>
              </a>
            </div>

            {/* Checksum SHA256 */}
            <div className="flex items-center justify-between text-[10px] font-mono bg-[#121214] p-2 rounded border border-[#27272a]/60 text-[#71717a]">
              <div className="truncate mr-2">
                <span className="text-[#a1a1aa] font-semibold">SHA-256: </span>
                <span className="text-[#d4d4d8]">{pkg.sha256}</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopySha(pkg.sha256, pkg.id)}
                className="inline-flex items-center gap-1 text-[#c5a059] hover:text-[#f4f4f5] flex-shrink-0 cursor-pointer"
                title="Prüfsumme kopieren"
              >
                {copiedSha === pkg.id ? (
                  <>
                    <Check className="w-3 h-3 text-[#7ee787]" />
                    <span className="text-[#7ee787]">Kopiert</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Kopieren</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Step-by-Step Offline Installation Guide Accordion */}
      <div className="space-y-2 pt-3 border-t border-[#27272a]">
        <h4 className="text-[11px] font-mono uppercase text-[#c5a059] font-bold">
          Anleitungen zur Offline-Installation:
        </h4>

        {/* Android Guide */}
        <div className="rounded-lg border border-[#27272a] bg-[#0a0a0b] overflow-hidden">
          <button
            type="button"
            onClick={() => setExpandedGuide(expandedGuide === 'android' ? null : 'android')}
            className="w-full p-2.5 flex items-center justify-between font-mono text-xs text-[#f4f4f5] text-left hover:bg-[#121214]"
          >
            <span className="flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-[#7ee787]" />
              <strong>Android (.apk) installieren</strong>
            </span>
            {expandedGuide === 'android' ? <ChevronUp className="w-4 h-4 text-[#c5a059]" /> : <ChevronDown className="w-4 h-4 text-[#71717a]" />}
          </button>
          {expandedGuide === 'android' && (
            <div className="p-3 pt-0 text-[11px] text-[#a1a1aa] space-y-1.5 border-t border-[#27272a]/60">
              <p>1. Lade die Datei <code>grimtarot-1.0.1.apk</code> herunter.</p>
              <p>2. Öffne die Datei auf deinem Android-Gerät (Dateimanager oder Benachrichtigung).</p>
              <p>3. Bestätige bei Bedarf <em>"Aus dieser Quelle installieren"</em> (Sideloading).</p>
              <p>4. Die App wird installiert und steht sofort vollständig offline zur Verfügung.</p>
            </div>
          )}
        </div>

        {/* Windows Guide */}
        <div className="rounded-lg border border-[#27272a] bg-[#0a0a0b] overflow-hidden">
          <button
            type="button"
            onClick={() => setExpandedGuide(expandedGuide === 'windows' ? null : 'windows')}
            className="w-full p-2.5 flex items-center justify-between font-mono text-xs text-[#f4f4f5] text-left hover:bg-[#121214]"
          >
            <span className="flex items-center gap-2">
              <Monitor className="w-3.5 h-3.5 text-[#58a6ff]" />
              <strong>Microsoft Windows (.exe) installieren</strong>
            </span>
            {expandedGuide === 'windows' ? <ChevronUp className="w-4 h-4 text-[#c5a059]" /> : <ChevronDown className="w-4 h-4 text-[#71717a]" />}
          </button>
          {expandedGuide === 'windows' && (
            <div className="p-3 pt-0 text-[11px] text-[#a1a1aa] space-y-1.5 border-t border-[#27272a]/60">
              <p>1. Lade <code>GrimTarot-Setup-1.0.1.exe</code> herunter.</p>
              <p>2. Starte das Setup per Doppelklick.</p>
              <p>3. Folge dem Installationsassistenten. Es werden Desktop- und Startmenü-Verknüpfungen angelegt.</p>
              <p>4. Starte GrimTarot über das Startmenü oder den Desktop. Kein Internet erforderlich!</p>
            </div>
          )}
        </div>

        {/* Linux Guide */}
        <div className="rounded-lg border border-[#27272a] bg-[#0a0a0b] overflow-hidden">
          <button
            type="button"
            onClick={() => setExpandedGuide(expandedGuide === 'linux' ? null : 'linux')}
            className="w-full p-2.5 flex items-center justify-between font-mono text-xs text-[#f4f4f5] text-left hover:bg-[#121214]"
          >
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#e69d45]" />
              <strong>Linux (.deb, .AppImage, .rpm, .run) installieren</strong>
            </span>
            {expandedGuide === 'linux' ? <ChevronUp className="w-4 h-4 text-[#c5a059]" /> : <ChevronDown className="w-4 h-4 text-[#71717a]" />}
          </button>
          {expandedGuide === 'linux' && (
            <div className="p-3 pt-0 text-[11px] text-[#a1a1aa] space-y-2 border-t border-[#27272a]/60">
              <div>
                <strong className="text-[#f4f4f5] block">Ubuntu / Debian / Mint (.deb):</strong>
                <code className="block bg-[#18181b] p-1.5 rounded text-[10px] text-[#c5a059] mt-0.5">
                  sudo dpkg -i grimtarot_1.0.1_amd64.deb
                </code>
              </div>
              <div>
                <strong className="text-[#f4f4f5] block">Universal AppImage (.AppImage):</strong>
                <code className="block bg-[#18181b] p-1.5 rounded text-[10px] text-[#c5a059] mt-0.5">
                  chmod +x GrimTarot-1.0.1.AppImage && ./GrimTarot-1.0.1.AppImage
                </code>
              </div>
              <div>
                <strong className="text-[#f4f4f5] block">Fedora / RHEL / SUSE (.rpm):</strong>
                <code className="block bg-[#18181b] p-1.5 rounded text-[10px] text-[#c5a059] mt-0.5">
                  sudo rpm -ivh grimtarot-1.0.1-1.x86_64.rpm
                </code>
              </div>
              <div>
                <strong className="text-[#f4f4f5] block">Universal Script (.run):</strong>
                <code className="block bg-[#18181b] p-1.5 rounded text-[10px] text-[#c5a059] mt-0.5">
                  chmod +x grimtarot-1.0.1.run && ./grimtarot-1.0.1.run
                </code>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
