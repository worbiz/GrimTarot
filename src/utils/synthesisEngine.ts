import { DrawnCard, ElementType, TarotReading } from '../types/tarot';

export interface SynthesisResult {
  dominantElement: ElementType;
  elementCounts: Record<ElementType, number>;
  majorCount: number;
  minorCount: number;
  summary: string;
  elementalAdvice: string;
}

export function generateReadingSynthesis(drawnCards: DrawnCard[], spreadName: string, question?: string): SynthesisResult {
  const elementCounts: Record<ElementType, number> = {
    Feuer: 0,
    Wasser: 0,
    Luft: 0,
    Erde: 0,
    Geist: 0
  };

  let majorCount = 0;
  let minorCount = 0;

  drawnCards.forEach(dc => {
    const el = dc.card.element;
    if (elementCounts[el] !== undefined) {
      elementCounts[el]++;
    } else {
      elementCounts.Feuer++;
    }

    if (dc.card.arcana === 'major') {
      majorCount++;
    } else {
      minorCount++;
    }
  });

  // Find dominant element
  let dominantElement: ElementType = 'Feuer';
  let maxCount = -1;
  const elementsList: ElementType[] = ['Feuer', 'Wasser', 'Luft', 'Erde', 'Geist'];
  elementsList.forEach(el => {
    if (elementCounts[el] > maxCount) {
      maxCount = elementCounts[el];
      dominantElement = el;
    }
  });

  // Elemental advice based on Crowley Thoth elemental dignities
  let elementalAdvice = '';
  if (dominantElement === 'Feuer') {
    elementalAdvice = 'Die Legung wird vom feurigen Element (Atu/Stäbe) beherrscht. Deine Situation verlangt Mut, Leidenschaft, Entschlossenheit und tatkräftige Initiative. Vermeide Zögern und brenne für dein Ziel!';
  } else if (dominantElement === 'Wasser') {
    elementalAdvice = 'Dominanz des Wassers (Atu/Kelche): Gefühle, Intuition, Herzensangelegenheiten und emotionale Klärung stehen im Vordergrund. Horche auf deine Träume und vertraue deinem Bauchgefühl.';
  } else if (dominantElement === 'Luft') {
    elementalAdvice = 'Starker Einfluss der Luft (Atu/Schwerter): Dein Verstand, klare Worte, Objektivität und geistige Schärfe sind gefordert. Schneide Altlasten ab und suche nach der ungeschminkten Wahrheit.';
  } else if (dominantElement === 'Erde') {
    elementalAdvice = 'Prägung durch das Element Erde (Atu/Scheiben): Stabilität, Finanzen, Körperbewusstsein und geduldige Ausdauer sind der Schlüssel. Baue auf solidem Fundament auf.';
  } else {
    elementalAdvice = 'Ausgewogene Verteilung der Elemente. Deine Situation fordert das harmonische Zusammenwirken von Geist, Gefühl, Verstand und Körperlichkeit.';
  }

  // Major Arcana importance text
  let arcanaSummary = '';
  const total = drawnCards.length;
  const majorRatio = majorCount / total;

  if (majorRatio >= 0.5) {
    arcanaSummary = `Hohe Dichte an Großen Arkana (${majorCount} von ${total} Karten). Dies deutet darauf hin, dass essenzielle schicksalhafte Wendepunkte, karmische Lektionen oder tiefe Transformationsphasen in deinem Leben wirken.`;
  } else if (majorCount > 0) {
    arcanaSummary = `Die Mischung aus ${majorCount} Großer/n Arkana und ${minorCount} Kleiner/n Arkana zeigt, dass grundlegende Lebenslektionen mit konkreten Alltagssituationen verwoben sind.`;
  } else {
    arcanaSummary = `Ausnahmslos Kleine Arkana (${minorCount} Karten). Das Thema liegt stark im praktischen Handlungsspielraum deines täglichen Lebens und kann von dir direkt beeinflusst werden.`;
  }

  // Synthesis summary string creation
  const cardNamesList = drawnCards.map(d => `"${d.card.nameGerman}" (${d.positionTitle})`).join(', ');

  let summary = `Für die Legung "${spreadName}" ${question ? `zur Frage "${question}"` : ''} wurden die Karten ${cardNamesList} gezogen.\n\n${arcanaSummary}\n\nElementares Übergewicht: ${dominantElement}. ${elementalAdvice}`;

  return {
    dominantElement,
    elementCounts,
    majorCount,
    minorCount,
    summary,
    elementalAdvice
  };
}

export function saveReadingToJournal(reading: TarotReading): void {
  try {
    const existing = getSavedReadings();
    const updated = [reading, ...existing];
    localStorage.setItem('grimtarot_journal', JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save reading to localStorage', e);
  }
}

export function getSavedReadings(): TarotReading[] {
  try {
    const data = localStorage.getItem('grimtarot_journal');
    if (!data) return [];
    return JSON.parse(data) as TarotReading[];
  } catch (e) {
    console.error('Failed to load readings from localStorage', e);
    return [];
  }
}

export function deleteSavedReading(id: string): TarotReading[] {
  try {
    const existing = getSavedReadings();
    const filtered = existing.filter(r => r.id !== id);
    localStorage.setItem('grimtarot_journal', JSON.stringify(filtered));
    return filtered;
  } catch (e) {
    console.error('Failed to delete reading', e);
    return getSavedReadings();
  }
}
