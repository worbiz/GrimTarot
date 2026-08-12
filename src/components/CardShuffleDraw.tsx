import React, { useState, useEffect } from 'react';
import { SpreadDef, DrawnCard, ThothCard } from '../types/tarot';
import { THOTH_DECK } from '../data/thothDeck';
import { ThothCardView } from './ThothCardView';
import { RefreshCw, Sparkles, CheckCircle2, Shuffle, Hand, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CardShuffleDrawProps {
  spread: SpreadDef;
  question?: string;
  onCompleteReading: (drawnCards: DrawnCard[]) => void;
  onBack: () => void;
}

export const CardShuffleDraw: React.FC<CardShuffleDrawProps> = ({
  spread,
  question,
  onCompleteReading,
  onBack
}) => {
  const [shuffledDeck, setShuffledDeck] = useState<ThothCard[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [activePositionIndex, setActivePositionIndex] = useState(0);

  // Initialize shuffled deck on mount
  useEffect(() => {
    shuffleDeck();
  }, []);

  const shuffleDeck = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const deckCopy = [...THOTH_DECK];
      // Fisher-Yates shuffle
      for (let i = deckCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckCopy[i], deckCopy[j]] = [deckCopy[j], deckCopy[i]];
      }
      setShuffledDeck(deckCopy);
      setIsShuffling(false);
      setShuffleCount(prev => prev + 1);
    }, 600);
  };

  const handleDrawCard = (cardIndexInDeck: number) => {
    if (drawnCards.length >= spread.cardCount || isShuffling) return;

    const selectedCard = shuffledDeck[cardIndexInDeck];
    const currentPos = spread.positions[activePositionIndex];

    const newDrawn: DrawnCard = {
      positionIndex: currentPos.index,
      positionTitle: currentPos.title,
      card: selectedCard
    };

    const nextDrawn = [...drawnCards, newDrawn];
    setDrawnCards(nextDrawn);

    // Remove drawn card from available deck
    const updatedDeck = shuffledDeck.filter((_, idx) => idx !== cardIndexInDeck);
    setShuffledDeck(updatedDeck);

    if (nextDrawn.length < spread.cardCount) {
      setActivePositionIndex(prev => prev + 1);
    } else {
      // Completed drawing all cards!
      setTimeout(() => {
        onCompleteReading(nextDrawn);
      }, 800);
    }
  };

  const handleDrawAll = () => {
    if (isShuffling) return;
    const cardsToTake = shuffledDeck.slice(0, spread.cardCount);
    const newDrawnCards: DrawnCard[] = cardsToTake.map((card, idx) => ({
      positionIndex: spread.positions[idx].index,
      positionTitle: spread.positions[idx].title,
      card
    }));

    setDrawnCards(newDrawnCards);
    setTimeout(() => {
      onCompleteReading(newDrawnCards);
    }, 600);
  };

  const currentPosDef = spread.positions[activePositionIndex];

  return (
    <div className="space-y-6 pb-24 px-4 min-h-[85vh] flex flex-col justify-between">
      {/* Top Bar */}
      <div>
        <div className="flex items-center justify-between py-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white px-2 py-1 rounded-lg bg-slate-900 border border-zinc-800"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück
          </button>
          <div className="text-right">
            <span className="text-xs font-serif font-bold text-amber-200 block">{spread.name}</span>
            <span className="text-[10px] text-zinc-400 font-mono">
              {drawnCards.length} / {spread.cardCount} Karten gezogen
            </span>
          </div>
        </div>

        {question && (
          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 mt-2">
            <span className="font-bold text-amber-400 block text-[10px] uppercase">Deine Frage:</span>
            "{question}"
          </div>
        )}
      </div>

      {/* Main Drawing Area */}
      <div className="flex-1 flex flex-col items-center justify-center my-4 space-y-6">
        {/* Instruction Card */}
        {drawnCards.length < spread.cardCount ? (
          <div className="text-center space-y-1.5 max-w-sm">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 inline-block">
              Position #{activePositionIndex + 1}: {currentPosDef?.title}
            </span>
            <p className="text-xs text-zinc-300 italic">{currentPosDef?.description}</p>
          </div>
        ) : (
          <div className="text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-xl font-serif font-bold text-amber-200">Alle Karten gezogen!</h3>
            <p className="text-xs text-zinc-400">Erstelle jetzt die Auswertung deines Thoth Orakels...</p>
          </div>
        )}

        {/* Deck Fan or Stack */}
        <div className="relative w-full max-w-md h-64 flex items-center justify-center my-2">
          <AnimatePresence>
            {isShuffling ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: [0, 10, -10, 0] }}
                className="flex items-center gap-2 text-amber-300 text-sm font-semibold"
              >
                <RefreshCw className="w-6 h-6 animate-spin text-amber-400" />
                Mische 78 Thoth Tarot Karten...
              </motion.div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Fan of Cards */}
                {shuffledDeck.slice(0, 15).map((card, idx) => {
                  const rotation = (idx - 7) * 4;
                  const xOffset = (idx - 7) * 12;

                  return (
                    <motion.div
                      key={card.id}
                      initial={{ scale: 0, y: 50 }}
                      animate={{ scale: 1, y: 0, rotate: rotation, x: xOffset }}
                      whileHover={{ y: -20, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDrawCard(idx)}
                      className="absolute cursor-pointer rounded-xl border-2 border-amber-500/40 bg-gradient-to-br from-slate-950 via-purple-950 to-zinc-950 w-28 h-44 p-2 shadow-2xl flex flex-col justify-between"
                      style={{ zIndex: 20 - idx }}
                    >
                      <div className="w-full h-full rounded-lg border border-amber-500/20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-purple-900/20 to-black flex items-center justify-center p-2">
                        <Sparkles className="w-5 h-5 text-amber-400/70" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Drawn Cards Mini Preview */}
        {drawnCards.length > 0 && (
          <div className="w-full max-w-md">
            <span className="text-[10px] font-mono text-zinc-400 block text-center mb-2">Gezogene Karten:</span>
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
              {drawnCards.map((drawn, idx) => (
                <div key={idx} className="flex-shrink-0 text-center">
                  <ThothCardView card={drawn.card} size="sm" isFlipped={true} />
                  <span className="text-[9px] text-amber-300 font-mono block mt-1 truncate max-w-[80px]">
                    {drawn.positionTitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto w-full">
        <button
          onClick={shuffleDeck}
          disabled={isShuffling}
          className="py-3 px-4 rounded-xl bg-slate-900 border border-zinc-700 text-zinc-200 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition disabled:opacity-50"
        >
          <Shuffle className="w-4 h-4 text-amber-400" />
          <span>Nochmals mischen</span>
        </button>

        <button
          onClick={handleDrawAll}
          disabled={isShuffling || drawnCards.length >= spread.cardCount}
          className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg hover:bg-amber-300 transition disabled:opacity-50"
        >
          <Hand className="w-4 h-4" />
          <span>{spread.cardCount === 1 ? 'Karte ziehen' : 'Alle ziehen'}</span>
        </button>
      </div>
    </div>
  );
};
