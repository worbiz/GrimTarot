import React, { useState, useEffect } from 'react';
import { ThothCard, SpreadId } from '../types/tarot';
import { Sparkles, Compass, Moon, Flame, Shield, X, Layers, Sun, Columns3, Heart, Info, RotateCw, AlertCircle, ArrowDownCircle } from 'lucide-react';
import { CARD_BACK_IMAGE, getCardArtwork } from '../data/cardArtworks';
import { getPositionInterpretationDetail, getReversedCardDynamic } from '../data/interpretations';
import { SPREADS } from '../data/spreads';
import { useLanguage } from '../i18n/LanguageContext';

interface ThothCardViewProps {
  card: ThothCard;
  isFlipped?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDetailsOnTap?: boolean;
  onCardClick?: () => void;
  positionTitle?: string;
  isReversed?: boolean;
  className?: string;
}

export const ThothCardView: React.FC<ThothCardViewProps> = ({
  card,
  isFlipped = true,
  size = 'md',
  showDetailsOnTap = false,
  onCardClick,
  positionTitle,
  isReversed = false,
  className = ''
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTab, setModalTab] = useState<'spreads' | 'symbolism'>('spreads');
  const [modalIsReversed, setModalIsReversed] = useState<boolean>(isReversed);
  const [selectedSpreadId, setSelectedSpreadId] = useState<SpreadId>('tageskarte');

  useEffect(() => {
    setModalIsReversed(isReversed);
  }, [isReversed]);
  const {
    t,
    getCardName,
    getCardThothTitle,
    getElementName,
    getSpreadName,
    getPositionTitle
  } = useLanguage();

  // Dimension scaling
  const sizeConfig = {
    sm: 'w-24 h-40 text-[10px]',
    md: 'w-36 h-60 text-xs',
    lg: 'w-48 h-80 text-sm',
    xl: 'w-64 h-96 text-base'
  };

  const getSuitIcon = (suit?: string, element?: string) => {
    if (element === 'Feuer' || suit === 'wands') return <Flame className="w-3 h-3 text-[#e69d45]" />;
    if (element === 'Wasser' || suit === 'cups') return <Moon className="w-3 h-3 text-[#58a6ff]" />;
    if (element === 'Luft' || suit === 'swords') return <Compass className="w-3 h-3 text-[#79c0ff]" />;
    if (element === 'Erde' || suit === 'disks') return <Shield className="w-3 h-3 text-[#7ee787]" />;
    return <Sparkles className="w-3 h-3 text-[#c5a059]" />;
  };

  const cardImage = card.imageUrl || getCardArtwork(card.id, card.suit);
  const cardLocalizedName = getCardName(card);
  const cardLocalizedThothTitle = getCardThothTitle(card);
  const cardLocalizedElement = getElementName(card.element);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    } else if (showDetailsOnTap) {
      setShowModal(true);
    }
  };

  return (
    <>
      <div
        className={`relative cursor-pointer select-none perspective-1000 ${sizeConfig[size]} ${className}`}
        onClick={handleCardClick}
      >
        <div
          className={`w-full h-full duration-700 transform-style-3d transition-transform ${
            isFlipped ? '' : 'rotate-y-180'
          }`}
        >
          {/* ==================================================== */}
          {/* FRONT OF THE CARD (Grim Thoth Elegant Dark Style)     */}
          {/* ==================================================== */}
          <div
            className={`absolute inset-0 rounded-lg border border-[#c5a059]/40 bg-[#121214] overflow-hidden flex flex-col justify-between p-1.5 shadow-[0_4px_25px_rgba(0,0,0,0.8)] backface-hidden transition-transform duration-500 ${
              isReversed ? 'rotate-180' : ''
            }`}
          >
            {/* Subtle Grim Background Texture */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_#c5a059_0%,_transparent_70%)]" />

            {/* Top Bar: Card Number & Astrological Attribution */}
            <div className="relative z-10 flex items-center justify-between px-1 py-0.5 border-b border-[#27272a] text-[9px] font-mono text-[#d4d4d8]">
              <div className="flex items-center gap-1">
                <span className="text-[#c5a059] font-serif font-bold">{card.number}</span>
                {card.hebrewLetter && (
                  <span className="text-[#a1a1aa] text-[9px]">{card.hebrewLetter.split(' ')[0]}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[#a1a1aa] truncate max-w-[70px]">
                {getSuitIcon(card.suit, card.element)}
                <span className="truncate">{card.astrology}</span>
              </div>
            </div>

            {/* Middle Artwork Section */}
            <div className="relative z-10 flex-1 my-1 rounded bg-[#0a0a0b] border border-[#27272a] overflow-hidden flex flex-col items-center justify-center">
              {cardImage ? (
                /* Bespoke AI Generated Grim Thoth Artwork */
                <div className="relative w-full h-full">
                  <img
                    src={cardImage}
                    alt={cardLocalizedName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-110 brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-black/30 pointer-events-none" />
                </div>
              ) : (
                /* Somber Occult Synthetic Cubism Geometric Motif Engine */
                <div className="relative w-full h-full flex flex-col items-center justify-center p-2 text-center bg-[radial-gradient(circle_at_center,_#1c1c1f_0%,_#0a0a0b_100%)]">
                  {/* Subtle sacred geometry lines */}
                  <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#c5a059,#c5a059_1px,transparent_1px,transparent_8px)] pointer-events-none" />
                  <div className="w-10 h-10 rounded-full border border-[#c5a059]/30 flex items-center justify-center mb-1 bg-[#121214]/60">
                    <span className="text-base font-serif italic text-[#c5a059]/70">{card.number}</span>
                  </div>
                  {cardLocalizedThothTitle && (
                    <span className="text-[8px] uppercase tracking-widest text-[#c5a059] block font-semibold truncate max-w-full px-1">
                      "{cardLocalizedThothTitle}"
                    </span>
                  )}
                  <span className="text-[10px] font-serif uppercase tracking-wider text-[#f4f4f5] font-bold line-clamp-1">
                    {cardLocalizedName}
                  </span>
                </div>
              )}

              {/* Overlayed Card Title on Bottom of Image */}
              <div className="absolute bottom-0 inset-x-0 bg-[#0a0a0b]/85 backdrop-blur-xs px-1.5 py-0.5 text-center border-t border-[#27272a]">
                {cardLocalizedThothTitle && (
                  <div className="text-[8px] uppercase tracking-widest text-[#c5a059] truncate font-medium">
                    "{cardLocalizedThothTitle}"
                  </div>
                )}
                <div className="text-[9px] font-serif font-bold text-[#f4f4f5] tracking-wide truncate">
                  {cardLocalizedName}
                </div>
              </div>
            </div>

            {/* Bottom Bar: Element / Position Label */}
            <div className="relative z-10 px-1 pt-0.5 border-t border-[#27272a] text-center">
              {positionTitle ? (
                <span className="text-[8px] uppercase tracking-wider text-[#c5a059] font-mono block truncate">
                  {positionTitle}
                </span>
              ) : (
                <div className="flex items-center justify-between text-[8px] text-[#71717a] font-mono">
                  <span className="uppercase">{cardLocalizedElement}</span>
                  <span className="text-[#c5a059]/60">THOTH</span>
                </div>
              )}
            </div>
          </div>

          {/* ==================================================== */}
          {/* BACK OF THE CARD (Grim Thoth Occult Geometric Back)  */}
          {/* ==================================================== */}
          <div className="absolute inset-0 rounded-lg border border-[#c5a059]/50 bg-[#0a0a0b] p-1.5 flex flex-col items-center justify-center overflow-hidden rotate-y-180 shadow-[0_4px_30px_rgba(0,0,0,0.9)] backface-hidden">
            <img
              src={CARD_BACK_IMAGE}
              alt="Grim Tarot Card Back"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded filter contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-[#0a0a0b]/20 pointer-events-none rounded" />
          </div>
        </div>

        {/* Reversed Indicator Badge on Card Thumbnail */}
        {isReversed && isFlipped && (
          <div className="absolute -top-1.5 -right-1 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-0.5 px-1 py-0.2 text-[8px] font-mono font-bold uppercase bg-[#18181b]/95 text-[#e69d45] border border-[#e69d45]/70 rounded shadow-lg backdrop-blur-xs">
              ↷
            </span>
          </div>
        )}
      </div>

      {/* ==================================================== */}
      {/* DETAILED CARD MODAL DIALOG                          */}
      {/* ==================================================== */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-[#c5a059]/40 bg-[#121214] text-[#d4d4d8] p-6 shadow-2xl space-y-5"
            onClick={e => e.stopPropagation()}
          >
            {/* Header with Title and Close Button */}
            <div className="flex items-start justify-between border-b border-[#27272a] pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-[0.2em]">
                  Atu / Thoth #{card.number}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#f4f4f5] mt-0.5">{cardLocalizedName}</h3>
                <p className="text-xs text-[#a1a1aa] italic">
                  {card.nameEnglish} {cardLocalizedThothTitle ? `• "${cardLocalizedThothTitle}"` : ''}
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg border border-[#27272a] bg-[#1a1a1c] text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-[#c5a059]/40 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Orientation Toggle Bar in Modal */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0a0a0b] border border-[#27272a]">
              <span className="text-[10px] font-mono text-[#71717a] uppercase tracking-wider">
                Orientierung / Kopfstand:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setModalIsReversed(false)}
                  className={`px-3 py-1 rounded text-[11px] font-mono uppercase transition cursor-pointer ${
                    !modalIsReversed
                      ? 'bg-[#c5a059] text-[#0a0a0b] font-bold shadow'
                      : 'bg-[#18181b] text-[#a1a1aa] hover:text-[#f4f4f5] border border-[#27272a]'
                  }`}
                >
                  ✦ {t('orientationUpright', 'Aufrecht')}
                </button>
                <button
                  type="button"
                  onClick={() => setModalIsReversed(true)}
                  className={`px-3 py-1 rounded text-[11px] font-mono uppercase transition flex items-center gap-1 cursor-pointer ${
                    modalIsReversed
                      ? 'bg-[#e69d45] text-[#0a0a0b] font-bold shadow'
                      : 'bg-[#18181b] text-[#a1a1aa] hover:text-[#f4f4f5] border border-[#27272a]'
                  }`}
                >
                  <RotateCw className="w-3 h-3" /> ↷ {t('orientationReversed', 'Umgekehrt')}
                </button>
              </div>
            </div>

            {/* Reversed Dynamic Callout if Reversed */}
            {modalIsReversed && (() => {
              const rev = getReversedCardDynamic(card, selectedSpreadId, 0);
              return (
                <div className="p-3.5 rounded-lg bg-[#1a1208] border border-[#e69d45]/50 text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center gap-1.5 text-[#e69d45] font-mono text-[10px] uppercase font-bold tracking-wider">
                    <ArrowDownCircle className="w-3.5 h-3.5" />
                    {t('reversedEnergyHeading', 'Umgekehrte Energie (Kopfstand)')}
                  </div>
                  <p className="text-[#f4d19b] leading-relaxed">
                    {rev.blockedEnergy} {rev.internalizedFocus}
                  </p>
                  <div className="pt-1.5 border-t border-[#e69d45]/20 text-[#d4d4d8] space-y-1">
                    <span className="text-[10px] font-mono text-[#e69d45] block font-semibold">
                      ✦ {t('unblockAdvice', 'Weg zur Klärung & Entblockung')}:
                    </span>
                    <p className="italic text-[#f4f4f5]">{rev.unblockAdvice}</p>
                  </div>
                </div>
              );
            })()}

            {/* Card Visual Hero in Modal */}
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg bg-[#0a0a0b] border border-[#27272a]">
              <div className={`w-32 h-52 flex-shrink-0 rounded-lg overflow-hidden border border-[#c5a059]/40 shadow-lg transition-transform duration-500 ${modalIsReversed ? 'rotate-180' : ''}`}>
                {cardImage ? (
                  <img
                    src={cardImage}
                    alt={cardLocalizedName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-[#121214]">
                    <span className="text-3xl font-serif text-[#c5a059]/50">{card.number}</span>
                    <span className="text-xs font-serif text-[#f4f4f5] mt-2">{cardLocalizedName}</span>
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-[#121214] border border-[#27272a]">
                    <span className="text-[9px] text-[#71717a] block uppercase font-mono">
                      {t('elementLabel', 'Element')}
                    </span>
                    <span className="font-semibold text-[#c5a059] flex items-center gap-1">
                      {getSuitIcon(card.suit, card.element)} {cardLocalizedElement}
                    </span>
                  </div>
                  <div className="p-2 rounded bg-[#121214] border border-[#27272a]">
                    <span className="text-[9px] text-[#71717a] block uppercase font-mono">
                      {t('astrologyLabel', 'Astrologie')}
                    </span>
                    <span className="font-semibold text-[#d4d4d8]">{card.astrology}</span>
                  </div>
                </div>

                {card.hebrewLetter && (
                  <div className="p-2 rounded bg-[#121214] border border-[#27272a]">
                    <span className="text-[9px] text-[#71717a] block uppercase font-mono">
                      {t('hebrewLetterLabel', 'Hebräischer Pfad')}
                    </span>
                    <span className="font-semibold text-[#c5a059]">{card.hebrewLetter}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 pt-1">
                  {card.keywords.map((kw, i) => (
                    <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-[#1a1a1c] border border-[#27272a] text-[#a1a1aa]">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Tabs: Legesystem-Deutungen vs. Basis-Symbolik */}
            <div className="flex border-b border-[#27272a] text-xs">
              <button
                onClick={() => setModalTab('spreads')}
                className={`flex-1 py-2 font-mono text-[11px] uppercase tracking-wider text-center border-b-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  modalTab === 'spreads'
                    ? 'border-[#c5a059] text-[#c5a059] font-bold bg-[#c5a059]/5'
                    : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" /> {t('positionInterpretationsTab', '5 Legesysteme')}
              </button>
              <button
                onClick={() => setModalTab('symbolism')}
                className={`flex-1 py-2 font-mono text-[11px] uppercase tracking-wider text-center border-b-2 transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  modalTab === 'symbolism'
                    ? 'border-[#c5a059] text-[#c5a059] font-bold bg-[#c5a059]/5'
                    : 'border-transparent text-[#71717a] hover:text-[#d4d4d8]'
                }`}
              >
                <Info className="w-3.5 h-3.5" /> {t('symbolismTab', 'Crowley-Symbolik')}
              </button>
            </div>

            {/* TAB 1: SPREAD INTERPRETATIONS DATABASE */}
            {modalTab === 'spreads' && (
              <div className="space-y-4 text-xs leading-relaxed animate-fade-in">
                {/* Horizontal Spread Selector */}
                <div className="flex gap-1.5 overflow-x-auto pb-1 text-[10px] font-mono scrollbar-none">
                  {SPREADS.map(s => {
                    const isSelected = selectedSpreadId === s.id;
                    const spreadName = getSpreadName(s.id, s.name);
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSpreadId(s.id)}
                        className={`px-2.5 py-1.5 rounded border whitespace-nowrap transition uppercase flex items-center gap-1 cursor-pointer ${
                          isSelected
                            ? 'bg-[#c5a059] text-[#0a0a0b] font-bold border-[#c5a059]'
                            : 'bg-[#0a0a0b] text-[#a1a1aa] border-[#27272a] hover:text-[#f4f4f5]'
                        }`}
                      >
                        {s.id === 'tageskarte' && <Sun className="w-3 h-3" />}
                        {s.id === 'drei_karten' && <Columns3 className="w-3 h-3" />}
                        {s.id === 'vier_karten' && <Compass className="w-3 h-3" />}
                        {s.id === 'sieben_karten' && <Sparkles className="w-3 h-3" />}
                        {s.id === 'liebes_beziehung' && <Heart className="w-3 h-3" />}
                        <span>{spreadName}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Positions list for the selected spread */}
                {(() => {
                  const currentSpread = SPREADS.find(s => s.id === selectedSpreadId) || SPREADS[0];
                  const spreadName = getSpreadName(currentSpread.id, currentSpread.name);
                  return (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#c5a059] border-b border-[#27272a] pb-1.5">
                        <span className="font-bold">{spreadName} ({currentSpread.cardCount} {t('cardsCountLabel', 'Karten')})</span>
                        <span className="text-[#71717a]">{currentSpread.subtitle}</span>
                      </div>

                      <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                        {currentSpread.positions.map((pos) => {
                          const posTitle = getPositionTitle(currentSpread.id, pos.index, pos.title);
                          const posDetail = getPositionInterpretationDetail(card, currentSpread.id, pos.index, modalIsReversed);
                          return (
                            <div key={pos.index} className="p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-[#f4f4f5] text-[11px] font-serif">
                                  #{pos.index + 1}: {posTitle}
                                </span>
                                <span className="text-[9px] font-mono text-[#c5a059] px-2 py-0.5 rounded bg-[#18181b] border border-[#c5a059]/30 uppercase">
                                  {posDetail.positionRole}
                                </span>
                              </div>
                              <p className="text-xs text-[#d4d4d8] leading-relaxed">
                                {posDetail.interpretation}
                              </p>
                              <div className="pt-1 flex items-center justify-between text-[10px] text-[#c5a059] italic border-t border-[#1a1a1c]">
                                <span>{t('cosmicAdvice', 'Rat')}: {posDetail.actionAdvice}</span>
                              </div>
                              {posDetail.shadowWarning && (
                                <p className="text-[10px] text-[#ff7b72] bg-[#1e1215] px-2 py-1 rounded border border-[#ff7b72]/20">
                                  {t('shadowSide', 'Achtung')}: {posDetail.shadowWarning}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* TAB 2: GENERAL SYMBOLISM & CROWLEY */}
            {modalTab === 'symbolism' && (
              <div className="space-y-4 text-xs leading-relaxed animate-fade-in">
                <div>
                  <h4 className="text-[10px] uppercase text-[#71717a] tracking-wider mb-1.5 font-bold flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-[#c5a059]" /> {t('symbolismTab', 'Symbolik nach Aleister Crowley & Frieda Harris')}
                  </h4>
                  <p className="p-3.5 rounded bg-[#0a0a0b] border border-[#27272a] text-[#a1a1aa] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase text-[#71717a] tracking-wider mb-1.5 font-bold">
                    {t('generalMeaning', 'Allgemeine Bedeutung')}
                  </h4>
                  <div className="p-3.5 rounded bg-[#1a1a1c] border border-[#c5a059]/30 space-y-2">
                    <p className="text-[#f4f4f5]">{card.uprightMeaning.general}</p>
                    <p className="text-[#c5a059] italic">{t('cosmicAdvice', 'Ratschlag')}: {card.uprightMeaning.advice}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-3 rounded bg-[#0a0a0b] border border-[#27272a]">
                    <span className="text-[9px] uppercase tracking-wider text-[#e69d45] font-bold block mb-1">
                      {t('loveMeaning', 'Liebe & Partnerschaft')}
                    </span>
                    <p className="text-[#a1a1aa]">{card.uprightMeaning.love}</p>
                  </div>
                  <div className="p-3 rounded bg-[#0a0a0b] border border-[#27272a]">
                    <span className="text-[9px] uppercase tracking-wider text-[#58a6ff] font-bold block mb-1">
                      {t('careerMeaning', 'Beruf & Schaffen')}
                    </span>
                    <p className="text-[#a1a1aa]">{card.uprightMeaning.career}</p>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#1e1215] border border-[#ff5555]/30">
                  <span className="text-[9px] uppercase tracking-wider text-[#ff7b72] font-bold block mb-1">
                    {t('shadowSide', 'Schattenseite & Elementare Würde')}
                  </span>
                  <p className="text-[#d2a8a8]">{card.shadowMeaning}</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded border border-[#c5a059] text-[#c5a059] text-xs uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#0a0a0b] transition-colors font-bold cursor-pointer"
            >
              {t('closeModal', 'Schließen')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
