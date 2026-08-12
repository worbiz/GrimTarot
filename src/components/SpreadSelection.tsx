import React, { useState } from 'react';
import { SpreadDef, SpreadId } from '../types/tarot';
import { SPREADS } from '../data/spreads';
import { Sun, Columns3, Compass, Sparkles, Heart, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SpreadSelectionProps {
  onSelectSpread: (spread: SpreadDef, question?: string) => void;
}

export const SpreadSelection: React.FC<SpreadSelectionProps> = ({ onSelectSpread }) => {
  const [selectedSpreadId, setSelectedSpreadId] = useState<SpreadId>('tageskarte');
  const [userQuestion, setUserQuestion] = useState('');

  const getSpreadIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'Columns3':
        return <Columns3 className="w-6 h-6 text-sky-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const selectedSpread = SPREADS.find(s => s.id === selectedSpreadId) || SPREADS[0];

  const handleStartReading = () => {
    onSelectSpread(selectedSpread, userQuestion.trim() || undefined);
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Header Banner */}
      <div className="text-center pt-2 px-4 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" /> Aleister Crowley Thoth Orakel
        </div>
        <h1 className="text-3xl font-serif font-bold text-amber-100 tracking-wide drop-shadow-md">
          Wähle dein Legesystem
        </h1>
        <p className="text-xs text-zinc-400 max-w-md mx-auto">
          5 tiefgründige Legemuster nach der klassischen Crowley & Lady Frieda Harris Symbolik. 100% offline nutzbar.
        </p>
      </div>

      {/* Question Input (Optional) */}
      <div className="px-4">
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-purple-500/30 shadow-lg space-y-2">
          <label className="text-xs font-medium text-amber-300 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            Deine Frage oder Absicht (Optional)
          </label>
          <input
            type="text"
            value={userQuestion}
            onChange={e => setUserQuestion(e.target.value)}
            placeholder="z.B. Wie entwickelt sich meine aktuelle Situation?"
            className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition"
          />
        </div>
      </div>

      {/* Spreads List */}
      <div className="px-4 space-y-3">
        {SPREADS.map((spread, index) => {
          const isSelected = spread.id === selectedSpreadId;
          return (
            <motion.div
              key={spread.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedSpreadId(spread.id)}
              className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                isSelected
                  ? 'bg-gradient-to-r from-purple-950/80 via-slate-900 to-amber-950/40 border-amber-400/80 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/50'
                  : 'bg-slate-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-slate-900'
              }`}
            >
              <div className={`p-3 rounded-xl bg-black/40 border ${isSelected ? 'border-amber-400/50' : 'border-zinc-800'}`}>
                {getSpreadIcon(spread.iconName)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-amber-100 truncate">{spread.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                    {spread.cardCount} {spread.cardCount === 1 ? 'Karte' : 'Karten'}
                  </span>
                </div>
                <p className="text-xs text-purple-300/80 font-medium mb-1">{spread.subtitle}</p>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{spread.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Positions preview of selected spread */}
      <div className="px-4 pt-2">
        <div className="p-4 rounded-2xl bg-black/40 border border-zinc-800 space-y-2">
          <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
            Kartenpositionen ({selectedSpread.positions.length})
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {selectedSpread.positions.map(pos => (
              <div key={pos.index} className="p-2 rounded-lg bg-slate-900/80 border border-zinc-800/80">
                <span className="font-bold text-amber-200 block text-xs">{pos.title}</span>
                <span className="text-[11px] text-zinc-400 leading-tight block">{pos.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 pt-2">
        <button
          onClick={handleStartReading}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-base shadow-xl hover:shadow-amber-500/20 active:scale-98 transition flex items-center justify-center gap-2"
        >
          <span>Mischen & Karten legen</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
