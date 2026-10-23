import { ThothCard, SpreadId, ElementType } from '../../types/tarot';

export interface ReversedDynamic {
  blockedEnergy: string;
  internalizedFocus: string;
  hiddenOpportunity: string;
  unblockAdvice: string;
}

// Specific mappings for Major Arcana (Atu 0 to XXI)
const MAJOR_ARCANA_REVERSED: Record<string, ReversedDynamic> = {
  atu_0: {
    blockedEnergy: 'Zögern vor dem befreienden Sprung ins Unbekannte; Furcht vor Kontrollverlust oder unüberlegter Trotz.',
    internalizedFocus: 'Der Narr fordert dich auf, innerlich wieder kindliches Urvertrauen zu finden, statt dich von Versagensängsten lähmen zu lassen.',
    hiddenOpportunity: 'Die Chance, alte Dogmen und übertriebene Vorsicht abzulegen und einen mutigen Neubeginn aus tiefstem Herzen zu wagen.',
    unblockAdvice: 'Löse dich von der Erwartung, jeden Schritt vorausplanen zu müssen. Atme tief ein und vertraue dem kosmischen Fluss.'
  },
  atu_1: {
    blockedEnergy: 'Verzögerte Verwirklichung deiner Ideen; Zweifel an der eigenen Gestaltungskraft oder verstreute Willensenergie.',
    internalizedFocus: 'Du richtest die magische Schöpferkraft nach innen, um zunächst Klarheit über deine wahren Motive und Werkzeuge zu gewinnen.',
    hiddenOpportunity: 'Das Erkennen subtiler mentaler Selbsttäuschungen und die Reinigung deiner Absichten von Ego-Zwängen.',
    unblockAdvice: 'Fokussiere dich auf ein einziges klares Ziel. Sammle deine Gedanken und sprich deine Wahrheit unerschrocken aus.'
  },
  atu_2: {
    blockedEnergy: 'Verdrängte Intuition; Überhören leiser Ahnungen oder das Festhalten an Geheimnissen, die innerlich belasten.',
    internalizedFocus: 'Ein tiefer Rückzug in die eigene Seelenlandschaft; das Unbewusste verlangt nach stiller Einkehr ohne äußere Störung.',
    hiddenOpportunity: 'Eine tiefere Verbindung zu deinen Träumen und verborgenen Ahnungen aufzubauen, sobald du den Lärm der Welt ausschaltest.',
    unblockAdvice: 'Höre auf deine erste Eingebung, bevor der Verstand interveniert. Halte inne und meditiere am Rand des Wassers.'
  },
  atu_3: {
    blockedEnergy: 'Blockierte Schöpferkraft oder Vernachlässigung des eigenen Wohlbefindens; Mangel an Sinnlichkeit und Selbstfürsorge.',
    internalizedFocus: 'Die mütterliche nährende Energie muss dir selbst zuteilwerden, bevor du sie erneut an andere verschenken kannst.',
    hiddenOpportunity: 'Wiederentdeckung deiner tiefsten emotionalen Quellen und Heilung von Mangelgefühlen durch radikale Selbstliebe.',
    unblockAdvice: 'Erlaube dir Schönheit, Genuss und Ruhe ohne schlechtes Gewissen. Nähre Körper und Geist mit dem, was dir wahrhaft guttut.'
  },
  atu_4: {
    blockedEnergy: 'Widerstand gegen starre Autoritäten oder das Gefühl, die Kontrolle über dein Fundament zu verlieren.',
    internalizedFocus: 'Prüfung deiner inneren Disziplin: Regierst du dein eigenes Leben mit Weisheit oder mit unbewusster Strenge?',
    hiddenOpportunity: 'Etablierung einer flexiblen, lebendigen Ordnung anstelle von erstarrten Regeln.',
    unblockAdvice: 'Lasse verkrampften Kontrollzwang los. Wahre Souveränität entspringt innerer Ruhe, nicht erzwungener Macht.'
  },
  atu_5: {
    blockedEnergy: 'Infragestellung von Traditionen, Glaubenssätzen oder moralischen Dogmen; Zweifel an äußeren Lehrmeistern.',
    internalizedFocus: 'Die Suche nach deinem ganz eigenen spirituellen Kodex und einer unverfälschten Verbindung zum Höheren Selbst.',
    hiddenOpportunity: 'Befreiung von veralteten Vorstellungen und Entdeckung der inneren Einweihung.',
    unblockAdvice: 'Hinterfrage Autoritäten konstruktiv. Vertraue darauf, dass der weiseste Lehrer in deinem eigenen Herzen wohnt.'
  },
  atu_6: {
    blockedEnergy: 'Innere Zerrissenheit zwischen Herz und Verstand; Zögern bei einer existenziellen Entscheidung; Partnerschaftskonflikte.',
    internalizedFocus: 'Auseinandersetzung mit gegensätzlichen Seelenanteilen: Was verleugnest du in dir selbst?',
    hiddenOpportunity: 'Die Versöhnung innerer Widersprüche, die erst die Basis für wahrhaftige äußere Verbindungen schafft.',
    unblockAdvice: 'Entscheide dich aus dem Einklang mit deinem Wahren Willen. Vermeide faule Kompromisse, die deine Integrität schwächen.'
  },
  atu_7: {
    blockedEnergy: 'Gebremster Tatendrang; Richtungsstreit zwischen verschiedenen Kräften; Stillstand kurz vor dem Durchbruch.',
    internalizedFocus: 'Die Zügel deiner Emotionen und Triebe müssen im Inneren harmonisiert werden, bevor der Wagen rollen kann.',
    hiddenOpportunity: 'Kräftebündelung und Meisterung unkontrollierter Impulse für einen umso kraftvolleren Aufbruch.',
    unblockAdvice: 'Finde deine innere Mitte im Auge des Sturms. Erst wenn die Pferde in dieselbe Richtung blicken, gibst du das Startsignal.'
  },
  atu_8: {
    blockedEnergy: 'Gefühl von Ungerechtigkeit, Schieflage oder Verzögerung rechtlicher und karmischer Klärungen.',
    internalizedFocus: 'Prüfung deines inneren Gleichgewichts: Wo bist du mit dir selbst oder anderen ins Ungleichgewicht geraten?',
    hiddenOpportunity: 'Ehrliche Selbstkorrektur und das Wiederherstellen vollkommener Harmonie mit kosmischen Gesetzmäßigkeiten (Ma’at).',
    unblockAdvice: 'Blicke illusionslos auf Ursache und Wirkung. Übernimm Verantwortung für deinen Anteil und richte die Waage neu aus.'
  },
  atu_9: {
    blockedEnergy: 'Isolation und Einsamkeit statt heilsamer Einkehr; Angst davor, mit den eigenen Schatten allein zu sein.',
    internalizedFocus: 'Der Eremit leuchtet in die tiefsten Höhlen deiner Psyche. Was dort verborgen liegt, wartet auf Erlösung.',
    hiddenOpportunity: 'Gewinnung unerschütterlicher Weisheit und Loslösung von oberflächlicher sozialer Bestätigung.',
    unblockAdvice: 'Nutze das Alleinsein nicht als Flucht, sondern als heiligen Raum zur Selbstfindung. Teile dein Licht, sobald du bereit bist.'
  },
  atu_10: {
    blockedEnergy: 'Widerstand gegen unausweichlichen Wandel; Festhalten an Zyklen, die längst abgeschlossen sein sollten.',
    internalizedFocus: 'Erkennen des Rhythmus deines Lebens: Nicht jeder Moment ist für die Ernte bestimmt, manche dienen dem Stillstand der Wurzeln.',
    hiddenOpportunity: 'Das Meistern des Auf und Ab des Schicksals durch gelassene Zentrierung in der Achse des Rades.',
    unblockAdvice: 'Kämpfe nicht gegen die Gezeiten. Akzeptiere die Wendung und passe deine Segel dem neuen Wind an.'
  },
  atu_11: {
    blockedEnergy: 'Gedämpfte Lebenslust, unterdrückte Leidenschaft oder Scham über die eigene animalische Urkraft.',
    internalizedFocus: 'Die heilige Glut Babalons brennt im Verborgenen. Deine Sehnsucht nach Intensität verlangt nach Annahme ohne Schuldgefühle.',
    hiddenOpportunity: 'Transformation von Ängsten in pure Lebensfreude und mutige Hingabe an das Dasein.',
    unblockAdvice: 'Umarme deine Leidenschaft und Wildheit. Wahre Stärke entsteht, wenn du deine Triebe nicht bekämpfst, sondern veredelst.'
  },
  atu_12: {
    blockedEnergy: 'Unfreiwilliger Stillstand, Opferhaltung oder das Gefühl, in einer Zwangslage festzustecken.',
    internalizedFocus: 'Die Einladung zu einem radikalen Perspektivwechsel: Wenn du die Welt auf den Kopf stellst, siehst du die Wahrheit.',
    hiddenOpportunity: 'Erlösende Hingabe an einen höheren Prozess, der durch menschlichen Willen nicht erzwungen werden kann.',
    unblockAdvice: 'Höre auf, gegen die Fesseln anzukämpfen. Halte still und betrachte die Situation aus einem völlig neuen Blickwinkel.'
  },
  atu_13: {
    blockedEnergy: 'Zäher Widerstand gegen das Loslassen; Angst vor Verlust und dem Ende eines vertrauten Lebenskapitels.',
    internalizedFocus: 'Ein tiefer innerer Abschiedsprozess, der unbewusst abläuft und Raum für die Wiedergeburt vorbereitet.',
    hiddenOpportunity: 'Die radikale Befreiung von Ballast und die Verwandlung von verwelkten Hoffnungen in fruchtbaren Nährboden.',
    unblockAdvice: 'Lass das Tote begraben sein. Nur wer loslässt, hat beide Hände frei für das Neue, das bereits an deine Tür klopft.'
  },
  atu_14: {
    blockedEnergy: 'Ungeduld bei der alchemistischen Verschmelzung; Disharmonie gegensätzlicher Pole; Überstürzung delikater Prozesse.',
    internalizedFocus: 'Die Kunst verlangt, dass du Feuer und Wasser in deiner eigenen Seele behutsam zur Synthese bringst.',
    hiddenOpportunity: 'Die Reifung eines wahrhaft dauerhaften Meisterwerks durch Geduld und kontinuierliches Läutern.',
    unblockAdvice: 'Erzwinge kein schnelles Ergebnis. Gib der alchemistischen Verwandlung die Zeit, die sie zur Perfektion benötigt.'
  },
  atu_15: {
    blockedEnergy: 'Erkennen von materiellen, emotionalen oder gedanklichen Abhängigkeiten; Schattenthemen drängen ans Licht.',
    internalizedFocus: 'Du wirst aufgefordert, deine Projektionen und inneren Ketten zu durchschauen. Pan lacht über die Illusion der Begrenzung.',
    hiddenOpportunity: 'Der Beginn der wirklichen Befreiung: Wer die Natur seiner Illusion erkennt, kann die Fesseln mühelos abstreifen.',
    unblockAdvice: 'Sieh deiner Angst und deinen Begierden mit Humor und Unerschrockenheit ins Auge. Du bist niemals gefangen, außer im eigenen Geist.'
  },
  atu_16: {
    blockedEnergy: 'Ein hinausgezögerter Zusammenbruch; das verzweifelte Aufrechterhalten von Fassaden, die nicht mehr tragen.',
    internalizedFocus: 'Die Erschütterung vollzieht sich zunächst als inneres Beben, um dein Bewusstsein aus starren Glaubensgefängnissen zu reißen.',
    hiddenOpportunity: 'Die sofortige Befreiung von falschen Fundamenten für einen authentischen Neuanfang auf nacktem, reinem Boden.',
    unblockAdvice: 'Halte nicht an zerbröckelnden Mauern fest. Begrüße den Blitz des Horus als reinigenden Akt der kosmischen Wahrheit.'
  },
  atu_17: {
    blockedEnergy: 'Vorübergehend getrübte Hoffnung; Selbstzweifel und Pessimismus verdecken den Blick auf deine Sterne.',
    internalizedFocus: 'Die himmlische Quelle fließt ununterbrochen im Inneren, wartet aber darauf, dass du deine Schale wieder öffnest.',
    hiddenOpportunity: 'Die Wiederentdeckung deines unzerstörbaren Urvertrauens, selbst wenn die Nacht noch dunkel erscheint.',
    unblockAdvice: 'Lass dich nicht von momentanen Verzögerungen entmutigen. Richte deinen Blick auf dein langfristiges Leitstern-Ideal.'
  },
  atu_18: {
    blockedEnergy: 'Verstrickung in Illusionen, Albträume, diffuse Ängste oder emotionale Täuschungen.',
    internalizedFocus: 'Eine Reise durch das unbewusste Nachtmeer: Schatten und Verdrängtes fordern dein Mitgefühl und deine Wachheit.',
    hiddenOpportunity: 'Das Durchqueren der Pforten des Todes und der Wiedergeburt zur Entdeckung deiner tiefsten schöpferischen Urquellen.',
    unblockAdvice: 'Glaube nicht jedem Gespenst, das dir die Angst vorspiegelt. Gehe behutsam weiter durch die Nacht; die Morgendämmerung naht.'
  },
  atu_19: {
    blockedEnergy: 'Gedämpfte Lebensfreude, Vitalitätsverlust oder das Gefühl, dein Licht unter den Scheffel stellen zu müssen.',
    internalizedFocus: 'Das innere Sonnenkind ruft nach Anerkennung, Vergebung und unbeschwerter Wärme von innen heraus.',
    hiddenOpportunity: 'Das Entwickeln von anhaltender Herzenswärme, die unabhängig von äußerem Beifall aus eigener Fülle strahlt.',
    unblockAdvice: 'Verzeih dir vergangene Fehler. Tritt aus den Schatten deiner Zweifel heraus und erlaube dir, zu strahlen.'
  },
  atu_20: {
    blockedEnergy: 'Zögern vor dem Weckruf zu einem höheren Bewusstsein; Festhalten an überholten Paradigmen und Urteilen.',
    internalizedFocus: 'Ein tiefgreifender innerer Paradigmenwechsel: Das Kind Horus erwacht in dir und fordert eine neue Perspektive.',
    hiddenOpportunity: 'Die endgültige Loslösung von alter Schuld und der Eintritt in ein selbstbestimmtes Zeitalter deines Daseins.',
    unblockAdvice: 'Höre den Ruf deines Wahren Willens. Lass vergangene Urteile hinter dir und betritt die neue Ära erhobenen Hauptes.'
  },
  atu_21: {
    blockedEnergy: 'Verzögerung der finalen Vollendung; Prüfungsangst kurz vor dem Ziel oder Furcht vor der Leere nach dem Abschluss.',
    internalizedFocus: 'Die letzte Integration aller Erfahrungen zu einem ganzheitlichen Bild deines Lebensmosaiks.',
    hiddenOpportunity: 'Die Meisterschaft über alle vier Elemente und die vollkommene Verwirklichung deiner Seelenaufgabe.',
    unblockAdvice: 'Vollende die letzten Details mit Hingabe. Zweifle nicht kurz vor der Ziellinie – das Universum tanzt für dich.'
  }
};

