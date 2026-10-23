import { SpreadDef } from '../types/tarot';

export const SPREADS: SpreadDef[] = [
  {
    id: 'tageskarte',
    name: 'Tageskarte',
    subtitle: 'Der tägliche Impuls & Fokus',
    cardCount: 1,
    iconName: 'Sun',
    description: 'Zieht eine Karte als energetischen Leitfaden für deinen heutigen Tag. Ideal für morgendliche Inspiration und achtsamen Fokus.',
    layoutType: 'line',
    positions: [
      {
        index: 0,
        title: 'Impuls des Tages',
        shortLabel: 'Tagesfokus',
        description: 'Das zentrale Thema, die Energie oder die Lektion, die deinen heutigen Tag begleitet.'
      }
    ]
  },
  {
    id: 'drei_karten',
    name: 'Drei Karten Legung',
    subtitle: 'Zeitlinie oder Situation & Ratschlag',
    cardCount: 3,
    iconName: 'Columns3',
    description: 'Der Klassiker der Tarot-Legung. Beleuchtet Entwicklungen über Zeiträume hinweg oder klärt eine konkrete Situation mit Hindernis und Ratschlag.',
    layoutType: 'line',
    positions: [
      {
        index: 0,
        title: 'Vergangenheit / Ausgangslage',
        shortLabel: 'Gestern',
        description: 'Bisherige Einflüsse, Ursachen und Erfahrungen, die zu deiner jetzigen Situation geführt haben.'
      },
      {
        index: 1,
        title: 'Gegenwart / Kernthema',
        shortLabel: 'Heute',
        description: 'Die aktuelle Dynamik, der Ist-Zustand und die emotionale oder mentale Realität im Hier und Jetzt.'
      },
      {
        index: 2,
        title: 'Zukunft / Perspektive',
        shortLabel: 'Morgen',
        description: 'Die absehbare Entwicklung, das Potenzial oder der nächste logische Schritt.'
      }
    ]
  },
  {
    id: 'vier_karten',
    name: 'Vier Karten Legung',
    subtitle: 'Der Kompass / Orientierungskreuz',
    cardCount: 4,
    iconName: 'Compass',
    description: 'Gibt dir klare Orientierung bei Entscheidungen oder kniffligen Lebensfragen. Zeigt Thema, Warnung, Empfehlung und Ziel.',
    layoutType: 'cross',
    positions: [
      {
        index: 0,
        title: 'Das Kernthema',
        shortLabel: '1. Thema',
        description: 'Worum es wirklich geht – der Kern der Frage oder der aktuellen Lebensphase.'
      },
      {
        index: 1,
        title: 'Was du vermeiden solltest',
        shortLabel: '2. Warnung',
        description: 'Fallstricke, Illusionen oder Verhaltensweisen, die dir jetzt schaden würden.'
      },
      {
        index: 2,
        title: 'Was zu tun ist / Ratschlag',
        shortLabel: '3. Empfehlung',
        description: 'Die förderliche Haltung oder konkrete Handlung, die dich jetzt weiterbringt.'
      },
      {
        index: 3,
        title: 'Wohin die Reise führt',
        shortLabel: '4. Ziel',
        description: 'Das Ergebnis oder das längerfristige Potenzial, wenn du dem Ratschlag folgst.'
      }
    ]
  },
  {
    id: 'sieben_karten',
    name: 'Sieben Karten Legung',
    subtitle: 'Das Hufeisen / Tiefe Gesamtschau',
    cardCount: 7,
    iconName: 'Sparkles',
    description: 'Ein umfassendes Legesystem für komplexe Lebensfragen, persönliche Transformationen und tiefe Einsichten in Schicksalsmuster.',
    layoutType: 'horseshoe',
    positions: [
      {
        index: 0,
        title: 'Vergangener Einfluss',
        shortLabel: '1. Vergangenes',
        description: 'Einflüsse aus der jüngeren Vergangenheit, die noch nachwirken.'
      },
      {
        index: 1,
        title: 'Gegenwärtige Lage',
        shortLabel: '2. Gegenwart',
        description: 'Dein aktueller Standpunkt und deine gefühlte Realität.'
      },
      {
        index: 2,
        title: 'Verborgene Einflüsse',
        shortLabel: '3. Verborgenes',
        description: 'Unbewusste Faktoren oder Dinge, die im Verborgenen wirken.'
      },
      {
        index: 3,
        title: 'Der entscheidende Wendepunkt',
        shortLabel: '4. Wendepunkt',
        description: 'Die Hürde oder Prüfung, die es zu meistern gilt.'
      },
      {
        index: 4,
        title: 'Äußeres Umfeld',
        shortLabel: '5. Umfeld',
        description: 'Reaktionen von Mitmenschen, Rahmenbedingungen und äußere Kräfte.'
      },
      {
        index: 5,
        title: 'Hoffnungen & Ängste',
        shortLabel: '6. Hoffnung & Angst',
        description: 'Deine tiefsten Befürchtungen oder Wünsche bzgl. des Ausgangs.'
      },
      {
        index: 6,
        title: 'Wahrscheinliches Ergebnis',
        shortLabel: '7. Ausgang',
        description: 'Die Gesamtsynthese und der wahrscheinliche Ausgang der Situation.'
      }
    ]
  },
  {
    id: 'liebes_beziehung',
    name: 'Liebes- & Beziehungslegung',
    subtitle: 'Das Partnerschafts-Orakel',
    cardCount: 5,
    iconName: 'Heart',
    description: 'Analysiert die Dynamik zwischen dir und einem Herzensmenschen (Partner, Schwarm, Ex-Partner oder Wunschbeziehung) auf allen Ebenen.',
    layoutType: 'relationship',
    positions: [
      {
        index: 0,
        title: 'Die Beziehungsdynamik',
        shortLabel: 'Das Herzstück',
        description: 'Das Band und das gemeinsame Thema, das euch beide derzeit verbindet.'
      },
      {
        index: 1,
        title: 'Deine Haltung & Gefühle',
        shortLabel: 'Deine Ebene',
        description: 'Was du denkst, fühlst und in diese Verbindung einbringst.'
      },
      {
        index: 2,
        title: 'Die Haltung des Partners',
        shortLabel: 'Partner Ebene',
        description: 'Was dein Gegenüber fühlt, denkt und welche Energie von ihm/ihr kommt.'
      },
      {
        index: 3,
        title: 'Was die Beziehung stärkt',
        shortLabel: 'Die Stärke',
        description: 'Die gemeinsame Ressource, die euch verbindet und Wachstum schenkt.'
      },
      {
        index: 4,
        title: 'Ratschlag für die Liebe',
        shortLabel: 'Impuls / Rat',
        description: 'Der Impuls der Karten für harmonisches Miteinander und Herzensweisheit.'
      }
    ]
  },
  {
    id: 'thelemisches_kreuz',
    name: 'Das Thelemische Kreuz (Die Kern-Analyse)',
    subtitle: 'Ausbalancierte Kreuz-Geometrie für komplexe Lebensfragen',
    cardCount: 10,
    iconName: 'PlusCircle',
    description: 'Eine thelemische Weiterentwicklung des keltischen Kreuzes nach Aleister Crowley. Geometrisch exakter auf das Kreuz-Symbol ausbalanciert, enthüllt es das dynamische Zusammenspiel von Wahrem Willen (Thelema), Wurzel, Krone und Quintessenz.',
    layoutType: 'thelemic_cross',
    positions: [
      {
        index: 0,
        title: 'Das Herz / Das Zentrum',
        shortLabel: '1. Herz',
        description: 'Der primäre Kern deiner Frage, die gegenwärtige Grundschwingung und dein energetisches Zentrum.'
      },
      {
        index: 1,
        title: 'Die Kreuzung / Die dynamische Kraft',
        shortLabel: '2. Kreuzung',
        description: 'Die Kraft, die das Zentrum kreuzt – entweder als aktivierender Impuls, Reibung oder als akute Herausforderung.'
      },
      {
        index: 2,
        title: 'Die Basis / Das Fundament',
        shortLabel: '3. Wurzel',
        description: 'Das Unterbewusstsein, karmische Ursachen, verdrängte Antriebe und die Basis, auf der alles ruht.'
      },
      {
        index: 3,
        title: 'Die Wurzel / Die Vergangenheit',
        shortLabel: '4. Vergangenheit',
        description: 'Einflüsse der jüngsten Vergangenheit, die nun an Kraft verlieren, aber den gegenwärtigen Boden bereitet haben.'
      },
      {
        index: 4,
        title: 'Die Krone / Das Höhere Selbst',
        shortLabel: '5. Krone (Wille)',
        description: 'Dein Wahres Wollen (Thelema), das höchste geistige Potenzial, dein spirituelles Ideal und die göttliche Führung.'
      },
      {
        index: 5,
        title: 'Das Nächste / Die unmittelbare Zukunft',
        shortLabel: '6. Nächster Schritt',
        description: 'Die unmittelbar vor dir liegende Phase und die nächste energetische Weichenstellung.'
      },
      {
        index: 6,
        title: 'Die Selbsteinschätzung / Eigene Haltung',
        shortLabel: '7. Fragender',
        description: 'Deine bewusste Einstellung, dein Selbstbild, deine psychologische Verfassung und wie du dich selbst siehst.'
      },
      {
        index: 7,
        title: 'Das Umfeld / Äußere Einflüsse',
        shortLabel: '8. Umfeld',
        description: 'Die Mitmenschen, Familie, Partner, Arbeitsumfeld und äußere Schicksalskräfte, die auf dich einwirken.'
      },
      {
        index: 8,
        title: 'Hoffnungen & Befürchtungen',
        shortLabel: '9. Verborgene Psyche',
        description: 'Deine geheimsten Wünsche, Sehnsüchte oder verdeckten Ängste bezüglich des möglichen Ausgangs.'
      },
      {
        index: 9,
        title: 'Die Quintessenz / Das thelemische Resultat',
        shortLabel: '10. Quintessenz',
        description: 'Die alchemistische Gesamtsynthese und das Endergebnis im Einklang mit deinem Wahren Willen.'
      }
    ]
  },
  {
    id: 'astrologische_haeuser',
    name: 'Das astrologische Häuser-System (Gesamtüberblick)',
    subtitle: 'Die 12 Häuser des Zodiaks für umfassende Bestandsaufnahmen & Jahreslegungen',
    cardCount: 12,
    iconName: 'CircleDot',
    description: 'Da das Thoth-Tarot extrem tief mit der Astrologie verknüpft ist, eignet sich das 12-Häuser-System perfekt für große Jahreslegungen oder ganzheitliche Lebensanalysen. 12 Karten im kosmischen Kreis der Tierkreiszeichen.',
    layoutType: 'zodiac_circle',
    positions: [
      {
        index: 0,
        title: '1. Haus (Widder) – Das Selbst, Identität & Vitalität',
        shortLabel: 'I. Selbst (Aszendent)',
        description: 'Deine Persönlichkeit, Ausstrahlung, körperliche Energie, Durchsetzungskraft und Neubeginn (Aszendent).'
      },
      {
        index: 1,
        title: '2. Haus (Stier) – Finanzen, Werte & Materie',
        shortLabel: 'II. Finanzen & Werte',
        description: 'Materieller Besitz, finanzielle Sicherheit, Selbstwertgefühl, Talente und irdische Stabilität.'
      },
      {
        index: 2,
        title: '3. Haus (Zwillinge) – Kommunikation, Verstand & Alltag',
        shortLabel: 'III. Kommunikation',
        description: 'Intellekt, Gedankenaustausch, Lernen, Geschwister, Nahumfeld und alltägliche Kontakte.'
      },
      {
        index: 3,
        title: '4. Haus (Krebs) – Wurzeln, Familie & Seelenheim',
        shortLabel: 'IV. Wurzeln (IC)',
        description: 'Herkunft, Familie, seelische Geborgenheit, inneres Kind und dein seelisches Zuhause (Imum Coeli).'
      },
      {
        index: 4,
        title: '5. Haus (Löwe) – Kreativität, Herz & Lebensfreude',
        shortLabel: 'V. Herz & Schöpferkraft',
        description: 'Schöpferische Entfaltung, Flirt, Liebe, Romantik, Sexualität, Spiel und spontane Freude.'
      },
      {
        index: 5,
        title: '6. Haus (Jungfrau) – Arbeit, Gesundheit & Pflichten',
        shortLabel: 'VI. Arbeit & Gesundheit',
        description: 'Tägliche Arbeitsroutine, körperliche Gesundheit, Ernährung, Hygiene und strukturierte Pflichterfüllung.'
      },
      {
        index: 6,
        title: '7. Haus (Waage) – Partnerschaft, Beziehungen & Begegnung',
        shortLabel: 'VII. Partnerschaft (DC)',
        description: 'Feste Partnerschaften, Ehe, Verträge, enge Bindungen und die Spiegelung des Selbst im Du (Deszendent).'
      },
      {
        index: 7,
        title: '8. Haus (Skorpion) – Transformation, Tiefe & Loslassen',
        shortLabel: 'VIII. Wandlung & Tiefe',
        description: 'Krisen als Katalysator, Loslassen von Altem, gemeinsame Finanzen, Mysterien und psychische Erneuerung.'
      },
      {
        index: 8,
        title: '9. Haus (Schütze) – Philosophie, Sinnsuche & Höhere Erkenntnis',
        shortLabel: 'IX. Sinn & Philosophie',
        description: 'Weltanschauung, Spiritualität, weite Reisen, höhere Bildung, Ethik und die Suche nach Sinn.'
      },
      {
        index: 9,
        title: '10. Haus (Steinbock) – Berufung, Karriere & Lebensziel',
        shortLabel: 'X. Berufung (MC)',
        description: 'Gesellschaftliche Stellung, Lebensaufgabe, beruflicher Gipfel, Anerkennung und Verantwortung (Medium Coeli).'
      },
      {
        index: 10,
        title: '11. Haus (Wassermann) – Visionen, Freunde & Gemeinschaft',
        shortLabel: 'XI. Visionen & Freunde',
        description: 'Freundeskreis, Netzwerke, Gleichgesinnte, humanitäre Ideale, Hoffnungen und Zukunftsprojekte.'
      },
      {
        index: 11,
        title: '12. Haus (Fische) – Das Unbewusste, Transzendenz & Karma',
        shortLabel: 'XII. Transzendenz & Karma',
        description: 'Stille, Meditation, karmische Abschlüsse, verborgene Kräfte, Traumwelt und Einheitsbewusstsein.'
      }
    ]
  }
];
