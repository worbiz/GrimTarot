import { ThothCard } from '../types/tarot';

export const THOTH_DECK: ThothCard[] = [
  // ==========================================
  // MAJOR ARCANA (ATU) - 22 CARDS
  // ==========================================
  {
    id: 'atu-0',
    number: 0,
    nameGerman: 'Der Narr',
    nameEnglish: 'The Fool',
    arcana: 'major',
    element: 'Luft',
    astrology: 'Uranus / Element Luft',
    hebrewLetter: 'Aleph (א)',
    keywords: ['Unergiebiger Neuanfang', 'Schöpferische Leere', 'Reine Potenzialität', 'Göttlicher Wahn', 'Urvertrauen'],
    description: 'Der Narr repräsentiert den Ur-Impuls des Lebens, den Gott Bacchus / Dionysos, das grüne Kind des Frühlings. Er tanzt sorglos am Abgrund, umgeben von der Spirale des Kosmos. Er schert sich nicht um Konventionen, sondern folgt dem Ruf des reinen Geistes.',
    uprightMeaning: {
      general: 'Neuanfang mit offenem Herzen, unvoreingenommenes Herangehen, Vertrauen in das Unbekannte.',
      love: 'Frischer Wind in Herzensangelegenheiten, unkonventionelle Begegnungen, Freiheit in der Liebe.',
      career: 'Neue Pfade betreten, innovative Ideen ohne Angst vor Fehlschlägen wagen.',
      advice: 'Lass alte Bedenken los. Springe ins Ungewisse und vertraue deinen Intuitionen.'
    },
    shadowMeaning: 'Naivität, Leichtsinn, Unverantwortlichkeit, Flucht vor der Realität, Narrenfreiheit ohne Verstand.',
    colorTheme: {
      primary: '#EAB308',
      secondary: '#06B6D4',
      border: '#FACC15',
      bgGradient: 'from-amber-950 via-slate-900 to-cyan-950'
    }
  },
  {
    id: 'atu-1',
    number: 'I',
    nameGerman: 'Der Magier',
    nameEnglish: 'The Magus',
    arcana: 'major',
    element: 'Luft',
    astrology: 'Merkur',
    hebrewLetter: 'Beth (ב)',
    keywords: ['Fokussierter Wille', 'Kommunikation', 'Manifestation', 'Magie der Sprache', 'Geschicklichkeit'],
    description: 'Der Magus (Thoth/Hermes) beherrscht die Elemente. Er balanciert auf den Schwingungen der Zeit und nutzt Worte, Geist und Symbole, um die Wirklichkeit nach seinem Willen zu gestalten.',
    uprightMeaning: {
      general: 'Kreative Kraft, gewandte Artikulation, Meisterschaft der eigenen Fähigkeiten, bewusste Gestaltung.',
      love: 'Klarheit im Dialog, bezaubernde Ausstrahlung, aktiv den ersten Schritt machen.',
      career: 'Erfolgreiche Verhandlungen, Projektumsetzung, überzeugendes Auftreten.',
      advice: 'Nutze deine Wortgewandtheit und mentale Schärfe. Handle entschlossen.'
    },
    shadowMeaning: 'Trickserei, Manipulation, Illusionen schüren, leere Versprechungen, Missbrauch von Macht.',
    colorTheme: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      border: '#60A5FA',
      bgGradient: 'from-blue-950 via-purple-950 to-slate-900'
    }
  },
  {
    id: 'atu-2',
    number: 'II',
    nameGerman: 'Die Hohepriesterin',
    nameEnglish: 'The Priestess',
    arcana: 'major',
    element: 'Wasser',
    astrology: 'Mond',
    hebrewLetter: 'Gimel (ג)',
    keywords: ['Intuition', 'Verborgenes Wissen', 'Traumwelt', 'Empfänglichkeit', 'Die Schleiermagie'],
    description: 'Die Priesterin sitzt hinter dem Lichtschleier der Isis. Sie hütet das unbewusste Wissen, die Gezeiten der Seele und die geheimnisvolle Weisheit der Nacht.',
    uprightMeaning: {
      general: 'Innere Einkehr, auf Träume und Vorahnungen hören, Geduld vor der Handlung.',
      love: 'Tiefe seelische Verbundenheit, geheimnisvolle Anziehung, emotionale Feinfühligkeit.',
      career: 'Hinter die Kulissen blicken, geheime Informationen richtig deuten, Abwarten.',
      advice: 'Vertraue deiner inneren Stimme. Die Antworten liegen bereits in deinem Unbewussten.'
    },
    shadowMeaning: 'Passivität, Verheimlichung, Illusionen, Kälte, Abkapselung von der Realität.',
    colorTheme: {
      primary: '#38BDF8',
      secondary: '#818CF8',
      border: '#7DD3FC',
      bgGradient: 'from-sky-950 via-indigo-950 to-slate-900'
    }
  },
  {
    id: 'atu-3',
    number: 'III',
    nameGerman: 'Die Kaiserin',
    nameEnglish: 'The Empress',
    arcana: 'major',
    element: 'Erde',
    astrology: 'Venus',
    hebrewLetter: 'Daleth (ד)',
    keywords: ['Mütterliche Fülle', 'Sinnlichkeit', 'Kreativität', 'Naturkraft', 'Liebe & Wachstum'],
    description: 'Die Kaiserin ist die Priesterin der Liebe und Fruchtbarkeit. Sie verkörpert das blühende Leben, die Tore der Gebärfehigkeit und die schöpferische Harmonie der Venus.',
    uprightMeaning: {
      general: 'Wachstum, kreativer Überfluss, Geborgenheit, Genuss der Sinne.',
      love: 'Herzliche Zuneigung, tiefe Sinnlichkeit, Erfüllung in Beziehungen.',
      career: 'Erfolgreiche Projekte, fruchtbare Zusammenarbeit, kreative Höchstform.',
      advice: 'Entfalte deine Schöpferkraft. Pflege deine Ideen mit Fürsorge und Sinnlichkeit.'
    },
    shadowMeaning: 'Gefühlsüberforderung, Possessivität, Besitzdenken, Unmut, kreative Blockade.',
    colorTheme: {
      primary: '#EC4899',
      secondary: '#10B981',
      border: '#F472B6',
      bgGradient: 'from-pink-950 via-emerald-950 to-slate-900'
    }
  },
  {
    id: 'atu-4',
    number: 'IV',
    nameGerman: 'Der Kaiser',
    nameEnglish: 'The Emperor',
    arcana: 'major',
    element: 'Feuer',
    astrology: 'Widder',
    hebrewLetter: 'Tzaddi (צ)',
    keywords: ['Struktur', 'Autorität', 'Ordnung', 'Pioniergeist', 'Führungsstärke'],
    description: 'Der Kaiser ist das feurige Prinzip von Gesetz und Fundament. Er gibt wilden Ideen feste Formen und erschafft ein dauerhaftes Reich durch Wille und Ordnung.',
    uprightMeaning: {
      general: 'Klarheit schaffen, Verantwortung übernehmen, Disziplin und strategische Planung.',
      love: 'Verlässlichkeit, Stabilität, klare Grenzen setzen und Sicherheit bieten.',
      career: 'Führungsposition behaupten, Strukturen aufbauen, Projekte koordinieren.',
      advice: 'Setze klare Grenzen und ziehe deine Vorhaben mit konsequenter Struktur durch.'
    },
    shadowMeaning: 'Starrheit, Tyrannei, stures Festhalten an Regeln, Machtdemonstration.',
    colorTheme: {
      primary: '#EF4444',
      secondary: '#F97316',
      border: '#F87171',
      bgGradient: 'from-red-950 via-orange-950 to-slate-900'
    }
  },
  {
    id: 'atu-5',
    number: 'V',
    nameGerman: 'Der Hohepriester',
    nameEnglish: 'The Hierophant',
    arcana: 'major',
    element: 'Erde',
    astrology: 'Stier',
    hebrewLetter: 'Vau (ו)',
    keywords: ['Spannungsfeld der Tradition', 'Lehre & Einweihung', 'Glaube', 'Sinnsuche', 'Innere Weisheit'],
    description: 'Der Hierophant verbindet das Menschliche mit dem Göttlichen. Er hütet die Mysterien und lehrt, dass wahres Wissen erst durch Erfahrung verinnerlicht wird.',
    uprightMeaning: {
      general: 'Sinnsuche, Erlernen von Weisheitslehren, Vertrauen in höhere Gesetze.',
      love: 'Gemeinsame Werte teilen, traditionelle Verbundenheit, tiefes Vertrauen.',
      career: 'Mentorenschaft, Ethik im Handeln, fundamentale Ausbildung und Weiterbildung.',
      advice: 'Suche nach dem tiefere Sinn hinter den Ereignissen. Stehe zu deinen Grundwerten.'
    },
    shadowMeaning: 'Dogmatismus, blinde Gläubigkeit, Scheinheiligkeit, Unflexibilität.',
    colorTheme: {
      primary: '#D97706',
      secondary: '#B45309',
      border: '#FBBF24',
      bgGradient: 'from-amber-950 via-yellow-950 to-stone-900'
    }
  },
  {
    id: 'atu-6',
    number: 'VI',
    nameGerman: 'Die Liebenden',
    nameEnglish: 'The Lovers',
    arcana: 'major',
    element: 'Luft',
    astrology: 'Zwillinge',
    hebrewLetter: 'Zain (ז)',
    keywords: ['Vereinigung von Gegensätzen', 'Alchemistische Hochzeit', 'Freie Entscheidung', 'Anziehung'],
    description: 'Die Liebenden im Thoth Tarot zeigen die alchemistische Hochzeit von König und Königin unter dem Adler und Löwen. Es ist das Zusammenspiel dualer Kräfte zur höchsten Einheit.',
    uprightMeaning: {
      general: 'Herzentscheidung treffen, Gegensätze in Harmonie bringen, tiefe Verbindung.',
      love: 'Romantische Verschmelzung, kompromisslose Sehnsucht, Wahl der wahren Liebe.',
      career: 'Partnerschaften auf Augenhöhe, Synergieeffekte nutzen, klare Wahl treffen.',
      advice: 'Treffe deine Entscheidung aus ganzem Herzen. Verbinde Verstand und Gefühl.'
    },
    shadowMeaning: 'Zwiespalt, Entzweiung, Abhängigkeit, Angst vor Bindung oder Entscheidung.',
    colorTheme: {
      primary: '#A855F7',
      secondary: '#EC4899',
      border: '#C084FC',
      bgGradient: 'from-purple-950 via-pink-950 to-slate-900'
    }
  },
  {
    id: 'atu-7',
    number: 'VII',
    nameGerman: 'Der Wagen',
    nameEnglish: 'The Chariot',
    arcana: 'major',
    element: 'Wasser',
    astrology: 'Krebs',
    hebrewLetter: 'Cheth (ח)',
    keywords: ['Triumphaler Aufbruch', 'Selbstbeherrschung', 'Fokussierter Siegeszug', 'Schutzpanzer'],
    description: 'Der Krieger im bernsteinfarbenen Harnisch lenkt den Wagen, gezogen von vier Sphinxen. Er überwindet Gegensätze und bricht auf zu neuen Horizonten.',
    uprightMeaning: {
      general: 'Zielstrebigkeit, Hindernisse überwinden, dynamischer Vorwärtsdrang.',
      love: 'Eroberung, gemeinsame Ziele ansteuern, Hürden gemeinsam überwinden.',
      career: 'Durchbruch, Karrieresprung, entschlossenes Durchsetzen eigener Vorhaben.',
      advice: 'Behalte die Zügel fest in der Hand. Lass dich durch nichts vom Kurs abbringen.'
    },
    shadowMeaning: 'Machtdemonstration, Rücksichtslosigkeit, Kontrollwahn, Orientierungslosigkeit.',
    colorTheme: {
      primary: '#0284C7',
      secondary: '#2563EB',
      border: '#38BDF8',
      bgGradient: 'from-sky-950 via-blue-950 to-zinc-900'
    }
  },
  {
    id: 'atu-8',
    number: 'VIII',
    nameGerman: 'Ausgleichung',
    nameEnglish: 'Adjustment',
    arcana: 'major',
    element: 'Luft',
    astrology: 'Waage',
    hebrewLetter: 'Lamed (ל)',
    keywords: ['Kosmisches Gleichgewicht', 'Karma', 'Kardinale Gerechtigkeit', 'Wahrheit', 'Urteilskraft'],
    description: 'Crowley benannte die traditionelle Gerechtigkeit um in "Ausgleichung". Ma’at steht auf den Zehenspitzen der Waage und balanciert das Schwert der Wahrheit perfekt im Zentrumsstrahl.',
    uprightMeaning: {
      general: 'Ursache und Wirkung erkennen, faire Beurteilung, innere Balance wiederherstellen.',
      love: 'Ehrlichkeit, Beziehungen auf Augenhöhe, Klärung von Missverständnissen.',
      career: 'Vertragliche Klarheit, objektive Auswertung, ausgetragener Ausgleich.',
      advice: 'Sei absolut ehrlich zu dir selbst. Reagiere nüchtern und sachlich.'
    },
    shadowMeaning: 'Ungerechtigkeit, Selbstbetrug, Vorurteile, Korruption, Kälte.',
    colorTheme: {
      primary: '#10B981',
      secondary: '#06B6D4',
      border: '#34D399',
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-900'
    }
  },
  {
    id: 'atu-9',
    number: 'IX',
    nameGerman: 'Der Eremit',
    nameEnglish: 'The Hermit',
    arcana: 'major',
    element: 'Erde',
    astrology: 'Jungfrau',
    hebrewLetter: 'Yod (י)',
    keywords: ['Innere Einkehr', 'Rückzug', 'Seelenlicht', 'Erleuchtung', 'Fokussierte Stille'],
    description: 'Der Eremit trägt die Laterne mit dem verborgenen Ei der Schöpfung. Cerberus folgt ihm. Er zieht sich in die Dunkelheit zurück, um das innere Licht zu finden.',
    uprightMeaning: {
      general: 'Rückzug aus dem Lärm der Welt, Selbsterkenntnis, Reifungsprozess.',
      love: 'Zeit für sich selbst brauchen, eigene Wünsche klären, tiefere Reife.',
      career: 'Spezialisierung, ungestörtes Arbeiten, eigene Visionen vertiefen.',
      advice: 'Gönne dir eine Pause vom Trubel. Die Erkenntnis reift in der Stille.'
    },
    shadowMeaning: 'Vereinsamung, Bitterkeit, Sturheit, Isolierung, Weltfremdheit.',
    colorTheme: {
      primary: '#84CC16',
      secondary: '#65A30D',
      border: '#A3E635',
      bgGradient: 'from-lime-950 via-stone-900 to-slate-950'
    }
  },
  {
    id: 'atu-10',
    number: 'X',
    nameGerman: 'Glücksrad',
    nameEnglish: 'Fortune',
    arcana: 'major',
    element: 'Feuer',
    astrology: 'Jupiter',
    hebrewLetter: 'Kaph (כ)',
    keywords: ['Kosmische Zyklen', 'Wandlung', 'Schicksalswende', 'Glückliche Fügung', 'Perpetuum Mobile'],
    description: 'Das Rad des Schicksals wird von der Sphinx, Hermanubis und Typhon umkreist. Es zeigt die ewige Bewegung des Universums und den Auf- und Abstieg aller Dinge.',
    uprightMeaning: {
      general: 'Wendepunkt zum Positiven, Chancen ergreifen, Akzeptanz des Wandels.',
      love: 'Schicksalhafte Begegnung, frischer Schwung, Weiterentwicklung.',
      career: 'Glückliche Wendung, neue Gelegenheiten, geschäftlicher Durchbruch.',
      advice: 'Nimm die Veränderung als Geschenk an. Nutze den Rückenwind des Schicksals.'
    },
    shadowMeaning: 'Pessimismus, Widerstand gegen Veränderung, Unglückssträhne verharmlosen.',
    colorTheme: {
      primary: '#F59E0B',
      secondary: '#EAB308',
      border: '#FBBF24',
      bgGradient: 'from-amber-950 via-orange-950 to-neutral-900'
    }
  },
  {
    id: 'atu-11',
    number: 'XI',
    nameGerman: 'Lust',
    nameEnglish: 'Lust',
    arcana: 'major',
    element: 'Feuer',
    astrology: 'Löwe',
    hebrewLetter: 'Teth (ת)',
    keywords: ['Ekstatische Lebenskraft', 'Leidenschaft', 'Bändigung durch Liebe', 'Sinnlicher Mut'],
    description: 'Im Thoth Tarot heißt Kraft "Lust". Babalon reitet auf dem siebenköpfigen Tier mit dem Kelch des Ekstase. Sie bezwingt die Bestie nicht durch Gewalt, sondern durch sanfte, brennende Hingabe.',
    uprightMeaning: {
      general: 'Vitalität, Mut, leidenschaftlicher Tatendrang, Freude am Dasein.',
      love: 'Erfüllte Erotik, feurige Anziehungskraft, kompromisslose Hingabe.',
      career: 'Projekt mit Leidenschaft vorantreiben, Selbstbewusstsein ausstrahlen.',
      advice: 'Stehe zu deiner Leidenschaft. Nutze deine feurige Energie ohne Angst.'
    },
    shadowMeaning: 'Zügellosigkeit, Rausch, Selbstüberschätzung, Ausbeutung von Energie.',
    colorTheme: {
      primary: '#DC2626',
      secondary: '#B91C1C',
      border: '#EF4444',
      bgGradient: 'from-red-950 via-rose-950 to-slate-900'
    }
  },
  {
    id: 'atu-12',
    number: 'XII',
    nameGerman: 'Der Gehängte',
    nameEnglish: 'The Hanged Man',
    arcana: 'major',
    element: 'Wasser',
    astrology: 'Element Wasser',
    hebrewLetter: 'Mem (מ)',
    keywords: ['Perspektivenwechsel', 'Hingabe', 'Freiwilliges Opfer', 'Stillstand zur Transformation'],
    description: 'Der Gehängte hängt an einem Lebensbaum-Symbol im Wasser. Er ist das Opfer des Egos zur Erlangung geistiger Erleuchtung und tieferer Einsicht.',
    uprightMeaning: {
      general: 'Dinge aus neuem Blickwinkel sehen, Altes loslassen, Geduld im Stillstand.',
      love: 'Opferbereitschaft, festgefahrene Muster durch neue Sichtweisen auflösen.',
      career: 'Denkpause einlegen, Umdenken erforderlich, Entschleunigung.',
      advice: 'Erzwinge nichts. Halte inne und betrachte die Situation von unten nach oben.'
    },
    shadowMeaning: 'Opferrolle, Lähmung, sturer Widerstand, vergebliche Mühe.',
    colorTheme: {
      primary: '#06B6D4',
      secondary: '#0891B2',
      border: '#22D3EE',
      bgGradient: 'from-cyan-950 via-teal-950 to-slate-900'
    }
  },
  {
    id: 'atu-13',
    number: 'XIII',
    nameGerman: 'Tod',
    nameEnglish: 'Death',
    arcana: 'major',
    element: 'Wasser',
    astrology: 'Skorpion',
    hebrewLetter: 'Nun (נ)',
    keywords: ['Erneuerung', 'Transmutation', 'Abschied vom Alten', 'Skelett-Tanz', 'Auferstehung'],
    description: 'Der Sensenmann tanz auf dem Grund des Ozeans. Er schneidet alte Bindungen ab, um Raum für die Transformation zum Adler und Skorpion der Wiedergeburt zu schaffen.',
    uprightMeaning: {
      general: 'Notwendiger Endpunkt, Loslassen von Überholtem, Raum für Neues schaffen.',
      love: 'Ende einer ungesunden Phase, radikaler Wandel in der Beziehung.',
      career: 'Abschluss eines Kapitels, Berufswechsel, Bereinigung von Altlasten.',
      advice: 'Halte nicht an Tottem fest. Lass das Alte sterben, damit das Neue wachsen kann.'
    },
    shadowMeaning: 'Angst vor Veränderung, verzweifeltes Festhalten, Stagnation, Phantomschmerz.',
    colorTheme: {
      primary: '#6B21A8',
      secondary: '#4C1D95',
      border: '#A855F7',
      bgGradient: 'from-purple-950 via-neutral-950 to-slate-900'
    }
  },
  {
    id: 'atu-14',
    number: 'XIV',
    nameGerman: 'Kunst',
    nameEnglish: 'Art',
    arcana: 'major',
    element: 'Feuer',
    astrology: 'Schütze',
    hebrewLetter: 'Samekh (ס)',
    keywords: ['Alchemistische Synthese', 'Symmetrie', 'Innere Harmonie', 'Verschmelzung', 'Meisterschaft'],
    description: 'Die traditionelle Mäßigung heißt bei Crowley "Kunst". Die zweiköpfige alchemistische Figur gießt Feuer in Wasser und mischt die Elemente zum Lebenselixier.',
    uprightMeaning: {
      general: 'Innere Ausgewogenheit, meisterhafte Kombination von Gegensätzen, kreative Synthese.',
      love: 'Perfekte Ergänzung, tiefes gegenseitiges Verständnis, Harmonie.',
      career: 'Verschiedene Ansätze gewinnbringend vereinen, feines Gespür für Timing.',
      advice: 'Mische die Zutaten deines Lebens mit Bedacht. Finde die richtige Balance.'
    },
    shadowMeaning: 'Unharmonie, Übermaß, falsches Gemisch, Zerrissenheit.',
    colorTheme: {
      primary: '#F97316',
      secondary: '#D97706',
      border: '#FB923C',
      bgGradient: 'from-orange-950 via-amber-950 to-slate-900'
    }
  },
  {
    id: 'atu-15',
    number: 'XV',
    nameGerman: 'Der Teufel',
    nameEnglish: 'The Devil',
    arcana: 'major',
    element: 'Erde',
    astrology: 'Steinbock',
    hebrewLetter: 'Ayin (ע)',
    keywords: ['Materieller Schein', 'Humorvolle Entlarvung', 'Schattenintegration', 'Pan', 'Triebkraft'],
    description: 'Pan schaut verschmitzt durch das dritte Auge auf dem Steinbockschädel. Crowley sah im Teufel nicht das Böse, sondern die ungezähmte Schöpferkraft der Materie und das Lachen über Illusionen.',
    uprightMeaning: {
      general: 'Erkennen eigener Bindungen, Entlarvung von Zwängen, Humor gegenüber eigenen Schatten.',
      love: 'Starke physische Anziehung, Leidenschaft, aber Gefahr von Besitzansprüchen.',
      career: 'Geld und Materie pragmatisch nutzen, Verstrickungen durchschauen.',
      advice: 'Schau deinem Schatten mit Humor ins Gesicht. Befreie dich von selbstgemachten Ketten.'
    },
    shadowMeaning: 'Sucht, Selbstbeschränkung, gierige Verstrickung, Machtmissbrauch.',
    colorTheme: {
      primary: '#78350F',
      secondary: '#451A03',
      border: '#B45309',
      bgGradient: 'from-stone-950 via-amber-950 to-neutral-900'
    }
  },
  {
    id: 'atu-16',
    number: 'XVI',
    nameGerman: 'Der Turm',
    nameEnglish: 'The Tower',
    arcana: 'major',
    element: 'Feuer',
    astrology: 'Mars',
    hebrewLetter: 'Peh (פ)',
    keywords: ['Befreiender Einsturz', 'Reinigendes Gewitter', 'Erleuchtung durch Zerstörung', 'Wahrheit'],
    description: 'Der Turm brennt unter dem Blick des Allsehenden Auges. Alte Illusionen und starrsinnige Gebäude stürzen ein, um Raum für die reine Wahrheit zu schaffen.',
    uprightMeaning: {
      general: 'Erschütterung festgefahrener Strukturen, plötzliche Erkenntnis, Befreiungsschlag.',
      love: 'Reinigungsgewitter in der Beziehung, schockierende Klarheit, Altlasten fallen ab.',
      career: 'Plötzlicher Umbruch, Ende eines unhaltbaren Zustands, Neuanfang aus den Trümmern.',
      advice: 'Wehre dich nicht gegen den Einsturz irrealer Gebäude. Die Wahrheit befreit dich.'
    },
    shadowMeaning: 'Sinnlose Zerstörung, Panik, Festhalten an einstürzenden Bauten, Verletzung.',
    colorTheme: {
      primary: '#EF4444',
      secondary: '#991B1B',
      border: '#F87171',
      bgGradient: 'from-red-950 via-zinc-950 to-black'
    }
  },
  {
    id: 'atu-17',
    number: 'XVII',
    nameGerman: 'Der Stern',
    nameEnglish: 'The Star',
    arcana: 'major',
    element: 'Luft',
    astrology: 'Wassermann',
    hebrewLetter: 'Heh (ה)',
    keywords: ['Hoffnung', 'Inspiration', 'Kosmische Führung', 'Seelenruhe', 'Klarheit'],
    description: 'Nuit gießt das Wasser des Lebens aus zwei Kannen über Himmel und Erde. Der siebenstrahlige Stern der Babalon leuchtet als Symbol unendlicher Hoffnung.',
    uprightMeaning: {
      general: 'Inspiration, Zuversicht nach schwerer Zeit, Klarheit der Vision.',
      love: 'Zukunftsorientierte Liebe, Seelenverwandtschaft, Vertrauen in die Beziehung.',
      career: 'Vielversprechende Perspektiven, langfristiger Erfolg, kreativer Fluss.',
      advice: 'Verliere nie die Sterne aus den Augen. Vertraue auf die Führung des Universums.'
    },
    shadowMeaning: 'Illusionäre Hoffnungen, Traumtänzerei, Zweifel am eigenen Stern.',
    colorTheme: {
      primary: '#38BDF8',
      secondary: '#818CF8',
      border: '#7DD3FC',
      bgGradient: 'from-sky-950 via-indigo-950 to-slate-900'
    }
  },
  {
    id: 'atu-18',
    number: 'XVIII',
    nameGerman: 'Der Mond',
    nameEnglish: 'The Moon',
    arcana: 'major',
    element: 'Wasser',
    astrology: 'Fische',
    hebrewLetter: 'Qoph (ק)',
    keywords: ['Prüfung der Täuschung', 'Unterbewusstsein', 'Schattenwanderung', 'Anubis', 'Dämmerung'],
    description: 'Die Anubis-Gestalten wachen am Tor der Dämmerung. Der Mond beleuchtet die dunklen Tiefen der Psyche, in denen Täuschungen und Urängste gelöst werden müssen.',
    uprightMeaning: {
      general: 'Durchqueren der Nacht der Seele, Ängste konfrontieren, Intuition in Verwirrung bewahren.',
      love: 'Unsicherheit, unerkannte Gefühle, geheimnisvolle oder unklare Phase.',
      career: 'Sorgfalt bei unübersichtlichen Verträgen, Irrwege meiden, Vorahnungen beachten.',
      advice: 'Lass dich nicht von Schatten beängstigen. Gehe achtsam durch die Dämmerung.'
    },
    shadowMeaning: 'Wahnvorstellungen, Hysterie, Orientierungslosigkeit, Angst vor der Wahrheit.',
    colorTheme: {
      primary: '#A855F7',
      secondary: '#4338CA',
      border: '#C084FC',
      bgGradient: 'from-purple-950 via-slate-950 to-zinc-950'
    }
  },
  {
    id: 'atu-19',
    number: 'XIX',
    nameGerman: 'Die Sonne',
    nameEnglish: 'The Sun',
    arcana: 'major',
    element: 'Feuer',
    astrology: 'Sonne',
    hebrewLetter: 'Resh (ר)',
    keywords: ['Lebensfreude', 'Erleuchtung', 'Strahlende Wahrheit', 'Freiheit', 'Vitalität'],
    description: 'Die Sonne strahlt mit den Tierkreiszeichen auf die tanzenden Kinder der neuen Ära. Sie spendet Wärme, Licht und bedingungslose Lebensfreude.',
    uprightMeaning: {
      general: 'Klarheit, Optimismus, Gesundheit, Fülle und unbeschwerte Freude.',
      love: 'Wärme, Offenheit, erfülltes Liebesglück, unbeschwertes Miteinander.',
      career: 'Anerkennung, Erfolg im Licht der Öffentlichkeit, reiche Ernte.',
      advice: 'Strahle deine innere Sonne aus. Genieße das Leben in vollen Zügen.'
    },
    shadowMeaning: 'Größenwahn, Sonnenstich des Egos, Naivität, Oberflächlichkeit.',
    colorTheme: {
      primary: '#F59E0B',
      secondary: '#EAB308',
      border: '#FCD34D',
      bgGradient: 'from-amber-950 via-yellow-950 to-stone-900'
    }
  },
  {
    id: 'atu-20',
    number: 'XX',
    nameGerman: 'Das Äon',
    nameEnglish: 'The Aeon',
    arcana: 'major',
    element: 'Feuer',
    astrology: 'Element Feuer / Geist',
    hebrewLetter: 'Shin (ש)',
    keywords: ['Neues Zeitalter', 'Horus-Bewusstsein', 'Bewusstseinssprung', 'Erwachen', 'Transzendenz'],
    description: 'Crowley ersetzte das traditionelle Gericht durch "Das Äon". Es zeigt das Aufsteigen des Kindes Horus (Harpokrates) im Flügelrad der Nut und Hadit als Anbruch eines neuen Zeitalters.',
    uprightMeaning: {
      general: 'Grurundlegender Bewusstseinswandel, Aufbruch in eine neue Epoche des Lebens.',
      love: 'Neudefinition von Beziehungen, alte Glaubenssätze abstreifen.',
      career: 'Völlig neue Ebene betreten, innovative Wege beschreiten.',
      advice: 'Erkenne, dass ein neues Zeitalter für dich begonnen hat. Blicke nicht zurück.'
    },
    shadowMeaning: 'Verblendung durch Dogmen, Verweigerung der Evolution, Festhalten am alten Äon.',
    colorTheme: {
      primary: '#EC4899',
      secondary: '#8B5CF6',
      border: '#F472B6',
      bgGradient: 'from-pink-950 via-purple-950 to-slate-900'
    }
  },
  {
    id: 'atu-21',
    number: 'XXI',
    nameGerman: 'Das Universum',
    nameEnglish: 'The Universe',
    arcana: 'major',
    element: 'Erde',
    astrology: 'Saturn / Erde',
    hebrewLetter: 'Tau (ת)',
    keywords: ['Vollendung', 'Kosmischer Tanz', 'Ganzheit', 'Integration', 'Ankunft am Ziel'],
    description: 'Die Jungfrau tanzt im Kreis der Schlange des Schicksals, umgeben von den vier Kerubim (Stier, Löwe, Adler, Mensch). Es ist die vollendete Schöpfung des Kosmos.',
    uprightMeaning: {
      general: 'Erfolgreicher Abschluss eines großen Zyklus, Erreichen des Ziels, Ganzheit.',
      love: 'Gefundene Heimat beim Partner, tiefes Ankommen, seelische Harmonie.',
      career: 'Meisterleistung vollbracht, Projektabschluss, Krönung der Arbeit.',
      advice: 'Feiere deine Vollendung. Du hast deinen Platz im Universum eingenommen.'
    },
    shadowMeaning: 'Unvollständigkeit, Angst vor dem Abschluss, Unvermögen den Sack zuzumachen.',
    colorTheme: {
      primary: '#10B981',
      secondary: '#3B82F6',
      border: '#34D399',
      bgGradient: 'from-emerald-950 via-blue-950 to-slate-950'
    }
  },

  // ==========================================
  // MINOR ARCANA - STÄBE (WANDS - FEUER)
  // ==========================================
  {
    id: 'wands-ace',
    number: 'Ace',
    nameGerman: 'Ass der Stäbe',
    nameEnglish: 'Ace of Wands',
    arcana: 'minor',
    suit: 'wands',
    element: 'Feuer',
    astrology: 'Wurzel der Kräfte des Feuers',
    keywords: ['Feuriger Impuls', 'Schöpferkraft', 'Wille', 'Begeisterung'],
    description: 'Der blitzende Stab mit den 22 Blättern der Yod-Lichtfunken verkörpert den reinen Urgrund der feurigen Willenskraft.',
    uprightMeaning: {
      general: 'Enormer Energieschub, neuer Funke der Leidenschaft, Tatendrang.',
      love: 'Leidenschaftliche Entfachung, Funke springt über.',
      career: 'Neues Projekt mit voller Power starten.',
      advice: 'Packe die Gelegenheit sofort beim Schopf.'
    },
    shadowMeaning: 'Zerstörerische Wut, Verpuffen von Energie, Unbeherrschtheit.',
    colorTheme: { primary: '#EF4444', secondary: '#F97316', border: '#F87171', bgGradient: 'from-red-950 to-orange-950' }
  },
  {
    id: 'wands-2',
    number: 2,
    nameGerman: '2 der Stäbe',
    nameEnglish: 'Two of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Herrschaft (Dominance)',
    element: 'Feuer',
    astrology: 'Mars in Widder',
    keywords: ['Zielgerichtete Kraft', 'Dominanz', 'Mutige Initiative'],
    description: 'Zwei gekreuzte Dorje-Stäbe symbolisieren den ungebrochenen Willen, der die Welt formen will.',
    uprightMeaning: {
      general: 'Starke Entschlossenheit, Führungskraft behaupten.',
      love: 'Klares Bekenntnis, Initiative ergreifen.',
      career: 'Souveräne Entscheidung treffen und durchsetzen.',
      advice: 'Übernehme die Führung ohne Zögern.'
    },
    shadowMeaning: 'Größenwahn, Tyrannei, Machtkämpfe.',
    colorTheme: { primary: '#EF4444', secondary: '#DC2626', border: '#F87171', bgGradient: 'from-red-950 to-zinc-950' }
  },
  {
    id: 'wands-3',
    number: 3,
    nameGerman: '3 der Stäbe',
    nameEnglish: 'Three of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Tugend (Virtue)',
    element: 'Feuer',
    astrology: 'Sonne in Widder',
    keywords: ['Edle Tat', 'Weitsicht', 'Aufbruch', 'Etappe erreicht'],
    description: 'Drei blühende Lotusstäbe zeigen die etablierte Kraft, die auf festem Fundament ruht und nach vorne blickt.',
    uprightMeaning: {
      general: 'Gute Aussichten, Belohnung für ersten Einsatz, Zuversicht.',
      love: 'Gemeinsame Zukunftsplanung, solides Fundament.',
      career: 'Expansion, vielversprechende Perspektiven.',
      advice: 'Blicke über den Horizont hinaus.'
    },
    shadowMeaning: 'Stolz, Überheblichkeit, Fehleinschätzung.',
    colorTheme: { primary: '#F59E0B', secondary: '#EF4444', border: '#FBBF24', bgGradient: 'from-amber-950 to-red-950' }
  },
  {
    id: 'wands-4',
    number: 4,
    nameGerman: '4 der Stäbe',
    nameEnglish: 'Four of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Vollendung (Completion)',
    element: 'Feuer',
    astrology: 'Venus in Widder',
    keywords: ['Harmonische Ordnung', 'Festigung', 'Willkommen', 'Vollendung'],
    description: 'Vier Stäbe bilden eine geschützte Burg mit Tauben und Widderköpfen. Ordnung ist hergestellt.',
    uprightMeaning: {
      general: 'Gelingen eines Vorhabens, Stabilität, Feierstimmung.',
      love: 'Harmonisches Zusammenleben, Hochzeit, Geborgenheit.',
      career: 'Projektabschluss in bester Qualität.',
      advice: 'Genieße die Früchte deiner geordneten Arbeit.'
    },
    shadowMeaning: 'Gefälligkeit, Oberflächlichkeit, trügerische Ruhe.',
    colorTheme: { primary: '#EC4899', secondary: '#F59E0B', border: '#F472B6', bgGradient: 'from-pink-950 to-amber-950' }
  },
  {
    id: 'wands-5',
    number: 5,
    nameGerman: '5 der Stäbe',
    nameEnglish: 'Five of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Strackheit / Streit (Strife)',
    element: 'Feuer',
    astrology: 'Saturn in Löwe',
    keywords: ['Wettkampf', 'Konflikt', 'Innere Reibung', 'Herausforderung'],
    description: 'Fünf gekreuzte Keulen symbolisieren den Widerstand von Gesetz und Materie gegen die feurige Energie.',
    uprightMeaning: {
      general: 'Kräftemessen, konstruktive Auseinandersetzung, Hindernisse.',
      love: 'Meinungsverschiedenheiten, die die Luft reinigen.',
      career: 'Konkurrenzkampf, harte Verhandlungen.',
      advice: 'Nimm die Herausforderung als Sparring an.'
    },
    shadowMeaning: 'Zerstörerischer Streit, vergebliche Mühe, Blockade.',
    colorTheme: { primary: '#B91C1C', secondary: '#78350F', border: '#EF4444', bgGradient: 'from-red-950 to-stone-950' }
  },
  {
    id: 'wands-6',
    number: 6,
    nameGerman: '6 der Stäbe',
    nameEnglish: 'Six of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Sieg (Victory)',
    element: 'Feuer',
    astrology: 'Jupiter in Löwe',
    keywords: ['Triumph', 'Anerkennung', 'Gefolge', 'Erfolg'],
    description: 'Sechs geordnete Stäbe mit Flammenkronen verkünden den strahlenden Sieg der feurigen Idee.',
    uprightMeaning: {
      general: 'Triumphaler Erfolg, Durchbruch, öffentliche Bestätigung.',
      love: 'Eroberungsglück, Bewunderung vom Partner.',
      career: 'Beförderung, Auszeichnung, geglücktes Projekt.',
      advice: 'Feiere deinen Sieg mit erhobenem Haupt.'
    },
    shadowMeaning: 'Einbildung, Selbstherrlichkeit, falscher Stolz.',
    colorTheme: { primary: '#EAB308', secondary: '#F59E0B', border: '#FACC15', bgGradient: 'from-amber-950 to-yellow-900' }
  },
  {
    id: 'wands-7',
    number: 7,
    nameGerman: '7 der Stäbe',
    nameEnglish: 'Seven of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Tapferkeit (Valour)',
    element: 'Feuer',
    astrology: 'Mars in Löwe',
    keywords: ['Entschlossene Verteidigung', 'Mut gegen Übermacht', 'Stehvermögen'],
    description: 'Ein großer Keulenstab stellt sich sechs angreifenden Stäben entgegen. Ein Test des echten Mutes.',
    uprightMeaning: {
      general: 'Eigene Position gegen Widerstände behaupten, Mut beweisen.',
      love: 'Für die Beziehung kämpfen, Kritik von außen abwehren.',
      career: 'Konkurrenz abwehren, Position sichern.',
      advice: 'Weiche nicht zurück. Du hast die stärkere Position.'
    },
    shadowMeaning: 'Aussichtsloser Kampf, Erschöpfung, Sturheit.',
    colorTheme: { primary: '#DC2626', secondary: '#991B1B', border: '#EF4444', bgGradient: 'from-red-950 to-neutral-950' }
  },
  {
    id: 'wands-8',
    number: 8,
    nameGerman: '8 der Stäbe',
    nameEnglish: 'Eight of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Schnelligkeit (Swiftness)',
    element: 'Feuer',
    astrology: 'Merkur in Schütze',
    keywords: ['Pfeilschnelle Botschaft', 'Dynamischer Fluss', 'Unabwendbare Klärung'],
    description: 'Lichtpfeile durchschneiden den Raum. Elektrisierende Geschwindigkeit in der Kommunikation.',
    uprightMeaning: {
      general: 'Rasche Entwicklung, überraschende Nachrichten, Ereignisse überschlagen sich.',
      love: 'Plötzliche Liebeserklärung, feurige Impulse.',
      career: 'Schnelle Entscheidungen, E-Mails & Verträge treffen ein.',
      advice: 'Handle ohne Verzögerung. Der Fluss ist da.'
    },
    shadowMeaning: 'Hektik, unüberlegte Worte, Chaos durch Eile.',
    colorTheme: { primary: '#F97316', secondary: '#06B6D4', border: '#FB923C', bgGradient: 'from-orange-950 to-cyan-950' }
  },
  {
    id: 'wands-9',
    number: 9,
    nameGerman: '9 der Stäbe',
    nameEnglish: 'Nine of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Stärke (Strength)',
    element: 'Feuer',
    astrology: 'Mond in Schütze',
    keywords: ['Unbeugsame Abwehrkraft', 'Wiederherstellung', 'Letzter Schutzwall'],
    description: 'Acht gekreuzte Pfeile werden von einer zentralen Keule gestützt. Das Bewusstsein hält die Stellung.',
    uprightMeaning: {
      general: 'Innere Reserve aktivieren, Erschöpfung überwinden, Standhaftigkeit.',
      love: 'Alte Wunden schützen, vorsichtige Annäherung.',
      career: 'Durchhalten kurz vor dem Ziel.',
      advice: 'Mobilisiere deine letzten Kraftreserven.'
    },
    shadowMeaning: 'Paranoia, Unnahbarkeit, Abwehrhaltung aus Angst.',
    colorTheme: { primary: '#38BDF8', secondary: '#EF4444', border: '#60A5FA', bgGradient: 'from-sky-950 to-red-950' }
  },
  {
    id: 'wands-10',
    number: 10,
    nameGerman: '10 der Stäbe',
    nameEnglish: 'Ten of Wands',
    arcana: 'minor',
    suit: 'wands',
    thothTitle: 'Unterdrückung (Oppression)',
    element: 'Feuer',
    astrology: 'Saturn in Schütze',
    keywords: ['Überlastung', 'Erdrückende Verantwortung', 'Blockierte Kraft'],
    description: 'Acht unbiegsame Stäbe werden von zwei gewaltigen Keulen erdrückt. Der feurige Wille ist überdehnt.',
    uprightMeaning: {
      general: 'Zu viel Last auf sich genommen, Stress, Burnout-Gefahr.',
      love: 'Beziehung fühlt sich wie eine schwere Bürde an.',
      career: 'Überforderung im Beruf, Delegation erforderlich.',
      advice: 'Lass unnötigen Ballast fallen.'
    },
    shadowMeaning: 'Zusammenbruch, Sturheit beim Ertragen, Verweigerung von Hilfe.',
    colorTheme: { primary: '#7F1D1D', secondary: '#451A03', border: '#991B1B', bgGradient: 'from-red-950 to-black' }
  },
  {
    id: 'wands-knight',
    number: 'Ritter',
    nameGerman: 'Ritter der Stäbe',
    nameEnglish: 'Knight of Wands',
    arcana: 'minor',
    suit: 'wands',
    element: 'Feuer',
    astrology: 'Feuer des Feuers (20° Skorpion - 20° Schütze)',
    keywords: ['Stürmischer Reiter', 'Feuriger Tatendrang', 'Impulsivität'],
    description: 'Der gerüstete Krieger reitet auf einem geflügelten Pferd durch die Flammen. Reine dynamische Energie.',
    uprightMeaning: {
      general: 'Stürmische Begeisterung, Abenteuerlust, feuriger Tatendrang.',
      love: 'Leidenschaftlicher Liebhaber, mitreißendes Abenteuer.',
      career: 'Kühnes Handeln, Risikobereitschaft.',
      advice: 'Stürze dich voller Mut ins Gefecht.'
    },
    shadowMeaning: 'Geduldlosigkeit, Strohfeuer, Aggressivität.',
    colorTheme: { primary: '#EF4444', secondary: '#F59E0B', border: '#F87171', bgGradient: 'from-red-950 to-amber-950' }
  },
  {
    id: 'wands-queen',
    number: 'Königin',
    nameGerman: 'Königin der Stäbe',
    nameEnglish: 'Queen of Wands',
    arcana: 'minor',
    suit: 'wands',
    element: 'Feuer',
    astrology: 'Wasser des Feuers (20° Fische - 20° Widder)',
    keywords: ['Souveräne Ausstrahlung', 'Magische Wärme', 'Selbstbewusstsein'],
    description: 'Die Königin sitzt auf ihrem Thron aus Flammen mit einem Leopard an ihrer Seite. Sinnliche Stärke.',
    uprightMeaning: {
      general: 'Großzügigkeit, magnetische Anziehungskraft, stolze Unabhängigkeit.',
      love: 'Herzliche und leidenschaftliche Partnerin.',
      career: 'Souveräne Führungskraft, Inspiration für andere.',
      advice: 'Zeige dein Licht ungeniert.'
    },
    shadowMeaning: 'Herrschsucht, Eifersucht, Theatralik.',
    colorTheme: { primary: '#F59E0B', secondary: '#EC4899', border: '#FBBF24', bgGradient: 'from-amber-950 to-pink-950' }
  },
  {
    id: 'wands-prince',
    number: 'Prinz',
    nameGerman: 'Prinz der Stäbe',
    nameEnglish: 'Prince of Wands',
    arcana: 'minor',
    suit: 'wands',
    element: 'Feuer',
    astrology: 'Luft des Feuers (20° Krebs - 20° Löwe)',
    keywords: ['Pioniergeist', 'Kreativer Funke', 'Große Visionen'],
    description: 'Der Prinz lenkt seinen feurigen Streitwagen. Er ist der Denker feuriger Ideale und Erfindungen.',
    uprightMeaning: {
      general: 'Begeisternde Ideen, Tatendrang, Erfindergeist.',
      love: 'Charismatischer Partner, Abwechslung.',
      career: 'Visionäre Entwürfe vorantreiben.',
      advice: 'Setze deine Ideen in konkrete Taten um.'
    },
    shadowMeaning: 'Unbeständigkeit, Arroganz, Unruhe.',
    colorTheme: { primary: '#FB923C', secondary: '#EAB308', border: '#FDBA74', bgGradient: 'from-orange-950 to-yellow-950' }
  },
  {
    id: 'wands-princess',
    number: 'Prinzessin',
    nameGerman: 'Prinzessin der Stäbe',
    nameEnglish: 'Princess of Wands',
    arcana: 'minor',
    suit: 'wands',
    element: 'Feuer',
    astrology: 'Erde des Feuers',
    keywords: ['Ungezähmte Lust', 'Tanzende Flamme', 'Begeisterter Neuanfang'],
    description: 'Die Prinzessin tanzt nackt in einem Altarfeuer mit dem Tiger. Furchtlose, reine Lebensfreude.',
    uprightMeaning: {
      general: 'Spontaneität, freche Lebensfreude, mutiger Ausbruch.',
      love: 'Prickelnde Flirts, unbeschwerte Romantik.',
      career: 'Neue Impulse aufgreifen.',
      advice: 'Tanze wild und ohne Scham.'
    },
    shadowMeaning: 'Leichtsinn, Launenhaftigkeit, Selbstzerstörung.',
    colorTheme: { primary: '#F43F5E', secondary: '#F59E0B', border: '#FB7185', bgGradient: 'from-rose-950 to-amber-950' }
  },

  // ==========================================
  // MINOR ARCANA - KELCHE (CUPS - WASSER)
  // ==========================================
  {
    id: 'cups-ace',
    number: 'Ace',
    nameGerman: 'Ass der Kelche',
    nameEnglish: 'Ace of Cups',
    arcana: 'minor',
    suit: 'cups',
    element: 'Wasser',
    astrology: 'Wurzel der Kräfte des Wassers',
    keywords: ['Quelle der Liebe', 'Göttliche Gnade', 'Gefühlserfüllung'],
    description: 'Der heilige Gral strömt über mit dem Wasser des Lebens. Der Urquell bedingungsloser Liebe.',
    uprightMeaning: {
      general: 'Tiefe emotionale Erfüllung, Segen, Herzöffnung.',
      love: 'Große Liebe finden oder vertiefen.',
      career: 'Berufung finden, friedvolles Arbeitsklima.',
      advice: 'Öffne dein Herz weit für das Geschenk der Liebe.'
    },
    shadowMeaning: 'Gefühlsstau, Enttäuschung, Verschlossenheit.',
    colorTheme: { primary: '#0284C7', secondary: '#38BDF8', border: '#7DD3FC', bgGradient: 'from-sky-950 to-blue-950' }
  },
  {
    id: 'cups-2',
    number: 2,
    nameGerman: '2 der Kelche',
    nameEnglish: 'Two of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Liebe (Love)',
    element: 'Wasser',
    astrology: 'Venus in Krebs',
    keywords: ['Seelenverwandtschaft', 'Liebe', 'Gleichklang', 'Verschmelzung'],
    description: 'Zwei silberne Kelche speisen sich aus der Quelle unter den Delphinen. Perfekte Harmonie zweier Herzen.',
    uprightMeaning: {
      general: 'Herzliche Begegnung, seelischer Gleichklang, Versöhnung.',
      love: 'Verliebtheit, tiefe Partnerschaft, Vertrauen.',
      career: 'Fruchtbare Kooperation, Sympathie im Team.',
      advice: 'Schenke Vertrauen und öffne dich der Verbindung.'
    },
    shadowMeaning: 'Abhängigkeit, Illusionsliebe, Eifersucht.',
    colorTheme: { primary: '#38BDF8', secondary: '#EC4899', border: '#7DD3FC', bgGradient: 'from-sky-950 to-pink-950' }
  },
  {
    id: 'cups-3',
    number: 3,
    nameGerman: '3 der Kelche',
    nameEnglish: 'Three of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Überfluss (Abundance)',
    element: 'Wasser',
    astrology: 'Merkur in Krebs',
    keywords: ['Dankbarkeit', 'Freudiges Fest', 'Überfluss', 'Gemeinschaft'],
    description: 'Drei grantapfelförmige Kelche fließen ineinander über. Reiche emotionale Ernte.',
    uprightMeaning: {
      general: 'Grund zum Feiern, Dankbarkeit, Gemeinschaft genießen.',
      love: 'Familienzuwachs, harmonisches Beisammensein.',
      career: 'Erfolgreiches Teamprojekt feiern.',
      advice: 'Teile dein Glück mit deinen Liebsten.'
    },
    shadowMeaning: 'Maßlosigkeit, Dekadenz, Vergnügungssucht.',
    colorTheme: { primary: '#10B981', secondary: '#0284C7', border: '#34D399', bgGradient: 'from-emerald-950 to-sky-950' }
  },
  {
    id: 'cups-4',
    number: 4,
    nameGerman: '4 der Kelche',
    nameEnglish: 'Four of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Enttäuschung (Luxuria / Enttäuschung)',
    element: 'Wasser',
    astrology: 'Mond in Krebs',
    keywords: ['Emotionale Sättigung', 'Überdruss', 'Verschlossenheit'],
    description: 'Vier stabile Kelche stehen im trägen Wasser. Das Gefühl ist erstarrt.',
    uprightMeaning: {
      general: 'Motivationstief, Schmollen, Angebote übersehen.',
      love: 'Verstimmung, Gewohnheit erstickt die Leidenschaft.',
      career: 'Unzufriedenheit trotz Stabilität.',
      advice: 'Rüttele dich wach. Neue Chancen warten.'
    },
    shadowMeaning: 'Chronische Nörgelei, Verbitterung, Blindheit.',
    colorTheme: { primary: '#64748B', secondary: '#0284C7', border: '#94A3B8', bgGradient: 'from-slate-900 to-sky-950' }
  },
  {
    id: 'cups-5',
    number: 5,
    nameGerman: '5 der Kelche',
    nameEnglish: 'Five of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Enttäuschung / Verlust (Disappointment)',
    element: 'Wasser',
    astrology: 'Mars in Skorpion',
    keywords: ['Verlust', 'Schatten der Trauer', 'Ausgelaufene Hoffnung'],
    description: 'Drei umgestürzte Kelche bilden ein Pentagramm der Zerrüttung. Das Wasser versickert im Trockenen.',
    uprightMeaning: {
      general: 'Abschiedsschmerz, Enttäuschung verarbeiten.',
      love: 'Beziehungskrise, Schmerz über Verlorenes.',
      career: 'Fehlschlag akzeptieren, Lerneffekt mitnehmen.',
      advice: 'Blicke nicht nur auf die zerbrochenen Kelche, sondern auch auf die zwei verbliebenen.'
    },
    shadowMeaning: 'Ewiges Selbstmitleid, Verharren im Schmerz.',
    colorTheme: { primary: '#7F1D1D', secondary: '#312E81', border: '#991B1B', bgGradient: 'from-red-950 to-indigo-950' }
  },
  {
    id: 'cups-6',
    number: 6,
    nameGerman: '6 der Kelche',
    nameEnglish: 'Six of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Freude (Pleasure)',
    element: 'Wasser',
    astrology: 'Sonne in Skorpion',
    keywords: ['Unschuldige Freude', 'Kindheitserinnerungen', 'Harmonie'],
    description: 'Sechs Lotusblüten gießen frisches Wasser in Kupferkelche. Reine seelische Frische.',
    uprightMeaning: {
      general: 'Herzliche Wiedersehen, Unbeschwertheit, vergeben können.',
      love: 'Alte Liebe neu entfacht, vertraute Geborgenheit.',
      career: 'Kreativer Neustart ohne Altlasten.',
      advice: 'Kehre zurück zur unschuldigen Freude deines Herzens.'
    },
    shadowMeaning: 'Melancholie, Traumtänzerei in der Vergangenheit.',
    colorTheme: { primary: '#F472B6', secondary: '#38BDF8', border: '#F9A8D4', bgGradient: 'from-pink-950 to-sky-950' }
  },
  {
    id: 'cups-7',
    number: 7,
    nameGerman: '7 der Kelche',
    nameEnglish: 'Seven of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Verderbnis (Debauch)',
    element: 'Wasser',
    astrology: 'Venus in Skorpion',
    keywords: ['Illusionen', 'Täuschende Träume', 'Toxische Wünsche'],
    description: 'Sieben giftige Kelche verströmen giftigen Sumpf. Die Gefahr von Scheinwelten.',
    uprightMeaning: {
      general: 'Falsche Versprechungen durchschauen, Illusionen abbauen.',
      love: 'Projektionen auf den Partner, Wunschvorstellung statt Realität.',
      career: 'Trügerische Angebote entlarven.',
      advice: 'Lass dich nicht von glänzenden Trugbildern blenden.'
    },
    shadowMeaning: 'Sucht, Selbstbetrug, Abstieg im Sumpf.',
    colorTheme: { primary: '#854D0E', secondary: '#15803D', border: '#A16207', bgGradient: 'from-yellow-950 to-emerald-950' }
  },
  {
    id: 'cups-8',
    number: 8,
    nameGerman: '8 der Kelche',
    nameEnglish: 'Eight of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Trägheit (Indolence)',
    element: 'Wasser',
    astrology: 'Saturn in Fische',
    keywords: ['Gefühlsmäßiges Aufbrechen', 'Verlassen des Ausgetrockneten', 'Schwermut'],
    description: 'Acht zerbrochene Kelche im ausgetrockneten Sumpf. Es ist Zeit, weiterzugehen.',
    uprightMeaning: {
      general: 'Schweren Herzens Aufbrechen, ausgediente Situationen hinter sich lassen.',
      love: 'Trennung von emotional ausgehöhlten Bindungen.',
      career: 'Jobwechsel, da keine Erfüllung mehr da ist.',
      advice: 'Mache den Schritt ins Neue, auch wenn es wehtut.'
    },
    shadowMeaning: 'Träges Verharren im Elend, Angst vor Einsamkeit.',
    colorTheme: { primary: '#475569', secondary: '#1E1B4B', border: '#64748B', bgGradient: 'from-slate-900 to-indigo-950' }
  },
  {
    id: 'cups-9',
    number: 9,
    nameGerman: '9 der Kelche',
    nameEnglish: 'Nine of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Glück (Happiness)',
    element: 'Wasser',
    astrology: 'Jupiter in Fische',
    keywords: ['Wunschkarte', 'Tiefe Zufriedenheit', 'Wohlbefinden'],
    description: 'Neun reich gefüllte Kelche erstrahlen in perfekter Geometrie. Das Herz quillt über.',
    uprightMeaning: {
      general: 'Wunscherfüllung, Gelassenheit, Wohlbefinden.',
      love: 'Glückliche Fügung, vollkommene Erfüllung.',
      career: 'Erfolg auf ganzer Linie, verdiente Belohnung.',
      advice: 'Genieße dein Glück mit offenem und dankbarem Herzen.'
    },
    shadowMeaning: 'Selbstgefälligkeit, Genusssucht, Arroganz.',
    colorTheme: { primary: '#0284C7', secondary: '#EAB308', border: '#38BDF8', bgGradient: 'from-sky-950 to-amber-950' }
  },
  {
    id: 'cups-10',
    number: 10,
    nameGerman: '10 der Kelche',
    nameEnglish: 'Ten of Cups',
    arcana: 'minor',
    suit: 'cups',
    thothTitle: 'Sättigung (Satiety)',
    element: 'Wasser',
    astrology: 'Mars in Fische',
    keywords: ['Vollendetes Herzensglück', 'Familiärer Frieden', 'Erfüllter Zyklus'],
    description: 'Zehn Kelche bilden den Lebensbaum aus Licht im Wasser. Höchste emotionale Vollendung.',
    uprightMeaning: {
      general: 'Tiefster innerer Frieden, Harmonie mit der Umwelt.',
      love: 'Seelenheimat beim Partner, dauerhaftes Liebesglück.',
      career: 'Traumberuf leben, inspirierendes Klima.',
      advice: 'Ruhe im tiefen Frieden deines Geistes.'
    },
    shadowMeaning: 'Übersättigung, Langeweile im Perfekten.',
    colorTheme: { primary: '#06B6D4', secondary: '#10B981', border: '#22D3EE', bgGradient: 'from-cyan-950 to-emerald-950' }
  },
  {
    id: 'cups-knight',
    number: 'Ritter',
    nameGerman: 'Ritter der Kelche',
    nameEnglish: 'Knight of Cups',
    arcana: 'minor',
    suit: 'cups',
    element: 'Wasser',
    astrology: 'Feuer des Wassers (20° Wassermann - 20° Fische)',
    keywords: ['Romantischer Träumer', 'Gefühlstiefe', 'Inspiration'],
    description: 'Der Ritter reitet mit geflügeltem Helm über das Meer und hält den Pfauen-Kelch.',
    uprightMeaning: {
      general: 'Einfühlsamkeit, künstlerische Beguabung, Herzensbotschaften.',
      love: 'Gefühlvoller Verehrer, romantischer Antrag.',
      career: 'Inspirierte Ideen, empathisches Verhandeln.',
      advice: 'Folge dem Ruf deines Herzens.'
    },
    shadowMeaning: 'Unbeständigkeit, Enttäuschung, Flucht vor Realität.',
    colorTheme: { primary: '#38BDF8', secondary: '#818CF8', border: '#60A5FA', bgGradient: 'from-sky-950 to-indigo-950' }
  },
  {
    id: 'cups-queen',
    number: 'Königin',
    nameGerman: 'Königin der Kelche',
    nameEnglish: 'Queen of Cups',
    arcana: 'minor',
    suit: 'cups',
    element: 'Wasser',
    astrology: 'Wasser des Wassers (20° Zwillinge - 20° Krebs)',
    keywords: ['Mysterium der Seele', 'Hellsichtigkeit', 'Hingabe'],
    description: 'Die Königin schaut in den geschlossenen Muschelkelch. Sie ist der Spiegel unendlicher Empathie.',
    uprightMeaning: {
      general: 'Tiefes Mitgefühl, Traumdeutung, seelische Weisheit.',
      love: 'Bedingungslose Liebe, Geborgenheit geben.',
      career: 'Heilerische oder soziale Fähigkeiten nutzen.',
      advice: 'Horche auf die sanften Schwingungen deiner Seele.'
    },
    shadowMeaning: 'Stimmungsschwankungen, Launenhaftigkeit, Opferhaltung.',
    colorTheme: { primary: '#818CF8', secondary: '#EC4899', border: '#A5B4FC', bgGradient: 'from-indigo-950 to-pink-950' }
  },
  {
    id: 'cups-prince',
    number: 'Prinz',
    nameGerman: 'Prinz der Kelche',
    nameEnglish: 'Prince of Cups',
    arcana: 'minor',
    suit: 'cups',
    element: 'Wasser',
    astrology: 'Luft des Wassers (20° Waage - 20° Skorpion)',
    keywords: ['Ergründung der Psyche', 'Leidenschaftlicher Geist', 'Subtilität'],
    description: 'Der Prinz zieht den Wagen mit dem Adlersymbol. Er ergründet die Abgründe der Gefühle mit Verstand.',
    uprightMeaning: {
      general: 'Psychologisches Gespür, Gefühle verstehen und artikulieren.',
      love: 'Tiefgründige Gespräche, ehrliches Interesse.',
      career: 'Feingefühl in Verhandlungen nutzen.',
      advice: 'Analysiere deine Gefühle ohne sie zu erdrücken.'
    },
    shadowMeaning: 'Berechnende Kälte, verdeckte Manipulation.',
    colorTheme: { primary: '#0284C7', secondary: '#A855F7', border: '#38BDF8', bgGradient: 'from-sky-950 to-purple-950' }
  },
  {
    id: 'cups-princess',
    number: 'Prinzessin',
    nameGerman: 'Prinzessin der Kelche',
    nameEnglish: 'Princess of Cups',
    arcana: 'minor',
    suit: 'cups',
    element: 'Wasser',
    astrology: 'Erde des Wassers',
    keywords: ['Zarte Poesie', 'Gutmütigkeit', 'Träumerei', 'Anmut'],
    description: 'Die Prinzessin tanzt sanft im Schaum des Meeres. Aus ihrem Kelch blickt die Schildkröte der Weisheit.',
    uprightMeaning: {
      general: 'Künstlerischer Funke, zarte Versöhnung, Sanftmut.',
      love: 'Zärtlicher Flirt, unschuldige Hingabe.',
      career: 'Inspiration im Kreativbereich.',
      advice: 'Bewahre deine Sanftmut auch in rauer Welt.'
    },
    shadowMeaning: 'Naivität, Überempfindlichkeit, Realitätsverlust.',
    colorTheme: { primary: '#F472B6', secondary: '#38BDF8', border: '#F9A8D4', bgGradient: 'from-pink-950 to-sky-950' }
  },

  // ==========================================
  // MINOR ARCANA - SCHWERTER (SWORDS - LUFT)
  // ==========================================
  {
    id: 'swords-ace',
    number: 'Ace',
    nameGerman: 'Ass der Schwerter',
    nameEnglish: 'Ace of Swords',
    arcana: 'minor',
    suit: 'swords',
    element: 'Luft',
    astrology: 'Wurzel der Kräfte der Luft',
    keywords: ['Messerscharfe Klarheit', 'Verstandesblitz', 'Wahrheit'],
    description: 'Das leuchtende Schwert durchschneidet die Krone der Täuschungen. Absolute geistige Schärfe.',
    uprightMeaning: {
      general: 'Glasklare Erkenntnis, Wahrheit aussprechen, Entscheidung treffen.',
      love: 'Klärendes Gespräch, Wahrheit auf den Tisch legen.',
      career: 'Problemanalyse mit Bravour, strategischer Durchbruch.',
      advice: 'Nutze deinen Verstand ohne Emotionen vorzuschieben.'
    },
    shadowMeaning: 'Kälte, verletzende Worte, Sarkasmus.',
    colorTheme: { primary: '#38BDF8', secondary: '#94A3B8', border: '#7DD3FC', bgGradient: 'from-sky-950 to-slate-900' }
  },
  {
    id: 'swords-2',
    number: 2,
    nameGerman: '2 der Schwerter',
    nameEnglish: 'Two of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Frieden (Peace)',
    element: 'Luft',
    astrology: 'Mond in Waage',
    keywords: ['Waffenstillstand', 'Innere Balance', 'Kritische Ruhe'],
    description: 'Zwei gekreuzte Schwerter verbinden sich vor der blauen Rose der Weisheit. Waffenruhe des Geistes.',
    uprightMeaning: {
      general: 'Kompromiss finden, innere Ruhe trotz Konflikt bewahren.',
      love: 'Ausgleich im Streit, Versöhnungsbereitschaft.',
      career: 'Neutralität wahren, objektive Verhandlungen.',
      advice: 'Schließe Frieden mit dem Verstand.'
    },
    shadowMeaning: 'Scheinfrieden, Entscheidungsunfähigkeit, Verschließen der Augen.',
    colorTheme: { primary: '#60A5FA', secondary: '#94A3B8', border: '#93C5FD', bgGradient: 'from-blue-950 to-slate-900' }
  },
  {
    id: 'swords-3',
    number: 3,
    nameGerman: '3 der Schwerter',
    nameEnglish: 'Three of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Trauer (Sorrow)',
    element: 'Luft',
    astrology: 'Saturn in Waage',
    keywords: ['Erkenntnisschmerz', 'Klärung durch Schmerz', 'Herzensriss'],
    description: 'Drei Schwerter durchbohren die sterbende Rose. Die kalte Erkenntnis, die alte Träume zerstört.',
    uprightMeaning: {
      general: 'Schmerzhafte Wahrheit akzeptieren, Illusionen verlieren.',
      love: 'Enttäuschung verarbeiten, kühler Schnitt.',
      career: 'Absage oder Kritik als Chance zur Korrektur nutzen.',
      advice: 'Nimm den Schmerz der Klärung an; er heilt Täuschung.'
    },
    shadowMeaning: 'Verbitterung, krampfhaftes Festhalten an der Wunde.',
    colorTheme: { primary: '#475569', secondary: '#991B1B', border: '#64748B', bgGradient: 'from-slate-900 to-red-950' }
  },
  {
    id: 'swords-4',
    number: 4,
    nameGerman: '4 der Schwerter',
    nameEnglish: 'Four of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Waffenruhe (Truce)',
    element: 'Luft',
    astrology: 'Jupiter in Waage',
    keywords: ['Geistige Erholung', 'Meditation', 'Waffenstillstand'],
    description: 'Vier Schwerter bilden ein Schutzgitter um das Rosencruz. Erholung nach dem Kampf.',
    uprightMeaning: {
      general: 'Denkpause einlegen, Kräfte sammeln, durchatmen.',
      love: 'Pause in Diskussionen, Abstand tut gut.',
      career: 'Urlaub nehmen, Burnout vermeiden.',
      advice: 'Gönne deinem Geist absolute Stille.'
    },
    shadowMeaning: 'Erzwungene Isolation, Trägheit.',
    colorTheme: { primary: '#0284C7', secondary: '#64748B', border: '#38BDF8', bgGradient: 'from-sky-950 to-slate-900' }
  },
  {
    id: 'swords-5',
    number: 5,
    nameGerman: '5 der Schwerter',
    nameEnglish: 'Five of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Niederlage (Defeat)',
    element: 'Luft',
    astrology: 'Venus in Wassermann',
    keywords: ['Bittere Niederlage', 'Verlust der Argumente', 'Schwäche'],
    description: 'Fünf zerbrochene Schwerter im umgekehrten Pentagramm. Der Verstand hat sich verzockt.',
    uprightMeaning: {
      general: 'Sinnlosen Streit beenden, Niederlage eingestehen.',
      love: 'Verletzende Debatten, egoistischer Sieg hilft niemandem.',
      career: 'Rückschlag verarbeiten, Kurs korrigieren.',
      advice: 'Zieh dich zurück. Ein erzwungener Sieg bringt nur Scherben.'
    },
    shadowMeaning: 'Bösartigkeit, Rachefeldzug, Zerstörungswut.',
    colorTheme: { primary: '#78350F', secondary: '#451A03', border: '#9A3412', bgGradient: 'from-amber-950 to-zinc-950' }
  },
  {
    id: 'swords-6',
    number: 6,
    nameGerman: '6 der Schwerter',
    nameEnglish: 'Six of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Wissenschaft (Science)',
    element: 'Luft',
    astrology: 'Merkur in Wassermann',
    keywords: ['Objektive Klarheit', 'Lösungssuche', 'Geistiger Aufbruch'],
    description: 'Sechs Schwerter bilden den Hexagramm-Stern um die Rose. Logische Synthese und Überblick.',
    uprightMeaning: {
      general: 'Probleme logisch lösen, neutrale Sichtweise einnehmen, Lösung finden.',
      love: 'Versöhnliches Gespräch, Vernunft siegt.',
      career: 'Wissenschaftliche Präzision, gelungene Planung.',
      advice: 'Betrachte die Sache mit kühlem, klarem Verstand.'
    },
    shadowMeaning: 'Kaltes Berechnen, emotionale Taubheit.',
    colorTheme: { primary: '#06B6D4', secondary: '#3B82F6', border: '#22D3EE', bgGradient: 'from-cyan-950 to-blue-950' }
  },
  {
    id: 'swords-7',
    number: 7,
    nameGerman: '7 der Schwerter',
    nameEnglish: 'Seven of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Futilität / Unruhe (Futility)',
    element: 'Luft',
    astrology: 'Mond in Wassermann',
    keywords: ['Vergebliche Mühe', 'Wankelmütigkeit', 'List & Vorsicht'],
    description: 'Sechs zierliche Schwertklingen greifen ein zentrales Schwert an. Unbeständige Gedanken.',
    uprightMeaning: {
      general: 'Strategie überdenken, halbe Sachen vermeiden, Achtsamkeit.',
      love: 'Ausflüchte, unklare Signale ansprechen.',
      career: 'Verluste minimieren, keine unklaren Verträge eingehen.',
      advice: 'Gehe diplomatisch, aber ehrlich vor.'
    },
    shadowMeaning: 'Betrug, Hinterlist, feiges Wegducken.',
    colorTheme: { primary: '#A855F7', secondary: '#64748B', border: '#C084FC', bgGradient: 'from-purple-950 to-slate-900' }
  },
  {
    id: 'swords-8',
    number: 8,
    nameGerman: '8 der Schwerter',
    nameEnglish: 'Eight of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Behinderung (Interference)',
    element: 'Luft',
    astrology: 'Jupiter in Zwillinge',
    keywords: ['Mentaler Käfig', 'Innere Zweifel', 'Zensur des eigenen Geistes'],
    description: 'Acht Schwerter kreuzen sich und blockieren das Licht. Der Verstand sperrt sich selbst ein.',
    uprightMeaning: {
      general: 'Sich selbst im Weg stehen, Angst vor falschen Entscheidungen.',
      love: 'Gefühl der Eingeengtheit durch eigene Gedankenspiele.',
      career: 'Blockade im Denken, Handlungsfähigkeit wiederentdecken.',
      advice: 'Erkenne, dass die Gitterstäbe nur in deinen Gedanken existieren.'
    },
    shadowMeaning: 'Opfermentalität, ständiges Grübeln ohne Ausweg.',
    colorTheme: { primary: '#334155', secondary: '#1E293B', border: '#475569', bgGradient: 'from-slate-900 to-zinc-950' }
  },
  {
    id: 'swords-9',
    number: 9,
    nameGerman: '9 der Schwerter',
    nameEnglish: 'Nine of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Grausamkeit (Cruelty)',
    element: 'Luft',
    astrology: 'Mars in Zwillinge',
    keywords: ['Gewissensbisse', 'Alpträume', 'Mentaler Schmerz'],
    description: 'Neun rostiges Schwerter tropfen mit Blut. Die Qualen ungelöster Gewissensfragen.',
    uprightMeaning: {
      general: 'Schlaflose Nächte, Sorgenkarussell, Selbstvorwürfe.',
      love: 'Verlustangst, Schuldgefühle in der Partnerschaft.',
      career: 'Prüfungsangst, Überforderungsgefühle.',
      advice: 'Hole deine Ängste ans Tageslicht. Im Licht schrumpfen sie.'
    },
    shadowMeaning: 'Verzweiflung, seelischer Grausamkeit aussetzen.',
    colorTheme: { primary: '#991B1B', secondary: '#451A03', border: '#DC2626', bgGradient: 'from-red-950 to-black' }
  },
  {
    id: 'swords-10',
    number: 10,
    nameGerman: '10 der Schwerter',
    nameEnglish: 'Ten of Swords',
    arcana: 'minor',
    suit: 'swords',
    thothTitle: 'Untergang (Ruin)',
    element: 'Luft',
    astrology: 'Sonne in Zwillinge',
    keywords: ['Endgültiger Schlussstrich', 'Zusammenbruch des Mentalen', 'Befreiender Tiefpunkt'],
    description: 'Zehn gebrochene Schwerter zertrümmern das Rosencruz. Der absolute Tiefpunkt ist erreicht.',
    uprightMeaning: {
      general: 'Ein langes Leiden endet, schmerzhafter aber befreiender Schlussstrich.',
      love: 'Endgültige Klärung einer kaputten Beziehung.',
      career: 'Projektaus nach langer Zerrüttung - Chance für Neuanfang.',
      advice: 'Akzeptiere den Endpunkt. Von hier an geht es nur noch aufwärts.'
    },
    shadowMeaning: 'Verzweifeltes Hinauszögern des Unvermeidlichen.',
    colorTheme: { primary: '#18181B', secondary: '#7F1D1D', border: '#3F3F46', bgGradient: 'from-zinc-950 to-red-950' }
  },
  {
    id: 'swords-knight',
    number: 'Ritter',
    nameGerman: 'Ritter der Schwerter',
    nameEnglish: 'Knight of Swords',
    arcana: 'minor',
    suit: 'swords',
    element: 'Luft',
    astrology: 'Feuer der Luft (20° Stier - 20° Zwillinge)',
    keywords: ['Scharfsinniger Angreifer', 'Unbeugsame Logik', 'Mentaler Wind'],
    description: 'Der Ritter stürmt mit gezogenem Schwert durch die Wolken. Unaufhaltsame gedankliche Schärfe.',
    uprightMeaning: {
      general: 'Verstandsargumente durchsetzen, rasche Analyse, radikale Ehrlichkeit.',
      love: 'Hitzige Debatte, Fakten ansprechen.',
      career: 'Gegner mit Argumenten schlagen.',
      advice: 'Nutze dein Wissen ohne rücksichtslos zu werden.'
    },
    shadowMeaning: 'Zynismus, argumentative Kälte, Verletzungssucht.',
    colorTheme: { primary: '#0284C7', secondary: '#E0F2FE', border: '#38BDF8', bgGradient: 'from-sky-950 to-slate-900' }
  },
  {
    id: 'swords-queen',
    number: 'Königin',
    nameGerman: 'Königin der Schwerter',
    nameEnglish: 'Queen of Swords',
    arcana: 'minor',
    suit: 'swords',
    element: 'Luft',
    astrology: 'Wasser der Luft (20° Jungfrau - 20° Waage)',
    keywords: ['Unbestechliche Weisheit', 'Befreiung von Illusion', 'Souveräne Klarheit'],
    description: 'Die Königin sitzt auf dem Wolkenthron mit abgetrenntem Kopf der Täuschung. Sie blickt klar durch.',
    uprightMeaning: {
      general: 'Unabhängigkeit, scharfe Urteilskraft, Wahrheit ohne Verkleidung.',
      love: 'Klare Erwartungen, keine faulen Kompromisse.',
      career: 'Kritische Analyse, fehlerfreie Entscheidung.',
      advice: 'Schneide Illusionen ab und stehe zu deiner Wahrheit.'
    },
    shadowMeaning: 'Bitterkeit, unnahbare Kälte, Rachsucht.',
    colorTheme: { primary: '#94A3B8', secondary: '#38BDF8', border: '#CBD5E1', bgGradient: 'from-slate-900 to-sky-950' }
  },
  {
    id: 'swords-prince',
    number: 'Prinz',
    nameGerman: 'Prinz der Schwerter',
    nameEnglish: 'Prince of Swords',
    arcana: 'minor',
    suit: 'swords',
    element: 'Luft',
    astrology: 'Luft der Luft (20° Steinbock - 20° Wassermann)',
    keywords: ['Architekt der Ideen', 'Abstrakte Logik', 'Kritischer Geist'],
    description: 'Der Prinz zieht den Wagen durch stürmische Winde. Er entwickelt bahnbrechende Konzepte.',
    uprightMeaning: {
      general: 'Innovative Pläne schmieden, Systeme hinterfragen, Intellekt nutzen.',
      love: 'Geistiger Austausch, sachliches Lösen von Konflikten.',
      career: 'Konzeptioneller Durchbruch, Theorie in Praxis wandeln.',
      advice: 'Konzentriere deine Gedanken auf machbare Schritte.'
    },
    shadowMeaning: 'Verkopftheit, Prinzipienreiterei.',
    colorTheme: { primary: '#60A5FA', secondary: '#0284C7', border: '#93C5FD', bgGradient: 'from-blue-950 to-cyan-950' }
  },
  {
    id: 'swords-princess',
    number: 'Prinzessin',
    nameGerman: 'Prinzessin der Schwerter',
    nameEnglish: 'Princess of Swords',
    arcana: 'minor',
    suit: 'swords',
    element: 'Luft',
    astrology: 'Erde der Luft',
    keywords: ['Mutige Wachsamkeit', 'Entlarvung von Lügen', 'Ungestümer Verstand'],
    description: 'Die Prinzessin schlägt mit dem Schwert nach den Wolken vor dem Altar. Furchtloser Geist.',
    uprightMeaning: {
      general: 'Lügen entlarven, mutig Fragen stellen, Klartext reden.',
      love: 'Missverständnisse direkt ansprechen.',
      career: 'Fehler in Systemen aufdecken.',
      advice: 'Habe keine Angst davor die unbequeme Wahrheit zu sagen.'
    },
    shadowMeaning: 'Streitsucht, Vorlautheit, Misstrauen.',
    colorTheme: { primary: '#38BDF8', secondary: '#64748B', border: '#7DD3FC', bgGradient: 'from-sky-950 to-slate-950' }
  },

  // ==========================================
  // MINOR ARCANA - SCHEIBEN (DISKS - ERDE)
  // ==========================================
  {
    id: 'disks-ace',
    number: 'Ace',
    nameGerman: 'Ass der Scheiben',
    nameEnglish: 'Ace of Disks',
    arcana: 'minor',
    suit: 'disks',
    element: 'Erde',
    astrology: 'Wurzel der Kräfte der Erde',
    keywords: ['Manifeste Fülle', 'Materieller Segen', 'Fundament'],
    description: 'Die leuchtende Münze mit den Siegeln von To Mega Therion. Der Urquell der materiellen Welt.',
    uprightMeaning: {
      general: 'Materielles Gelingen, solider Neuanfang, körperliche Gesundheit.',
      love: 'Verlässliche Liebe, gemeinsame Werte aufbauen.',
      career: 'Lukrative Chance, solide Investition.',
      advice: 'Säe deine Samen auf fruchtbaren Boden.'
    },
    shadowMeaning: 'Gier, Verhaftung im Materialismus.',
    colorTheme: { primary: '#10B981', secondary: '#D97706', border: '#34D399', bgGradient: 'from-emerald-950 to-amber-950' }
  },
  {
    id: 'disks-2',
    number: 2,
    nameGerman: '2 der Scheiben',
    nameEnglish: 'Two of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Veränderung (Change)',
    element: 'Erde',
    astrology: 'Jupiter in Steinbock',
    keywords: ['Harmonische Bewegung', 'Dynamisches Gleichgewicht', 'Flexibilität'],
    description: 'Das Yin-Yang-Symbol verbindet zwei rotierende Scheiben in der Ewigkeits-Schleife.',
    uprightMeaning: {
      general: 'Anpassungsfähigkeit, spielender Umgang mit Veränderungen.',
      love: 'Schwung in die Beziehung bringen, flexibel bleiben.',
      career: 'Mehrere Projekte jonglieren, Wandel nutzen.',
      advice: 'Tanze mit der Veränderung des Lebens.'
    },
    shadowMeaning: 'Unbeständigkeit, Orientierungslosigkeit.',
    colorTheme: { primary: '#059669', secondary: '#D97706', border: '#10B981', bgGradient: 'from-emerald-950 to-stone-900' }
  },
  {
    id: 'disks-3',
    number: 3,
    nameGerman: '3 der Scheiben',
    nameEnglish: 'Three of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Arbeit (Works)',
    element: 'Erde',
    astrology: 'Mars in Steinbock',
    keywords: ['Meisterhafte Ausführung', 'Solides Handwerk', 'Aufbau'],
    description: 'Drei Scheiben bilden eine dreidimensionale Pyramide im Kristall. Qualitätvoller Aufbau.',
    uprightMeaning: {
      general: 'Gediegene Arbeit leisten, Qualifikation unter Beweis stellen.',
      love: 'Gemeinsame Grundlagen schaffen, Beziehungsarbeit.',
      career: 'Fortschritt durch Fleiß und Präzision.',
      advice: 'Baue mit Sorgfalt und handwerklichem Geschick.'
    },
    shadowMeaning: 'Pfusch, Schlampigkeit, Ehrgeiz ohne Können.',
    colorTheme: { primary: '#D97706', secondary: '#059669', border: '#FBBF24', bgGradient: 'from-amber-950 to-emerald-950' }
  },
  {
    id: 'disks-4',
    number: 4,
    nameGerman: '4 der Scheiben',
    nameEnglish: 'Four of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Macht (Power)',
    element: 'Erde',
    astrology: 'Sonne in Steinbock',
    keywords: ['Sichere Festung', 'Stabilität', 'Schutz des Besitzes'],
    description: 'Vier quadratische Scheiben sichern die Festung des Besitztums. Solide Ordnung.',
    uprightMeaning: {
      general: 'Erreichtes sichern, Stabilität wahren, finanzielle Sicherheit.',
      love: 'Sicherheit und Verlässlichkeit schätzen.',
      career: 'Erfolgreich abgesicherte Position.',
      advice: 'Sichere deine Fundamente mit Umsicht.'
    },
    shadowMeaning: 'Geiz, starrsinniges Festhalten, Kontrollzwang.',
    colorTheme: { primary: '#B45309', secondary: '#78350F', border: '#D97706', bgGradient: 'from-amber-950 to-stone-950' }
  },
  {
    id: 'disks-5',
    number: 5,
    nameGerman: '5 der Scheiben',
    nameEnglish: 'Five of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Sorge (Worry)',
    element: 'Erde',
    astrology: 'Merkur in Stier',
    keywords: ['Existenzsorgen', 'Engpass', 'Prüfung der Substanz'],
    description: 'Fünf eingedrückte Scheiben bilden ein gestörtes Pentagramm. Der Schein trügt.',
    uprightMeaning: {
      general: 'Durststrecke durchstehen, materielle Sorgen sachlich angehen.',
      love: 'Gefühl der Vernachlässigung klären.',
      career: 'Engpass überwinden, Budget sparen.',
      advice: 'Lass dich nicht von Zukunftsängsten lähmen.'
    },
    shadowMeaning: 'Verzweiflung, Armutsdenken.',
    colorTheme: { primary: '#78350F', secondary: '#451A03', border: '#9A3412', bgGradient: 'from-amber-950 to-black' }
  },
  {
    id: 'disks-6',
    number: 6,
    nameGerman: '6 der Scheiben',
    nameEnglish: 'Six of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Erfolg (Success)',
    element: 'Erde',
    astrology: 'Mond in Stier',
    keywords: ['Reicher Ertrag', 'Faire Verteilung', 'Harmonischer Wohlstand'],
    description: 'Sechs Scheiben bilden das Hexagramm des inneren Reichtums. Ausgewogene Zirkulation.',
    uprightMeaning: {
      general: 'Verdienter Erfolg, wohlwollende Unterstützung, Ausgleich.',
      love: 'Geben und Nehmen im Gleichgewicht.',
      career: 'Finanzieller Erfolg, faire Belohnung.',
      advice: 'Teile deinen Wohlstand mit Großmut.'
    },
    shadowMeaning: 'Gönnerhaftigkeit, Abhängigkeiten schaffen.',
    colorTheme: { primary: '#10B981', secondary: '#F59E0B', border: '#34D399', bgGradient: 'from-emerald-950 to-amber-950' }
  },
  {
    id: 'disks-7',
    number: 7,
    nameGerman: '7 der Scheiben',
    nameEnglish: 'Seven of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Fehlschlag (Failure)',
    element: 'Erde',
    astrology: 'Saturn in Stier',
    keywords: ['Geduldsprüfung', 'Stagnation', 'Mühsame Ernte'],
    description: 'Sieben bleierne Scheiben verrosten im unbestellten Feld. Geduld ist gefragt.',
    uprightMeaning: {
      general: 'Innehalten, Erwartungen zurückschrauben, Geduld lernen.',
      love: 'Entwicklung braucht Zeit, nichts erzwingen.',
      career: 'Investition reift langsam.',
      advice: 'Gib den Dingen die nötige Reifezeit.'
    },
    shadowMeaning: 'Resignation, Aufgeben kurz vor dem Ziel.',
    colorTheme: { primary: '#57534E', secondary: '#292524', border: '#78716C', bgGradient: 'from-stone-900 to-neutral-950' }
  },
  {
    id: 'disks-8',
    number: 8,
    nameGerman: '8 der Scheiben',
    nameEnglish: 'Eight of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Umsicht (Prudence)',
    element: 'Erde',
    astrology: 'Sonne in Jungfrau',
    keywords: ['Sorgfältige Pflege', 'Nachhaltiger Aufbau', 'Präzision'],
    description: 'Acht Scheiben erblühen als Schutzbaum der Natur. Liebevolle Detailarbeit.',
    uprightMeaning: {
      general: 'Fleiß, Ausdauer, nachhaltige Entwicklung sichern.',
      love: 'Sorgfältige Beziehungspflege.',
      career: 'Grundsolide Arbeit abliefern.',
      advice: 'Widme dich den Details mit voller Aufmerksamkeit.'
    },
    shadowMeaning: 'Kleinlichkeitswahn, Pedanterie.',
    colorTheme: { primary: '#84CC16', secondary: '#15803D', border: '#A3E635', bgGradient: 'from-lime-950 to-emerald-950' }
  },
  {
    id: 'disks-9',
    number: 9,
    nameGerman: '9 der Scheiben',
    nameEnglish: 'Nine of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Gewinn (Gain)',
    element: 'Erde',
    astrology: 'Venus in Jungfrau',
    keywords: ['Materieller Gewinn', 'Genuss der Früchte', 'Sicherheit'],
    description: 'Neun Scheiben bilden das Pentagramm des sichtbaren Erfolgs. Reicher Ertrag.',
    uprightMeaning: {
      general: 'Gewinn einfahren, Lebensqualität genießen.',
      love: 'Erfüllte, stilvolle Partnerschaft.',
      career: 'Finanzieller Durchbruch, lohnende Früchte.',
      advice: 'Freue dich über deinen wohlverdienten Lohn.'
    },
    shadowMeaning: 'Materialistische Arroganz, Oberflächlichkeit.',
    colorTheme: { primary: '#10B981', secondary: '#EC4899', border: '#34D399', bgGradient: 'from-emerald-950 to-pink-950' }
  },
  {
    id: 'disks-10',
    number: 10,
    nameGerman: '10 der Scheiben',
    nameEnglish: 'Ten of Disks',
    arcana: 'minor',
    suit: 'disks',
    thothTitle: 'Reichtum (Wealth)',
    element: 'Erde',
    astrology: 'Merkur in Jungfrau',
    keywords: ['Vollendeter Reichtum', 'Erbe & Traditonen', 'Fülle'],
    description: 'Zehn Münzen bilden den Malkuth-Lebensbaum. Unendliche materielle Fülle.',
    uprightMeaning: {
      general: 'Reichtum auf allen Ebenen, langfristiger Wohlstand.',
      love: 'Familienfrieden, sicherer Hafen.',
      career: 'Erfolgreiches Lebenswerk, bleibende Werte.',
      advice: 'Erkenne die Fülle, die dich umgibt.'
    },
    shadowMeaning: 'Verhaftung an Geld, Seelenlosigkeit.',
    colorTheme: { primary: '#059669', secondary: '#D97706', border: '#10B981', bgGradient: 'from-emerald-950 to-amber-950' }
  },
  {
    id: 'disks-knight',
    number: 'Ritter',
    nameGerman: 'Ritter der Scheiben',
    nameEnglish: 'Knight of Disks',
    arcana: 'minor',
    suit: 'disks',
    element: 'Erde',
    astrology: 'Feuer der Erde (20° Löwe - 20° Jungfrau)',
    keywords: ['Beständiger Schwerarbeiter', 'Erntemeister', 'Zuverlässigkeit'],
    description: 'Der gerüstete Ritter reitet auf einem stämmigen Kaltblutpferd über die reifen Felder.',
    uprightMeaning: {
      general: 'Unermüdliche Ausdauer, Zuverlässigkeit, pragmatisches Handeln.',
      love: 'Treuer Partner, Sicherheit bieten.',
      career: 'Hart arbeiten und Ergebnisse sichern.',
      advice: 'Bleibe stoisch auf deinem Pfad.'
    },
    shadowMeaning: 'Sturheit, Schwerfälligkeit, Geiz.',
    colorTheme: { primary: '#78350F', secondary: '#15803D', border: '#B45309', bgGradient: 'from-stone-900 to-emerald-950' }
  },
  {
    id: 'disks-queen',
    number: 'Königin',
    nameGerman: 'Königin der Scheiben',
    nameEnglish: 'Queen of Disks',
    arcana: 'minor',
    suit: 'disks',
    element: 'Erde',
    astrology: 'Wasser der Erde (20° Schütze - 20° Steinbock)',
    keywords: ['Fruchtbare Erdmutter', 'Sinnlicher Wohlstand', 'Fürsorge'],
    description: 'Die Königin sitzt auf dem Thron der Ananas und Markasit. Sie nährt das Leben mit Herz.',
    uprightMeaning: {
      general: 'Bodenständigkeit, Sinnlichkeit, fürsorgliche Fülle.',
      love: 'Warmherzige, treue Gefährtin.',
      career: 'Nachhaltiges Wirtschaften, Pflege von Vermögen.',
      advice: 'Nähre dein Leben mit sinnlicher Erdfreude.'
    },
    shadowMeaning: 'Übermäßige Sorge um Finanzen, Neid.',
    colorTheme: { primary: '#059669', secondary: '#B45309', border: '#10B981', bgGradient: 'from-emerald-950 to-amber-950' }
  },
  {
    id: 'disks-prince',
    number: 'Prinz',
    nameGerman: 'Prinz der Scheiben',
    nameEnglish: 'Prince of Disks',
    arcana: 'minor',
    suit: 'disks',
    element: 'Erde',
    astrology: 'Luft der Erde (20° Widder - 20° Stier)',
    keywords: ['Ingenieur der Materie', 'Pragmatischer Erfinder', 'Gründlichkeit'],
    description: 'Der Prinz lenkt den Streitwagen, den ein Ochse zieht. Er setzt Ideen pragmatisch in die Realität um.',
    uprightMeaning: {
      general: 'Praktische Umsetzung, gründliche Vorbereitung, Ausdauer.',
      love: 'Taten sprechen lassen statt Worte.',
      career: 'Solides Fundament für Großprojekte schaffen.',
      advice: 'Gehe Schritt für Schritt vor.'
    },
    shadowMeaning: 'Engstirnigkeit, Pedanterie.',
    colorTheme: { primary: '#65A30D', secondary: '#78350F', border: '#84CC16', bgGradient: 'from-lime-950 to-stone-950' }
  },
  {
    id: 'disks-princess',
    number: 'Prinzessin',
    nameGerman: 'Prinzessin der Scheiben',
    nameEnglish: 'Princess of Princesses / Disks',
    arcana: 'minor',
    suit: 'disks',
    element: 'Erde',
    astrology: 'Erde der Erde',
    keywords: ['Schwangerschaft der Erde', 'Neues Leben', 'Empfänglichkeit'],
    description: 'Die Prinzessin steht am Altar des Widders mit der Hornscheibe. Hoffnungsvoller Neubeginn der Substanz.',
    uprightMeaning: {
      general: 'Keimling eines neuen Projekts, materielle Gelegenheit.',
      love: 'Neuer praktischer Impuls in der Liebe.',
      career: 'Ausbildung, solide Chance ergreifen.',
      advice: 'Pflege den frischen Keimling mit Geduld.'
    },
    shadowMeaning: 'Trägheit, Verharren in Träumen.',
    colorTheme: { primary: '#10B981', secondary: '#84CC16', border: '#34D399', bgGradient: 'from-emerald-950 to-lime-950' }
  }
];
