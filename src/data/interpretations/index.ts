import { CardSpreadPositionData, PositionInterpretationDetail, SpreadId, ThothCard } from '../../types/tarot';
import { MAJOR_ARCANA_INTERPRETATIONS } from './majorArcanaInterpretations';
import { WANDS_INTERPRETATIONS } from './wandsInterpretations';
import { CUPS_INTERPRETATIONS } from './cupsInterpretations';
import { SWORDS_INTERPRETATIONS } from './swordsInterpretations';
import { DISKS_INTERPRETATIONS } from './disksInterpretations';
import { getReversedCardDynamic, ReversedDynamic } from './reversedEngine';

export { getReversedCardDynamic };
export type { ReversedDynamic };

export const ALL_CARD_SPREAD_INTERPRETATIONS: Record<string, CardSpreadPositionData> = {
  ...MAJOR_ARCANA_INTERPRETATIONS,
  ...WANDS_INTERPRETATIONS,
  ...CUPS_INTERPRETATIONS,
  ...SWORDS_INTERPRETATIONS,
  ...DISKS_INTERPRETATIONS
};

export function getCardSpreadData(cardId: string): CardSpreadPositionData | undefined {
  return ALL_CARD_SPREAD_INTERPRETATIONS[cardId];
}

function getBasePositionInterpretationDetail(
  card: ThothCard,
  spreadId: SpreadId,
  positionIndex: number
): PositionInterpretationDetail {
  const data = getCardSpreadData(card.id);

  // Default fallback if card data is not found
  if (!data) {
    return {
      spreadId,
      spreadName: spreadId,
      positionIndex,
      positionTitle: `Position ${positionIndex + 1}`,
      positionRole: 'Allgemeine Deutung',
      interpretation: card.uprightMeaning.general,
      esotericContext: `${card.element} • ${card.astrology} ${card.thothTitle ? `• "${card.thothTitle}"` : ''}`,
      actionAdvice: card.uprightMeaning.advice,
      shadowWarning: card.shadowMeaning
    };
  }

  // Handle Tageskarte
  if (spreadId === 'tageskarte') {
    return {
      spreadId,
      spreadName: 'Tageskarte',
      positionIndex: 0,
      positionTitle: 'Impuls des Tages',
      positionRole: 'Tagesfokus & Tagesenergie',
      interpretation: data.tageskarte.fokus,
      esotericContext: data.tageskarte.energie,
      actionAdvice: data.tageskarte.ratschlag,
      shadowWarning: card.shadowMeaning
    };
  }

  // Handle Drei Karten Legung
  if (spreadId === 'drei_karten') {
    if (positionIndex === 0) {
      return {
        spreadId,
        spreadName: 'Drei Karten Legung',
        positionIndex: 0,
        positionTitle: 'Vergangenheit / Ausgangslage',
        positionRole: 'Ursprung & karmische Wurzeln',
        interpretation: data.drei_karten.vergangenheit,
        esotericContext: `Fundament der Energie: ${card.element} im Lichte von ${card.astrology}`,
        actionAdvice: 'Erkenne die Lektion der Vergangenheit an, um heute frei handeln zu können.',
        shadowWarning: card.shadowMeaning
      };
    }
    if (positionIndex === 1) {
      return {
        spreadId,
        spreadName: 'Drei Karten Legung',
        positionIndex: 1,
        positionTitle: 'Gegenwart / Kernthema',
        positionRole: 'Aktueller Brennpunkt & Realität',
        interpretation: data.drei_karten.gegenwart,
        esotericContext: `Aktive Crowley-Dynamik: "${card.thothTitle || card.nameGerman}"`,
        actionAdvice: card.uprightMeaning.advice,
        shadowWarning: card.shadowMeaning
      };
    }
    // positionIndex === 2
    return {
      spreadId,
      spreadName: 'Drei Karten Legung',
      positionIndex: 2,
      positionTitle: 'Zukunft / Perspektive',
      positionRole: 'Künftige Entwicklung & Potenzial',
      interpretation: data.drei_karten.zukunft,
      esotericContext: `Zielgerichteter Impuls: ${card.nameEnglish} als Wegweiser`,
      actionAdvice: 'Richte deine Aufmerksamkeit proaktiv auf diese sich anbahnende Energie aus.',
      shadowWarning: card.shadowMeaning
    };
  }

  // Handle Vier Karten Legung
  if (spreadId === 'vier_karten') {
    if (positionIndex === 0) {
      return {
        spreadId,
        spreadName: 'Vier Karten Legung',
        positionIndex: 0,
        positionTitle: 'Das Kernthema',
        positionRole: 'Das zentrale Anliegen / Essenz',
        interpretation: data.vier_karten.thema,
        esotericContext: `Astrologische Signatur: ${card.astrology} (${card.element})`,
        actionAdvice: card.uprightMeaning.advice,
        shadowWarning: card.shadowMeaning
      };
    }
    if (positionIndex === 1) {
      return {
        spreadId,
        spreadName: 'Vier Karten Legung',
        positionIndex: 1,
        positionTitle: 'Was du vermeiden solltest',
        positionRole: 'Warnung, Schatten & Fallstrick',
        interpretation: data.vier_karten.vermeiden,
        esotericContext: `Elementare Schattenwürde: ${card.shadowMeaning}`,
        actionAdvice: 'Tritt bewusst einen Schritt zurück und meide dieses Verhaltensmuster konsequent.',
        shadowWarning: data.vier_karten.vermeiden
      };
    }
    if (positionIndex === 2) {
      return {
        spreadId,
        spreadName: 'Vier Karten Legung',
        positionIndex: 2,
        positionTitle: 'Was zu tun ist / Ratschlag',
        positionRole: 'Konstruktive Tatkraft & Heilung',
        interpretation: data.vier_karten.ratschlag,
        esotericContext: `Schöpferischer Wille: Tugend der Karte "${card.thothTitle || card.nameGerman}"`,
        actionAdvice: data.vier_karten.ratschlag,
        shadowWarning: undefined
      };
    }
    // positionIndex === 3
    return {
      spreadId,
      spreadName: 'Vier Karten Legung',
      positionIndex: 3,
      positionTitle: 'Wohin die Reise führt',
      positionRole: 'Ziel, Ertrag & Vollendung',
      interpretation: data.vier_karten.ziel,
      esotericContext: `Telos & Manifestation: Vollendung im Element ${card.element}`,
      actionAdvice: 'Vertraue darauf, dass sich dieser Zustand manifestiert, wenn du dem Rat folgst.',
      shadowWarning: card.shadowMeaning
    };
  }

  // Handle Sieben Karten Legung
  if (spreadId === 'sieben_karten') {
    switch (positionIndex) {
      case 0:
        return {
          spreadId,
          spreadName: 'Sieben Karten Legung',
          positionIndex: 0,
          positionTitle: 'Vergangener Einfluss',
          positionRole: 'Nachwirkende Ursache',
          interpretation: data.sieben_karten.vergangenheit,
          esotericContext: `Früheres Fundament: ${card.nameGerman} (${card.astrology})`,
          actionAdvice: 'Integriere diese Lektion, ohne in der Nostalgie oder dem Groll zu verharren.'
        };
      case 1:
        return {
          spreadId,
          spreadName: 'Sieben Karten Legung',
          positionIndex: 1,
          positionTitle: 'Gegenwärtige Lage',
          positionRole: 'Der Ist-Zustand',
          interpretation: data.sieben_karten.gegenwart,
          esotericContext: `Brennender Moment: "${card.thothTitle || card.nameGerman}"`,
          actionAdvice: card.uprightMeaning.advice
        };
      case 2:
        return {
          spreadId,
          spreadName: 'Sieben Karten Legung',
          positionIndex: 2,
          positionTitle: 'Verborgene Einflüsse',
          positionRole: 'Unbewusste Strömungen',
          interpretation: data.sieben_karten.verborgen,
          esotericContext: `Hinter dem Schleier: Geheimnisvolle Kraft im Element ${card.element}`,
          actionAdvice: 'Mache dir diesen unbewussten Antrieb bewusst, um nicht von ihm fremdgesteuert zu werden.'
        };
      case 3:
        return {
          spreadId,
          spreadName: 'Sieben Karten Legung',
          positionIndex: 3,
          positionTitle: 'Der entscheidende Wendepunkt',
          positionRole: 'Prüfung & Initiationsschwelle',
          interpretation: data.sieben_karten.wendepunkt,
          esotericContext: `Die Schwelle: Meisterschaft über die Polarität von ${card.nameEnglish}`,
          actionAdvice: 'Hier entscheidet sich dein Schicksal: Stelle dich der Prüfung mit festem Willen.',
          shadowWarning: card.shadowMeaning
        };
      case 4:
        return {
          spreadId,
          spreadName: 'Sieben Karten Legung',
          positionIndex: 4,
          positionTitle: 'Äußeres Umfeld',
          positionRole: 'Einfluss von Mitmenschen & Welt',
          interpretation: data.sieben_karten.umfeld,
          esotericContext: `Das soziale & materielle Spiegelbild: Resonanz mit ${card.astrology}`,
          actionAdvice: 'Lass dich nicht von äußeren Stimmen beirren, sondern nutze das Feedback konstruktiv.'
        };
      case 5:
        return {
          spreadId,
          spreadName: 'Sieben Karten Legung',
          positionIndex: 5,
          positionTitle: 'Hoffnungen & Ängste',
          positionRole: 'Innere Projektionen',
          interpretation: data.sieben_karten.hoffnungAngst,
          esotericContext: `Spannungsfeld der Seele: Sehnsucht nach ${card.keywords.slice(0, 2).join(' / ')}`,
          actionAdvice: 'Entlarve deine Angst als bloße Energie; wandle sie in reine Wachheit um.',
          shadowWarning: card.shadowMeaning
        };
      case 6:
      default:
        return {
          spreadId,
          spreadName: 'Sieben Karten Legung',
          positionIndex: 6,
          positionTitle: 'Wahrscheinliches Ergebnis',
          positionRole: 'Die Quintessenz der Legung',
          interpretation: data.sieben_karten.ergebnis,
          esotericContext: `Vollendung des Zyklus: ${card.nameGerman} als finales Siegel`,
          actionAdvice: 'Dies ist der höchste Pfad deines Handelns: Begrüße die Vollendung mit Demut und Stolz.'
        };
    }
  }

  // Handle Liebes- und Beziehungslegung
  if (spreadId === 'liebes_beziehung') {
    switch (positionIndex) {
      case 0:
        return {
          spreadId,
          spreadName: 'Liebes- & Beziehungslegung',
          positionIndex: 0,
          positionTitle: 'Die Beziehungsdynamik',
          positionRole: 'Das Herzstück & verbindende Band',
          interpretation: data.liebes_beziehung.dynamik,
          esotericContext: `Verbindende Schwingung: ${card.element} • ${card.astrology}`,
          actionAdvice: 'Nehmt das verbindende Thema als Chance, um gemeinsam zu wachsen.'
        };
      case 1:
        return {
          spreadId,
          spreadName: 'Liebes- & Beziehungslegung',
          positionIndex: 1,
          positionTitle: 'Deine Haltung & Gefühle',
          positionRole: 'Deine innere Seelenwelt',
          interpretation: data.liebes_beziehung.selbst,
          esotericContext: `Dein emotionaler Standpunkt: "${card.nameGerman}"`,
          actionAdvice: 'Sei absolut ehrlich zu dir selbst über deine wahren Bedürfnisse.'
        };
      case 2:
        return {
          spreadId,
          spreadName: 'Liebes- & Beziehungslegung',
          positionIndex: 2,
          positionTitle: 'Die Haltung des Partners',
          positionRole: 'Perspektive & Herz deines Gegenübers',
          interpretation: data.liebes_beziehung.partner,
          esotericContext: `Der Partner-Spiegel: ${card.nameEnglish} im Herzen des anderen`,
          actionAdvice: 'Höre zu, ohne sofort zu urteilen; respektiere die Gefühlswelt deines Gegenübers.'
        };
      case 3:
        return {
          spreadId,
          spreadName: 'Liebes- & Beziehungslegung',
          positionIndex: 3,
          positionTitle: 'Was die Beziehung stärkt',
          positionRole: 'Die gemeinsame Ressource & Stärke',
          interpretation: data.liebes_beziehung.staerke,
          esotericContext: `Alchemistische Kraftquelle: ${card.thothTitle || card.nameGerman}`,
          actionAdvice: 'Besinnt euch auf diese Stärke, besonders wenn Stürme aufziehen.'
        };
      case 4:
      default:
        return {
          spreadId,
          spreadName: 'Liebes- & Beziehungslegung',
          positionIndex: 4,
          positionTitle: 'Ratschlag für die Liebe',
          positionRole: 'Orakel-Impuls für das Herz',
          interpretation: data.liebes_beziehung.rat,
          esotericContext: `Herzensweisheit nach Crowley: Der Weg der reinen Liebe`,
          actionAdvice: data.liebes_beziehung.rat
        };
    }
  }

  // Fallback
  return {
    spreadId,
    spreadName: spreadId,
    positionIndex,
    positionTitle: `Position ${positionIndex + 1}`,
    positionRole: 'Positionsdeutung',
    interpretation: card.uprightMeaning.general,
    esotericContext: card.astrology,
    actionAdvice: card.uprightMeaning.advice
  };
}

export function getPositionInterpretationDetail(
  card: ThothCard,
  spreadId: SpreadId,
  positionIndex: number,
  isReversed: boolean = false
): PositionInterpretationDetail {
  const base = getBasePositionInterpretationDetail(card, spreadId, positionIndex);
  if (!isReversed) {
    return base;
  }

  const reversed = getReversedCardDynamic(card, spreadId, positionIndex);
  return {
    ...base,
    isReversed: true,
    reversedDynamic: reversed,
    interpretation: `${base.interpretation}\n\n[Umgekehrte Energie / Kopfstand]: Die Energie der Karte ist derzeit blockiert, verzögert oder nach innen gerichtet. ${reversed.blockedEnergy} ${reversed.internalizedFocus}`,
    actionAdvice: `${reversed.unblockAdvice} (Aufrecht: ${base.actionAdvice})`,
    shadowWarning: reversed.hiddenOpportunity || base.shadowWarning
  };
}

