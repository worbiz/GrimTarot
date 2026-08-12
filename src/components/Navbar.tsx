import React from 'react';
import { Compass, BookOpen, History, Sparkles } from 'lucide-react';

export type NavTab = 'spreads' | 'lexicon' | 'journal' | 'guide';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'spreads' as NavTab, label: 'Legung', icon: Compass },
    { id: 'lexicon' as NavTab, label: '78 Karten', icon: BookOpen },
    { id: 'journal' as NavTab, label: 'Tagebuch', icon: History },
    { id: 'guide' as NavTab, label: 'Thoth Guide', icon: Sparkles }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/90 backdrop-blur-md border-t border-amber-500/20 max-w-md mx-auto sm:max-w-xl">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? 'text-amber-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <div className={`relative p-1 rounded-full ${isActive ? 'bg-amber-500/10' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </div>
              <span className="text-[10px] tracking-wider font-sans">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
