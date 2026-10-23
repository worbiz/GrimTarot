import React, { useState, useEffect } from 'react';
import { SpreadDef, DrawnCard } from './types/tarot';
import { SPREADS } from './data/spreads';
import { Navbar, NavTab } from './components/Navbar';
import { SpreadSelection } from './components/SpreadSelection';
import { CardShuffleDraw } from './components/CardShuffleDraw';
import { ReadingResult } from './components/ReadingResult';
import { CardLexicon } from './components/CardLexicon';
import { ReadingJournal } from './components/ReadingJournal';
import { ThothGuide } from './components/ThothGuide';
import { InfoView } from './components/InfoView';
import { LanguageSelector } from './components/LanguageSelector';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Eye, WifiOff, Sun } from 'lucide-react';
import { getDailyRitualStatus } from './utils/dailyRitual';

function AppContent() {
  const [activeTab, setActiveTab] = useState<NavTab>('spreads');
  const [ritualStatus, setRitualStatus] = useState(getDailyRitualStatus());
  const { t } = useLanguage();

  // Reading Flow State
  const [readingStep, setReadingStep] = useState<'select' | 'draw' | 'result'>('select');
  const [selectedSpread, setSelectedSpread] = useState<SpreadDef | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | undefined>(undefined);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);

  useEffect(() => {
    const updateStatus = () => setRitualStatus(getDailyRitualStatus());
    window.addEventListener('focus', updateStatus);
    return () => window.removeEventListener('focus', updateStatus);
  }, [readingStep]);

  // Flow handlers
  const handleSelectSpread = (spread: SpreadDef, question?: string) => {
    setSelectedSpread(spread);
    setCurrentQuestion(question);
    setReadingStep('draw');
  };

  const handleStartDailyDraw = () => {
    setActiveTab('spreads');
    const tageskarte = SPREADS.find(s => s.id === 'tageskarte') || SPREADS[0];
    handleSelectSpread(tageskarte, 'Tagesimpuls');
  };

  const handleCompleteReading = (cards: DrawnCard[]) => {
    setDrawnCards(cards);
    setReadingStep('result');
    setRitualStatus(getDailyRitualStatus());
  };

  const handleResetReading = () => {
    setReadingStep('select');
    setSelectedSpread(null);
    setCurrentQuestion(undefined);
    setDrawnCards([]);
    setRitualStatus(getDailyRitualStatus());
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#d4d4d8] flex flex-col justify-between font-sans selection:bg-[#c5a059]/30 selection:text-[#f4f4f5]">
      {/* Container Frame (Styled as an elegant dark layout) */}
      <div className="w-full max-w-md mx-auto sm:max-w-xl min-h-screen flex flex-col bg-[#0a0a0b] border-x border-[#27272a] shadow-2xl relative">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-40 bg-[#0a0a0b]/95 backdrop-blur-md border-b border-[#27272a] px-3.5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Left Eye Symbol (Links to Spreads / Legesystem selection) */}
            <button
              type="button"
              onClick={() => {
                setActiveTab('spreads');
                handleResetReading();
              }}
              title={t('selectSpreadTitle', 'Wähle dein Legesystem')}
              className="w-8 h-8 rounded bg-[#121214] border border-[#c5a059]/40 flex items-center justify-center shadow-md hover:border-[#c5a059] transition cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#c5a059]" />
            </button>

            {/* Title Text */}
            <div
              className="cursor-pointer"
              onClick={() => {
                setActiveTab('spreads');
                handleResetReading();
              }}
            >
              <h1 className="font-serif font-bold text-base text-[#f4f4f5] leading-none tracking-wide">
                {t('appName', 'GrimTarot')}
              </h1>
              <span className="text-[9px] text-[#c5a059] font-mono uppercase tracking-widest block mt-0.5">
                {t('appSubtitle', 'Thoth Orakel')}
              </span>
            </div>

            {/* Right All-Seeing Eye Emblem (Links to Info zu GrimTarot) */}
            <button
              type="button"
              onClick={() => setActiveTab('info')}
              title={t('infoTitle', 'Info zu GrimTarot')}
              className="w-8 h-8 rounded-full border border-[#c5a059]/50 overflow-hidden shadow-md hover:border-[#c5a059] hover:scale-110 transition cursor-pointer flex-shrink-0 bg-[#121214] ml-0.5"
            >
              <img
                src="/assets/aistudio/rhodon_dh_chosen_mason_f6d06090.jpeg"
                alt="Info zu GrimTarot"
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Daily Ritual quick indicator button */}
            <button
              type="button"
              onClick={handleStartDailyDraw}
              title={ritualStatus.hasDrawnToday ? t('dailyRitualTooltipDone') : t('dailyRitualTooltipPending')}
              className="relative inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#121214] border border-[#c5a059]/40 text-xs text-[#d4d4d8] hover:border-[#c5a059] transition cursor-pointer"
            >
              <Sun className={`w-3.5 h-3.5 ${ritualStatus.hasDrawnToday ? 'text-emerald-400' : 'text-[#c5a059]'}`} />
              <span className="text-[10px] font-mono hidden xs:inline text-[#f4f4f5]">
                {ritualStatus.hasDrawnToday ? t('dailyRitualDone', 'Ritual ✓') : t('dailyRitualButton', 'Tageskarte')}
              </span>
              {!ritualStatus.hasDrawnToday && (
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
              )}
            </button>

            {/* Language Selector Dropdown/Modal */}
            <LanguageSelector />

            {/* Offline Badge */}
            <span className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-1 rounded bg-[#121214] border border-[#27272a] text-[#71717a] uppercase hidden sm:inline-flex">
              <WifiOff className="w-3 h-3 text-[#c5a059]" /> {t('offlineBadge', 'Offline')}
            </span>
          </div>
        </header>

        {/* Main Content View based on Tab */}
        <main className="flex-1 pt-4">
          {activeTab === 'spreads' && (
            <>
              {readingStep === 'select' && (
                <SpreadSelection
                  onSelectSpread={handleSelectSpread}
                  onGoToJournal={() => setActiveTab('journal')}
                />
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
          {activeTab === 'info' && <InfoView />}
        </main>

        {/* Bottom Navigation */}
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
