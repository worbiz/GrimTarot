import React, { useState, useEffect } from 'react';
import { SpreadDef, DrawnCard, ThothCard } from '../types/tarot';
import { THOTH_DECK } from '../data/thothDeck';
import { ThothCardView } from './ThothCardView';
import { Shuffle, Hand, ArrowLeft, Eye, RotateCw, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CARD_BACK_IMAGE } from '../data/cardArtworks';
import { useLanguage } from '../i18n/LanguageContext';

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
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [activePositionIndex, setActivePositionIndex] = useState(0);
  const {
    t,
    getCardName,
    getCardThothTitle,
    getSpreadName,
    getPositionTitle,
    getPositionDescription
  } = useLanguage();

  // 3D Flip Reveal State
  const [revealingCard, setRevealingCard] = useState<{
    drawn: DrawnCard;
    isFlipped: boolean;
  } | null>(null);

  // Reversed Cards Mode (User configurable, default enabled as requested)
  const [allowReversed, setAllowReversed] = useState<boolean>(() => {
    const saved = localStorage.getItem('grimtarot_allow_reversed');
    return saved !== null ? saved === 'true' : true;
  });
  const [showReversalInfo, setShowReversalInfo] = useState(false);

  const toggleAllowReversed = () => {
    setAllowReversed(prev => {
      const next = !prev;
      localStorage.setItem('grimtarot_allow_reversed', String(next));
      return next;
    });
  };

  // Initialize shuffled deck
  useEffect(() => {
    shuffleDeck();
  }, []);

  const shuffleDeck = () => {
    setIsShuffling(true);
    setRevealingCard(null);
    setTimeout(() => {
      const deckCopy = [...THOTH_DECK];
      for (let i = deckCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deckCopy[i], deckCopy[j]] = [deckCopy[j], deckCopy[i]];
      }
      setShuffledDeck(deckCopy);
      setIsShuffling(false);
    }, 600);
  };

  const handleDrawCard = (cardIndexInDeck: number) => {
    if (drawnCards.length >= spread.cardCount || isShuffling || revealingCard) return;

    const selectedCard = shuffledDeck[cardIndexInDeck];
    const currentPos = spread.positions[activePositionIndex];
    const posTitle = getPositionTitle(spread.id, currentPos.index, currentPos.title);

    // Realistic reversal probability when deck halves are inverted (~35% chance)
    const isCardReversed = allowReversed ? Math.random() < 0.35 : false;

    const newDrawn: DrawnCard = {
      positionIndex: currentPos.index,
      positionTitle: posTitle,
      card: selectedCard,
      isReversed: isCardReversed
    };

    // Remove from deck
    const updatedDeck = shuffledDeck.filter((_, idx) => idx !== cardIndexInDeck);
    setShuffledDeck(updatedDeck);

    // Trigger Mystical 3D Flip Ritual
    setRevealingCard({
      drawn: newDrawn,
      isFlipped: false
    });

    // Start 3D Flip Animation
    setTimeout(() => {
      setRevealingCard(prev => (prev ? { ...prev, isFlipped: true } : null));
    }, 250);

    // After flip animation concludes, commit to drawn collection
    setTimeout(() => {
      const nextDrawn = [...drawnCards, newDrawn];
      setDrawnCards(nextDrawn);
      setRevealingCard(null);

      if (nextDrawn.length < spread.cardCount) {
        setActivePositionIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          onCompleteReading(nextDrawn);
        }, 900);
      }
    }, 1700);
  };

  const handleDrawAll = () => {
    if (isShuffling || revealingCard) return;
    const cardsToTake = shuffledDeck.slice(0, spread.cardCount);
    const newDrawnCards: DrawnCard[] = cardsToTake.map((card, idx) => ({
      positionIndex: spread.positions[idx].index,
      positionTitle: getPositionTitle(spread.id, spread.positions[idx].index, spread.positions[idx].title),
      card,
      isReversed: allowReversed ? Math.random() < 0.35 : false
    }));

    setDrawnCards(newDrawnCards);
    setTimeout(() => {
      onCompleteReading(newDrawnCards);
    }, 800);
  };

  const currentPosDef = spread.positions[activePositionIndex];
  const currentPosTitle = currentPosDef ? getPositionTitle(spread.id, currentPosDef.index, currentPosDef.title) : '';
  const currentPosDesc = currentPosDef ? getPositionDescription(spread.id, currentPosDef.index, currentPosDef.description) : '';

  return (
    <div className="space-y-6 pb-28 px-4 min-h-[85vh] flex flex-col justify-between select-none">
      {/* Top Header Section */}
      <div>
        <div className="flex items-center justify-between py-2 border-b border-[#27272a]">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-[#f4f4f5] px-3 py-1.5 rounded bg-[#121214] border border-[#27272a] hover:border-[#c5a059]/40 transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t('backToSpreadsBtn', 'Zurück')}
          </button>
          <div className="text-right">
            <span className="text-sm font-serif font-bold text-[#f4f4f5] block">
              {getSpreadName(spread.id, spread.name)}
            </span>
            <span className="text-[10px] text-[#71717a] font-mono uppercase tracking-wider">
              {drawnCards.length} / {spread.cardCount} {t('drawnCardsProgress', 'gezogen')}
            </span>
          </div>
        </div>

        {question && (
          <div className="p-3 rounded bg-[#121214] border border-[#c5a059]/30 text-xs text-[#a1a1aa] mt-3">
            <span className="font-bold text-[#c5a059] block text-[9px] uppercase tracking-widest">
              {t('questionAsked', 'Deine Frage')}:
            </span>
            <span className="text-[#f4f4f5] italic">"{question}"</span>
          </div>
        )}
      </div>

      {/* Main Drawing & 3D Flip Stage */}
      <div className="flex-1 flex flex-col items-center justify-center my-3 space-y-5">
        {/* Instruction Guidance */}
        {drawnCards.length < spread.cardCount ? (
          <div className="text-center space-y-1 max-w-sm">
            <div className="inline-flex items-center gap-1 text-[10px] font-mono text-[#c5a059] uppercase tracking-[0.2em] bg-[#c5a059]/10 px-3 py-1 rounded border border-[#c5a059]/30">
              #{activePositionIndex + 1}: {currentPosTitle}
            </div>
            <p className="text-xs text-[#a1a1aa] italic pt-1">{currentPosDesc}</p>
          </div>
        ) : (
          <div className="text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-[#c5a059] mx-auto animate-pulse" />
            <h3 className="text-lg font-serif font-bold text-[#f4f4f5]">
              {t('readingCompletedTitle', 'Alle Karten wurden gezogen')}
            </h3>
            <p className="text-xs text-[#71717a]">
              {t('shuffling', 'Berechne die kosmische Synthese...')}
            </p>
          </div>
        )}

        {/* Dynamic Center Stage: 3D Flip Reveal or Card Deck Fan */}
        <div className="relative w-full max-w-md h-72 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isShuffling ? (
              <motion.div
                key="shuffling"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex flex-col items-center gap-3 text-[#c5a059] text-xs uppercase tracking-widest font-mono"
              >
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/40 flex items-center justify-center bg-[#121214]">
                  <RotateCw className="w-6 h-6 animate-spin text-[#c5a059]" />
                </div>
                <span>{t('shuffling', 'Mische das Deck...')}</span>
              </motion.div>
            ) : revealingCard ? (
              /* ==================================================== */
              /* MYSTICAL 3D FLIP REVEAL ANIMATION STAGE              */
              /* ==================================================== */
              <motion.div
                key="revealing-stage"
                initial={{ scale: 0.5, y: 40, opacity: 0 }}
                animate={{ scale: 1.15, y: 0, opacity: 1 }}
                exit={{ scale: 0.6, y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative flex flex-col items-center justify-center"
              >
                {/* Mystical Halo Aura Glow */}
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,#c5a059_0%,transparent_70%)] opacity-30 animate-pulse pointer-events-none" />

                {/* 3D Flip Card Container */}
                <div className="relative w-44 h-68 perspective-1000">
                  <div
                    className={`w-full h-full duration-1000 transform-style-3d transition-transform ${
                      revealingCard.isFlipped ? '' : 'rotate-y-180'
                    }`}
                  >
                    {/* Front Face (Revealed) */}
                    <div className="absolute inset-0 backface-hidden shadow-[0_0_40px_rgba(197,160,89,0.25)] rounded-lg">
                      <ThothCardView
                        card={revealingCard.drawn.card}
                        size="lg"
                        isFlipped={true}
                        isReversed={revealingCard.drawn.isReversed}
                        positionTitle={revealingCard.drawn.positionTitle}
                      />
                    </div>

                    {/* Back Face (Before Flip) */}
                    <div className="absolute inset-0 rounded-lg border-2 border-[#c5a059] bg-[#0a0a0b] p-2 flex flex-col items-center justify-center overflow-hidden rotate-y-180 backface-hidden shadow-[0_0_30px_rgba(0,0,0,0.9)]">
                      <img
                        src={CARD_BACK_IMAGE}
                        alt="Card Back"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded filter contrast-125 brightness-90"
                      />
                      <div className="absolute inset-0 bg-[#c5a059]/10 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-2 text-center max-w-xs px-2"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c5a059] block">
                    {revealingCard.drawn.positionTitle}
                  </span>
                  <span className="text-sm font-serif font-bold text-[#f4f4f5] block mt-0.5">
                    {getCardName(revealingCard.drawn.card)}{' '}
                    {getCardThothTitle(revealingCard.drawn.card)
                      ? `• "${getCardThothTitle(revealingCard.drawn.card)}"`
                      : ''}
                  </span>
                  {revealingCard.drawn.isReversed && (
                    <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-mono uppercase bg-[#1e1408] text-[#e69d45] border border-[#e69d45]/60 px-2 py-0.5 rounded-full shadow">
                      ↷ {t('orientationReversed', 'Umgekehrt (Kopfstand)')}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            ) : (
              /* ==================================================== */
              /* ARCANA FAN TO CHOOSE FROM                           */
              /* ==================================================== */
              <div className="relative w-full h-full flex items-center justify-center">
                {shuffledDeck.slice(0, 15).map((card, idx) => {
                  const rotation = (idx - 7) * 4;
                  const xOffset = (idx - 7) * 11;

                  return (
                    <motion.div
                      key={card.id}
                      initial={{ scale: 0, y: 50 }}
                      animate={{ scale: 1, y: 0, rotate: rotation, x: xOffset }}
                      whileHover={{ y: -24, scale: 1.08, zIndex: 50 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDrawCard(idx)}
                      className="absolute cursor-pointer rounded-lg border border-[#c5a059]/40 bg-[#0a0a0b] w-24 h-40 p-1 shadow-2xl transition-shadow hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] hover:border-[#c5a059]"
                      style={{ zIndex: 20 - Math.abs(idx - 7) }}
                    >
                      <div className="w-full h-full rounded border border-[#27272a] bg-[#121214] flex flex-col items-center justify-between p-2 relative overflow-hidden">
                        <img
                          src={CARD_BACK_IMAGE}
                          alt="Deck"
                          referrerPolicy="no-referrer"
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-[#0a0a0b]/40 pointer-events-none" />
                        <div className="relative z-10 w-6 h-6 rounded-full border border-[#c5a059]/40 flex items-center justify-center bg-[#0a0a0b]/80 my-auto">
                          <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Reversed Cards Toggle & Philosophy Info Bar */}
        <div className="w-full max-w-md mx-auto p-2.5 rounded-lg bg-[#121214] border border-[#27272a] text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RotateCw className={`w-3.5 h-3.5 transition-colors ${allowReversed ? 'text-[#e69d45]' : 'text-[#71717a]'}`} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono font-medium text-[#f4f4f5]">
                  {t('allowReversedCards', 'Karten auf dem Kopf (Kopfstand)')}
                </span>
                <button
                  type="button"
                  onClick={() => setShowReversalInfo(true)}
                  className="text-[#c5a059] hover:text-[#f4f4f5] text-[10px] font-mono underline cursor-pointer"
                  title="Deutungs-Philosophie"
                >
                  ℹ
                </button>
              </div>
              <span className="text-[9px] text-[#71717a] block leading-tight">
                {allowReversed
                  ? t('reversedCardsActive', 'Aktiv: blockierte, verzögerte & innere Energie')
                  : t('onlyUprightMode', 'Nur aufrechte Karten')}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={toggleAllowReversed}
            className={`px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition cursor-pointer font-bold ${
              allowReversed
                ? 'bg-[#e69d45] text-[#0a0a0b] shadow'
                : 'bg-[#18181b] text-[#71717a] border border-[#27272a] hover:text-[#d4d4d8]'
            }`}
          >
            {allowReversed ? 'AN' : 'AUS'}
          </button>
        </div>

        {/* Drawn Cards Mini Gallery */}
        {drawnCards.length > 0 && (
          <div className="w-full max-w-md p-3 rounded-lg bg-[#121214] border border-[#27272a]">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#71717a] block text-center mb-2">
              {t('cardsInSpread', 'Karten')} ({drawnCards.length})
            </span>
            <div className="flex items-center justify-center gap-2.5 overflow-x-auto py-1">
              {drawnCards.map((drawn, idx) => (
                <div key={idx} className="flex-shrink-0 text-center">
                  <ThothCardView
                    card={drawn.card}
                    size="sm"
                    isFlipped={true}
                    isReversed={drawn.isReversed}
                    showDetailsOnTap={true}
                  />
                  <div className="mt-1 flex items-center justify-center gap-0.5">
                    {drawn.isReversed && <span className="text-[#e69d45] text-[8px] font-mono">↷</span>}
                    <span className="text-[9px] text-[#c5a059] font-mono truncate max-w-[70px]">
                      {drawn.positionTitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Philosophy Modal for Reversed Cards */}
      {showReversalInfo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-fade-in"
          onClick={() => setShowReversalInfo(false)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#c5a059]/40 bg-[#121214] p-5 space-y-4 text-xs text-[#d4d4d8] shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#27272a] pb-2">
              <div>
                <span className="text-[9px] font-mono text-[#c5a059] uppercase tracking-widest block">
                  GrimTarot Weisheit
                </span>
                <h4 className="text-base font-serif font-bold text-[#f4f4f5]">
                  {t('allowReversedCards', 'Karten auf dem Kopf (Kopfstand)')}
                </h4>
              </div>
              <button
                onClick={() => setShowReversalInfo(false)}
                className="text-[#71717a] hover:text-[#f4f4f5] p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2.5 text-xs leading-relaxed">
              <p className="text-[#f4f4f5] font-serif italic bg-[#18181b] p-3 rounded border border-[#c5a059]/20">
                "Wenn eine Tarotkarte auf dem Kopf steht, signalisiert dies in der Regel, dass die Energie der Karte blockiert, verzögert oder nach innen gerichtet ist. Es bedeutet nicht automatisch das Gegenteil oder eine rein negative Bedeutung, sondern zeigt oft eine Herausforderung an, die bewältigt werden muss, oder eine Chance, die noch nicht voll ausgeschöpft ist."
              </p>
              <div className="space-y-1.5 pt-1">
                <p>
                  <strong className="text-[#c5a059] font-mono text-[10px] uppercase">Interpretation:</strong> Die umgekehrte Karte kann auf Widerstand, innere Konflikte oder eine andere Perspektive hinweisen.
                </p>
                <p>
                  <strong className="text-[#c5a059] font-mono text-[10px] uppercase">Umgang:</strong> Einige Kartenleger ignorieren umgedrehte Karten oder deuten sie als verstärkte Aspekte. Die genaue Deutung hängt vom Legemuster und der Intuition ab.
                </p>
                <p>
                  <strong className="text-[#c5a059] font-mono text-[10px] uppercase">Entstehung:</strong> Karten liegen verkehrt herum, wenn sie beim Mischen (durch Verdrehen des Stapels) auf den Kopf gedreht werden.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowReversalInfo(false)}
              className="w-full py-2 rounded bg-[#c5a059] text-[#0a0a0b] font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              {t('closeModal', 'Verstanden')}
            </button>
          </div>
        </div>
      )}

      {/* Control Actions */}
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto w-full">
        <button
          onClick={shuffleDeck}
          disabled={isShuffling || !!revealingCard}
          className="py-3 px-4 rounded border border-[#27272a] bg-[#121214] text-[#d4d4d8] font-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#c5a059]/40 hover:bg-[#1a1a1c] transition disabled:opacity-40 cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>{t('shuffleBtn', 'Deck neu mischen')}</span>
        </button>

        <button
          onClick={handleDrawAll}
          disabled={isShuffling || !!revealingCard || drawnCards.length >= spread.cardCount}
          className="py-3 px-4 rounded bg-[#c5a059] text-[#0a0a0b] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#c5a059]/10 hover:bg-[#d8b46e] transition disabled:opacity-40 cursor-pointer"
        >
          <Hand className="w-3.5 h-3.5" />
          <span>{spread.cardCount === 1 ? t('dailyRitualButton', 'Karte ziehen') : t('cardsCountLabel', 'Alle ziehen')}</span>
        </button>
      </div>
    </div>
  );
};

