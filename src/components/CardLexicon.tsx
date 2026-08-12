import React, { useState } from 'react';
import { THOTH_DECK } from '../data/thothDeck';
import { ThothCardView } from './ThothCardView';
import { Search, Filter, BookOpen } from 'lucide-react';

export const CardLexicon: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArcana, setSelectedArcana] = useState<'all' | 'major' | 'minor'>('all');
  const [selectedSuit, setSelectedSuit] = useState<'all' | 'wands' | 'cups' | 'swords' | 'disks'>('all');

  const filteredCards = THOTH_DECK.filter(card => {
    // Search match
    const matchesSearch =
      card.nameGerman.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.nameEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (card.thothTitle && card.thothTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      card.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
      card.astrology.toLowerCase().includes(searchQuery.toLowerCase());

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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" /> Enzyklopädie
        </div>
        <h2 className="text-2xl font-serif font-bold text-amber-100">Aleister Crowley Thoth Kartendeck</h2>
        <p className="text-xs text-zinc-400 max-w-sm mx-auto">
          Durchsuche alle 78 Karten inklusive Crowley-Symbolik, Atu-Nummern, Astrologie & Hebräischen Buchstaben.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Suche nach Name, Crowley-Titel (z.B. 'Tugend'), Widder..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-zinc-700 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400"
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
            className={`px-3 py-1.5 rounded-lg border transition ${
              selectedArcana === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                : 'bg-slate-900 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            Alle 78 Karten
          </button>
          <button
            onClick={() => {
              setSelectedArcana('major');
              setSelectedSuit('all');
            }}
            className={`px-3 py-1.5 rounded-lg border transition ${
              selectedArcana === 'major'
                ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                : 'bg-slate-900 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            Große Arkana (22 Atu)
          </button>
          <button
            onClick={() => setSelectedArcana('minor')}
            className={`px-3 py-1.5 rounded-lg border transition ${
              selectedArcana === 'minor'
                ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                : 'bg-slate-900 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            Kleine Arkana (56)
          </button>
        </div>

        {/* Suits Filter if Minor Arcana is active or 'all' */}
        {selectedArcana !== 'major' && (
          <div className="flex gap-2 text-xs overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedSuit('all')}
              className={`px-2.5 py-1 rounded-md border text-[11px] ${
                selectedSuit === 'all'
                  ? 'bg-purple-900 text-purple-200 border-purple-500'
                  : 'bg-slate-900/60 text-zinc-400 border-zinc-800'
              }`}
            >
              Alle Reihen
            </button>
            <button
              onClick={() => setSelectedSuit('wands')}
              className={`px-2.5 py-1 rounded-md border text-[11px] ${
                selectedSuit === 'wands'
                  ? 'bg-red-950 text-red-300 border-red-500'
                  : 'bg-slate-900/60 text-zinc-400 border-zinc-800'
              }`}
            >
              Stäbe (Feuer)
            </button>
            <button
              onClick={() => setSelectedSuit('cups')}
              className={`px-2.5 py-1 rounded-md border text-[11px] ${
                selectedSuit === 'cups'
                  ? 'bg-sky-950 text-sky-300 border-sky-500'
                  : 'bg-slate-900/60 text-zinc-400 border-zinc-800'
              }`}
            >
              Kelche (Wasser)
            </button>
            <button
              onClick={() => setSelectedSuit('swords')}
              className={`px-2.5 py-1 rounded-md border text-[11px] ${
                selectedSuit === 'swords'
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500'
                  : 'bg-slate-900/60 text-zinc-400 border-zinc-800'
              }`}
            >
              Schwerter (Luft)
            </button>
            <button
              onClick={() => setSelectedSuit('disks')}
              className={`px-2.5 py-1 rounded-md border text-[11px] ${
                selectedSuit === 'disks'
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                  : 'bg-slate-900/60 text-zinc-400 border-zinc-800'
              }`}
            >
              Scheiben (Erde)
            </button>
          </div>
        )}
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2 font-mono">
        <span>Gefundene Karten: {filteredCards.length}</span>
        <span>Tippe auf eine Karte für Vollbild-Symbolik</span>
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
        <div className="p-8 text-center text-zinc-400 text-xs bg-slate-900 rounded-2xl border border-zinc-800">
          Keine Tarot-Karte mit deinen Filtereinstellungen gefunden.
        </div>
      )}
    </div>
  );
};
