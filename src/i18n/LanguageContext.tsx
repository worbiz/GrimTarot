import React, { createContext, useContext, useState, useEffect } from 'react';
import { SupportedLanguage, LanguageMeta, SUPPORTED_LANGUAGES } from './types';
import {
  UI_TRANSLATIONS,
  SPREAD_TRANSLATIONS,
  CARD_LOCALIZATIONS,
  ELEMENT_NAMES,
  SUIT_NAMES
} from './translations';
import { ThothCard } from '../types/tarot';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  languageMeta: LanguageMeta;
  t: (key: string, fallback?: string) => string;
  getCardName: (card: ThothCard) => string;
  getCardThothTitle: (card: ThothCard) => string | undefined;
  getElementName: (element: string) => string;
  getSuitName: (suit?: string) => string;
  getSpreadName: (spreadId: string, fallback?: string) => string;
  getSpreadSubtitle: (spreadId: string, fallback?: string) => string;
  getSpreadDescription: (spreadId: string, fallback?: string) => string;
  getPositionTitle: (spreadId: string, positionIndex: number, fallback?: string) => string;
  getPositionShortLabel: (spreadId: string, positionIndex: number, fallback?: string) => string;
  getPositionDescription: (spreadId: string, positionIndex: number, fallback?: string) => string;
}

const STORAGE_KEY = 'grimtarot_language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
      if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language.slice(0, 2).toLowerCase();
      const matched = SUPPORTED_LANGUAGES.find(l => l.code === browserLang);
      if (matched) return matched.code;
    } catch {
      // ignore localStorage errors
    }
    return 'de';
  });

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const languageMeta = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0];

  const t = (key: string, fallback?: string): string => {
    const langDict = UI_TRANSLATIONS[language];
    if (langDict && langDict[key]) return langDict[key];
    const deDict = UI_TRANSLATIONS.de;
    if (deDict && deDict[key]) return deDict[key];
    return fallback || key;
  };

  const getCardName = (card: ThothCard): string => {
    const loc = CARD_LOCALIZATIONS[language]?.[card.id];
    if (loc?.name) return loc.name;
    return language === 'en' ? card.nameEnglish : card.nameGerman;
  };

  const getCardThothTitle = (card: ThothCard): string | undefined => {
    const loc = CARD_LOCALIZATIONS[language]?.[card.id];
    if (loc?.thothTitle) return loc.thothTitle;
    return card.thothTitle;
  };

  const getElementName = (element: string): string => {
    return ELEMENT_NAMES[language]?.[element] || element;
  };

  const getSuitName = (suit?: string): string => {
    if (!suit) return '';
    return SUIT_NAMES[language]?.[suit] || suit;
  };

  const getSpreadName = (spreadId: string, fallback?: string): string => {
    const s = SPREAD_TRANSLATIONS[language]?.[spreadId];
    return s?.name || fallback || spreadId;
  };

  const getSpreadSubtitle = (spreadId: string, fallback?: string): string => {
    const s = SPREAD_TRANSLATIONS[language]?.[spreadId];
    return s?.subtitle || fallback || '';
  };

  const getSpreadDescription = (spreadId: string, fallback?: string): string => {
    const s = SPREAD_TRANSLATIONS[language]?.[spreadId];
    return s?.description || fallback || '';
  };

  const getPositionTitle = (spreadId: string, positionIndex: number, fallback?: string): string => {
    const s = SPREAD_TRANSLATIONS[language]?.[spreadId];
    return s?.positions?.[positionIndex]?.title || fallback || `Position ${positionIndex + 1}`;
  };

  const getPositionShortLabel = (spreadId: string, positionIndex: number, fallback?: string): string => {
    const s = SPREAD_TRANSLATIONS[language]?.[spreadId];
    return s?.positions?.[positionIndex]?.shortLabel || fallback || `${positionIndex + 1}`;
  };

  const getPositionDescription = (spreadId: string, positionIndex: number, fallback?: string): string => {
    const s = SPREAD_TRANSLATIONS[language]?.[spreadId];
    return s?.positions?.[positionIndex]?.description || fallback || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        languageMeta,
        t,
        getCardName,
        getCardThothTitle,
        getElementName,
        getSuitName,
        getSpreadName,
        getSpreadSubtitle,
        getSpreadDescription,
        getPositionTitle,
        getPositionShortLabel,
        getPositionDescription,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
