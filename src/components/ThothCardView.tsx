import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ThothCard } from '../types/tarot';
import { Sparkles, Compass, Moon, Flame, Shield, Eye, Info } from 'lucide-react';

interface ThothCardViewProps {
  card: ThothCard;
  isFlipped?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDetailsOnTap?: boolean;
  onCardClick?: () => void;
  positionTitle?: string;
  isReversed?: boolean;
}

export const ThothCardView: React.FC<ThothCardViewProps> = ({
  card,
  isFlipped = true,
  size = 'md',
  showDetailsOnTap = false,
  onCardClick,
  positionTitle,
  isReversed = false
}) => {
  const [showModal, setShowModal] = useState(false);

  // Size configurations
  const sizeClasses = {
    sm: 'w-24 h-40 text-xs',
    md: 'w-36 h-60 text-xs',
    lg: 'w-48 h-80 text-sm',
    xl: 'w-64 h-96 text-base'
  };

  const getSuitIcon = (suit?: string, element?: string) => {
    if (element === 'Feuer' || suit === 'wands') return <Flame className="w-3.5 h-3.5 text-amber-400" />;
    if (element === 'Wasser' || suit === 'cups') return <Moon className="w-3.5 h-3.5 text-sky-400" />;
    if (element === 'Luft' || suit === 'swords') return <Compass className="w-3.5 h-3.5 text-cyan-300" />;
    if (element === 'Erde' || suit === 'disks') return <Shield className="w-3.5 h-3.5 text-emerald-400" />;
    return <Sparkles className="w-3.5 h-3.5 text-purple-400" />;
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    } else if (showDetailsOnTap) {
      setShowModal(true);
    }
  };

  return (
    <>
      <motion.div
        className={`relative cursor-pointer select-none perspective-1000 ${sizeClasses[size]} rounded-xl shadow-2xl transition-transform hover:scale-105`}
        whileTap={{ scale: 0.96 }}
        onClick={handleCardClick}
      >
        <div
          className={`w-full h-full duration-700 transform-style-3d transition-transform ${
            isFlipped ? '' : 'rotate-y-180'
          } ${isReversed ? 'rotate-180' : ''}`}
        >
          {/* FRONT OF THE CARD */}
          <div
            className={`absolute inset-0 rounded-xl border-2 overflow-hidden flex flex-col justify-between p-2 shadow-inner bg-gradient-to-b ${card.colorTheme.bgGradient}`}
            style={{ borderColor: card.colorTheme.border }}
          >
            {/* Top Bar: Number/Title & Astrology */}
            <div className="flex items-center justify-between text-[11px] font-bold text-amber-200/90 tracking-wider">
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded bg-black/50 border border-amber-500/30 text-amber-300">
                  {card.number}
                </span>
                {card.hebrewLetter && (
                  <span className="text-amber-400 font-serif text-xs">{card.hebrewLetter.split(' ')[0]}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-amber-100/70 truncate max-w-[80px]">
                {getSuitIcon(card.suit, card.element)}
                <span className="truncate">{card.astrology}</span>
              </div>
            </div>

            {/* Middle Artwork Display / Geometry */}
            <div className="relative my-1 flex-1 rounded-lg border border-amber-500/20 bg-black/40 backdrop-blur-sm p-2 flex flex-col items-center justify-center text-center overflow-hidden group">
              {/* Crowley Thoth Sacred Geometry Decorative Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />
              <div className="absolute w-24 h-24 rounded-full border border-amber-400/20 animate-spin-slow pointer-events-none" />

              {/* Atu / Card Name */}
              <div className="relative z-10 my-auto">
                {card.thothTitle && (
                  <span className="block text-[10px] font-semibold text-amber-400 uppercase tracking-widest mb-0.5">
                    "{card.thothTitle}"
                  </span>
                )}
                <h4 className="font-serif font-bold text-amber-100 text-xs sm:text-sm drop-shadow-md leading-tight">
                  {card.nameGerman}
                </h4>
                <p className="text-[9px] text-zinc-400 font-mono mt-0.5">{card.nameEnglish}</p>
              </div>

              {/* Element & Keywords Pill */}
              <div className="relative z-10 mt-auto pt-1 flex flex-wrap justify-center gap-1">
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  {card.element}
                </span>
              </div>
            </div>

            {/* Bottom Bar: Position or Thoth Label */}
            <div className="text-center pt-0.5">
              {positionTitle ? (
                <span className="text-[10px] font-medium text-purple-300/90 truncate block px-1 py-0.5 bg-purple-950/60 rounded border border-purple-500/30">
                  {positionTitle}
                </span>
              ) : (
                <div className="flex items-center justify-between text-[9px] text-amber-200/60 font-mono">
                  <span>ATU / THOTH</span>
                  <Eye className="w-3 h-3 text-amber-400/60" />
                </div>
              )}
            </div>
          </div>

          {/* BACK OF THE CARD (Mystical Velvety Thoth Rosicrucian Pattern) */}
          <div className="absolute inset-0 rounded-xl border-2 border-amber-600/40 bg-gradient-to-br from-slate-950 via-purple-950 to-zinc-950 p-2 flex flex-col items-center justify-center overflow-hidden rotate-y-180 shadow-2xl">
            <div className="w-full h-full rounded-lg border border-amber-500/30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-purple-900/20 to-black flex items-center justify-center p-3 relative">
              <div className="w-16 h-16 rounded-full border border-amber-400/40 flex items-center justify-center relative bg-black/60">
                <Eye className="w-8 h-8 text-amber-400/80 animate-pulse" />
                <div className="absolute inset-0 border border-amber-400/30 rotate-45" />
              </div>
              <span className="absolute bottom-2 font-mono text-[9px] text-amber-500/60 tracking-widest uppercase">
                GrimTarot
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CARD DETAILS MODAL IF showDetailsOnTap */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-amber-500/40 bg-gradient-to-b from-slate-950 via-zinc-950 to-purple-950 p-6 text-zinc-100 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  Thoth Tarot Karte #{card.number}
                </span>
                <h3 className="text-2xl font-serif font-bold text-amber-200 mt-0.5">{card.nameGerman}</h3>
                <p className="text-sm text-zinc-400 italic">
                  {card.nameEnglish} {card.thothTitle ? `• "${card.thothTitle}"` : ''}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full p-2 text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                ✕
              </button>
            </div>

            {/* Metadata Tags */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-4 text-xs font-medium">
              <div className="p-2 rounded-lg bg-black/40 border border-amber-500/20">
                <span className="text-zinc-400 block text-[10px]">Element</span>
                <span className="text-amber-300 font-semibold">{card.element}</span>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-amber-500/20">
                <span className="text-zinc-400 block text-[10px]">Astrologie</span>
                <span className="text-amber-300 font-semibold">{card.astrology}</span>
              </div>
              {card.hebrewLetter && (
                <div className="p-2 rounded-lg bg-black/40 border border-amber-500/20 col-span-2 sm:col-span-1">
                  <span className="text-zinc-400 block text-[10px]">Hebräischer Buchstabe</span>
                  <span className="text-amber-300 font-semibold">{card.hebrewLetter}</span>
                </div>
              )}
            </div>

            {/* Symbolism & Description */}
            <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
              <div>
                <h5 className="font-semibold text-amber-400 flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wider">
                  <Info className="w-4 h-4 text-amber-400" /> Symbolik nach Crowley
                </h5>
                <p className="bg-black/30 p-3 rounded-xl border border-zinc-800 text-zinc-200">{card.description}</p>
              </div>

              {/* Meanings */}
              <div className="space-y-2">
                <h5 className="font-semibold text-amber-400 text-xs uppercase tracking-wider">Bedeutungen</h5>
                <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                  <span className="text-xs font-bold text-purple-300 block mb-1">Allgemein & Rat:</span>
                  <p>{card.uprightMeaning.general}</p>
                  <p className="mt-1 text-amber-200 font-medium italic">Ratschlag: {card.uprightMeaning.advice}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800">
                    <span className="font-bold text-pink-400 block mb-0.5">Liebe & Herz:</span>
                    <span>{card.uprightMeaning.love}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800">
                    <span className="font-bold text-sky-400 block mb-0.5">Beruf & Geist:</span>
                    <span>{card.uprightMeaning.career}</span>
                  </div>
                </div>
              </div>

              {/* Shadow / Elemental Dignity */}
              <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs">
                <span className="font-bold text-red-400 block mb-1">Schattenseite & Elementare Würde:</span>
                <span className="text-zinc-300">{card.shadowMeaning}</span>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};
