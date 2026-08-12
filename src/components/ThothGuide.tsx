import React from 'react';
import { Sparkles, BookOpen, Eye, ShieldCheck, Flame, Compass, Moon, Shield } from 'lucide-react';

export const ThothGuide: React.FC = () => {
  return (
    <div className="space-y-6 pb-28 px-4 text-zinc-200">
      {/* Header */}
      <div className="text-center pt-2 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" /> Infothek & Esoterik
        </div>
        <h2 className="text-2xl font-serif font-bold text-amber-100">Das Aleister Crowley Thoth Tarot</h2>
        <p className="text-xs text-zinc-400 max-w-sm mx-auto">
          Hintergründe, kosmische Symbolik und Besonderheiten des berühmten Meisterwerks.
        </p>
      </div>

      {/* Main Intro Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-3 shadow-xl text-xs leading-relaxed">
        <h3 className="text-sm font-serif font-bold text-amber-200 flex items-center gap-2">
          <Eye className="w-4 h-4 text-amber-400" /> Das Buch Thoth & Lady Frieda Harris
        </h3>
        <p>
          Das Crowley Thoth Tarot wurde zwischen 1938 und 1943 von dem Okkultisten <strong>Aleister Crowley</strong> konzipiert und von der Künstlerin <strong>Lady Frieda Harris</strong> in fünfjähriger Arbeit im Stil des synthetischen Kubismus gemalt.
        </p>
        <p>
          Es gilt als eines der komplexesten und tiefgründigsten Tarotdecks der Welt, da es Astrologie, Alchemie, Kabbalah (Lebensbaum), hebräische Buchstaben und altägyptische Mythologie miteinander verschmilzt.
        </p>
      </div>

      {/* Special Atu Renamings */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-purple-500/30 space-y-3 shadow-xl text-xs leading-relaxed">
        <h3 className="text-sm font-serif font-bold text-purple-300 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-400" /> Namensanpassungen der Großen Arkana (Atu)
        </h3>
        <div className="space-y-2">
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-amber-300 block">Atu VIII: Ausgleichung (Adjustment) statt Gerechtigkeit</span>
            <span className="text-zinc-400">Verkörpert die ägyptische Göttin Ma’at und das absolute kosmische Gleichgewicht von Ursache und Wirkung.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-amber-300 block">Atu XI: Lust statt Kraft</span>
            <span className="text-zinc-400">Zeigt Babalon auf dem siebenköpfigen Tier. Nicht rohe körperliche Zähmung, sondern feurige, ekstatische Hingabe ans Leben.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-amber-300 block">Atu XIV: Kunst (Art) statt Mäßigung</span>
            <span className="text-zinc-400">Das große alchemistische Meisterwerk der Synthese: Die Vereinigung von Feuer und Wasser zum Elixier der Transformation.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-amber-300 block">Atu XX: Das Äon statt Das Gericht</span>
            <span className="text-zinc-400">Zeigt den Anbruch des Zeitalters des Kindes Horus (Harpokrates) und den Bewusstseinssprung in eine neue Ära.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-amber-300 block">Atu XXI: Das Universum statt Die Welt</span>
            <span className="text-zinc-400">Die kosmische Jungfrau tanzt im Kreis der Schlange des Schicksals – die vollendete Schöpfung.</span>
          </div>
        </div>
      </div>

      {/* Hofkarten System */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-3 shadow-xl text-xs leading-relaxed">
        <h3 className="text-sm font-serif font-bold text-amber-200">
          Das System der Hofkarten im Thoth Tarot
        </h3>
        <p className="text-zinc-300">
          Crowley ersetzte die traditionellen Hofkarten (König, Königin, Ritter, Bube) durch folgende elementare Struktur:
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-amber-400 block">Ritter (Knight)</span>
            <span className="text-zinc-400">Element Feuer (Dynamische Kraft)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-pink-400 block">Königin (Queen)</span>
            <span className="text-zinc-400">Element Wasser (Hingabe & Empfängnis)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-cyan-400 block">Prinz (Prince)</span>
            <span className="text-zinc-400">Element Luft (Mentaler Verstand)</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-zinc-800">
            <span className="font-bold text-emerald-400 block">Prinzessin (Princess)</span>
            <span className="text-zinc-400">Element Erde (Marterielle Form)</span>
          </div>
        </div>
      </div>

      {/* Offline Status Card */}
      <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-3">
        <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
        <div>
          <span className="font-bold block text-sm text-emerald-300">100% Offline-Funktionalität</span>
          <span>Alle 78 Karten, Symbolbeschreibungen, Legemuster und Tagebuch-Funktionen befinden sich direkt auf deinem Gerät.</span>
        </div>
      </div>
    </div>
  );
};