// Suit and Element based reversed dynamics
function getElementReversedDynamic(element: ElementType, suit?: string): ReversedDynamic {
  switch (element) {
    case 'Feuer':
      return {
        blockedEnergy: 'Aufgestaute Tatkraft, Ungeduld oder zögerliche Führung; der Feuerimpuls verglimmt innerlich oder brennt als Rastlosigkeit.',
        internalizedFocus: 'Die Flamme brennt nach innen: Reinigung deiner Motivationen und Rückbesinnung auf deinen wahren, unverfälschten Willen.',
        hiddenOpportunity: 'Aufbau von Ausdauer und tiefgreifender Entschlossenheit, anstatt die Energie in vorschnellem Aktionismus zu verpuffen.',
        unblockAdvice: 'Finde ein konstruktives Ventil für deine Leidenschaft. Handle aus gesammelter Kraft statt aus impulsivem Trotz.'
      };
    case 'Wasser':
      return {
        blockedEnergy: 'Zurückgehaltene Gefühle, Verschließen des Herzens vor Verletzlichkeit, ungelöste Sehnsüchte oder emotionale Stagnation.',
        internalizedFocus: 'Tiefseetauchen der Seele: Die Gefühle verlangen nach stiller Anerkennung, Selbstmitgefühl und innerer Klärung.',
        hiddenOpportunity: 'Befreiung von emotionalen Abhängigkeiten und das Finden deiner unerschöpflichen inneren Quelle der Geborgenheit.',
        unblockAdvice: 'Erlaube dir, zu fühlen, ohne dich selbst zu verurteilen. Teile deine Empfindungen behutsam mit Menschen, denen du vertraust.'
      };
    case 'Luft':
      return {
        blockedEnergy: 'Gedankenkarussell, mentale Verkrampfung, Zweifel an der eigenen Urteilskraft oder unausgesprochene Wahrheiten.',
        internalizedFocus: 'Der Intellekt seziert sich selbst: Reflexion deiner Annahmen und Befreiung von geistigen Schimären.',
        hiddenOpportunity: 'Erreichen echter geistiger Klarheit jenseits von Dogmen und angstgetriebenen Szenarien.',
        unblockAdvice: 'Bringe Ruhe in dein Denken durch Atemübungen und Meditation. Schneide Verwirrung mit dem Schwert der Wahrheit ab.'
      };
    case 'Erde':
    default:
      return {
        blockedEnergy: 'Materielle oder körperliche Verzögerung, Feststecken in Routinen, übertriebene Sorge um Sicherheit oder ungenutzte Talente.',
        internalizedFocus: 'Verankerung deiner inneren Werte: Was gibt dir wahrhaft Halt, wenn materielle Illusionen schwinden?',
        hiddenOpportunity: 'Schaffung eines unzerstörbaren inneren Reichtums und geduldiger Aufbau tragfähiger Strukturen.',
        unblockAdvice: 'Bewege dich Schritt für Schritt vorwärts. Ehre deinen Körper, erde dich in der Natur und vertraue dem Gesetz des Wachstums.'
      };
  }
}

