import React from 'react';
import { Compass, BookOpen, History, Sparkles, Info } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export type NavTab = 'spreads' | 'lexicon' | 'journal' | 'guide' | 'info';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'spreads' as NavTab, label: t('navSpreads', 'Legung'), icon: Compass },
    { id: 'lexicon' as NavTab, label: t('navLexicon', '78 Karten'), icon: BookOpen },
    { id: 'journal' as NavTab, label: t('navJournal', 'Tagebuch'), icon: History },
    { id: 'guide' as NavTab, label: t('navGuide', 'Thoth Guide'), icon: Sparkles },
    { id: 'info' as NavTab, label: t('navInfo', 'Info'), icon: Info }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0b]/95 backdrop-blur-md border-t border-[#27272a] max-w-md mx-auto sm:max-w-xl">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-[#c5a059] font-bold' : 'text-[#71717a] hover:text-[#d4d4d8]'
              }`}
            >
              <div className={`relative p-1 rounded ${isActive ? 'bg-[#c5a059]/10' : ''}`}>
                <Icon className={`w-4 h-4 ${isActive ? 'scale-110 text-[#c5a059]' : ''} transition-transform`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c5a059]" />
                )}
              </div>
              <span className="text-[10px] tracking-wider font-mono uppercase">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
