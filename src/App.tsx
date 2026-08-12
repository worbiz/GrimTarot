import React, { useState } from 'react';
import { SpreadDef, DrawnCard } from './types/tarot';
import { Navbar, NavTab } from './components/Navbar';
import { SpreadSelection } from './components/SpreadSelection';
import { CardShuffleDraw } from './components/CardShuffleDraw';
import { ReadingResult } from './components/ReadingResult';
import { CardLexicon } from './components/CardLexicon';
import { ReadingJournal } from './components/ReadingJournal';
import { ThothGuide } from './components/ThothGuide';
import { Eye, Sparkles, WifiOff } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('spreads');

  // Reading Flow State
  const [readingStep, setReadingStep] = useState<'select' | 'draw' | 'result'>('select');
  const [selectedSpread, setSelectedSpread] = useState<SpreadDef | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | undefined>(undefined);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);

  // Flow handlers
  const handleSelectSpread = (spread: SpreadDef, question?: string) => {
    setSelectedSpread(spread);
    setCurrentQuestion(question);
    setReadingStep('draw');
  };

  const handleCompleteReading = (cards: DrawnCard[]) => {
    setDrawnCards(cards);
    setReadingStep('result');
  };

  const handleResetReading = () => {
    setReadingStep('select');
    setSelectedSpread(null);
    setCurrentQuestion(undefined);
    setDrawnCards([]);
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100 flex flex-col justify-between font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Container Frame (Styled like an Android App canvas) */}
      <div className="w-full max-w-md mx-auto sm:max-w-xl min-h-screen flex flex-col bg-slate-950 border-x border-amber-500/10 shadow-2xl relative">
        
        {/* Android Top Header Bar */}
        <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setActiveTab('spreads'); handleResetReading(); }}>
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 via-purple-600 to-amber-700 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-black flex items-center justify-center">
                <Eye className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg text-amber-100 leading-none tracking-wide">
                GrimTarot
              </h1>
              <span className="text-[10px] text-amber-400/80 font-mono">Thoth Tarot Orakel</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
              <WifiOff className="w-3 h-3 text-emerald-400" /> Offline
            </span>
          </div>
        </header>

        {/* Main Content View based on Tab */}
        <main className="flex-1 pt-4">
          {activeTab === 'spreads' && (
            <>
              {readingStep === 'select' && (
                <SpreadSelection onSelectSpread={handleSelectSpread} />
              )}
              {readingStep === 'draw' && selectedSpread && (
                <CardShuffleDraw
                  spread={selectedSpread}
                  question={currentQuestion}
                  onCompleteReading={handleCompleteReading}
                  onBack={handleResetReading}
                />
              )}
              {readingStep === 'result' && selectedSpread && (
                <ReadingResult
                  spread={selectedSpread}
                  drawnCards={drawnCards}
                  question={currentQuestion}
                  onNewReading={handleResetReading}
                  onGoToJournal={() => setActiveTab('journal')}
                />
              )}
            </>
          )}

          {activeTab === 'lexicon' && <CardLexicon />}
          {activeTab === 'journal' && <ReadingJournal />}
          {activeTab === 'guide' && <ThothGuide />}
        </main>

        {/* Bottom Android Navigation */}
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}
