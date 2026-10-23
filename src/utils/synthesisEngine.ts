import { DrawnCard, ElementType, TarotReading, SpreadId } from '../types/tarot';
import { getPositionInterpretationDetail } from '../data/interpretations';

export interface SynthesisResult {
  dominantElement: ElementType;
  elementCounts: Record<ElementType, number>;
  majorCount: number;
  minorCount: number;
  reversedCount: number;
  summary: string;
  elementalAdvice: string;
  reversedAdvice?: string;
}

export function generateReadingSynthesis(
  drawnCards: DrawnCard[],
  spreadName: string,
  question?: string,
  spreadId?: SpreadId
): SynthesisResult {
  const elementCounts: Record<ElementType, number> = {
    Feuer: 0,
    Wasser: 0,
    Luft: 0,
    Erde: 0,
    Geist: 0
  };

  let majorCount = 0;
  let minorCount = 0;
  let reversedCount = 0;

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

    if (dc.isReversed) {
      reversedCount++;
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

  // Reversed cards analysis based on user definition: blocked, delayed, internalized energy
  let reversedSummary = '';
  let reversedAdvice = '';
  if (reversedCount > 0) {
    if (reversedCount === total) {
      reversedAdvice = `Alle ${reversedCount} Karten liegen auf dem Kopf. Deine Energien sind gegenwärtig fast vollständig nach innen gerichtet oder pausieren. Erzwinge nichts im Außen; betrachte die Herausforderungen als Reifungsprozess.`;
    } else if (reversedCount >= Math.ceil(total / 2)) {
      reversedAdvice = `${reversedCount} von ${total} Karten liegen umgekehrt (Kopfstand). Dies signalisiert innere Konflikte, Widerstände oder verzögerte Abläufe. Es ist kein negatives Omen, sondern verweist auf ungenutzte Chancen, die durch ehrliche Selbstreflexion freigesetzt werden können.`;
    } else {
      reversedAdvice = `${reversedCount} Karte(n) liegen auf dem Kopf. An diesen Stellen stockt der gewohnte Fluss. Ein bewusster Perspektivwechsel hilft, die Blockade aufzulösen.`;
    }
    reversedSummary = `\n\nOrientierung & Dynamik:\n${reversedAdvice}`;
  }

  // Synthesis summary string creation
  const cardNamesList = drawnCards.map(d => `"${d.card.nameGerman}"${d.isReversed ? ' (Umgekehrt)' : ''} (${d.positionTitle})`).join(', ');

  let positionHighlights = '';
  if (spreadId) {
    const highlights = drawnCards.map(d => {
      const detail = getPositionInterpretationDetail(d.card, spreadId, d.positionIndex, !!d.isReversed);
      const revNote = d.isReversed ? ' [Kopfstand/Umgekehrt]' : '';
      return `• ${d.positionTitle} ("${d.card.nameGerman}"${revNote}): ${detail.actionAdvice}`;
    }).join('\n');
    positionHighlights = `\n\nZentrale Impulse der Positionen:\n${highlights}`;
  }

  let summary = `Für die Legung "${spreadName}" ${question ? `zur Frage "${question}"` : ''} wurden die Karten ${cardNamesList} gezogen.\n\n${arcanaSummary}\n\nElementares Übergewicht: ${dominantElement}. ${elementalAdvice}${reversedSummary}${positionHighlights}`;

  return {
    dominantElement,
    elementCounts,
    majorCount,
    minorCount,
    reversedCount,
    summary,
    elementalAdvice,
    reversedAdvice
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