// Crowley Title Nuances for Minor Arcana
function getCrowleyTitleNuance(thothTitle?: string): string {
  if (!thothTitle) return '';
  const lower = thothTitle.toLowerCase();

  if (lower.includes('herrschaft') || lower.includes('dominanz')) {
    return 'Reversed: Widerstand gegen Bevormundung oder die Herausforderung, die Führung über das eigene Gemüt zurückzugewinnen.';
  }
  if (lower.includes('tugend')) {
    return 'Reversed: Der innere moralische Kompass wird geprüft; es gilt, Heuchelei zu meiden und ehrliche Selbstintegrität zu wahren.';
  }
  if (lower.includes('sieg')) {
    return 'Reversed: Verzögerter äußerer Triumph; der wahre Sieg muss zunächst im Inneren über die eigenen Zweifel errungen werden.';
  }
  if (lower.includes('mut') || lower.includes('stärke')) {
    return 'Reversed: Vorübergehendes Nachlassen der Zuversicht; lade deine Kraftreserven in der Stille auf.';
  }
  if (lower.includes('schnelligkeit')) {
    return 'Reversed: Notwendige Entschleunigung; ein Aufschub schützt vor folgenschweren Kurzschlusshandlungen.';
  }
  if (lower.includes('unterdrückung')) {
    return 'Reversed: Der Höhepunkt der Belastung ist erreicht; die Last beginnt sich zu lichten, wenn du unnötige Bürden abwirfst.';
  }
  if (lower.includes('liebe')) {
    return 'Reversed: Bedürfnis nach Selbstliebe; emotionale Enttäuschungen können heilen, wenn du dein Herz nicht verschließt.';
  }
  if (lower.includes('überfluss')) {
    return 'Reversed: Unbemerkt gebliebener innerer Reichtum; lerne wertzuschätzen, was bereits in deinem Leben blüht.';
  }
  if (lower.includes('kummer') || lower.includes('enttäuschung')) {
    return 'Reversed: Die Talsohle des Schmerzes ist durchschritten; die Wunden beginnen von innen heraus zu vernarben.';
  }
  if (lower.includes('freude')) {
    return 'Reversed: Versteckte Lebensfreude, die unter Sorgen verborgen liegt; erlaube dir Momente des Lachens.';
  }
  if (lower.includes('sättigung') || lower.includes('vollendung')) {
    return 'Reversed: Trägheit nach der Zielerreichung; bereite dich im Stillen auf den nächsten Zyklus vor.';
  }
  if (lower.includes('ruhe') || lower.includes('waffenstillstand')) {
    return 'Reversed: Brüchiger Frieden oder innere Unruhe; sorge für authentische Erholung ohne Scheinharmonie.';
  }
  if (lower.includes('niederlage') || lower.includes('verderben')) {
    return 'Reversed: Die Angst vor dem Scheitern verliert ihre Macht; das Schlimmste liegt hinter dir, der Wiederaufbau beginnt.';
  }
  if (lower.includes('erfolg') || lower.includes('gewinn') || lower.includes('wohlstand')) {
    return 'Reversed: Materielle Verzögerung oder Fehleinschätzung des Werts; investiere zunächst in dein inneres Kapital.';
  }
  if (lower.includes('sorge')) {
    return 'Reversed: Unbegründete Ängste vor Mangel; erkenne, dass deine Sorgen größer sind als die tatsächliche Realität.';
  }
  if (lower.includes('fehlschlag')) {
    return 'Reversed: Eine wertvolle Lektion offenbart sich; was wie ein Verlust schien, bewahrt dich vor einem größeren Irrweg.';
  }
  return '';
}

/**
 * Returns comprehensive reversed dynamic tailored to card, spread, and position.
 */
export function getReversedCardDynamic(
  card: ThothCard,
  spreadId: SpreadId,
  positionIndex: number
): ReversedDynamic {
  // Check Major Arcana dictionary
  const majorDynamic = MAJOR_ARCANA_REVERSED[card.id];
  if (majorDynamic) {
    return majorDynamic;
  }

  // Generate dynamic from Suit, Element, and Crowley Title
  const base = getElementReversedDynamic(card.element, card.suit);
  const nuance = getCrowleyTitleNuance(card.thothTitle);

  if (nuance) {
    return {
      blockedEnergy: `${base.blockedEnergy} (${nuance})`,
      internalizedFocus: base.internalizedFocus,
      hiddenOpportunity: base.hiddenOpportunity,
      unblockAdvice: base.unblockAdvice
    };
  }

  return base;
}
