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
  }
];
