import React, { useState } from 'react';
import { THOTH_DECK } from '../data/thothDeck';
import { ThothCardView } from './ThothCardView';
import { Search, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const CardLexicon: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArcana, setSelectedArcana] = useState<'all' | 'major' | 'minor'>('all');
  const [selectedSuit, setSelectedSuit] = useState<'all' | 'wands' | 'cups' | 'swords' | 'disks'>('all');
  const { t, getCardName, getCardThothTitle } = useLanguage();

  const filteredCards = THOTH_DECK.filter(card => {
    const locName = getCardName(card).toLowerCase();
    const locTitle = (getCardThothTitle(card) || '').toLowerCase();
    const query = searchQuery.toLowerCase().trim();

    // Search match across both original and localized fields
    const matchesSearch =
      query === '' ||
      locName.includes(query) ||
      locTitle.includes(query) ||
      card.nameGerman.toLowerCase().includes(query) ||
      card.nameEnglish.toLowerCase().includes(query) ||
      (card.thothTitle && card.thothTitle.toLowerCase().includes(query)) ||
      card.keywords.some(k => k.toLowerCase().includes(query)) ||
      card.astrology.toLowerCase().includes(query);

    // Arcana match
    const matchesArcana = selectedArcana === 'all' || card.arcana === selectedArcana;

    // Suit match
    const matchesSuit = selectedSuit === 'all' || card.suit === selectedSuit;

    return matchesSearch && matchesArcana && matchesSuit;
  });

  return (
    <div className="space-y-6 pb-28 px-4">
      {/* Header */}
      <div className="text-center pt-2 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#121214] border border-[#c5a059]/30 text-[#c5a059] text-[10px] font-mono uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5" /> {t('lexiconBadge', 'Enzyklopädie')}
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#f4f4f5] pt-1">
          {t('lexiconTitle', 'Aleister Crowley Thoth Kartendeck')}
        </h2>
        <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto leading-relaxed">
          {t('lexiconSubtitle', 'Alle 78 Karten mit tiefgründigen Deutungen für alle 5 Legesysteme, Crowley-Symbolik & Astrologie.')}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={t('searchPlaceholder', 'Suche nach Name, Crowley-Titel (z.B. Tugend), Widder...')}
          className="w-full pl-10 pr-4 py-2.5 rounded bg-[#121214] border border-[#27272a] text-xs text-[#f4f4f5] placeholder-[#71717a] focus:outline-none focus:border-[#c5a059] transition font-sans"
        />
      </div>

      {/* Filters */}
      <div className="space-y-2">
        {/* Arcana Filter */}
        <div className="flex gap-2 text-xs overflow-x-auto pb-1">
          <button
            onClick={() => {
              setSelectedArcana('all');
              setSelectedSuit('all');
            }}
            className={`px-3 py-1.5 rounded border text-[11px] font-mono uppercase transition cursor-pointer ${
              selectedArcana === 'all'
                ? 'bg-[#c5a059] text-[#0a0a0b] font-bold border-[#c5a059]'
                : 'bg-[#121214] text-[#71717a] border-[#27272a] hover:text-[#d4d4d8]'
            }`}
          >
            {t('filterAll', 'Alle 78 Karten')}
          </button>
          <button
            onClick={() => {
              setSelectedArcana('major');
              setSelectedSuit('all');
            }}
            className={`px-3 py-1.5 rounded border text-[11px] font-mono uppercase transition cursor-pointer ${
              selectedArcana === 'major'
                ? 'bg-[#c5a059] text-[#0a0a0b] font-bold border-[#c5a059]'
                : 'bg-[#121214] text-[#71717a] border-[#27272a] hover:text-[#d4d4d8]'
            }`}
          >
            {t('filterMajor', 'Große Arkana (Atu)')}
          </button>
          <button
            onClick={() => setSelectedArcana('minor')}
            className={`px-3 py-1.5 rounded border text-[11px] font-mono uppercase transition cursor-pointer ${
              selectedArcana === 'minor'
                ? 'bg-[#c5a059] text-[#0a0a0b] font-bold border-[#c5a059]'
                : 'bg-[#121214] text-[#71717a] border-[#27272a] hover:text-[#d4d4d8]'
            }`}
          >
            {t('filterMinor', 'Kleine Arkana')}
          </button>
        </div>

        {/* Suits Filter if Minor Arcana is active or 'all' */}
        {selectedArcana !== 'major' && (
          <div className="flex gap-2 text-xs overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedSuit('all')}
              className={`px-2.5 py-1 rounded border text-[10px] font-mono uppercase cursor-pointer ${
                selectedSuit === 'all'
                  ? 'bg-[#27272a] text-[#f4f4f5] border-[#c5a059]/40'
                  : 'bg-[#121214] text-[#71717a] border-[#27272a]'
              }`}
            >
              {t('filterAll', 'Alle')}
            </button>
            <button
              onClick={() => setSelectedSuit('wands')}
              className={`px-2.5 py-1 rounded border text-[10px] font-mono uppercase cursor-pointer ${
                selectedSuit === 'wands'
                  ? 'bg-[#1e1212] text-[#e69d45] border-[#e69d45]/50'
                  : 'bg-[#121214] text-[#71717a] border-[#27272a]'
              }`}
            >
              {t('filterWands', 'Stäbe (Feuer)')}
            </button>
            <button
              onClick={() => setSelectedSuit('cups')}
              className={`px-2.5 py-1 rounded border text-[10px] font-mono uppercase cursor-pointer ${
                selectedSuit === 'cups'
                  ? 'bg-[#0f172a] text-[#58a6ff] border-[#58a6ff]/50'
                  : 'bg-[#121214] text-[#71717a] border-[#27272a]'
              }`}
            >
              {t('filterCups', 'Kelche (Wasser)')}
            </button>
            <button
              onClick={() => setSelectedSuit('swords')}
              className={`px-2.5 py-1 rounded border text-[10px] font-mono uppercase cursor-pointer ${
                selectedSuit === 'swords'
                  ? 'bg-[#0c1a24] text-[#79c0ff] border-[#79c0ff]/50'
                  : 'bg-[#121214] text-[#71717a] border-[#27272a]'
              }`}
            >
              {t('filterSwords', 'Schwerter (Luft)')}
            </button>
            <button
              onClick={() => setSelectedSuit('disks')}
              className={`px-2.5 py-1 rounded border text-[10px] font-mono uppercase cursor-pointer ${
                selectedSuit === 'disks'
                  ? 'bg-[#0e1e17] text-[#7ee787] border-[#7ee787]/50'
                  : 'bg-[#121214] text-[#71717a] border-[#27272a]'
              }`}
            >
              {t('filterDisks', 'Scheiben (Erde)')}
            </button>
          </div>
        )}
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-[11px] text-[#71717a] border-b border-[#27272a] pb-2 font-mono">
        <span>{t('cardsFoundCount', 'Gefundene Karten')}: {filteredCards.length}</span>
        <span>{t('tapCardDetailsHint', 'Tippe für Details')}</span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filteredCards.map(card => (
          <div key={card.id} className="flex justify-center">
            <ThothCardView card={card} size="md" isFlipped={true} showDetailsOnTap={true} />
          </div>
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="p-8 text-center text-[#71717a] text-xs bg-[#121214] rounded-lg border border-[#27272a]">
          {t('noCardsFound', 'Keine Tarot-Karte mit deinen Filtereinstellungen gefunden.')}
        </div>
      )}
    </div>
  );
};
