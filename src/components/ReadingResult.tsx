import React, { useState } from 'react';
import { DrawnCard, SpreadDef, TarotReading } from '../types/tarot';
import { ThothCardView } from './ThothCardView';
import { generateReadingSynthesis, saveReadingToJournal } from '../utils/synthesisEngine';
import { Sparkles, Save, RotateCcw, Share2, Info, BookOpen, Heart, Flame, Shield, Compass, Check } from 'lucide-react';
import { motion } from 'motion/react';

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

  const synthesis = generateReadingSynthesis(drawnCards, spread.name, question);

  const handleSaveReading = () => {
    const reading: TarotReading = {
      id: `reading_${Date.now()}`,
      timestamp: Date.now(),
      spreadId: spread.id,
      spreadName: spread.name,
      question,
      drawnCards,
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
          spreadName: spread.name,
          question,
          drawnCards: drawnCards.map(d => ({
            position: d.positionTitle,
            cardName: d.card.nameGerman,
            thothTitle: d.card.thothTitle,
            element: d.card.element,
            astrology: d.card.astrology,
            keywords: d.card.keywords
          }))
        })
      });

      if (!response.ok) {
        throw new Error('AI analysis API returned error');
      }

      const data = await response.json();
      setAiAnalysis(data.interpretation);
    } catch (error) {
      console.warn('AI analysis unavailable offline, using local engine synthesis', error);
      setAiAnalysis('Ihre Legung wurde offline vollständig ausgewertet. Die Crowley Thoth Symbolik und elementaren Würden finden Sie im obigen Synthese-Abschnitt.');
    } finally {
      setIsLoadingAi(false);
    }
  };

  const getElementBadge = (element: string) => {
    switch (element) {
      case 'Feuer':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-500/30"><Flame className="w-3 h-3 text-red-400" /> Feuer</span>;
      case 'Wasser':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-sky-950/80 text-sky-300 border border-sky-500/30"><Compass className="w-3 h-3 text-sky-400" /> Wasser</span>;
      case 'Luft':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30"><Compass className="w-3 h-3 text-cyan-300" /> Luft</span>;
      case 'Erde':
        return <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"><Shield className="w-3 h-3 text-emerald-400" /> Erde</span>;
      default:
        return <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/30"><Sparkles className="w-3 h-3 text-purple-400" /> Geist</span>;
    }
  };

  return (
    <div className="space-y-6 pb-28 px-4">
      {/* Reading Title */}
      <div className="text-center pt-2 space-y-1">
        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Auswertung • Aleister Crowley Thoth
        </span>
        <h2 className="text-2xl font-serif font-bold text-amber-100">{spread.name}</h2>
        {question && <p className="text-xs text-purple-300 italic max-w-sm mx-auto">"{question}"</p>}
      </div>

      {/* Spread Layout Cards Display */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/30 shadow-xl space-y-4">
        <h3 className="text-xs font-semibold text-amber-300 uppercase tracking-wider text-center">
          Gezogene Karten im Legemuster (Tippe eine Karte an)
        </h3>

        {/* Visual Spread Arrangement */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-2">
          {drawnCards.map(drawn => {
            const isSelected = selectedCard.positionIndex === drawn.positionIndex;
            return (
              <motion.div
                key={drawn.positionIndex}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCard(drawn)}
                className={`relative cursor-pointer p-1 rounded-2xl transition ${
                  isSelected ? 'ring-2 ring-amber-400 bg-amber-500/10 scale-105' : 'opacity-85 hover:opacity-100'
                }`}
              >
                <ThothCardView card={drawn.card} size="sm" isFlipped={true} />
                <span className="text-[9px] font-mono text-amber-200 block text-center mt-1 truncate max-w-[85px]">
                  {drawn.positionTitle}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Selected Card Focus Panel */}
      {selectedCard && (
        <motion.div
          key={selectedCard.positionIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 via-purple-950/40 to-slate-900 border border-purple-500/40 shadow-2xl space-y-4"
        >
          <div className="flex items-start justify-between border-b border-purple-500/20 pb-3">
            <div>
              <span className="text-[11px] font-mono text-amber-400 uppercase block">
                Position #{selectedCard.positionIndex + 1}: {selectedCard.positionTitle}
              </span>
              <h3 className="text-xl font-serif font-bold text-amber-100 mt-0.5">
                {selectedCard.card.nameGerman}
              </h3>
              <p className="text-xs text-zinc-400 italic">
                {selectedCard.card.nameEnglish} {selectedCard.card.thothTitle ? `• "${selectedCard.card.thothTitle}"` : ''}
              </p>
            </div>
            {getElementBadge(selectedCard.card.element)}
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <div className="p-2 rounded-lg bg-black/40 border border-zinc-800">
              <span className="text-zinc-400 block text-[10px]">Astrologie</span>
              <span className="text-amber-300">{selectedCard.card.astrology}</span>
            </div>
            {selectedCard.card.hebrewLetter && (
              <div className="p-2 rounded-lg bg-black/40 border border-zinc-800">
                <span className="text-zinc-400 block text-[10px]">Hebräisch</span>
                <span className="text-amber-300">{selectedCard.card.hebrewLetter}</span>
              </div>
            )}
          </div>

          {/* Symbolism & Meaning for position */}
          <div className="space-y-3 text-xs leading-relaxed">
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30">
              <span className="font-bold text-amber-300 block mb-1">Position & Interpretation:</span>
              <p className="text-zinc-200">{selectedCard.card.uprightMeaning.general}</p>
              <p className="mt-1.5 text-amber-200 italic font-medium">
                Ratschlag: {selectedCard.card.uprightMeaning.advice}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-zinc-800 text-zinc-300">
              <span className="font-bold text-amber-400 block mb-1">Thoth Symbolik (Crowley):</span>
              <p>{selectedCard.card.description}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Gesamtsynthese / Overall Synthesis */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-xl space-y-3">
        <h3 className="text-sm font-serif font-bold text-amber-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" /> Gesamtsynthese der Legung
        </h3>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded-xl bg-black/40 border border-zinc-800">
            <span className="text-zinc-400 block text-[10px]">Dominanz</span>
            <span className="font-bold text-amber-300">{synthesis.dominantElement}</span>
          </div>
          <div className="p-2 rounded-xl bg-black/40 border border-zinc-800">
            <span className="text-zinc-400 block text-[10px]">Große Arkana</span>
            <span className="font-bold text-purple-300">{synthesis.majorCount} Karten</span>
          </div>
          <div className="p-2 rounded-xl bg-black/40 border border-zinc-800">
            <span className="text-zinc-400 block text-[10px]">Kleine Arkana</span>
            <span className="font-bold text-sky-300">{synthesis.minorCount} Karten</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-black/50 border border-amber-500/20 text-xs text-zinc-200 leading-relaxed whitespace-pre-line">
          {synthesis.summary}
        </div>

        {/* Optional AI Deep Reflection */}
        {!aiAnalysis ? (
          <button
            onClick={handleFetchAiDeepAnalysis}
            disabled={isLoadingAi}
            className="w-full py-2.5 px-3 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-purple-900 transition disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>{isLoadingAi ? 'KI-Tiefenanalyse lädt...' : 'Optional: KI-Tiefenanalyse anfordern'}</span>
          </button>
        ) : (
          <div className="p-3.5 rounded-xl bg-purple-950/60 border border-purple-500/40 text-xs text-purple-100 space-y-1">
            <span className="font-bold text-amber-300 block text-[10px] uppercase">KI-Reflexion:</span>
            <p className="leading-relaxed">{aiAnalysis}</p>
          </div>
        )}
      </div>

      {/* Personal Notes & Save to Journal */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-zinc-800 space-y-3">
        <h3 className="text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-amber-400" /> Eigene Notizen zum Tagebuch hinzufügen
        </h3>
        <textarea
          value={userNotes}
          onChange={e => setUserNotes(e.target.value)}
          placeholder="Ihre persönlichen Gedanken, Intuitionen oder Erkenntnisse zu dieser Legung..."
          rows={3}
          className="w-full p-3 rounded-xl bg-black/60 border border-zinc-700 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400"
        />

        <div className="flex gap-2">
          <button
            onClick={handleSaveReading}
            disabled={isSaved}
            className={`flex-1 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
              isSaved
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md'
            }`}
          >
            {isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            <span>{isSaved ? 'Im Tagebuch gespeichert!' : 'Legung im Tagebuch speichern'}</span>
          </button>

          {isSaved && (
            <button
              onClick={onGoToJournal}
              className="py-3 px-4 rounded-xl bg-slate-800 border border-zinc-700 text-zinc-200 text-xs font-semibold hover:bg-slate-700"
            >
              Tagebuch öffnen
            </button>
          )}
        </div>
      </div>

      {/* New Reading Button */}
      <div>
        <button
          onClick={onNewReading}
          className="w-full py-3.5 rounded-2xl bg-slate-900 border border-zinc-700 text-zinc-200 font-bold text-xs hover:bg-slate-800 transition flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4 text-amber-400" />
          <span>Neue Tarot Legung starten</span>
        </button>
      </div>
    </div>
  );
};
