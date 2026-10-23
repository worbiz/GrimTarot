import { DrawnCard, ElementType, SpreadId, ThothCard } from '../types/tarot';

export type DignityQuality = 'friendly' | 'contrary' | 'neutral' | 'reinforcing' | 'transcendent';

export interface DignityRelation {
  quality: DignityQuality;
  score: number; // +2 for friendly, +1 for reinforcing, 0 for neutral, -2 for contrary
  nameGerman: string;
  nameEnglish: string;
  symbol: string;
  colorClass: string;
  badgeBg: string;
  descriptionGerman: string;
  descriptionEnglish: string;
  alchemicalAdviceGerman: string;
  alchemicalAdviceEnglish: string;
}

export interface PairDignityAnalysis {
  cardA: DrawnCard;
  cardB: DrawnCard;
  relationshipLabelGerman: string;
  relationshipLabelEnglish: string;
  relation: DignityRelation;
}

export interface ElementalDistribution {
  counts: Record<ElementType, number>;
  percentages: Record<ElementType, number>;
  dominantElement: ElementType;
  secondaryElement?: ElementType;
  lackingElements: ElementType[];
}

export interface SpreadElementalDignitiesResult {
  distribution: ElementalDistribution;
  harmonyScore: number; // 0 to 100%
  harmonyTier: 'harmonious' | 'dynamic' | 'tense' | 'chaotic';
  harmonyLabelGerman: string;
  harmonyLabelEnglish: string;
  keyPairs: PairDignityAnalysis[];
  crowleySynthesisGerman: string;
  crowleySynthesisEnglish: string;
  elementalActionAdviceGerman: string;
  elementalActionAdviceEnglish: string;
}

/**
 * Standard Golden Dawn & Aleister Crowley Elemental Dignities Table
 * Reference: https://www.corax.com/tarot/index.html?elemental-dignities
 */
