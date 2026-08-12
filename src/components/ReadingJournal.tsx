import React, { useState, useEffect } from 'react';
import { TarotReading, DrawnCard } from '../types/tarot';
import { getSavedReadings, deleteSavedReading } from '../utils/synthesisEngine';
import { ThothCardView } from './ThothCardView';
import { History, Trash2, Calendar, Search, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

export const ReadingJournal: React.FC = () => {
  const [readings, setReadings] = useState<TarotReading[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setReadings(getSavedReadings());
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Möchtest du diese Legung wirklich aus deinem Tagebuch löschen?')) {
      const updated = deleteSavedReading(id);
      setReadings(updated);
    }
  };

  const filteredReadings = readings.filter(r => {
    const qMatch = r.question ? r.question.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const sMatch = r.spreadName.toLowerCase().includes(searchQuery.toLowerCase());
    const cardMatch = r.drawnCards.some(
      d =>
        d.card.nameGerman.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (d.card.thothTitle && d.card.thothTitle.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    const notesMatch = r.notes ? r.notes.toLowerCase().includes(searchQuery.toLowerCase()) : false;

    return searchQuery === '' || qMatch || sMatch || cardMatch || notesMatch;
  });

  return (
    <div className="space-y-6 pb-28 px-4">
      {/* Header */}
      <div className="text-center pt-2 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
          <History className="w-3.5 h-3.5" /> Offline-Speicher
        </div>
        <h2 className="text-2xl font-serif font-bold text-amber-100">Dein Tarot Tagebuch</h2>
        <p className="text-xs text-zinc-400 max-w-sm mx-auto">
          Alle von dir gespeicherten Legungen und Notizen bleiben lokal auf deinem Gerät erhalten.
        </p>
      </div>

      {/* Search Input */}
      {readings.length > 0 && (
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tagebuch durchsuchen (Frage, Karte, Datum, Notiz)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-zinc-700 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400"
          />
        </div>
      )}

      {/* Saved Readings List */}
      <div className="space-y-4">
        {filteredReadings.map(reading => {
          const isExpanded = expandedId === reading.id;
          const formattedDate = new Date(reading.timestamp).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <div
              key={reading.id}
              onClick={() => setExpandedId(isExpanded ? null : reading.id)}
              className="cursor-pointer rounded-2xl bg-slate-900 border border-amber-500/20 hover:border-amber-500/40 p-4 shadow-lg transition space-y-3"
            >
              {/* Reading Card Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-400" /> {formattedDate}
                  </span>
                  <h3 className="font-serif font-bold text-base text-amber-100 mt-0.5">{reading.spreadName}</h3>
                  {reading.question && (
                    <p className="text-xs text-purple-300 italic mt-0.5">"{reading.question}"</p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={e => handleDelete(reading.id, e)}
                    className="p-2 rounded-lg bg-black/40 text-zinc-400 hover:text-red-400 hover:bg-red-950/40 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-amber-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  )}
                </div>
              </div>

              {/* Cards Mini Thumbnails Row */}
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {reading.drawnCards.map((drawn, idx) => (
                  <div key={idx} className="flex-shrink-0 text-center">
                    <ThothCardView card={drawn.card} size="sm" isFlipped={true} />
                    <span className="text-[9px] text-zinc-400 font-mono block mt-0.5 truncate max-w-[75px]">
                      {drawn.card.nameGerman}
                    </span>
                  </div>
                ))}
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="pt-3 border-t border-zinc-800 space-y-3 text-xs text-zinc-300">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                    <span className="font-bold text-amber-300 block mb-1">Synthese & Elemente:</span>
                    <p className="whitespace-pre-line leading-relaxed">{reading.overallSynthesis.summary}</p>
                  </div>

                  {reading.notes && (
                    <div className="p-3 rounded-xl bg-black/50 border border-amber-500/20">
                      <span className="font-bold text-amber-400 block mb-1 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> Deine persönlichen Notizen:
                      </span>
                      <p className="text-zinc-200 italic">{reading.notes}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {readings.length === 0 && (
          <div className="p-10 text-center text-zinc-400 space-y-2 bg-slate-900 rounded-2xl border border-zinc-800">
            <History className="w-8 h-8 text-amber-400/60 mx-auto" />
            <h4 className="font-serif font-bold text-amber-200">Noch keine Legungen gespeichert</h4>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto">
              Führe eine Tarot-Legung durch und klicke auf "Im Tagebuch speichern", um deine persönlichen Legungen hier abzulegen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
