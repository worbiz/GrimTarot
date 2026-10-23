import React, { useState } from 'react';
import { SpreadDef, SpreadId } from '../types/tarot';
import { SPREADS } from '../data/spreads';
import { Sun, Columns3, Compass, Sparkles, Heart, HelpCircle, ArrowRight, PlusCircle, CircleDot } from 'lucide-react';
import { motion } from 'motion/react';
import { DailyRitualReminder } from './DailyRitualReminder';
import { useLanguage } from '../i18n/LanguageContext';

interface SpreadSelectionProps {
  onSelectSpread: (spread: SpreadDef, question?: string) => void;
  onGoToJournal?: () => void;
}

export const SpreadSelection: React.FC<SpreadSelectionProps> = ({ onSelectSpread, onGoToJournal }) => {
  const [selectedSpreadId, setSelectedSpreadId] = useState<SpreadId>('tageskarte');
  const [userQuestion, setUserQuestion] = useState('');
  const {
    t,
    getSpreadName,
    getSpreadSubtitle,
    getSpreadDescription,
    getPositionTitle,
    getPositionDescription
  } = useLanguage();

  const getSpreadIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#c5a059]" />;
      case 'Columns3':
        return <Columns3 className="w-5 h-5 text-[#58a6ff]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#c5a059]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#c5a059]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#ff7b72]" />;
      case 'PlusCircle':
        return <PlusCircle className="w-5 h-5 text-[#e69d45]" />;
      case 'CircleDot':
        return <CircleDot className="w-5 h-5 text-[#79c0ff]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  const selectedSpread = SPREADS.find(s => s.id === selectedSpreadId) || SPREADS[0];

  const handleStartReading = () => {
    onSelectSpread(selectedSpread, userQuestion.trim() || undefined);
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Header Banner */}
      <div className="text-center pt-2 px-4 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#121214] border border-[#c5a059]/30 text-[#c5a059] text-[10px] font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> {t('spreadSelectionBadge', 'Aleister Crowley Thoth Orakel')}
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#f4f4f5] tracking-wide">
          {t('spreadSelectionTitle', 'Wähle dein Legesystem')}
        </h1>
        <p className="text-xs text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
          {t('spreadSelectionSubtitle', '5 klassische Legemuster nach der authentischen Crowley & Lady Frieda Harris Symbolik. 100% offline nutzbar.')}
        </p>
      </div>

      {/* Daily Ritual Reminder Banner */}
      <div className="px-4">
        <DailyRitualReminder
          onStartDailyDraw={() => {
            const tageskarteSpread = SPREADS.find(s => s.id === 'tageskarte') || SPREADS[0];
            setSelectedSpreadId('tageskarte');
            onSelectSpread(tageskarteSpread, 'Tagesimpuls');
          }}
          onGoToJournal={onGoToJournal}
        />
      </div>

      {/* Question Input (Optional) */}
      <div className="px-4">
        <div className="p-4 rounded-lg bg-[#121214] border border-[#27272a] space-y-2">
          <label className="text-xs font-medium text-[#c5a059] flex items-center gap-1.5 uppercase tracking-wider text-[10px] font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            {t('questionLabel', 'Deine Frage oder Absicht (Optional)')}
          </label>
          <input
            type="text"
            value={userQuestion}
            onChange={e => setUserQuestion(e.target.value)}
            placeholder={t('questionPlaceholder', 'z.B. Welcher Pfad eröffnet sich mir jetzt?')}
            className="w-full px-3.5 py-2.5 rounded bg-[#0a0a0b] border border-[#27272a] text-xs text-[#f4f4f5] placeholder-[#71717a] focus:outline-none focus:border-[#c5a059] transition"
          />
        </div>
      </div>

      {/* Spreads List */}
      <div className="px-4 space-y-3">
        {SPREADS.map((spread, index) => {
          const isSelected = spread.id === selectedSpreadId;
          const localizedName = getSpreadName(spread.id, spread.name);
          const localizedSubtitle = getSpreadSubtitle(spread.id, spread.subtitle);
          const localizedDescription = getSpreadDescription(spread.id, spread.description);

          return (
            <motion.div
              key={spread.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => setSelectedSpreadId(spread.id)}
              className={`cursor-pointer p-4 rounded-lg border transition-all duration-200 flex items-start gap-3.5 ${
                isSelected
                  ? 'bg-[#18181b] border-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.1)]'
                  : 'bg-[#121214] border-[#27272a] hover:border-[#3f3f46] hover:bg-[#151518]'
              }`}
            >
              <div className={`p-2.5 rounded bg-[#0a0a0b] border ${isSelected ? 'border-[#c5a059]/60' : 'border-[#27272a]'}`}>
                {getSpreadIcon(spread.iconName)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-[#f4f4f5] truncate">
                    {localizedName}
                  </h3>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#0a0a0b] text-[#c5a059] border border-[#c5a059]/30 whitespace-nowrap uppercase">
                    {spread.cardCount} {t('cardsCountLabel', 'Karten')}
                  </span>
                </div>
                <p className="text-xs text-[#c5a059]/90 font-medium mb-1">{localizedSubtitle}</p>
                <p className="text-xs text-[#a1a1aa] line-clamp-2 leading-relaxed">{localizedDescription}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Positions preview of selected spread */}
      <div className="px-4 pt-1">
        <div className="p-4 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-2.5">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#71717a]">
            {t('cardsInSpread', 'Kartenpositionen')} ({selectedSpread.positions.length})
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {selectedSpread.positions.map(pos => {
              const posTitle = getPositionTitle(selectedSpread.id, pos.index, pos.title);
              const posDesc = getPositionDescription(selectedSpread.id, pos.index, pos.description);
              return (
                <div key={pos.index} className="p-2.5 rounded bg-[#121214] border border-[#27272a]">
                  <span className="font-bold text-[#f4f4f5] block text-xs">{posTitle}</span>
                  <span className="text-[11px] text-[#a1a1aa] leading-tight block mt-0.5">{posDesc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 pt-1">
        <button
          onClick={handleStartReading}
          className="w-full py-3.5 rounded bg-[#c5a059] text-[#0a0a0b] font-bold text-xs uppercase tracking-widest hover:bg-[#d8b46e] transition flex items-center justify-center gap-2 shadow-lg shadow-[#c5a059]/10 cursor-pointer"
        >
          <span>{t('beginReadingBtn', 'Legung beginnen')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