export function getElementalRelation(elemA: ElementType, elemB: ElementType): DignityRelation {
  // If either element is Spirit / Quintessence (Geist)
  if (elemA === 'Geist' || elemB === 'Geist') {
    return {
      quality: 'transcendent',
      score: 2,
      nameGerman: 'Transzendent (Quintessenz)',
      nameEnglish: 'Transcendent (Quintessence)',
      symbol: '✦',
      colorClass: 'text-[#e69d45]',
      badgeBg: 'bg-[#2a1e0b] border-[#e69d45]/40',
      descriptionGerman: 'Geist erhebt und heiligt die irdischen Elemente und führt Gegensätze zur Vereinigung.',
      descriptionEnglish: 'Spirit elevates and consecrates the earthly elements, uniting polarities into oneness.',
      alchemicalAdviceGerman: 'Vertraue der höheren geistigen Führung deines Wahren Willens.',
      alchemicalAdviceEnglish: 'Align with the higher spiritual guidance of your True Will.'
    };
  }

  // Same Element (Homologous)
  if (elemA === elemB) {
    const elementSpecificGerman: Record<string, string> = {
      Feuer: 'Zweifaches Feuer entfacht einen gewaltigen Brand: Leidenschaft und Dynamik steigen ins Unermessliche, bergen aber die Gefahr von Hektik oder Verbrennung.',
      Wasser: 'Zweifaches Wasser vertieft Gefühle und Intuition bis zum Meeresgrund, droht jedoch emotionale Fluten und passive Träumerei auszulösen.',
      Luft: 'Zweifache Luft schärft den Intellekt zu blitzartiger Klarheit, birgt jedoch das Risiko von Überanalysieren, Nervosität und kühler Distanz.',
      Erde: 'Zweifache Erde schenkt unverrückbare Stabilität, Ausdauer und Reichtum, birgt aber die Gefahr von Starrheit, Bequemlichkeit und Trägheit.'
    };

    const elementSpecificEnglish: Record<string, string> = {
      Feuer: 'Double Fire ignites immense passion and dynamic force, but risks recklessness or burnout.',
      Wasser: 'Double Water plunges deep into intuition and emotional depths, risking tidal overwhelm and dreamy passivity.',
      Luft: 'Double Air refines the intellect into lightning clarity, but risks overthinking, detachment, and nervous unrest.',
      Erde: 'Double Earth grants unshakeable stability, endurance, and material wealth, but risks stubbornness and stagnation.'
    };

    return {
      quality: 'reinforcing',
      score: 1,
      nameGerman: 'Verstärkend (Gleiches Element)',
      nameEnglish: 'Reinforcing (Same Element)',
      symbol: '⇈',
      colorClass: 'text-[#c5a059]',
      badgeBg: 'bg-[#1e1c12] border-[#c5a059]/40',
      descriptionGerman: elementSpecificGerman[elemA] || 'Zwei gleiche Elemente potenzieren ihre Stärke und drängen auf bewusste Lenkung.',
      descriptionEnglish: elementSpecificEnglish[elemA] || 'Two identical elements multiply their inherent power and demand mindful direction.',
      alchemicalAdviceGerman: 'Nutze die enorme Kraftkonzentration, achte aber darauf, Gegenpole zur Erdung zu setzen.',
      alchemicalAdviceEnglish: 'Harness this intense concentration of energy, balancing it with grounding complementary elements.'
    };
  }

  // Active Friendly: Fire & Air
  if ((elemA === 'Feuer' && elemB === 'Luft') || (elemA === 'Luft' && elemB === 'Feuer')) {
    return {
      quality: 'friendly',
      score: 2,
      nameGerman: 'Befreundet & Fördernd (Feuer + Luft)',
      nameEnglish: 'Friendly & Active (Fire + Air)',
      symbol: '▲+△',
      colorClass: 'text-[#e69d45]',
      badgeBg: 'bg-[#24170a] border-[#e69d45]/40',
      descriptionGerman: 'Feuer und Luft sind aktive, zeugende Elemente. Die Luft facht das Feuer an; das Feuer erwärmt und bewegt die Luft. Ideen werden augenblicklich zu zündender Tatkraft.',
      descriptionEnglish: 'Fire and Air are active, generative elements. Air fans Fire into blazing life; Fire warms and circulates Air. Inspiration rapidly transmutes into decisive action.',
      alchemicalAdviceGerman: 'Perfekter Zeitpunkt für mutige Schritte, Neuanfänge und kreative Schöpfung.',
      alchemicalAdviceEnglish: 'Prime momentum for bold initiatives, inspired breakthroughs, and creative will.'
    };
  }

  // Passive Friendly: Water & Earth
  if ((elemA === 'Wasser' && elemB === 'Erde') || (elemA === 'Erde' && elemB === 'Wasser')) {
    return {
      quality: 'friendly',
      score: 2,
      nameGerman: 'Befreundet & Fruchtbar (Wasser + Erde)',
      nameEnglish: 'Friendly & Passive (Water + Earth)',
      symbol: '▼+▽',
      colorClass: 'text-[#7ee787]',
      badgeBg: 'bg-[#0f1f14] border-[#7ee787]/40',
      descriptionGerman: 'Wasser und Erde sind empfangende, nährende Elemente. Das Wasser tränkt die durstige Erde; die Erde gibt dem Wasser Form, Flussbett und Gestalt. Fruchtbares Wachstum und Manifestation.',
      descriptionEnglish: 'Water and Earth are receptive, nurturing elements. Water moistens the soil; Earth channels and holds the emotional waters. Deep fertility, healing, and lasting manifestation.',
      alchemicalAdviceGerman: 'Gib deinen Gefühlen Raum und lass Vorhaben geduldig und stetig reifen.',
      alchemicalAdviceEnglish: 'Allow feelings to take tangible form; nurture endeavors with patience and organic pacing.'
    };
  }

  // Hostile / Contrary: Fire & Water
  if ((elemA === 'Feuer' && elemB === 'Wasser') || (elemA === 'Wasser' && elemB === 'Feuer')) {
    return {
      quality: 'contrary',
      score: -2,
      nameGerman: 'Widerstreitend (Feuer + Wasser)',
      nameEnglish: 'Contrary & Hostile (Fire + Water)',
      symbol: '▲⚡▼',
      colorClass: 'text-[#ff7b72]',
      badgeBg: 'bg-[#291212] border-[#ff7b72]/40',
      descriptionGerman: 'Feuer und Wasser stehen in fundamentaler Feindschaft: Wasser löscht das Feuer; Feuer bringt das Wasser zum Kochen und verflüchtigt es als Dampf. Extreme seelische Spannungen oder blockierter Antrieb.',
      descriptionEnglish: 'Fire and Water stand in primal opposition: Water quenches Fire; Fire boils Water into escaping vapor. Conflict between raw emotional needs and willful burning ambition.',
      alchemicalAdviceGerman: 'Vermeide überstürzte Entscheidungen in aufgewühlten Momenten. Transformiere die Reibung durch Selbsterkenntnis zur Kunst (Atu XIV).',
      alchemicalAdviceEnglish: 'Avoid rash choices amidst turbulence. Sublimate the friction into alchemical balance through conscious Art (Atu XIV).'
    };
  }

  // Hostile / Contrary: Air & Earth
  if ((elemA === 'Luft' && elemB === 'Erde') || (elemA === 'Erde' && elemB === 'Luft')) {
    return {
      quality: 'contrary',
      score: -2,
      nameGerman: 'Widerstreitend (Luft + Erde)',
      nameEnglish: 'Contrary & Hostile (Air + Earth)',
      symbol: '△⚡▽',
      colorClass: 'text-[#ff9b72]',
      badgeBg: 'bg-[#26150c] border-[#ff9b72]/40',
      descriptionGerman: 'Luft und Erde hemmen einander: Starre Erde erstickt den freien Wind; der Wind wirbelt trockenen Staub auf. Hohe geistige Ideale scheitern an bürokratischer Härte oder materieller Trägheit.',
      descriptionEnglish: 'Air and Earth constrain one another: Dense Earth smothers the intellect; howling wind scatters dry dust. Abstract intellectual theories clash against hard material reality.',
      alchemicalAdviceGerman: 'Prüfe deine Pläne auf nüchterne Machbarkeit. Verbeiße dich nicht in Theorien, sondern gehe schrittweise vor.',
      alchemicalAdviceEnglish: 'Ground abstract ideas in practical reality. Avoid rigid cynicism and take pragmatic incremental steps.'
    };
  }

  // Neutral: Fire & Earth
  if ((elemA === 'Feuer' && elemB === 'Erde') || (elemA === 'Erde' && elemB === 'Feuer')) {
    return {
      quality: 'neutral',
      score: 0,
      nameGerman: 'Neutral / Indifferent (Feuer + Erde)',
      nameEnglish: 'Neutral (Fire + Earth)',
      symbol: '▲·▽',
      colorClass: 'text-[#d4d4d8]',
      badgeBg: 'bg-[#18181b] border-[#27272a]',
      descriptionGerman: 'Feuer und Erde verhalten sich zueinander indifferent. Das Feuer erwärmt den Boden oder brennt ihn aus; die Erde bietet dem Feuer einen Herd, nährt es aber nicht aktiv.',
      descriptionEnglish: 'Fire and Earth coexist indifferently. Fire warms or bakes the ground; Earth hosts the flame without actively fueling it.',
      alchemicalAdviceGerman: 'Praktisches Handeln funktioniert, benötigt jedoch bewussten Krafteinsatz ohne Selbstläufer-Dynamik.',
      alchemicalAdviceEnglish: 'Pragmatic execution works steadily, requiring steady deliberate discipline rather than spontaneous ease.'
    };
  }

  // Neutral: Water & Air
  return {
    quality: 'neutral',
    score: 0,
    nameGerman: 'Neutral / Indifferent (Wasser + Luft)',
    nameEnglish: 'Neutral (Water + Air)',
    symbol: '▼·△',
    colorClass: 'text-[#79c0ff]',
    badgeBg: 'bg-[#0e1a24] border-[#79c0ff]/30',
    descriptionGerman: 'Wasser und Luft begegnen einander wie Nebel und Wolken. Gefühle und Gedanken durchdringen sich flüchtig, ohne sich gegenseitig zu zerstören oder explosionsartig zu entzünden.',
    descriptionEnglish: 'Water and Air interact like mist and clouds. Emotions and ideas permeate each other fluidly without destructive warfare or explosive ignition.',
    alchemicalAdviceGerman: 'Nutze den Dialog zwischen Verstand und Herz, um unklare Ahnungen in Worte zu fassen.',
    alchemicalAdviceEnglish: 'Bridge heart and intellect through articulate reflection and poetic honesty.'
  };
}

