import React, { useState, useEffect } from 'react';
import { TarotReading } from '../types/tarot';
import { getSavedReadings, deleteSavedReading } from '../utils/synthesisEngine';
import { ThothCardView } from './ThothCardView';
import { History, Trash2, Calendar, Search, ChevronDown, ChevronUp, Sparkles, FileDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { exportTarotReadingToPDF } from '../utils/pdfExport';

export const ReadingJournal: React.FC = () => {
  const [readings, setReadings] = useState<TarotReading[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t, language, getCardName, getSpreadName, getElementName } = useLanguage();

  useEffect(() => {
    setReadings(getSavedReadings());
  }, []);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(t('deleteReadingConfirm', 'Möchtest du diese Legung wirklich aus deinem Tagebuch löschen?'))) {
      const updated = deleteSavedReading(id);
      setReadings(updated);
    }
  };

  const filteredReadings = readings.filter(r => {
    const qMatch = r.question ? r.question.toLowerCase().includes(searchQuery.toLowerCase()) : false;
    const sMatch = r.spreadName.toLowerCase().includes(searchQuery.toLowerCase());
    const cardMatch = r.drawnCards.some(
      d =>
        getCardName(d.card).toLowerCase().includes(searchQuery.toLowerCase()) ||
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#121214] border border-[#c5a059]/30 text-[#c5a059] text-[10px] font-mono uppercase tracking-widest">
          <History className="w-3.5 h-3.5" /> {t('journalBadge', 'Offline-Speicher')}
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#f4f4f5] pt-1">
          {t('journalTitle', 'Dein Tarot Tagebuch')}
        </h2>
        <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto leading-relaxed">
          {t('journalSubtitle', 'Alle von dir gespeicherten Legungen und Notizen bleiben lokal auf deinem Gerät erhalten.')}
        </p>
      </div>

      {/* Search Input */}
      {readings.length > 0 && (
        <div className="relative">
          <Search className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t('journalSearchPlaceholder', 'Tagebuch durchsuchen (Frage, Karte, Datum, Notiz)...')}
            className="w-full pl-10 pr-4 py-2.5 rounded bg-[#121214] border border-[#27272a] text-xs text-[#f4f4f5] placeholder-[#71717a] focus:outline-none focus:border-[#c5a059]"
          />
        </div>
      )}

      {/* Saved Readings List */}
      <div className="space-y-3">
        {filteredReadings.map(reading => {
          const isExpanded = expandedId === reading.id;
          const localeCode = language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language;
          const formattedDate = new Date(reading.timestamp).toLocaleDateString(localeCode, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });

          const spreadDisplayName = getSpreadName(reading.spreadId, reading.spreadName);
          const dominantElementDisplay = getElementName(reading.overallSynthesis.dominantElement);

          return (
            <div
              key={reading.id}
              onClick={() => setExpandedId(isExpanded ? null : reading.id)}
              className="rounded-lg border border-[#27272a] bg-[#121214] overflow-hidden cursor-pointer transition hover:border-[#c5a059]/40"
            >
              {/* Summary Bar */}
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-serif font-bold text-[#f4f4f5]">{spreadDisplayName}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0a0a0b] text-[#c5a059] border border-[#c5a059]/30">
                      {reading.drawnCards.length} {t('cardsCountLabel', 'Karten')}
                    </span>
                  </div>

                  {reading.question && (
                    <p className="text-xs text-[#c5a059] italic">"{reading.question}"</p>
                  )}

                  <div className="flex items-center gap-3 text-[10px] text-[#71717a] font-mono pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#71717a]" /> {formattedDate}
                    </span>
                    <span>{t('dominantElementTitle', 'Dominanz')}: {dominantElementDisplay}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={e => handleDelete(reading.id, e)}
                    className="p-1.5 rounded text-[#71717a] hover:text-[#ff7b72] hover:bg-[#1a1a1c] transition cursor-pointer"
                    title={t('deleteBtn', 'Löschen')}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="text-[#71717a]">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="p-4 border-t border-[#27272a] bg-[#0a0a0b] space-y-4 text-xs">
                  {/* Drawn Cards Preview */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] block mb-2">
                      {t('cardsInSpread', 'Gezogene Karten')}:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {reading.drawnCards.map((d, i) => (
                        <div key={i} className="flex-shrink-0 text-center">
                          <ThothCardView card={d.card} size="sm" isFlipped={true} showDetailsOnTap={true} />
                          <span className="text-[9px] font-mono text-[#c5a059] block mt-1 truncate max-w-[80px]">
                            {d.positionTitle}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-3 rounded bg-[#121214] border border-[#27272a] text-[#d4d4d8] leading-relaxed whitespace-pre-line">
                    <span className="font-bold text-[#c5a059] block text-[10px] uppercase font-mono tracking-wider mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#c5a059]" /> {t('synthesisTitle', 'Orakel Synthese')}:
                    </span>
                    {reading.overallSynthesis.summary}
                  </div>

                  {/* Notes if any */}
                  {reading.notes && (
                    <div className="p-3 rounded bg-[#1a1a1c] border border-[#c5a059]/30 text-[#f4f4f5]">
                      <span className="font-bold text-[#c5a059] block text-[10px] uppercase font-mono tracking-wider mb-1">
                        {t('notesLabel', 'Deine persönlichen Notizen')}:
                      </span>
                      <p className="italic">{reading.notes}</p>
                    </div>
                  )}

                  {/* Export PDF Button */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        exportTarotReadingToPDF({
                          spreadName: spreadDisplayName,
                          question: reading.question,
                          timestamp: reading.timestamp,
                          drawnCards: reading.drawnCards,
                          summaryText: reading.overallSynthesis.summary,
                          userNotes: reading.notes,
                          dominantElement: reading.overallSynthesis.dominantElement
                        });
                      }}
                      className="w-full py-2.5 px-3 rounded bg-[#18181b] border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#27272a] hover:border-[#c5a059] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow"
                    >
                      <FileDown className="w-4 h-4 text-[#c5a059]" />
                      <span>Als PDF Exportieren</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredReadings.length === 0 && (
          <div className="p-8 text-center text-[#71717a] text-xs bg-[#121214] rounded-lg border border-[#27272a]">
            {readings.length === 0
              ? t('noReadingsDesc', 'Noch keine Legungen gespeichert. Starte eine Legung und speichere sie!')
              : t('noCardsFound', 'Keine Legung gefunden, die deinem Suchbegriff entspricht.')}
          </div>
        )}
      </div>
    </div>
  );
};
