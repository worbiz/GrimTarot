import React, { useState } from 'react';
import { DrawnCard, SpreadDef, TarotReading } from '../types/tarot';
import { ThothCardView } from './ThothCardView';
import { generateReadingSynthesis, saveReadingToJournal } from '../utils/synthesisEngine';
import {
  Sparkles, Save, RotateCcw, RotateCw, BookOpen, Flame, Shield,
  Compass, Check, AlertCircle, Layers, ArrowDownCircle, CircleDot, PlusCircle, FileDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { getPositionInterpretationDetail } from '../data/interpretations';
import { useLanguage } from '../i18n/LanguageContext';
import { ElementalDignitiesView } from './ElementalDignitiesView';
import { analyzeElementalDignities } from '../utils/elementalDignities';
import { exportTarotReadingToPDF } from '../utils/pdfExport';

interface ReadingResultProps {
  spread: SpreadDef;
  drawnCards: DrawnCard[];
  question?: string;
  onNewReading: () => void;
  onGoToJournal: () => void;
}

export const ReadingResult: React.FC<ReadingResultProps> = ({
  spread,
  drawnCards,
  question,
  onNewReading,
  onGoToJournal
}) => {
  const [selectedCard, setSelectedCard] = useState<DrawnCard>(drawnCards[0]);
  const [userNotes, setUserNotes] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [mainTab, setMainTab] = useState<'cards' | 'elemental' | 'synthesis'>('cards');
  const [focusTab, setFocusTab] = useState<'current_position' | 'all_positions' | 'symbolism'>('current_position');
  
  // Track orientation per position index (allows user to intuitively rotate cards or toggle reversals)
  const [cardsOrientation, setCardsOrientation] = useState<Record<number, boolean>>(() => {
    const map: Record<number, boolean> = {};
    drawnCards.forEach(d => {
      map[d.positionIndex] = !!d.isReversed;
    });
    return map;
  });

  const toggleCardOrientation = (posIndex: number) => {
    setCardsOrientation(prev => ({
      ...prev,
      [posIndex]: !prev[posIndex]
    }));
  };

  const {
    t,
    getCardName,
    getCardThothTitle,
    getElementName,
    getSpreadName,
    getPositionTitle,
    getPositionShortLabel
  } = useLanguage();

  const localizedSpreadName = getSpreadName(spread.id, spread.name);

  const effectiveDrawnCards: DrawnCard[] = drawnCards.map(d => ({
    ...d,
    isReversed: !!cardsOrientation[d.positionIndex]
  }));

  const synthesis = generateReadingSynthesis(effectiveDrawnCards, localizedSpreadName, question, spread.id);
  const elementalDignitiesSummary = analyzeElementalDignities(effectiveDrawnCards, spread.id);

  const handleSaveReading = () => {
    const reading: TarotReading = {
      id: `reading_${Date.now()}`,
      timestamp: Date.now(),
      spreadId: spread.id,
      spreadName: localizedSpreadName,
      question,
      drawnCards: effectiveDrawnCards,
      notes: userNotes,
      overallSynthesis: {
        dominantElement: synthesis.dominantElement,
        majorCount: synthesis.majorCount,
        summary: synthesis.summary,
        elementalAdvice: synthesis.elementalAdvice
      }
    };

    saveReadingToJournal(reading);
    setIsSaved(true);
  };

  const handleFetchAiDeepAnalysis = async () => {
    setIsLoadingAi(true);
    try {
      const response = await fetch('/api/tarot-ai-interpretation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          spreadName: localizedSpreadName,
          question,
          drawnCards: effectiveDrawnCards.map(d => ({
            position: d.positionTitle,
            cardName: getCardName(d.card),
            thothTitle: getCardThothTitle(d.card),
            element: getElementName(d.card.element),
            astrology: d.card.astrology,
            keywords: d.card.keywords,
            isReversed: d.isReversed
          }))
        })
      });

      if (!response.ok) {
        throw new Error('AI analysis API returned error');
      }

      const data = await response.json();
      setAiAnalysis(data.interpretation);
    } catch {
      setAiAnalysis(t('synthesisTitle', 'Gesamtsynthese der Legung'));
    } finally {
      setIsLoadingAi(false);
    }
  };

  const getElementBadge = (element: string) => {
    const localizedEl = getElementName(element);
    switch (element) {
      case 'Feuer':
        return <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#1e1212] text-[#e69d45] border border-[#e69d45]/30 uppercase font-mono"><Flame className="w-3 h-3 text-[#e69d45]" /> {localizedEl}</span>;
      case 'Wasser':
        return <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#0f172a] text-[#58a6ff] border border-[#58a6ff]/30 uppercase font-mono"><Compass className="w-3 h-3 text-[#58a6ff]" /> {localizedEl}</span>;
      case 'Luft':
        return <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#0c1a24] text-[#79c0ff] border border-[#79c0ff]/30 uppercase font-mono"><Compass className="w-3 h-3 text-[#79c0ff]" /> {localizedEl}</span>;
      case 'Erde':
        return <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#0e1e17] text-[#7ee787] border border-[#7ee787]/30 uppercase font-mono"><Shield className="w-3 h-3 text-[#7ee787]" /> {localizedEl}</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#1c1c1f] text-[#c5a059] border border-[#c5a059]/30 uppercase font-mono"><Sparkles className="w-3 h-3 text-[#c5a059]" /> {localizedEl}</span>;
    }
  };

  // Helper to render a card button inside custom layouts
  const renderCardInLayout = (drawn: DrawnCard, compact: boolean = false) => {
    const isSelected = selectedCard.positionIndex === drawn.positionIndex;
    const posShort = getPositionShortLabel(spread.id, drawn.positionIndex, drawn.positionTitle);
    const isCardReversed = !!cardsOrientation[drawn.positionIndex];

    return (
      <motion.div
        key={drawn.positionIndex}
        whileHover={{ scale: 1.05 }}
        onClick={() => setSelectedCard(drawn)}
        className={`relative cursor-pointer p-1 rounded-lg transition text-center ${
          isSelected ? 'ring-1 ring-[#c5a059] bg-[#c5a059]/15' : 'opacity-85 hover:opacity-100'
        }`}
      >
        <ThothCardView
          card={drawn.card}
          size={compact ? 'sm' : 'sm'}
          isFlipped={true}
          isReversed={isCardReversed}
        />
        <div className="mt-1 flex items-center justify-center gap-0.5">
          {isCardReversed && <span className="text-[#e69d45] text-[9px] font-mono">↷</span>}
          <span className="text-[9px] font-mono text-[#d4d4d8] block text-center truncate max-w-[80px]">
            {posShort}
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-6 pb-28 px-4">
      {/* Reading Title */}
      <div className="text-center pt-2 space-y-1">
        <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-[0.2em] bg-[#121214] px-3 py-1 rounded border border-[#c5a059]/30">
          {t('readingCompletedTitle', 'Deine Legung ist vollendet')}
        </span>
        <h2 className="text-2xl font-serif font-bold text-[#f4f4f5] pt-1">{localizedSpreadName}</h2>
        {question && <p className="text-xs text-[#a1a1aa] italic max-w-sm mx-auto">"{question}"</p>}
      </div>

      {/* Main Top Navigation Tabs (Legung | Elementarwürden | Synthese) */}
      <div className="flex justify-center border-b border-[#27272a] text-xs max-w-lg mx-auto bg-[#121214] rounded-lg p-1 border">
        <button
          type="button"
          onClick={() => setMainTab('cards')}
          className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider text-center rounded transition flex items-center justify-center gap-1.5 cursor-pointer ${
            mainTab === 'cards'
              ? 'bg-[#c5a059] text-[#0a0a0b] font-bold shadow'
              : 'text-[#a1a1aa] hover:text-[#f4f4f5]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Karten ({effectiveDrawnCards.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setMainTab('elemental')}
          className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider text-center rounded transition flex items-center justify-center gap-1.5 cursor-pointer ${
            mainTab === 'elemental'
              ? 'bg-[#c5a059] text-[#0a0a0b] font-bold shadow'
              : 'text-[#a1a1aa] hover:text-[#f4f4f5]'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          <span>Elementarwürden</span>
          <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${mainTab === 'elemental' ? 'bg-[#0a0a0b] text-[#c5a059]' : 'bg-[#1e1c12] text-[#c5a059] border border-[#c5a059]/30'}`}>
            {elementalDignitiesSummary.harmonyScore}%
          </span>
        </button>
        <button
          type="button"
          onClick={() => setMainTab('synthesis')}
          className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider text-center rounded transition flex items-center justify-center gap-1.5 cursor-pointer ${
            mainTab === 'synthesis'
              ? 'bg-[#c5a059] text-[#0a0a0b] font-bold shadow'
              : 'text-[#a1a1aa] hover:text-[#f4f4f5]'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Synthese</span>
        </button>
      </div>

      {/* VIEW 1: CARDS & SPREAD LAYOUT */}
      {mainTab === 'cards' && (
        <div className="space-y-6 animate-fade-in">
          {/* Spread Layout Display */}
          <div className="p-4 rounded-lg bg-[#121214] border border-[#27272a] space-y-3 overflow-x-auto">
            <h3 className="text-[10px] font-mono text-[#71717a] uppercase tracking-widest text-center">
              {t('tapCardDetailsHint', 'Tippe auf eine Karte für tiefe Positionssymbolik')}
            </h3>

            {/* Custom Layout: Thelemic Cross (10 Cards) */}
            {spread.layoutType === 'thelemic_cross' && effectiveDrawnCards.length >= 10 ? (
              <div className="py-2 flex flex-col md:flex-row items-center justify-center gap-6 min-w-[320px]">
                {/* Cross Section */}
                <div className="relative grid grid-cols-3 gap-2 items-center justify-items-center p-2 bg-[#0a0a0b]/60 rounded-xl border border-[#c5a059]/20">
                  {/* Row 1: Crown (5) */}
                  <div className="col-start-2">
                    {renderCardInLayout(effectiveDrawnCards[4])}
                  </div>
                  {/* Row 2: Past (4) | Center (1 & 2) | Next Step (6) */}
                  <div className="col-start-1 row-start-2">
                    {renderCardInLayout(effectiveDrawnCards[3])}
                  </div>
                  <div className="col-start-2 row-start-2 relative">
                    {/* Center Card 1 (Herz) */}
                    {renderCardInLayout(effectiveDrawnCards[0])}
                    {/* Crossing Card 2 Badge */}
                    <div className="absolute top-0 right-0 bg-[#e69d45] text-[#0a0a0b] font-mono text-[9px] font-bold px-1 rounded shadow border border-[#0a0a0b]">
                      +Pos 2
                    </div>
                  </div>
                  <div className="col-start-3 row-start-2">
                    {renderCardInLayout(effectiveDrawnCards[5])}
                  </div>
                  {/* Row 3: Basis (3) */}
                  <div className="col-start-2 row-start-3">
                    {renderCardInLayout(effectiveDrawnCards[2])}
                  </div>
                </div>

                {/* Staff Section (Right side: Pos 10, 9, 8, 7) */}
                <div className="flex flex-col-reverse md:flex-col gap-2 p-2 bg-[#0a0a0b]/60 rounded-xl border border-[#c5a059]/20">
                  <span className="text-[9px] font-mono uppercase text-[#c5a059] text-center block">
                    Der Stab / Pfad
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                    {renderCardInLayout(effectiveDrawnCards[9])}
                    {renderCardInLayout(effectiveDrawnCards[8])}
                    {renderCardInLayout(effectiveDrawnCards[7])}
                    {renderCardInLayout(effectiveDrawnCards[6])}
                  </div>
                </div>
              </div>
            ) : spread.layoutType === 'zodiac_circle' && effectiveDrawnCards.length >= 12 ? (
              /* Custom Layout: Zodiac Circle (12 Houses) */
              <div className="py-3 space-y-3">
                <div className="text-center">
                  <span className="text-[9px] font-mono text-[#c5a059] uppercase tracking-wider bg-[#0a0a0b] px-2.5 py-0.5 rounded border border-[#c5a059]/30">
                    Der Zodiak-Kreis • 12 Häuser
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 py-2">
                  {effectiveDrawnCards.map(drawn => renderCardInLayout(drawn))}
                </div>
              </div>
            ) : (
              /* Standard Flex Arrangement */
              <div className="flex flex-wrap items-center justify-center gap-3 py-2">
                {effectiveDrawnCards.map(drawn => {
                  const isSelected = selectedCard.positionIndex === drawn.positionIndex;
                  const posTitle = getPositionTitle(spread.id, drawn.positionIndex, drawn.positionTitle);
                  const isCardReversed = !!cardsOrientation[drawn.positionIndex];
                  return (
                    <motion.div
                      key={drawn.positionIndex}
                      whileHover={{ scale: 1.04 }}
                      onClick={() => setSelectedCard(drawn)}
                      className={`relative cursor-pointer p-1 rounded-lg transition ${
                        isSelected ? 'ring-1 ring-[#c5a059] bg-[#c5a059]/10' : 'opacity-80 hover:opacity-100'
                      }`}
                    >
                      <ThothCardView
                        card={drawn.card}
                        size="sm"
                        isFlipped={true}
                        isReversed={isCardReversed}
                      />
                      <div className="mt-1 flex items-center justify-center gap-0.5">
                        {isCardReversed && <span className="text-[#e69d45] text-[9px] font-mono">↷</span>}
                        <span className="text-[9px] font-mono text-[#d4d4d8] block text-center truncate max-w-[85px]">
                          {posTitle}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: ELEMENTAL DIGNITIES */}
      {mainTab === 'elemental' && (
        <div className="animate-fade-in">
          <ElementalDignitiesView
            drawnCards={effectiveDrawnCards}
            spreadId={spread.id}
            spreadName={localizedSpreadName}
          />
        </div>
      )}

      {/* VIEW 3 OR SELECTED CARD FOCUS (Always visible when in 'cards' tab) */}
      {mainTab === 'cards' && selectedCard && (() => {
        const isCardReversed = !!cardsOrientation[selectedCard.positionIndex];
        const currentDetail = getPositionInterpretationDetail(
          selectedCard.card,
          spread.id,
          selectedCard.positionIndex,
          isCardReversed
        );
        const cardName = getCardName(selectedCard.card);
        const cardTitle = getCardThothTitle(selectedCard.card);
        const posTitle = getPositionTitle(spread.id, selectedCard.positionIndex, selectedCard.positionTitle);

        return (
          <motion.div
            key={`${selectedCard.positionIndex}_${isCardReversed}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-lg bg-[#121214] border border-[#c5a059]/40 shadow-2xl space-y-4"
          >
            {/* Header info */}
            <div className="flex items-start justify-between border-b border-[#27272a] pb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider bg-[#0a0a0b] px-2 py-0.5 rounded border border-[#c5a059]/30">
                    {t('selectedCardPosition', 'Position')} #{selectedCard.positionIndex + 1}: {posTitle}
                  </span>
                  <span className="text-[9px] font-mono text-[#f4f4f5] uppercase px-2 py-0.5 rounded bg-[#1e1e24] border border-[#3f3f46]">
                    {currentDetail.positionRole}
                  </span>
                  {/* Interactive Orientation / Rotation Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleCardOrientation(selectedCard.positionIndex)}
                    className={`inline-flex items-center gap-1 text-[9px] font-mono uppercase px-2 py-0.5 rounded border transition cursor-pointer ${
                      isCardReversed
                        ? 'bg-[#27170a] text-[#e69d45] border-[#e69d45]/50 hover:bg-[#341f0d]'
                        : 'bg-[#121214] text-[#a1a1aa] border-[#27272a] hover:text-[#f4f4f5]'
                    }`}
                    title={t('rotateCardAction', 'Karte drehen (180°)')}
                  >
                    <RotateCw className="w-2.5 h-2.5" />
                    <span>{isCardReversed ? `↷ ${t('orientationReversed', 'Umgekehrt')}` : `✦ ${t('orientationUpright', 'Aufrecht')}`}</span>
                  </button>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#f4f4f5]">
                  {cardName}
                </h3>
                <p className="text-xs text-[#a1a1aa] italic">
                  {selectedCard.card.nameEnglish} {cardTitle ? `• "${cardTitle}"` : ''}
                </p>
              </div>
              {getElementBadge(selectedCard.card.element)}
            </div>

            {/* Quick Attr Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium">
              <div className="p-2.5 rounded bg-[#0a0a0b] border border-[#27272a]">
                <span className="text-[#71717a] block text-[9px] font-mono uppercase">{t('astrologyLabel', 'Astrologie')}</span>
                <span className="text-[#d4d4d8] font-mono text-[11px] truncate block">{selectedCard.card.astrology}</span>
              </div>
              {selectedCard.card.hebrewLetter && (
                <div className="p-2.5 rounded bg-[#0a0a0b] border border-[#27272a]">
                  <span className="text-[#71717a] block text-[9px] font-mono uppercase">{t('hebrewLetterLabel', 'Hebräisch')}</span>
                  <span className="text-[#c5a059] font-mono text-[11px]">{selectedCard.card.hebrewLetter}</span>
                </div>
              )}
              <div className="p-2.5 rounded bg-[#0a0a0b] border border-[#27272a] col-span-2 sm:col-span-1">
                <span className="text-[#71717a] block text-[9px] font-mono uppercase">Arkana</span>
                <span className="text-[#a1a1aa] text-[11px]">
                  {selectedCard.card.arcana === 'major' ? t('filterMajor', 'Große Arkana') : t('filterMinor', 'Kleine Arkana')}
                </span>
              </div>
            </div>

            {/* Specialized Reversed Energy Callout Box */}
            {isCardReversed && currentDetail.reversedDynamic && (
              <div className="p-4 rounded-lg bg-[#1a1208] border border-[#e69d45]/60 text-xs space-y-2.5 animate-fade-in shadow-lg">
                <div className="flex items-center justify-between border-b border-[#e69d45]/20 pb-1.5">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#e69d45] flex items-center gap-1.5 tracking-wider">
                    <ArrowDownCircle className="w-3.5 h-3.5" />
                    {t('reversedEnergyHeading', 'Umgekehrte Energie (Kopfstand)')}
                  </span>
                  <span className="text-[9px] font-mono text-[#f4d19b] bg-[#271b0c] px-2 py-0.5 rounded border border-[#e69d45]/30">
                    Blockiert • Verzögert • Verinnerlicht
                  </span>
                </div>
                
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#e69d45] block font-semibold">
                    Herausforderung & Widerstand:
                  </span>
                  <p className="text-[#f4d19b] leading-relaxed">
                    {currentDetail.reversedDynamic.blockedEnergy}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#e69d45] block font-semibold">
                    Verinnerlichter Prozess & neue Perspektive:
                  </span>
                  <p className="text-[#f4f4f5] leading-relaxed">
                    {currentDetail.reversedDynamic.internalizedFocus}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e69d45]/20 space-y-1 bg-[#120d06]/60 p-2.5 rounded border border-[#e69d45]/30">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#e69d45] block font-bold flex items-center gap-1">
                    ✦ {t('unblockAdvice', 'Weg zur Entblockung & Lösung')}:
                  </span>
                  <p className="text-[#d4d4d8] leading-relaxed italic">
                    {currentDetail.reversedDynamic.unblockAdvice}
                  </p>
                </div>
              </div>
            )}

            {/* Sub-Tabs for this card */}
            <div className="flex border-b border-[#27272a] text-xs">
              <button
                type="button"
                onClick={() => setFocusTab('current_position')}
                className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider text-center border-b-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  focusTab === 'current_position'
                    ? 'border-[#c5a059] text-[#c5a059] font-bold bg-[#c5a059]/5'
                    : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
                }`}
              >
                <Compass className="w-3 h-3" /> {t('positionInterpretationsTab', 'Position & Deutung')}
              </button>
              <button
                type="button"
                onClick={() => setFocusTab('all_positions')}
                className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider text-center border-b-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  focusTab === 'all_positions'
                    ? 'border-[#c5a059] text-[#c5a059] font-bold bg-[#c5a059]/5'
                    : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
                }`}
              >
                <Layers className="w-3 h-3" /> {localizedSpreadName}
              </button>
              <button
                type="button"
                onClick={() => setFocusTab('symbolism')}
                className={`flex-1 py-2 font-mono text-[10px] uppercase tracking-wider text-center border-b-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  focusTab === 'symbolism'
                    ? 'border-[#c5a059] text-[#c5a059] font-bold bg-[#c5a059]/5'
                    : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
                }`}
              >
                <BookOpen className="w-3 h-3" /> {t('symbolismTab', 'Buch Thoth')}
              </button>
            </div>

            {/* Sub-Tab 1: Current Position Deep Interpretation */}
            {focusTab === 'current_position' && (
              <div className="space-y-3 text-xs leading-relaxed animate-fade-in">
                <div className="p-4 rounded-lg bg-[#18181b] border border-[#c5a059]/40 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] font-bold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#c5a059]" /> {posTitle}
                    </span>
                    <span className="text-[9px] text-[#a1a1aa] normal-case font-sans">
                      {localizedSpreadName} • Pos. #{selectedCard.positionIndex + 1}
                    </span>
                  </div>
                  <p className="text-sm font-serif leading-relaxed text-[#f4f4f5] pt-1">
                    {currentDetail.interpretation}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#c5a059] font-bold block flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#c5a059]" /> {t('cosmicAdvice', 'Ratschlag des Thoth')}:
                  </span>
                  <p className="text-[#d4d4d8] leading-relaxed italic">
                    {currentDetail.actionAdvice}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#71717a] block">
                    {t('symbolismTab', 'Esoterischer Crowley-Kontext')}:
                  </span>
                  <p className="text-[#a1a1aa] font-mono text-[11px] leading-relaxed">
                    {currentDetail.esotericContext}
                  </p>
                </div>

                {currentDetail.shadowWarning && (
                  <div className="p-3 rounded-lg bg-[#1e1215] border border-[#ff7b72]/40 text-xs space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#ff7b72] font-bold flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" /> {t('shadowSide', 'Schattenseite & Herausforderung')}:
                    </span>
                    <p className="text-[#d2a8a8] leading-relaxed">
                      {currentDetail.shadowWarning}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Sub-Tab 2: All Positions in this spread for this card */}
            {focusTab === 'all_positions' && (
              <div className="space-y-3 text-xs leading-relaxed animate-fade-in">
                <p className="text-[11px] text-[#a1a1aa] italic">
                  "{cardName}" — {localizedSpreadName}:
                </p>
                <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                  {spread.positions.map((pos) => {
                    const detail = getPositionInterpretationDetail(selectedCard.card, spread.id, pos.index, isCardReversed);
                    const isSelectedPos = pos.index === selectedCard.positionIndex;
                    const positionName = getPositionTitle(spread.id, pos.index, pos.title);
                    return (
                      <div
                        key={pos.index}
                        className={`p-3 rounded-lg border transition ${
                          isSelectedPos
                            ? 'bg-[#18181b] border-[#c5a059]/60 ring-1 ring-[#c5a059]/30'
                            : 'bg-[#0a0a0b] border-[#27272a]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-mono uppercase font-bold ${isSelectedPos ? 'text-[#c5a059]' : 'text-[#a1a1aa]'}`}>
                            #{pos.index + 1}: {positionName} {isSelectedPos && '←'}
                          </span>
                          <span className="text-[9px] font-mono text-[#71717a] px-1.5 py-0.5 rounded bg-[#121214] border border-[#27272a]">
                            {detail.positionRole}
                          </span>
                        </div>
                        <p className="text-xs text-[#d4d4d8] leading-relaxed mt-1">
                          {detail.interpretation}
                        </p>
                        <p className="text-[11px] text-[#c5a059] italic mt-1.5">
                          {t('cosmicAdvice', 'Rat')}: {detail.actionAdvice}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sub-Tab 3: Symbolism & Book of Thoth */}
            {focusTab === 'symbolism' && (
              <div className="space-y-3 text-xs leading-relaxed animate-fade-in">
                <div className="p-3.5 rounded bg-[#0a0a0b] border border-[#27272a] text-[#a1a1aa] space-y-1">
                  <span className="font-bold text-[#f4f4f5] block mb-1 text-[10px] uppercase font-mono tracking-wider">
                    {t('symbolismTab', 'Symbolik nach Aleister Crowley & Lady Frieda Harris')}:
                  </span>
                  <p className="leading-relaxed">{selectedCard.card.description}</p>
                </div>

                <div className="p-3 rounded bg-[#0a0a0b] border border-[#27272a] space-y-1">
                  <span className="font-bold text-[#c5a059] block text-[10px] uppercase font-mono tracking-wider">
                    Schlüsselbegriffe:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedCard.card.keywords.map((kw, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#18181b] border border-[#3f3f46] text-[#d4d4d8]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded bg-[#1e1215] border border-[#ff5555]/30">
                  <span className="text-[9px] uppercase tracking-wider text-[#ff7b72] font-bold block mb-1">
                    {t('shadowSide', 'Schattenseite & Herausforderung')}:
                  </span>
                  <p className="text-[#d2a8a8]">{selectedCard.card.shadowMeaning}</p>
                </div>
              </div>
            )}
          </motion.div>
        );
      })()}

      {/* VIEW 3 OR SYNTHESIS SECTION (When mainTab === 'synthesis' or shown at bottom) */}
      {(mainTab === 'synthesis' || mainTab === 'cards') && (
        <div className="space-y-6">
          {/* Gesamtsynthese / Overall Synthesis */}
          <div className="p-5 rounded-lg bg-[#121214] border border-[#27272a] space-y-3.5">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c5a059] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" /> {t('synthesisTitle', 'Gesamtsynthese der Legung')}
              </span>
              <span className="text-[10px] font-mono text-[#a1a1aa] normal-case">
                Harmonie-Index: <strong className="text-[#c5a059]">{elementalDignitiesSummary.harmonyScore}%</strong>
              </span>
            </h3>

            <div className={`grid ${synthesis.reversedCount > 0 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'} gap-2 text-center text-xs`}>
              <div className="p-2.5 rounded bg-[#0a0a0b] border border-[#27272a]">
                <span className="text-[#71717a] block text-[9px] font-mono uppercase">{t('dominantElementTitle', 'Dominanz')}</span>
                <span className="font-bold text-[#c5a059]">{getElementName(synthesis.dominantElement)}</span>
              </div>
              <div className="p-2.5 rounded bg-[#0a0a0b] border border-[#27272a]">
                <span className="text-[#71717a] block text-[9px] font-mono uppercase">{t('majorArcanaTitle', 'Große Arkana')}</span>
                <span className="font-bold text-[#d4d4d8]">{synthesis.majorCount} {t('cardsCountLabel', 'Karten')}</span>
              </div>
              <div className="p-2.5 rounded bg-[#0a0a0b] border border-[#27272a]">
                <span className="text-[#71717a] block text-[9px] font-mono uppercase">{t('filterMinor', 'Kleine Arkana')}</span>
                <span className="font-bold text-[#a1a1aa]">{synthesis.minorCount} {t('cardsCountLabel', 'Karten')}</span>
              </div>
              {synthesis.reversedCount > 0 && (
                <div className="p-2.5 rounded bg-[#1a1208] border border-[#e69d45]/40">
                  <span className="text-[#e69d45] block text-[9px] font-mono uppercase">{t('reversedCountSummary', 'Umgekehrt')}</span>
                  <span className="font-bold text-[#e69d45]">↷ {synthesis.reversedCount} {t('cardsCountLabel', 'Karten')}</span>
                </div>
              )}
            </div>

            <div className="p-3.5 rounded bg-[#0a0a0b] border border-[#27272a] text-xs text-[#d4d4d8] leading-relaxed whitespace-pre-line">
              {synthesis.summary}
            </div>

            {/* Optional AI Deep Reflection */}
            {!aiAnalysis ? (
              <button
                type="button"
                onClick={handleFetchAiDeepAnalysis}
                disabled={isLoadingAi}
                className="w-full py-2.5 px-3 rounded bg-[#1a1a1c] border border-[#c5a059]/30 text-[#c5a059] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#27272a] transition disabled:opacity-50 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{isLoadingAi ? '...' : t('spreadSelectionBadge', 'KI-Tiefenanalyse')}</span>
              </button>
            ) : (
              <div className="p-3.5 rounded bg-[#1a1a1c] border border-[#c5a059]/40 text-xs text-[#f4f4f5] space-y-1">
                <span className="font-bold text-[#c5a059] block text-[9px] uppercase font-mono tracking-widest">
                  {t('cosmicAdvice', 'KI-Reflexion')}:
                </span>
                <p className="leading-relaxed">{aiAnalysis}</p>
              </div>
            )}
          </div>

          {/* Personal Notes & Save to Journal */}
          <div className="p-4 rounded-lg bg-[#121214] border border-[#27272a] space-y-3">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" /> {t('notesLabel', 'Persönliche Notizen zu dieser Legung')}
            </h3>
            <textarea
              value={userNotes}
              onChange={e => setUserNotes(e.target.value)}
              placeholder={t('notesPlaceholder', 'Was bedeuten diese Karten für dich in diesem Moment?...')}
              rows={3}
              className="w-full p-3 rounded bg-[#0a0a0b] border border-[#27272a] text-xs text-[#f4f4f5] placeholder-[#71717a] focus:outline-none focus:border-[#c5a059]"
            />

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={handleSaveReading}
                disabled={isSaved}
                className={`flex-1 py-3 px-3 rounded text-xs font-mono uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition cursor-pointer ${
                  isSaved
                    ? 'bg-[#12281a] text-[#7ee787] border border-[#7ee787]/40'
                    : 'bg-[#c5a059] text-[#0a0a0b] hover:bg-[#d8b46e]'
                }`}
              >
                {isSaved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                <span>{isSaved ? t('savedToJournal', '✓ Im Tagebuch gespeichert') : t('saveToJournalBtn', 'Im Tagebuch speichern')}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  exportTarotReadingToPDF({
                    spreadName: localizedSpreadName,
                    question,
                    timestamp: Date.now(),
                    drawnCards: effectiveDrawnCards,
                    summaryText: synthesis.summary,
                    userNotes,
                    dominantElement: synthesis.dominantElement,
                    harmonyScore: elementalDignitiesSummary.harmonyScore,
                    aiAnalysis
                  });
                }}
                className="py-3 px-4 rounded bg-[#1a1a1c] border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#27272a] hover:border-[#c5a059] text-xs font-mono uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
              >
                <FileDown className="w-4 h-4 text-[#c5a059]" />
                <span>PDF Exportieren</span>
              </button>

              {isSaved && (
                <button
                  type="button"
                  onClick={onGoToJournal}
                  className="py-3 px-4 rounded bg-[#1a1a1c] border border-[#27272a] text-[#d4d4d8] text-xs font-mono uppercase tracking-wider hover:border-[#c5a059]/40 cursor-pointer"
                >
                  {t('viewJournalBtn', 'Tagebuch öffnen')}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* New Reading Button */}
      <div>
        <button
          type="button"
          onClick={onNewReading}
          className="w-full py-3.5 rounded border border-[#27272a] bg-[#121214] text-[#d4d4d8] font-mono text-xs uppercase tracking-wider hover:border-[#c5a059]/40 hover:bg-[#1a1a1c] transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>{t('newReadingBtn', 'Neue Tarot Legung starten')}</span>
        </button>
      </div>
    </div>
  );
};