/**
 * Analyzes the complete spread under Crowley / Golden Dawn Elemental Dignities
 */
export function analyzeElementalDignities(
  drawnCards: DrawnCard[],
  spreadId: SpreadId
): SpreadElementalDignitiesResult {
  const counts: Record<ElementType, number> = {
    Feuer: 0,
    Wasser: 0,
    Luft: 0,
    Erde: 0,
    Geist: 0
  };

  drawnCards.forEach(d => {
    const el = d.card.element;
    if (counts[el] !== undefined) {
      counts[el]++;
    } else {
      counts.Erde++;
    }
  });

  const total = Math.max(1, drawnCards.length);
  const percentages: Record<ElementType, number> = {
    Feuer: Math.round((counts.Feuer / total) * 100),
    Wasser: Math.round((counts.Wasser / total) * 100),
    Luft: Math.round((counts.Luft / total) * 100),
    Erde: Math.round((counts.Erde / total) * 100),
    Geist: Math.round((counts.Geist / total) * 100)
  };

  // Determine dominant, secondary and lacking elements
  const sortedElements = (Object.keys(counts) as ElementType[])
    .filter(e => e !== 'Geist')
    .sort((a, b) => counts[b] - counts[a]);

  const dominantElement = sortedElements[0];
  const secondaryElement = counts[sortedElements[1]] > 0 ? sortedElements[1] : undefined;
  const lackingElements = (Object.keys(counts) as ElementType[])
    .filter(e => e !== 'Geist' && counts[e] === 0);

  // Determine key pairs based on spread geometry
  const keyPairs: PairDignityAnalysis[] = [];

  const addPair = (
    idxA: number,
    idxB: number,
    labelDe: string,
    labelEn: string
  ) => {
    const cardA = drawnCards.find(d => d.positionIndex === idxA);
    const cardB = drawnCards.find(d => d.positionIndex === idxB);
    if (cardA && cardB) {
      const relation = getElementalRelation(cardA.card.element, cardB.card.element);
      keyPairs.push({
        cardA,
        cardB,
        relationshipLabelGerman: labelDe,
        relationshipLabelEnglish: labelEn,
        relation
      });
    }
  };

  if (spreadId === 'thelemisches_kreuz') {
    addPair(0, 1, 'Zentrum & Kreuzung (Der Dreh- & Angelpunkt)', 'Center & Cross (The Core Dynamic)');
    addPair(2, 4, 'Wurzel & Krone (Achse des Wahren Willens)', 'Root & Crown (Axis of True Will)');
    addPair(3, 5, 'Vergangenheit & Zukunft (Zeit-Achse)', 'Past & Future (Chronological Axis)');
    addPair(6, 7, 'Selbsteinschätzung & Umfeld (Spiegel der Realität)', 'Self & Environment (Mirror of Reality)');
    addPair(8, 9, 'Verborgene Psyche & Quintessenz (Endergebnis)', 'Hidden Psyche & Quintessence (Final Synthesis)');
  } else if (spreadId === 'astrologische_haeuser') {
    // Astrological Key Axes
    addPair(0, 6, '1. Haus vs. 7. Haus (Achse der Begegnung: Widder – Waage)', '1st vs 7th House (Axis of Encounter: Aries – Libra)');
    addPair(3, 9, '4. Haus vs. 10. Haus (Achse der Bestimmung: IC – MC)', '4th vs 10th House (Axis of Destiny: IC – MC)');
    addPair(0, 1, '1. Haus & 2. Haus (Vom Impuls zur Manifestation)', '1st & 2nd House (From Impulse to Matter)');
    addPair(4, 10, '5. Haus & 11. Haus (Achse der Schöpferkraft & Visionen)', '5th & 11th House (Axis of Creativity & Visions)');
    addPair(7, 11, '8. Haus & 12. Haus (Mysterien & Karma)', '8th & 12th House (Occult Mysteries & Transcendence)');
  } else if (spreadId === 'drei_karten') {
    addPair(0, 1, 'Vergangenheit → Gegenwart', 'Past → Present');
    addPair(1, 2, 'Gegenwart → Zukunft', 'Present → Future');
    addPair(0, 2, 'Vergangenheit ⇄ Zukunft', 'Past ⇄ Future');
  } else if (spreadId === 'vier_karten') {
    addPair(0, 3, 'Kernthema ⇄ Ziel', 'Core Theme ⇄ Goal');
    addPair(1, 2, 'Warnung ⇄ Ratschlag', 'Warning ⇄ Counsel');
    addPair(0, 1, 'Thema & Fallstrick', 'Theme & Trap');
  } else if (spreadId === 'sieben_karten') {
    addPair(0, 1, 'Vergangenheit ⇄ Gegenwart', 'Past ⇄ Present');
    addPair(2, 3, 'Verborgenes ⇄ Wendepunkt', 'Hidden ⇄ Turning Point');
    addPair(4, 6, 'Umfeld ⇄ Endergebnis', 'Environment ⇄ Outcome');
    addPair(5, 6, 'Hoffnung/Angst ⇄ Ergebnis', 'Hopes/Fears ⇄ Outcome');
  } else if (spreadId === 'liebes_beziehung') {
    addPair(1, 2, 'Deine Ebene ⇄ Partner-Ebene', 'Your Soul ⇄ Partner Soul');
    addPair(0, 3, 'Beziehungsdynamik ⇄ Stärke', 'Core Bond ⇄ Inner Strength');
    addPair(0, 4, 'Dynamik ⇄ Liebesratschlag', 'Dynamic ⇄ Love Advice');
  } else {
    // Single card or generic
    if (drawnCards.length >= 2) {
      addPair(0, 1, 'Karten-Beziehung', 'Card Interaction');
    }
  }

  // Calculate Harmony Score from evaluated pairs
  let totalScore = 0;
  let maxPossibleScore = 0;

  if (keyPairs.length > 0) {
    keyPairs.forEach(p => {
      totalScore += p.relation.score;
      maxPossibleScore += 2; // max friendly score
    });
  } else {
    totalScore = 2;
    maxPossibleScore = 2;
  }

  // Normalize to 0-100%
  // score ranges from -maxPossibleScore to +maxPossibleScore
  const normalizedHarmony = Math.min(
    100,
    Math.max(0, Math.round(((totalScore + maxPossibleScore) / (2 * maxPossibleScore)) * 100))
  );

  let harmonyTier: 'harmonious' | 'dynamic' | 'tense' | 'chaotic' = 'harmonious';
  let harmonyLabelGerman = 'Harmonisch & Tragfähig';
  let harmonyLabelEnglish = 'Harmonious & Stable';

  if (normalizedHarmony >= 75) {
    harmonyTier = 'harmonious';
    harmonyLabelGerman = 'Sehr Harmonisch & Tragfähig (+)';
    harmonyLabelEnglish = 'Highly Harmonious & Constructive (+)';
  } else if (normalizedHarmony >= 50) {
    harmonyTier = 'dynamic';
    harmonyLabelGerman = 'Ausbalanciert & Dynamisch (~)';
    harmonyLabelEnglish = 'Balanced & Energetically Dynamic (~)';
  } else if (normalizedHarmony >= 30) {
    harmonyTier = 'tense';
    harmonyLabelGerman = 'Spannungsgeladen / Gegensätzlich (⚡)';
    harmonyLabelEnglish = 'Tense Polarities / Frictional (⚡)';
  } else {
    harmonyTier = 'chaotic';
    harmonyLabelGerman = 'Elementarer Widerstreit / Blockiert (✕)';
    harmonyLabelEnglish = 'Elemental Clash / Conflicted (✕)';
  }

  // Crowley Synthesis generation based on dominant & conflicting elements
  const dominantName = dominantElement;
  let crowleySynthesisGerman = '';
  let crowleySynthesisEnglish = '';
  let adviceGerman = '';
  let adviceEnglish = '';

  if (percentages.Feuer > 40) {
    crowleySynthesisGerman = `Das Element Feuer dominiert diese Legung mit ${percentages.Feuer}% der Energien. Aleister Crowley ordnet Feuer dem hebräischen Yod, dem Willen und der kreativen Urkraft (Chokmah) zu. Deine Lage ist von hoher Dringlichkeit, brennender Leidenschaft und dynamischem Wandel geprägt.`;
    crowleySynthesisEnglish = `The element Fire dominates this reading with ${percentages.Feuer}% of the cosmic forces. Crowley assigns Fire to the divine Yod, the active True Will, and kinetic power. Your situation is charged with urgency, burning ambition, and swift change.`;
  } else if (percentages.Wasser > 40) {
    crowleySynthesisGerman = `Das Element Wasser herrscht vor (${percentages.Wasser}%). Es repräsentiert das He, die göttliche Mutter (Binah), das Unbewusste und die Tiefe der Empfindungen. Es geht hier weniger um äußere Aktion als um seelische Klärung, Hingabe und das Erlösen alter Verstrickungen.`;
    crowleySynthesisEnglish = `The element Water prevails (${percentages.Wasser}%). Correlating to primal He, the Great Sea of Binah, the subconscious, and deep emotional currents. Outer ambition recedes; internal alignment, surrender, and emotional reconciliation hold the key.`;
  } else if (percentages.Luft > 40) {
    crowleySynthesisGerman = `Das Element Luft steht im Mittelpunkt (${percentages.Luft}%). Crowley assoziiert Luft mit dem hebräischen Vav, dem menschlichen Verstand, Sprache und scharfsinniger Analyse (Tiphareth). Es gilt, Objektivität zu wahren, Zweifel zu durchschneiden und Entscheidungen rational zu begründen.`;
    crowleySynthesisEnglish = `The element Air forms the center (${percentages.Luft}%). Representing the Hebrew letter Vav, clear mental acuity, speech, and objective discernment. Cut through confusion with decisive intellectual honesty and reasoned logic.`;
  } else if (percentages.Erde > 40) {
    crowleySynthesisGerman = `Das Element Erde trägt das Hauptgewicht (${percentages.Erde}%). Es entspricht dem abschließenden He, der materiellen Welt (Malkuth) und handfesten Tatsachen. Hier fordern die Karten Disziplin, Ausdauer, finanzielle Umsicht und messbare Taten.`;
    crowleySynthesisEnglish = `The element Earth carries prime weight (${percentages.Erde}%). Assigned to the final He, the physical kingdom of Malkuth. Demanding grounded patience, discipline, economic sobriety, and tangible proof.`;
  } else {
    crowleySynthesisGerman = `Deine Legung weist eine facettenreiche Verteilung der Elemente auf (${percentages.Feuer}% Feuer, ${percentages.Wasser}% Wasser, ${percentages.Luft}% Luft, ${percentages.Erde}% Erde). Die verschiedenen Lebensbereiche stimulieren einander gegenseitig.`;
    crowleySynthesisEnglish = `Your spread reveals a multifaceted elemental equilibrium (${percentages.Feuer}% Fire, ${percentages.Wasser}% Water, ${percentages.Luft}% Air, ${percentages.Erde}% Earth). Different spheres of consciousness interact continuously.`;
  }

  // Missing elements advice
  if (lackingElements.length > 0) {
    const lackingNames = lackingElements.join(', ');
    adviceGerman = `Hinweis: Es fehlt das Element ${lackingNames}. Achte bewusst darauf, diese fehlende Qualität im Alltag aktiv zu integrieren (z.B. ${
      lackingElements.includes('Erde') ? 'Erdung & Struktur' : lackingElements.includes('Wasser') ? 'Mitgefühl & Herzensöffnung' : lackingElements.includes('Feuer') ? 'Mut & Entschlossenheit' : 'Klarheit & Dialog'
    }).`;
    adviceEnglish = `Notice: The element ${lackingNames} is absent. Consciously invoke its medicine into your daily rhythm (e.g. ${
      lackingElements.includes('Erde') ? 'grounding & structure' : lackingElements.includes('Wasser') ? 'compassion & emotional flow' : lackingElements.includes('Feuer') ? 'courage & decisive passion' : 'clarity & transparent communication'
    }).`;
  } else {
    adviceGerman = 'Alle vier irdischen Elemente sind vertreten – eine alchemistische Vollständigkeit, die ein ganzheitliches Gelingen begünstigt.';
    adviceEnglish = 'All four earthly elements are actively present—an alchemical completeness that supports holistic integration.';
  }

  return {
    distribution: {
      counts,
      percentages,
      dominantElement,
      secondaryElement,
      lackingElements
    },
    harmonyScore: normalizedHarmony,
    harmonyTier,
    harmonyLabelGerman,
    harmonyLabelEnglish,
    keyPairs,
    crowleySynthesisGerman,
    crowleySynthesisEnglish,
    elementalActionAdviceGerman: adviceGerman,
    elementalActionAdviceEnglish: adviceEnglish
  };
}
