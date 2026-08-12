export type ArcanaType = 'major' | 'minor';
export type SuitType = 'wands' | 'cups' | 'swords' | 'disks';
export type ElementType = 'Feuer' | 'Wasser' | 'Luft' | 'Erde' | 'Geist';

export interface ThothCard {
  id: string;
  number: number | string; // 0-21 for Major, 1-10 or 'Knight'|'Queen'|'Prince'|'Princess' for Minor
  nameGerman: string;
  nameEnglish: string;
  arcana: ArcanaType;
  suit?: SuitType;
  thothTitle?: string; // Crowley specific title e.g. "Tugend", "Dominanz", "Überfluss"
  element: ElementType;
  astrology: string; // e.g. "Widder", "Mars in Widder", "Uranus", "Skorpion"
  hebrewLetter?: string; // e.g. "Aleph (א)", "Beth (ב)"
  keywords: string[];
  description: string; // Symbolism according to Crowley / Lady Frieda Harris
  uprightMeaning: {
    general: string;
    love: string;
    career: string;
    advice: string;
  };
  shadowMeaning: string; // Elemental dignity / Schattenseite
  colorTheme: {
    primary: string;
    secondary: string;
    border: string;
    bgGradient: string;
  };
}

export type SpreadId = 'tageskarte' | 'drei_karten' | 'vier_karten' | 'sieben_karten' | 'liebes_beziehung';

export interface PositionDef {
  index: number;
  title: string;
  description: string;
  shortLabel: string;
}

export interface SpreadDef {
  id: SpreadId;
  name: string;
  subtitle: string;
  cardCount: number;
  iconName: string;
  description: string;
  positions: PositionDef[];
  layoutType: 'line' | 'cross' | 'horseshoe' | 'relationship';
}

export interface DrawnCard {
  positionIndex: number;
  positionTitle: string;
  card: ThothCard;
  isReversed?: boolean;
}

export interface TarotReading {
  id: string;
  timestamp: number;
  spreadId: SpreadId;
  spreadName: string;
  question?: string;
  drawnCards: DrawnCard[];
  notes?: string;
  overallSynthesis: {
    dominantElement: ElementType;
    majorCount: number;
    summary: string;
    elementalAdvice: string;
  };
}
