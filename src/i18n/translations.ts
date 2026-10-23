import { SupportedLanguage } from './types';

export const UI_TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  de: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: 'Thoth Orakel',
    offlineBadge: 'Offline',
    dailyRitualButton: 'Tageskarte',
    dailyRitualDone: 'Ritual ✓',
    dailyRitualTooltipPending: 'Tageskarte noch unenthüllt',
    dailyRitualTooltipDone: 'Tagesritual heute vollendet',
    selectLanguage: 'Sprache wählen',

    // Navigation Tabs
    navSpreads: 'Legung',
    navLexicon: '78 Karten',
    navJournal: 'Tagebuch',
    navGuide: 'Thoth Guide',
    navInfo: 'Info',
    infoTitle: 'Info zu GrimTarot',
    infoPageBadge: 'System & Manifest',

    // Spread Selection
    spreadSelectionBadge: 'Aleister Crowley Thoth Orakel',
    spreadSelectionTitle: 'Wähle dein Legesystem',
    spreadSelectionSubtitle: '5 klassische Legemuster nach der authentischen Crowley & Lady Frieda Harris Symbolik. 100% offline nutzbar.',
    questionLabel: 'Deine Frage oder Absicht (Optional)',
    questionPlaceholder: 'z.B. Welcher Pfad eröffnet sich mir jetzt?',
    cardsCountLabel: 'Karten',
    beginReadingBtn: 'Legung beginnen',

    // Shuffle & Draw
    drawingForPosition: 'Ziehe Karte für Position',
    shuffleBtn: 'Deck neu mischen',
    shuffling: 'Mische das Deck...',
    tapCardToDraw: 'Berühre eine verdeckte Karte, um sie zu ziehen',
    drawnCardsProgress: 'gezogen',
    cardRevealed: 'Karte enthüllt',
    backToSpreadsBtn: 'Zurück zur Auswahl',
    allowReversedCards: 'Karten auf dem Kopf (Kopfstand)',
    reversedCardsActive: 'Aktiv: blockierte, verzögerte & innere Energie',
    onlyUprightMode: 'Nur aufrechte Karten',
    orientationUpright: 'Aufrecht',
    orientationReversed: 'Umgekehrt (Kopfstand)',
    reversedBadge: 'Umgekehrt',
    reversedEnergyHeading: 'Umgekehrte Energie (Kopfstand)',
    unblockAdvice: 'Weg zur Entblockung & Lösung',
    rotateCardAction: 'Karte drehen (180°)',
    reversedCountSummary: 'Umgekehrt',

    // Reading Result
    readingCompletedTitle: 'Deine Legung ist vollendet',
    questionAsked: 'Deine Frage',
    dominantElementTitle: 'Dominantes Element',
    majorArcanaTitle: 'Große Arkana',
    cardsRevealed: 'Karten enthüllt',
    synthesisTitle: 'Gesamtsynthese & Kosmischer Rat',
    cardsInSpread: 'Karten der Legung',
    tapCardDetailsHint: 'Tippe auf eine Karte für tiefe Positionssymbolik & Crowley-Bedeutung',
    selectedCardPosition: 'Position',
    generalMeaning: 'Allgemeine Bedeutung',
    loveMeaning: 'Liebe & Beziehung',
    careerMeaning: 'Beruf & Lebensweg',
    cosmicAdvice: 'Ratschlag des Thoth',
    shadowSide: 'Schattenseite & Herausforderung',
    astrologyLabel: 'Astrologie',
    elementLabel: 'Element',
    hebrewLetterLabel: 'Hebräischer Buchstabe',
    crowleyTitleLabel: 'Crowley-Titel',
    notesLabel: 'Persönliche Notizen zu dieser Legung',
    notesPlaceholder: 'Was bedeuten diese Karten für dich in diesem Moment? Schreibe deine Intuition auf...',
    saveToJournalBtn: 'Im Tagebuch speichern',
    savedToJournal: '✓ Im Tagebuch gespeichert',
    newReadingBtn: 'Neue Legung',
    viewJournalBtn: 'Zum Tagebuch',

    // Lexicon
    lexiconBadge: 'Enzyklopädie',
    lexiconTitle: 'Aleister Crowley Thoth Kartendeck',
    lexiconSubtitle: 'Alle 78 Karten mit tiefgründigen Deutungen für alle 5 Legesysteme, Crowley-Symbolik & Astrologie.',
    searchPlaceholder: 'Suche nach Name, Crowley-Titel (z.B. Tugend), Widder...',
    filterAll: 'Alle',
    filterMajor: 'Große Arkana (Atu)',
    filterMinor: 'Kleine Arkana',
    filterWands: 'Stäbe (Feuer)',
    filterCups: 'Kelche (Wasser)',
    filterSwords: 'Schwerter (Luft)',
    filterDisks: 'Scheiben (Erde)',
    noCardsFound: 'Keine Karten gefunden für diese Suchkriterien.',
    cardsFoundCount: 'Karten gefunden',

    // Journal
    journalBadge: 'Offline-Speicher',
    journalTitle: 'Dein Tarot Tagebuch',
    journalSubtitle: 'Alle von dir gespeicherten Legungen und Notizen bleiben lokal auf deinem Gerät erhalten.',
    journalSearchPlaceholder: 'Tagebuch durchsuchen (Frage, Karte, Datum, Notiz)...',
    noReadingsTitle: 'Noch keine Legungen gespeichert',
    noReadingsDesc: 'Vollende eine Kartenlegung und speichere sie, um deinen spirituellen Pfad über die Zeit hinweg zu dokumentieren.',
    startFirstReadingBtn: 'Erste Legung durchführen',
    deleteReadingConfirm: 'Möchtest du diese Legung wirklich aus deinem Tagebuch löschen?',
    deleteBtn: 'Löschen',
    readingsSavedTotal: 'Legungen im Archiv',

    // Daily Ritual
    dailyRitualTitle: 'Tägliches Thoth Ritual',
    activeStreak: 'Aktive Serie',
    daysCount: 'Tage',
    dailyCardDrawn: 'Deine heutige Karte ist enthüllt',
    dailyCardNotDrawn: 'Ziehe heute deinen Impuls aus dem Äther',
    performRitualBtn: 'Tageskarte ziehen',
    viewTodayCardBtn: 'Heutige Karte ansehen',
    reminderSettingsTitle: 'Ritual-Erinnerung & Glocke',
    enableNotifications: 'Browser-Benachrichtigungen aktivieren',
    notificationsActive: 'Benachrichtigungen sind aktiv',
    soundLabel: 'Mystischer 432Hz Gong',
    reminderTimeLabel: 'Erinnerungszeit',
    saveSettings: 'Einstellungen speichern',
    testChimeBtn: 'Klang testen',

    // Modals
    closeModal: 'Schließen',
    positionInterpretationsTab: 'In Legesystemen',
    symbolismTab: 'Symbolik & Atu',
  },

  en: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: 'Thoth Oracle',
    offlineBadge: 'Offline',
    dailyRitualButton: 'Daily Card',
    dailyRitualDone: 'Ritual ✓',
    dailyRitualTooltipPending: 'Daily card not yet revealed',
    dailyRitualTooltipDone: 'Daily ritual completed for today',
    selectLanguage: 'Select Language',

    // Navigation Tabs
    navSpreads: 'Spreads',
    navLexicon: '78 Cards',
    navJournal: 'Journal',
    navGuide: 'Thoth Guide',

    // Spread Selection
    spreadSelectionBadge: 'Aleister Crowley Thoth Oracle',
    spreadSelectionTitle: 'Choose Your Spread',
    spreadSelectionSubtitle: '5 classical spread patterns based on authentic Crowley & Lady Frieda Harris symbolism. 100% offline.',
    questionLabel: 'Your Question or Intention (Optional)',
    questionPlaceholder: 'e.g. Which path is opening for me now?',
    cardsCountLabel: 'Cards',
    beginReadingBtn: 'Begin Spread',

    // Shuffle & Draw
    drawingForPosition: 'Draw Card for Position',
    shuffleBtn: 'Reshuffle Deck',
    shuffling: 'Shuffling deck...',
    tapCardToDraw: 'Touch a face-down card to draw it',
    drawnCardsProgress: 'drawn',
    cardRevealed: 'Card revealed',
    viewInterpretationBtn: 'View Complete Interpretation',
    backToSpreadsBtn: 'Back to Spreads',
    allowReversedCards: 'Reversed Cards (Inverted)',
    reversedCardsActive: 'Active: blocked, delayed & inner energy',
    onlyUprightMode: 'Upright cards only',
    orientationUpright: 'Upright',
    orientationReversed: 'Reversed',
    reversedBadge: 'Reversed',
    reversedEnergyHeading: 'Reversed Energy (Inverted)',
    unblockAdvice: 'Path to Unblock & Align',
    rotateCardAction: 'Rotate card (180°)',
    reversedCountSummary: 'Reversed',

    // Reading Result
    readingCompletedTitle: 'Your Reading Is Complete',
    questionAsked: 'Your Question',
    dominantElementTitle: 'Dominant Element',
    majorArcanaTitle: 'Major Arcana',
    cardsRevealed: 'Cards Revealed',
    synthesisTitle: 'Overall Synthesis & Cosmic Counsel',
    cardsInSpread: 'Cards in Spread',
    tapCardDetailsHint: 'Tap any card for deep positional symbolism & Crowley insight',
    selectedCardPosition: 'Position',
    generalMeaning: 'General Meaning',
    loveMeaning: 'Love & Relationships',
    careerMeaning: 'Career & Path',
    cosmicAdvice: 'Counsel of Thoth',
    shadowSide: 'Shadow Aspect & Challenge',
    astrologyLabel: 'Astrology',
    elementLabel: 'Element',
    hebrewLetterLabel: 'Hebrew Letter',
    crowleyTitleLabel: 'Crowley Title',
    notesLabel: 'Personal Notes on this Reading',
    notesPlaceholder: 'What do these cards evoke for you in this moment? Record your intuition...',
    saveToJournalBtn: 'Save to Journal',
    savedToJournal: '✓ Saved to Journal',
    newReadingBtn: 'New Reading',
    viewJournalBtn: 'Go to Journal',

    // Lexicon
    lexiconBadge: 'Encyclopedia',
    lexiconTitle: 'Aleister Crowley Thoth Tarot Deck',
    lexiconSubtitle: 'All 78 cards with in-depth interpretations for all 5 spreads, Crowley symbolism & astrology.',
    searchPlaceholder: 'Search by name, Crowley title (e.g. Virtue), Aries...',
    filterAll: 'All',
    filterMajor: 'Major Arcana (Atu)',
    filterMinor: 'Minor Arcana',
    filterWands: 'Wands (Fire)',
    filterCups: 'Cups (Water)',
    filterSwords: 'Swords (Air)',
    filterDisks: 'Disks (Earth)',
    noCardsFound: 'No cards match these search criteria.',
    cardsFoundCount: 'Cards found',

    // Journal
    journalBadge: 'Offline Storage',
    journalTitle: 'Your Tarot Journal',
    journalSubtitle: 'All your saved spreads and reflections remain securely stored on your local device.',
    journalSearchPlaceholder: 'Search journal (question, card, date, notes)...',
    noReadingsTitle: 'No Readings Saved Yet',
    noReadingsDesc: 'Complete a reading and save it to document your spiritual journey over time.',
    startFirstReadingBtn: 'Perform First Reading',
    deleteReadingConfirm: 'Do you really want to delete this reading from your journal?',
    deleteBtn: 'Delete',
    readingsSavedTotal: 'Readings archived',

    // Daily Ritual
    dailyRitualTitle: 'Daily Thoth Ritual',
    activeStreak: 'Active Streak',
    daysCount: 'Days',
    dailyCardDrawn: 'Your card for today has been revealed',
    dailyCardNotDrawn: 'Draw your daily impulse from the ether',
    performRitualBtn: 'Draw Daily Card',
    viewTodayCardBtn: 'View Today\'s Card',
    reminderSettingsTitle: 'Ritual Reminder & Sound',
    enableNotifications: 'Enable Browser Notifications',
    notificationsActive: 'Notifications are active',
    soundLabel: 'Mystical 432Hz Chime',
    reminderTimeLabel: 'Reminder Time',
    saveSettings: 'Save Settings',
    testChimeBtn: 'Test Chime',

    // Modals
    closeModal: 'Close',
    positionInterpretationsTab: 'In Spread Positions',
    symbolismTab: 'Symbolism & Atu',
  },

  es: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: 'Oráculo de Thoth',
    offlineBadge: 'Sin conexión',
    dailyRitualButton: 'Carta Diaria',
    dailyRitualDone: 'Ritual ✓',
    dailyRitualTooltipPending: 'Carta diaria aún no revelada',
    dailyRitualTooltipDone: 'Ritual diario completado hoy',
    selectLanguage: 'Seleccionar idioma',

    // Navigation Tabs
    navSpreads: 'Tirada',
    navLexicon: '78 Cartas',
    navJournal: 'Diario',
    navGuide: 'Guía Thoth',

    // Spread Selection
    spreadSelectionBadge: 'Oráculo Thoth de Aleister Crowley',
    spreadSelectionTitle: 'Elige tu Tirada',
    spreadSelectionSubtitle: '5 patrones clásicos de tiradas basados en el simbolismo de Crowley y Lady Frieda Harris. 100% offline.',
    questionLabel: 'Tu pregunta o intención (Opcional)',
    questionPlaceholder: 'ej. ¿Qué camino se abre ante mí ahora?',
    cardsCountLabel: 'Cartas',
    beginReadingBtn: 'Comenzar tirada',

    // Shuffle & Draw
    drawingForPosition: 'Roba carta para la posición',
    shuffleBtn: 'Barajar de nuevo',
    shuffling: 'Barajando el mazo...',
    tapCardToDraw: 'Toca una carta boca abajo para robarla',
    drawnCardsProgress: 'robadas',
    cardRevealed: 'Carta revelada',
    viewInterpretationBtn: 'Ver interpretación completa',
    backToSpreadsBtn: 'Volver a tiradas',
    allowReversedCards: 'Cartas invertidas (Al revés)',
    reversedCardsActive: 'Activo: energía bloqueada, retrasada o interior',
    onlyUprightMode: 'Solo cartas al derecho',
    orientationUpright: 'Al derecho',
    orientationReversed: 'Invertida (Al revés)',
    reversedBadge: 'Invertida',
    reversedEnergyHeading: 'Energía Invertida (Al revés)',
    unblockAdvice: 'Camino para desbloquear y alinear',
    rotateCardAction: 'Girar carta (180°)',
    reversedCountSummary: 'Invertidas',

    // Reading Result
    readingCompletedTitle: 'Tu tirada está completa',
    questionAsked: 'Tu pregunta',
    dominantElementTitle: 'Elemento dominante',
    majorArcanaTitle: 'Arcanos Mayores',
    cardsRevealed: 'Cartas reveladas',
    synthesisTitle: 'Síntesis global y consejo cósmico',
    cardsInSpread: 'Cartas en la tirada',
    tapCardDetailsHint: 'Toca cualquier carta para ver el simbolismo y la visión de Crowley',
    selectedCardPosition: 'Posición',
    generalMeaning: 'Significado general',
    loveMeaning: 'Amor y relaciones',
    careerMeaning: 'Profesión y camino',
    cosmicAdvice: 'Consejo de Thoth',
    shadowSide: 'Aspecto sombrío y desafío',
    astrologyLabel: 'Astrología',
    elementLabel: 'Elemento',
    hebrewLetterLabel: 'Letra hebrea',
    crowleyTitleLabel: 'Título de Crowley',
    notesLabel: 'Notas personales sobre esta tirada',
    notesPlaceholder: '¿Qué despiertan estas cartas en ti ahora? Anota tu intuición...',
    saveToJournalBtn: 'Guardar en el diario',
    savedToJournal: '✓ Guardado en el diario',
    newReadingBtn: 'Nueva tirada',
    viewJournalBtn: 'Ir al diario',

    // Lexicon
    lexiconBadge: 'Enciclopedia',
    lexiconTitle: 'Baraja Thoth de Aleister Crowley',
    lexiconSubtitle: 'Las 78 cartas con interpretaciones para las 5 tiradas, simbolismo de Crowley y astrología.',
    searchPlaceholder: 'Buscar por nombre, título de Crowley (ej. Virtud), Aries...',
    filterAll: 'Todas',
    filterMajor: 'Arcanos Mayores (Atu)',
    filterMinor: 'Arcanos Menores',
    filterWands: 'Bastos (Fuego)',
    filterCups: 'Copas (Agua)',
    filterSwords: 'Espadas (Aire)',
    filterDisks: 'Discos (Tierra)',
    noCardsFound: 'No se encontraron cartas con esos criterios.',
    cardsFoundCount: 'Cartas encontradas',

    // Journal
    journalBadge: 'Memoria local',
    journalTitle: 'Tu Diario de Tarot',
    journalSubtitle: 'Todas tus tiradas y reflexiones se conservan localmente en tu dispositivo.',
    journalSearchPlaceholder: 'Buscar en diario (pregunta, carta, fecha, nota)...',
    noReadingsTitle: 'Sin tiradas guardadas todavía',
    noReadingsDesc: 'Realiza una tirada y guárdala para registrar tu camino espiritual a través del tiempo.',
    startFirstReadingBtn: 'Hacer primera tirada',
    deleteReadingConfirm: '¿Seguro que deseas eliminar esta tirada de tu diario?',
    deleteBtn: 'Eliminar',
    readingsSavedTotal: 'Tiradas archivadas',

    // Daily Ritual
    dailyRitualTitle: 'Ritual Diario de Thoth',
    activeStreak: 'Racha activa',
    daysCount: 'Días',
    dailyCardDrawn: 'Tu carta de hoy ha sido revelada',
    dailyCardNotDrawn: 'Roba hoy tu impulso del éter',
    performRitualBtn: 'Robar carta diaria',
    viewTodayCardBtn: 'Ver carta de hoy',
    reminderSettingsTitle: 'Recordatorio y campana',
    enableNotifications: 'Activar notificaciones del navegador',
    notificationsActive: 'Notificaciones activadas',
    soundLabel: 'Campana mística 432Hz',
    reminderTimeLabel: 'Hora del recordatorio',
    saveSettings: 'Guardar ajustes',
    testChimeBtn: 'Probar campana',

    // Modals
    closeModal: 'Cerrar',
    positionInterpretationsTab: 'Por posición de tirada',
    symbolismTab: 'Simbolismo y Atu',
  },

  fr: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: 'Oracle de Thoth',
    offlineBadge: 'Hors-ligne',
    dailyRitualButton: 'Carte du Jour',
    dailyRitualDone: 'Rituel ✓',
    dailyRitualTooltipPending: 'Carte du jour pas encore dévoilée',
    dailyRitualTooltipDone: 'Rituel du jour accompli',
    selectLanguage: 'Choisir la langue',

    // Navigation Tabs
    navSpreads: 'Tirage',
    navLexicon: '78 Cartes',
    navJournal: 'Journal',
    navGuide: 'Guide Thoth',

    // Spread Selection
    spreadSelectionBadge: 'Oracle Thoth d\'Aleister Crowley',
    spreadSelectionTitle: 'Choisissez Votre Tirage',
    spreadSelectionSubtitle: '5 tirages classiques fondés sur la symbolique de Crowley & Lady Frieda Harris. 100% hors-ligne.',
    questionLabel: 'Votre question ou intention (Optionnel)',
    questionPlaceholder: 'ex. Quel sentier s\'ouvre à moi maintenant ?',
    cardsCountLabel: 'Cartes',
    beginReadingBtn: 'Commencer le tirage',

    // Shuffle & Draw
    drawingForPosition: 'Tirez une carte pour la position',
    shuffleBtn: 'Rebattre le jeu',
    shuffling: 'Mélange des cartes...',
    tapCardToDraw: 'Touchez une carte face cachée pour la tirer',
    drawnCardsProgress: 'tirées',
    cardRevealed: 'Carte révélée',
    viewInterpretationBtn: 'Voir l\'interprétation complète',
    backToSpreadsBtn: 'Retour aux tirages',
    allowReversedCards: 'Cartes renversées (À l’envers)',
    reversedCardsActive: 'Actif : énergie bloquée, retardée ou intérieure',
    onlyUprightMode: 'Cartes droites uniquement',
    orientationUpright: 'À l’endroit',
    orientationReversed: 'Renversée (À l’envers)',
    reversedBadge: 'Renversée',
    reversedEnergyHeading: 'Énergie Renversée (À l’envers)',
    unblockAdvice: 'Chemin de déblocage et d’alignement',
    rotateCardAction: 'Tourner la carte (180°)',
    reversedCountSummary: 'Renversées',

    // Reading Result
    readingCompletedTitle: 'Votre tirage est achevé',
    questionAsked: 'Votre question',
    dominantElementTitle: 'Élément dominant',
    majorArcanaTitle: 'Arcanes Majeurs',
    cardsRevealed: 'Cartes dévoilées',
    synthesisTitle: 'Synthèse globale & conseil cosmique',
    cardsInSpread: 'Cartes du tirage',
    tapCardDetailsHint: 'Touchez une carte pour le symbolisme profond de Crowley',
    selectedCardPosition: 'Position',
    generalMeaning: 'Signification générale',
    loveMeaning: 'Amour & relations',
    careerMeaning: 'Carrière & chemin de vie',
    cosmicAdvice: 'Conseil de Thoth',
    shadowSide: 'Ombre & défi',
    astrologyLabel: 'Astrologie',
    elementLabel: 'Élément',
    hebrewLetterLabel: 'Lettre hébraïque',
    crowleyTitleLabel: 'Titre de Crowley',
    notesLabel: 'Notes personnelles sur ce tirage',
    notesPlaceholder: 'Que vous inspirent ces arcanes en cet instant ? Notez votre intuition...',
    saveToJournalBtn: 'Enregistrer dans le journal',
    savedToJournal: '✓ Enregistré dans le journal',
    newReadingBtn: 'Nouveau tirage',
    viewJournalBtn: 'Voir le journal',

    // Lexicon
    lexiconBadge: 'Encyclopédie',
    lexiconTitle: 'Tarot Thoth d\'Aleister Crowley',
    lexiconSubtitle: 'Les 78 arcanes avec interprétations détaillées pour les 5 tirages, symbolisme et astrologie.',
    searchPlaceholder: 'Rechercher par nom, titre de Crowley (ex. Vertu), Bélier...',
    filterAll: 'Toutes',
    filterMajor: 'Arcanes Majeurs (Atu)',
    filterMinor: 'Arcanes Mineurs',
    filterWands: 'Bâtons (Feu)',
    filterCups: 'Coupes (Eau)',
    filterSwords: 'Épées (Air)',
    filterDisks: 'Disques (Terre)',
    noCardsFound: 'Aucune carte trouvée pour ces critères.',
    cardsFoundCount: 'Cartes trouvées',

    // Journal
    journalBadge: 'Mémoire locale',
    journalTitle: 'Votre Journal de Tarot',
    journalSubtitle: 'Tous vos tirages et réflexions restent stockés localement sur votre appareil.',
    journalSearchPlaceholder: 'Chercher dans le journal (question, carte, date, note)...',
    noReadingsTitle: 'Aucun tirage enregistré',
    noReadingsDesc: 'Effectuez un tirage et enregistrez-le pour documenter votre cheminement initiatique.',
    startFirstReadingBtn: 'Faire un premier tirage',
    deleteReadingConfirm: 'Voulez-vous vraiment supprimer ce tirage de votre journal ?',
    deleteBtn: 'Supprimer',
    readingsSavedTotal: 'Tirages archivés',

    // Daily Ritual
    dailyRitualTitle: 'Rituel Quotidien de Thoth',
    activeStreak: 'Série active',
    daysCount: 'Jours',
    dailyCardDrawn: 'Votre carte du jour est révélée',
    dailyCardNotDrawn: 'Puisez aujourd\'hui votre impulsion dans l\'éther',
    performRitualBtn: 'Tirer la carte du jour',
    viewTodayCardBtn: 'Voir la carte du jour',
    reminderSettingsTitle: 'Rappel & cloche rituelle',
    enableNotifications: 'Activer les notifications du navigateur',
    notificationsActive: 'Notifications actives',
    soundLabel: 'Carillon mystique 432Hz',
    reminderTimeLabel: 'Heure du rappel',
    saveSettings: 'Enregistrer réglages',
    testChimeBtn: 'Tester le carillon',

    // Modals
    closeModal: 'Fermer',
    positionInterpretationsTab: 'Par position de tirage',
    symbolismTab: 'Symbolisme & Atu',
  },

  ru: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: 'Оракул Тота',
    offlineBadge: 'Офлайн',
    dailyRitualButton: 'Карта дня',
    dailyRitualDone: 'Ритуал ✓',
    dailyRitualTooltipPending: 'Карта дня еще не открыта',
    dailyRitualTooltipDone: 'Дневной ритуал сегодня завершен',
    selectLanguage: 'Выбрать язык',

    // Navigation Tabs
    navSpreads: 'Расклад',
    navLexicon: '78 Карт',
    navJournal: 'Дневник',
    navGuide: 'Гайд Тота',

    // Spread Selection
    spreadSelectionBadge: 'Оракул Тота Алистера Кроули',
    spreadSelectionTitle: 'Выберите расклад',
    spreadSelectionSubtitle: '5 классических раскладов по аутентичной символике Кроули и леди Фриды Харрис. 100% офлайн.',
    questionLabel: 'Ваш вопрос или намерение (Необязательно)',
    questionPlaceholder: 'напр., Какой путь открывается передо мной сейчас?',
    cardsCountLabel: 'Карт',
    beginReadingBtn: 'Начать расклад',

    // Shuffle & Draw
    drawingForPosition: 'Тяните карту для позиции',
    shuffleBtn: 'Перетасовать колоду',
    shuffling: 'Тасовка колоды...',
    tapCardToDraw: 'Коснитесь закрытой карты, чтобы вытянуть её',
    drawnCardsProgress: 'вытянуто',
    cardRevealed: 'Карта открыта',
    viewInterpretationBtn: 'Смотреть полное толкование',
    backToSpreadsBtn: 'Назад к раскладам',
    allowReversedCards: 'Перевёрнутые карты',
    reversedCardsActive: 'Активно: блокированная или внутренняя энергия',
    onlyUprightMode: 'Только прямые карты',
    orientationUpright: 'Прямая',
    orientationReversed: 'Перевёрнутая',
    reversedBadge: 'Перевёрнута',
    reversedEnergyHeading: 'Перевёрнутая энергия',
    unblockAdvice: 'Путь к преодолению блока',
    rotateCardAction: 'Повернуть карту (180°)',
    reversedCountSummary: 'Перевёрнуто',

    // Reading Result
    readingCompletedTitle: 'Ваш расклад завершен',
    questionAsked: 'Ваш вопрос',
    dominantElementTitle: 'Доминирующая стихия',
    majorArcanaTitle: 'Старшие Арканы',
    cardsRevealed: 'Открыто карт',
    synthesisTitle: 'Общий синтез и космический совет',
    cardsInSpread: 'Карты в раскладе',
    tapCardDetailsHint: 'Нажмите на карту для глубокого разбора позиции и символики Кроули',
    selectedCardPosition: 'Позиция',
    generalMeaning: 'Общее значение',
    loveMeaning: 'Любовь и отношения',
    careerMeaning: 'Карьера и путь',
    cosmicAdvice: 'Совет Тота',
    shadowSide: 'Тень и вызов',
    astrologyLabel: 'Астрология',
    elementLabel: 'Стихия',
    hebrewLetterLabel: 'Еврейская буква',
    crowleyTitleLabel: 'Титул Кроули',
    notesLabel: 'Личные заметки к раскладу',
    notesPlaceholder: 'Что значат эти карты для вас сейчас? Запишите интуицию...',
    saveToJournalBtn: 'Сохранить в дневник',
    savedToJournal: '✓ Сохранено в дневнике',
    newReadingBtn: 'Новый расклад',
    viewJournalBtn: 'Перейти в дневник',

    // Lexicon
    lexiconBadge: 'Энциклопедия',
    lexiconTitle: 'Колода Таро Тота Алистера Кроули',
    lexiconSubtitle: 'Все 78 карт с глубоким толкованием для всех 5 раскладов, символикой и астрологией.',
    searchPlaceholder: 'Поиск по имени, титулу (напр., Добродетель), Овен...',
    filterAll: 'Все',
    filterMajor: 'Старшие Арканы (Ату)',
    filterMinor: 'Младшие Арканы',
    filterWands: 'Жезлы (Огонь)',
    filterCups: 'Чаши (Вода)',
    filterSwords: 'Мечи (Воздух)',
    filterDisks: 'Диски (Земля)',
    noCardsFound: 'Карты не найдены.',
    cardsFoundCount: 'Найдено карт',

    // Journal
    journalBadge: 'Локальное хранилище',
    journalTitle: 'Ваш Таро-Дневник',
    journalSubtitle: 'Все сохраненные расклады и заметки остаются на вашем устройстве локально.',
    journalSearchPlaceholder: 'Поиск в дневнике (вопрос, карта, дата, заметка)...',
    noReadingsTitle: 'Пока нет сохраненных раскладов',
    noReadingsDesc: 'Завершите расклад и сохраните его, чтобы отслеживать свой духовный путь.',
    startFirstReadingBtn: 'Сделать первый расклад',
    deleteReadingConfirm: 'Удалить этот расклад из дневника?',
    deleteBtn: 'Удалить',
    readingsSavedTotal: 'Сохранено раскладов',

    // Daily Ritual
    dailyRitualTitle: 'Ежедневный ритуал Тота',
    activeStreak: 'Серия дней',
    daysCount: 'Дней',
    dailyCardDrawn: 'Ваша карта на сегодня открыта',
    dailyCardNotDrawn: 'Вытяните сегодня свой импульс из эфира',
    performRitualBtn: 'Вытянуть карту дня',
    viewTodayCardBtn: 'Посмотреть карту дня',
    reminderSettingsTitle: 'Напоминание и ритуальный колокол',
    enableNotifications: 'Включить уведомления браузера',
    notificationsActive: 'Уведомления активны',
    soundLabel: 'Мистический гонг 432Гц',
    reminderTimeLabel: 'Время напоминания',
    saveSettings: 'Сохранить настройки',
    testChimeBtn: 'Проверить звук',

    // Modals
    closeModal: 'Закрыть',
    positionInterpretationsTab: 'В раскладах',
    symbolismTab: 'Символизм и Ату',
  },

  tr: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: 'Thoth Kehaneti',
    offlineBadge: 'Çevrimdışı',
    dailyRitualButton: 'Günün Kartı',
    dailyRitualDone: 'Ritüel ✓',
    dailyRitualTooltipPending: 'Günün kartı henüz açılmadı',
    dailyRitualTooltipDone: 'Bugünkü günlük ritüel tamamlandı',
    selectLanguage: 'Dil Seç',

    // Navigation Tabs
    navSpreads: 'Açılım',
    navLexicon: '78 Kart',
    navJournal: 'Günlük',
    navGuide: 'Thoth Rehberi',

    // Spread Selection
    spreadSelectionBadge: 'Aleister Crowley Thoth Kehaneti',
    spreadSelectionTitle: 'Açılım Düzenini Seç',
    spreadSelectionSubtitle: 'Crowley ve Leydi Frieda Harris sembolizmine dayanan 5 klasik açılım. %100 çevrimdışı.',
    questionLabel: 'Sorunuz veya Niyetiniz (İsteğe bağlı)',
    questionPlaceholder: 'ör. Şimdi önümde hangi yol açılıyor?',
    cardsCountLabel: 'Kart',
    beginReadingBtn: 'Açılıma Başla',

    // Shuffle & Draw
    drawingForPosition: 'Pozisyon için kart çekin',
    shuffleBtn: 'Desteyi Karıştır',
    shuffling: 'Deste karıştırılıyor...',
    tapCardToDraw: 'Çekmek için kapalı bir karta dokunun',
    drawnCardsProgress: 'çekildi',
    cardRevealed: 'Kart açıldı',
    viewInterpretationBtn: 'Tam Yorumu Görüntüle',
    backToSpreadsBtn: 'Açılımlara Dön',
    allowReversedCards: 'Ters Kartlar',
    reversedCardsActive: 'Aktif: engellenmiş, gecikmiş veya içsel enerji',
    onlyUprightMode: 'Yalnızca düz kartlar',
    orientationUpright: 'Düz',
    orientationReversed: 'Ters',
    reversedBadge: 'Ters',
    reversedEnergyHeading: 'Ters Kart Enerjisi',
    unblockAdvice: 'Engeli aşma ve denge yolu',
    rotateCardAction: 'Kartı çevir (180°)',
    reversedCountSummary: 'Ters Kartlar',

    // Reading Result
    readingCompletedTitle: 'Açılımınız Tamamlandı',
    questionAsked: 'Sorunuz',
    dominantElementTitle: 'Baskın Element',
    majorArcanaTitle: 'Büyük Arkana',
    cardsRevealed: 'Açılan Kartlar',
    synthesisTitle: 'Genel Sentez ve Kozmik Tavsiye',
    cardsInSpread: 'Açılımdaki Kartlar',
    tapCardDetailsHint: 'Derin pozisyon sembolizmi ve Crowley yorumu için karta dokunun',
    selectedCardPosition: 'Pozisyon',
    generalMeaning: 'Genel Anlam',
    loveMeaning: 'Aşk ve İlişkiler',
    careerMeaning: 'Kariyer ve Yaşam Yolu',
    cosmicAdvice: 'Thoth\'un Öğüdü',
    shadowSide: 'Gölge Yön ve Zorluk',
    astrologyLabel: 'Astroloji',
    elementLabel: 'Element',
    hebrewLetterLabel: 'İbrani Harfi',
    crowleyTitleLabel: 'Crowley Başlığı',
    notesLabel: 'Bu Açılıma Dair Kişisel Notlar',
    notesPlaceholder: 'Bu kartlar şu an size ne hissettiriyor? Sezgilerinizi not edin...',
    saveToJournalBtn: 'Günlüğe Kaydet',
    savedToJournal: '✓ Günlüğe Kaydedildi',
    newReadingBtn: 'Yeni Açılım',
    viewJournalBtn: 'Günlüğe Git',

    // Lexicon
    lexiconBadge: 'Ansiklopedi',
    lexiconTitle: 'Aleister Crowley Thoth Tarot Destesi',
    lexiconSubtitle: '5 açılım için derin yorumlar, Crowley sembolizmi ve astrolojiyle tüm 78 kart.',
    searchPlaceholder: 'İsim, Crowley unvanı (ör. Erdem), Koç ile ara...',
    filterAll: 'Tümü',
    filterMajor: 'Büyük Arkana (Atu)',
    filterMinor: 'Küçük Arkana',
    filterWands: 'Asalar (Ateş)',
    filterCups: 'Kupalar (Su)',
    filterSwords: 'Kılıçlar (Hava)',
    filterDisks: 'Diskler (Toprak)',
    noCardsFound: 'Bu kriterlere uyan kart bulunamadı.',
    cardsFoundCount: 'Kart bulundu',

    // Journal
    journalBadge: 'Çevrimdışı Bellek',
    journalTitle: 'Tarot Günlüğünüz',
    journalSubtitle: 'Kaydedilen tüm açılımlarınız ve notlarınız yerel olarak cihazınızda saklanır.',
    journalSearchPlaceholder: 'Günlükte ara (soru, kart, tarih, not)...',
    noReadingsTitle: 'Henüz kayıtlı açılım yok',
    noReadingsDesc: 'Ruhsal yolculuğunuzu takip etmek için bir açılım yapın ve kaydedin.',
    startFirstReadingBtn: 'İlk Açılımı Yap',
    deleteReadingConfirm: 'Bu açılımı günlüğünüzden silmek istediğinize emin misiniz?',
    deleteBtn: 'Sil',
    readingsSavedTotal: 'Kayıtlı açılım',

    // Daily Ritual
    dailyRitualTitle: 'Günlük Thoth Ritüeli',
    activeStreak: 'Aktif Seri',
    daysCount: 'Gün',
    dailyCardDrawn: 'Günün kartı açıldı',
    dailyCardNotDrawn: 'Bugünkü kozmik ilhamınızı çekin',
    performRitualBtn: 'Günün Kartını Çek',
    viewTodayCardBtn: 'Günün Kartını İncele',
    reminderSettingsTitle: 'Ritüel Hatırlatıcı ve Çan',
    enableNotifications: 'Tarayıcı bildirimlerini etkinleştir',
    notificationsActive: 'Bildirimler etkin',
    soundLabel: 'Mistik 432Hz Çan Sesi',
    reminderTimeLabel: 'Hatırlatma Saati',
    saveSettings: 'Ayarları Kaydet',
    testChimeBtn: 'Sesi Dene',

    // Modals
    closeModal: 'Kapat',
    positionInterpretationsTab: 'Açılım Pozisyonlarında',
    symbolismTab: 'Sembolizm ve Atu',
  },

  zh: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: '托特神谕',
    offlineBadge: '离线模式',
    dailyRitualButton: '每日一牌',
    dailyRitualDone: '仪式 ✓',
    dailyRitualTooltipPending: '今日牌面尚未揭晓',
    dailyRitualTooltipDone: '今日每日仪式已完成',
    selectLanguage: '选择语言',

    // Navigation Tabs
    navSpreads: '牌阵',
    navLexicon: '78张牌',
    navJournal: '日志',
    navGuide: '托特指南',

    // Spread Selection
    spreadSelectionBadge: '阿莱斯特·克劳利 托特塔罗神谕',
    spreadSelectionTitle: '选择您的牌阵',
    spreadSelectionSubtitle: '基于克劳利与芙里达·哈里斯夫人的纯正神秘象征学，精选5大经典牌阵。100%离线可用。',
    questionLabel: '您的问题或意图 (可选)',
    questionPlaceholder: '例如：当下我该走向何方？',
    cardsCountLabel: '张牌',
    beginReadingBtn: '开始占卜',

    // Shuffle & Draw
    drawingForPosition: '抽取此位置的牌',
    shuffleBtn: '重新洗牌',
    shuffling: '正在洗牌...',
    tapCardToDraw: '点击暗牌进行抽取',
    drawnCardsProgress: '已抽取',
    cardRevealed: '牌面已揭晓',
    viewInterpretationBtn: '查看完整深度解读',
    backToSpreadsBtn: '返回牌阵选择',
    allowReversedCards: '允许逆位牌 (倒置)',
    reversedCardsActive: '已开启：阻滞、延迟与内在反省能量',
    onlyUprightMode: '仅正位牌',
    orientationUpright: '正位',
    orientationReversed: '逆位 (倒置)',
    reversedBadge: '逆位',
    reversedEnergyHeading: '逆位能量 (倒置)',
    unblockAdvice: '疏通与转化指引',
    rotateCardAction: '旋转卡牌 (180°)',
    reversedCountSummary: '逆位卡牌',

    // Reading Result
    readingCompletedTitle: '占卜仪式已完成',
    questionAsked: '您的问题',
    dominantElementTitle: '主导元素',
    majorArcanaTitle: '大阿卡纳',
    cardsRevealed: '揭示牌数',
    synthesisTitle: '全局综合解析与宇宙指引',
    cardsInSpread: '牌阵中的牌',
    tapCardDetailsHint: '点击任意卡牌查看深度位置象征与克劳利释义',
    selectedCardPosition: '位置',
    generalMeaning: '综合含义',
    loveMeaning: '爱情与人际',
    careerMeaning: '事业与指引',
    cosmicAdvice: '托特的谏言',
    shadowSide: '阴影面向与挑战',
    astrologyLabel: '占星对应',
    elementLabel: '元素',
    hebrewLetterLabel: '希伯来字母',
    crowleyTitleLabel: '克劳利专属头衔',
    notesLabel: '关于本次占卜的心得笔记',
    notesPlaceholder: '这些卡牌在此刻唤起了你怎样的直觉？在此记录...',
    saveToJournalBtn: '保存至日志',
    savedToJournal: '✓ 已保存至日志',
    newReadingBtn: '进行新占卜',
    viewJournalBtn: '前往日志',

    // Lexicon
    lexiconBadge: '百科全书',
    lexiconTitle: '阿莱斯特·克劳利 托特塔罗牌全集',
    lexiconSubtitle: '收录全部78张牌，包含五大牌阵深度释义、克劳利原版象征学及占星对应。',
    searchPlaceholder: '搜索牌名、专属头衔（如：美德）、白羊座...',
    filterAll: '全部',
    filterMajor: '大阿卡纳 (Atu)',
    filterMinor: '小阿卡纳',
    filterWands: '权杖 (火)',
    filterCups: '圣杯 (水)',
    filterSwords: '宝剑 (风)',
    filterDisks: '圆盘 (土)',
    noCardsFound: '未找到符合条件的卡牌。',
    cardsFoundCount: '张卡牌',

    // Journal
    journalBadge: '本地存储',
    journalTitle: '您的塔罗日记',
    journalSubtitle: '所有保存的占卜记录与笔记均完整保存在您的本地设备上。',
    journalSearchPlaceholder: '搜索日志 (问题、卡牌、日期、笔记)...',
    noReadingsTitle: '暂无保存的占卜记录',
    noReadingsDesc: '完成一次占卜并保存，以沉淀记录您的灵性觉醒历程。',
    startFirstReadingBtn: '开启第一次占卜',
    deleteReadingConfirm: '您确定要从日记中删除这条记录吗？',
    deleteBtn: '删除',
    readingsSavedTotal: '已存档占卜',

    // Daily Ritual
    dailyRitualTitle: '每日托特冥想仪式',
    activeStreak: '连续打卡',
    daysCount: '天',
    dailyCardDrawn: '今日指引之牌已显现',
    dailyCardNotDrawn: '从以太之海抽取今日指引',
    performRitualBtn: '抽取今日牌',
    viewTodayCardBtn: '查看今日牌',
    reminderSettingsTitle: '仪式提醒与钟声',
    enableNotifications: '开启浏览器推送提醒',
    notificationsActive: '提醒已激活',
    soundLabel: '432Hz神秘疗愈颂钵',
    reminderTimeLabel: '每日提醒时间',
    saveSettings: '保存设置',
    testChimeBtn: '试听钟声',

    // Modals
    closeModal: '关闭',
    positionInterpretationsTab: '在牌阵位置中',
    symbolismTab: '象征学与Atu',
  },

  ja: {
    // Header & App
    appName: 'GrimTarot',
    appSubtitle: 'トート・オラクル',
    offlineBadge: 'オフライン',
    dailyRitualButton: 'デイリーカード',
    dailyRitualDone: '儀式完了 ✓',
    dailyRitualTooltipPending: '本日のカードはまだ引かれていません',
    dailyRitualTooltipDone: '本日のデイリー儀式は完了しました',
    selectLanguage: '言語を選択',

    // Navigation Tabs
    navSpreads: 'スプレッド',
    navLexicon: '78枚のカード',
    navJournal: '日誌',
    navGuide: 'トート手引',

    // Spread Selection
    spreadSelectionBadge: 'アレイスター・クローリー トート・オラクル',
    spreadSelectionTitle: 'スプレッドを選択',
    spreadSelectionSubtitle: 'クローリーとレディ・フリーダ・ハリスの象徴体系に基づく5つの伝統スプレッド。100%オフライン対応。',
    questionLabel: 'あなたの問い・意図 (任意)',
    questionPlaceholder: '例：今、私の前に開かれている道は？',
    cardsCountLabel: '枚',
    beginReadingBtn: 'リーディングを開始',

    // Shuffle & Draw
    drawingForPosition: 'この位置のカードを引く',
    shuffleBtn: 'デッキをシャッフル',
    shuffling: 'デッキをシャッフル中...',
    tapCardToDraw: '裏向きのカードをタップして引く',
    drawnCardsProgress: '枚展開済',
    cardRevealed: 'カードが顕現しました',
    viewInterpretationBtn: '完全な解釈を見る',
    backToSpreadsBtn: 'スプレッド選択に戻る',
    allowReversedCards: '逆位置カードを許可',
    reversedCardsActive: '有効：停滞・遅延・内向のエネルギー',
    onlyUprightMode: '正位置のみ',
    orientationUpright: '正位置',
    orientationReversed: '逆位置',
    reversedBadge: '逆位置',
    reversedEnergyHeading: '逆位置のエネルギー',
    unblockAdvice: '解放と統合への道',
    rotateCardAction: 'カードを回転 (180°)',
    reversedCountSummary: '逆位置カード',

    // Reading Result
    readingCompletedTitle: 'リーディングが完了しました',
    questionAsked: 'あなたの問い',
    dominantElementTitle: '支配的なエレメント',
    majorArcanaTitle: '大アルカナ',
    cardsRevealed: '顕現したカード',
    synthesisTitle: '全体統合と宇宙のアドバイス',
    cardsInSpread: 'スプレッド内のカード',
    tapCardDetailsHint: 'カードをタップして位置ごとの深い象徴とクローリーの解釈を確認',
    selectedCardPosition: '位置',
    generalMeaning: '全般的な意味',
    loveMeaning: '愛と人間関係',
    careerMeaning: '仕事と人生の道',
    cosmicAdvice: 'トートの助言',
    shadowSide: '影の側面と課題',
    astrologyLabel: '占星術対応',
    elementLabel: 'エレメント',
    hebrewLetterLabel: 'ヘブライ文字',
    crowleyTitleLabel: 'クローリー固有の称号',
    notesLabel: 'このリーディングに関するメモ',
    notesPlaceholder: 'このカードから何を感じましたか？ 直感を記録してください...',
    saveToJournalBtn: '日誌に保存',
    savedToJournal: '✓ 日誌に保存しました',
    newReadingBtn: '新しいリーディング',
    viewJournalBtn: '日誌を見る',

    // Lexicon
    lexiconBadge: '事典',
    lexiconTitle: 'トート・タロット 78枚全解釈',
    lexiconSubtitle: '全78枚のカード、5大スプレッドでの位置別解釈、クローリーの象徴と占星術対応。',
    searchPlaceholder: 'カード名、称号（例：徳）、牡羊座で検索...',
    filterAll: 'すべて',
    filterMajor: '大アルカナ (Atu)',
    filterMinor: '小アルカナ',
    filterWands: 'ワンド (火)',
    filterCups: 'カップ (水)',
    filterSwords: 'ソード (風)',
    filterDisks: 'ディスク (地)',
    noCardsFound: '条件に一致するカードが見つかりません。',
    cardsFoundCount: '枚のカード',

    // Journal
    journalBadge: 'ローカル保存',
    journalTitle: 'タロット日誌',
    journalSubtitle: '保存されたすべてのリーディングとメモは端末内にローカル保存されます。',
    journalSearchPlaceholder: '日誌を検索 (問い、カード、日付、メモ)...',
    noReadingsTitle: '保存された記録はありません',
    noReadingsDesc: 'リーディングを行い保存することで、精神的な旅の歩みを記録できます。',
    startFirstReadingBtn: '最初のリーディングを行う',
    deleteReadingConfirm: 'この記録を日誌から削除しますか？',
    deleteBtn: '削除',
    readingsSavedTotal: '件の記録',

    // Daily Ritual
    dailyRitualTitle: 'デイリー・トート儀式',
    activeStreak: '連続日数',
    daysCount: '日',
    dailyCardDrawn: '本日のカードが顕現しました',
    dailyCardNotDrawn: 'エーテルから今日の一枚を引きましょう',
    performRitualBtn: 'デイリーカードを引く',
    viewTodayCardBtn: '本日のカードを見る',
    reminderSettingsTitle: 'リマインダーと鐘の設定',
    enableNotifications: 'ブラウザ通知を有効にする',
    notificationsActive: '通知は有効です',
    soundLabel: '432Hz 神秘の音叉チャイム',
    reminderTimeLabel: '通知時刻',
    saveSettings: '設定を保存',
    testChimeBtn: '音をテスト',

    // Modals
    closeModal: '閉じる',
    positionInterpretationsTab: 'スプレッド位置別解釈',
    symbolismTab: '象徴体系とAtu',
  }
};

// ==========================================
// SPREAD TRANSLATIONS
// ==========================================
export interface LocalizedSpreadData {
  name: string;
  subtitle: string;
  description: string;
  positions: {
    title: string;
    shortLabel: string;
    description: string;
  }[];
}

export const SPREAD_TRANSLATIONS: Record<SupportedLanguage, Record<string, LocalizedSpreadData>> = {
  de: {
    tageskarte: {
      name: 'Tageskarte',
      subtitle: 'Der tägliche Impuls & Fokus',
      description: 'Zieht eine Karte als energetischen Leitfaden für deinen heutigen Tag. Ideal für morgendliche Inspiration und achtsamen Fokus.',
      positions: [
        {
          title: 'Impuls des Tages',
          shortLabel: 'Tagesfokus',
          description: 'Das zentrale Thema, die Energie oder die Lektion, die deinen heutigen Tag begleitet.'
        }
      ]
    },
    drei_karten: {
      name: 'Drei Karten Legung',
      subtitle: 'Zeitlinie oder Situation & Ratschlag',
      description: 'Der Klassiker der Tarot-Legung. Beleuchtet Entwicklungen über Zeiträume hinweg oder klärt eine konkrete Situation mit Hindernis und Ratschlag.',
      positions: [
        {
          title: 'Vergangenheit / Ausgangslage',
          shortLabel: 'Gestern',
          description: 'Bisherige Einflüsse, Ursachen und Erfahrungen, die zu deiner jetzigen Situation geführt haben.'
        },
        {
          title: 'Gegenwart / Kernthema',
          shortLabel: 'Heute',
          description: 'Die aktuelle Dynamik, der Ist-Zustand und die emotionale oder mentale Realität im Hier und Jetzt.'
        },
        {
          title: 'Zukunft / Perspektive',
          shortLabel: 'Morgen',
          description: 'Die absehbare Entwicklung, das Potenzial oder der nächste logische Schritt.'
        }
      ]
    },
    vier_karten: {
      name: 'Vier Karten Legung',
      subtitle: 'Der Kompass / Orientierungskreuz',
      description: 'Gibt dir klare Orientierung bei Entscheidungen oder kniffligen Lebensfragen. Zeigt Thema, Warnung, Empfehlung und Ziel.',
      positions: [
        {
          title: 'Das Kernthema',
          shortLabel: '1. Thema',
          description: 'Worum es wirklich geht – der Kern der Frage oder der aktuellen Lebensphase.'
        },
        {
          title: 'Was du vermeiden solltest',
          shortLabel: '2. Warnung',
          description: 'Fallstricke, Illusionen oder Verhaltensweisen, die dir jetzt schaden würden.'
        },
        {
          title: 'Was zu tun ist / Ratschlag',
          shortLabel: '3. Empfehlung',
          description: 'Die förderliche Haltung oder konkrete Handlung, die dich jetzt weiterbringt.'
        },
        {
          title: 'Wohin die Reise führt',
          shortLabel: '4. Ziel',
          description: 'Das Ergebnis oder das längerfristige Potenzial, wenn du dem Ratschlag folgst.'
        }
      ]
    },
    sieben_karten: {
      name: 'Sieben Karten Legung',
      subtitle: 'Das Hufeisen / Tiefe Gesamtschau',
      description: 'Ein umfassendes Legesystem für komplexe Lebensfragen, persönliche Transformationen und tiefe Einsichten in Schicksalsmuster.',
      positions: [
        {
          title: 'Vergangener Einfluss',
          shortLabel: '1. Vergangenes',
          description: 'Einflüsse aus der jüngeren Vergangenheit, die noch nachwirken.'
        },
        {
          title: 'Gegenwärtige Situation',
          shortLabel: '2. Gegenwart',
          description: 'Der aktuelle energetische Zustand und deine bewusste Wahrnehmung.'
        },
        {
          title: 'Verborgene Einflüsse',
          shortLabel: '3. Verborgenes',
          description: 'Unbewusste Strömungen, verdrängte Ängste oder unsichtbare Faktoren.'
        },
        {
          title: 'Der Wendepunkt / Hindernis',
          shortLabel: '4. Wendepunkt',
          description: 'Die zentrale Herausforderung, die es zu meistern gilt.'
        },
        {
          title: 'Äußeres Umfeld',
          shortLabel: '5. Umfeld',
          description: 'Die Haltung anderer Menschen und äußere Rahmenbedingungen.'
        },
        {
          title: 'Hoffnungen und Befürchtungen',
          shortLabel: '6. Psyche',
          description: 'Deine innerste emotionale Erwartung oder unbewusste Blockaden.'
        },
        {
          title: 'Das Endergebnis / Synthese',
          shortLabel: '7. Ausgang',
          description: 'Die natürliche Konsequenz des Weges bei jetzigem Erkenntnisstand.'
        }
      ]
    },
    liebes_beziehung: {
      name: 'Liebes- & Beziehungslegung',
      subtitle: 'Seelenpartner & Beziehungsdynamik',
      description: 'Analysiert die energetische Verbindung zwischen zwei Seelen: Deine Haltung, die Haltung deines Gegenübers und das gemeinsame Schicksal.',
      positions: [
        {
          title: 'Dein innerer Zustand / Deine Erwartung',
          shortLabel: 'Du',
          description: 'Deine wahren Gefühle, Wünsche und bewussten wie unbewussten Absichten in dieser Partnerschaft.'
        },
        {
          title: 'Das verbindende Band / Die gemeinsame Energie',
          shortLabel: 'Die Bindung',
          description: 'Das zentrale energetische Thema, die alchemistische Hochzeit oder die gemeinsame Lernaufgabe.'
        },
        {
          title: 'Zustand & Haltung des Partners / Gegenübers',
          shortLabel: 'Dein Gegenüber',
          description: 'Die seelische Verfassung, Projektionen und Gefühle deines Gegenübers dir gegenüber.'
        },
        {
          title: 'Die gemeinsame Perspektive / Das Schicksal',
          shortLabel: 'Zukunft',
          description: 'Wohin diese Liebesverbindung führt und welche Reifung sie für beide Seelen bereithält.'
        }
      ]
    },
    thelemisches_kreuz: {
      name: 'Das Thelemische Kreuz (Die Kern-Analyse)',
      subtitle: 'Ausbalancierte Kreuz-Geometrie für komplexe Lebensfragen',
      description: 'Eine thelemische Weiterentwicklung des keltischen Kreuzes nach Aleister Crowley. Geometrisch exakter auf das Kreuz-Symbol ausbalanciert, enthüllt es das dynamische Zusammenspiel von Wahrem Willen (Thelema), Wurzel, Krone und Quintessenz.',
      positions: [
        {
          title: 'Das Herz / Das Zentrum',
          shortLabel: '1. Herz',
          description: 'Der primäre Kern deiner Frage, die gegenwärtige Grundschwingung und dein energetisches Zentrum.'
        },
        {
          title: 'Die Kreuzung / Die dynamische Kraft',
          shortLabel: '2. Kreuzung',
          description: 'Die Kraft, die das Zentrum kreuzt – entweder als aktivierender Impuls, Reibung oder als akute Herausforderung.'
        },
        {
          title: 'Die Basis / Das Fundament',
          shortLabel: '3. Wurzel',
          description: 'Das Unterbewusstsein, karmische Ursachen, verdrängte Antriebe und die Basis, auf der alles ruht.'
        },
        {
          title: 'Die Wurzel / Die Vergangenheit',
          shortLabel: '4. Vergangenheit',
          description: 'Einflüsse der jüngsten Vergangenheit, die nun an Kraft verlieren, aber den gegenwärtigen Boden bereitet haben.'
        },
        {
          title: 'Die Krone / Das Höhere Selbst',
          shortLabel: '5. Krone (Wille)',
          description: 'Dein Wahres Wollen (Thelema), das höchste geistige Potenzial, dein spirituelles Ideal und die göttliche Führung.'
        },
        {
          title: 'Das Nächste / Die unmittelbare Zukunft',
          shortLabel: '6. Nächster Schritt',
          description: 'Die unmittelbar vor dir liegende Phase und die nächste energetische Weichenstellung.'
        },
        {
          title: 'Die Selbsteinschätzung / Eigene Haltung',
          shortLabel: '7. Fragender',
          description: 'Deine bewusste Einstellung, dein Selbstbild, deine psychologische Verfassung und wie du dich selbst siehst.'
        },
        {
          title: 'Das Umfeld / Äußere Einflüsse',
          shortLabel: '8. Umfeld',
          description: 'Die Mitmenschen, Familie, Partner, Arbeitsumfeld und äußere Schicksalskräfte, die auf dich einwirken.'
        },
        {
          title: 'Hoffnungen & Befürchtungen',
          shortLabel: '9. Verborgene Psyche',
          description: 'Deine geheimsten Wünsche, Sehnsüchte oder verdeckten Ängste bezüglich des möglichen Ausgangs.'
        },
        {
          title: 'Die Quintessenz / Das thelemische Resultat',
          shortLabel: '10. Quintessenz',
          description: 'Die alchemistische Gesamtsynthese und das Endergebnis im Einklang mit deinem Wahren Willen.'
        }
      ]
    },
    astrologische_haeuser: {
      name: 'Das astrologische Häuser-System (Gesamtüberblick)',
      subtitle: 'Die 12 Häuser des Zodiaks für umfassende Bestandsaufnahmen & Jahreslegungen',
      description: 'Da das Thoth-Tarot extrem tief mit der Astrologie verknüpft ist, eignet sich das 12-Häuser-System perfekt für große Jahreslegungen oder ganzheitliche Lebensanalysen. 12 Karten im kosmischen Kreis der Tierkreiszeichen.',
      positions: [
        {
          title: '1. Haus (Widder) – Das Selbst, Identität & Vitalität',
          shortLabel: 'I. Selbst (Aszendent)',
          description: 'Deine Persönlichkeit, Ausstrahlung, körperliche Energie, Durchsetzungskraft und Neubeginn (Aszendent).'
        },
        {
          title: '2. Haus (Stier) – Finanzen, Werte & Materie',
          shortLabel: 'II. Finanzen & Werte',
          description: 'Materieller Besitz, finanzielle Sicherheit, Selbstwertgefühl, Talente und irdische Stabilität.'
        },
        {
          title: '3. Haus (Zwillinge) – Kommunikation, Verstand & Alltag',
          shortLabel: 'III. Kommunikation',
          description: 'Intellekt, Gedankenaustausch, Lernen, Geschwister, Nahumfeld und alltägliche Kontakte.'
        },
        {
          title: '4. Haus (Krebs) – Wurzeln, Familie & Seelenheim',
          shortLabel: 'IV. Wurzeln (IC)',
          description: 'Herkunft, Familie, seelische Geborgenheit, inneres Kind und dein seelisches Zuhause (Imum Coeli).'
        },
        {
          title: '5. Haus (Löwe) – Kreativität, Herz & Lebensfreude',
          shortLabel: 'V. Herz & Schöpferkraft',
          description: 'Schöpferische Entfaltung, Flirt, Liebe, Romantik, Sexualität, Spiel und spontane Freude.'
        },
        {
          title: '6. Haus (Jungfrau) – Arbeit, Gesundheit & Pflichten',
          shortLabel: 'VI. Arbeit & Gesundheit',
          description: 'Tägliche Arbeitsroutine, körperliche Gesundheit, Ernährung, Hygiene und strukturierte Pflichterfüllung.'
        },
        {
          title: '7. Haus (Waage) – Partnerschaft, Beziehungen & Begegnung',
          shortLabel: 'VII. Partnerschaft (DC)',
          description: 'Feste Partnerschaften, Ehe, Verträge, enge Bindungen und die Spiegelung des Selbst im Du (Deszendent).'
        },
        {
          title: '8. Haus (Skorpion) – Transformation, Tiefe & Loslassen',
          shortLabel: 'VIII. Wandlung & Tiefe',
          description: 'Krisen als Katalysator, Loslassen von Altem, gemeinsame Finanzen, Mysterien und psychische Erneuerung.'
        },
        {
          title: '9. Haus (Schütze) – Philosophie, Sinnsuche & Höhere Erkenntnis',
          shortLabel: 'IX. Sinn & Philosophie',
          description: 'Weltanschauung, Spiritualität, weite Reisen, höhere Bildung, Ethik und die Suche nach Sinn.'
        },
        {
          title: '10. Haus (Steinbock) – Berufung, Karriere & Lebensziel',
          shortLabel: 'X. Berufung (MC)',
          description: 'Gesellschaftliche Stellung, Lebensaufgabe, beruflicher Gipfel, Anerkennung und Verantwortung (Medium Coeli).'
        },
        {
          title: '11. Haus (Wassermann) – Visionen, Freunde & Gemeinschaft',
          shortLabel: 'XI. Visionen & Freunde',
          description: 'Freundeskreis, Netzwerke, Gleichgesinnte, humanitäre Ideale, Hoffnungen und Zukunftsprojekte.'
        },
        {
          title: '12. Haus (Fische) – Das Unbewusste, Transzendenz & Karma',
          shortLabel: 'XII. Transzendenz & Karma',
          description: 'Stille, Meditation, karmische Abschlüsse, verborgene Kräfte, Traumwelt und Einheitsbewusstsein.'
        }
      ]
    }
  },

  en: {
    tageskarte: {
      name: 'Daily Card',
      subtitle: 'Daily Impulse & Mindful Focus',
      description: 'Draws a single card as an energetic guide for your day. Ideal for morning inspiration and centered awareness.',
      positions: [
        {
          title: 'Impulse of the Day',
          shortLabel: 'Daily Focus',
          description: 'The core theme, energy, or spiritual lesson accompanying you today.'
        }
      ]
    },
    drei_karten: {
      name: 'Three Card Spread',
      subtitle: 'Timeline or Situation & Counsel',
      description: 'The classic tarot spread. Illuminates chronological progression or clarifies a situation with challenge and advice.',
      positions: [
        {
          title: 'Past / Foundation',
          shortLabel: 'Yesterday',
          description: 'Past influences, roots, and formative experiences leading to your current standing.'
        },
        {
          title: 'Present / Core Theme',
          shortLabel: 'Today',
          description: 'Current dynamics, present circumstances, and emotional reality here and now.'
        },
        {
          title: 'Future / Trajectory',
          shortLabel: 'Tomorrow',
          description: 'Upcoming developments, emerging potential, or the natural next step.'
        }
      ]
    },
    vier_karten: {
      name: 'Four Card Spread',
      subtitle: 'The Compass / Decision Cross',
      description: 'Provides decisive orientation in dilemmas and crossroads. Highlights theme, warning, guidance, and destination.',
      positions: [
        {
          title: 'The Core Theme',
          shortLabel: '1. Theme',
          description: 'The real essence of your inquiry or current life phase.'
        },
        {
          title: 'What to Avoid',
          shortLabel: '2. Warning',
          description: 'Pitfalls, illusions, or detrimental habits to steer clear of.'
        },
        {
          title: 'Action to Take / Counsel',
          shortLabel: '3. Advice',
          description: 'The constructive attitude or practical action that will advance you.'
        },
        {
          title: 'Destination / Outcome',
          shortLabel: '4. Goal',
          description: 'The long-term realization when honoring the advice.'
        }
      ]
    },
    sieben_karten: {
      name: 'Seven Card Horseshoe',
      subtitle: 'The Horseshoe / Comprehensive View',
      description: 'An expansive spread for complex inquiries, inner transformation, and deep insight into fateful cycles.',
      positions: [
        {
          title: 'Past Influence',
          shortLabel: '1. Past',
          description: 'Residual energetic ripples from the recent past.'
        },
        {
          title: 'Present Situation',
          shortLabel: '2. Present',
          description: 'Your current energetic state and conscious outlook.'
        },
        {
          title: 'Hidden Influences',
          shortLabel: '3. Hidden',
          description: 'Subconscious currents, latent fears, or concealed variables.'
        },
        {
          title: 'The Turning Point / Obstacle',
          shortLabel: '4. Pivot',
          description: 'The central trial that must be transcended.'
        },
        {
          title: 'External Environment',
          shortLabel: '5. Environment',
          description: 'Attitudes of others and surrounding external circumstances.'
        },
        {
          title: 'Hopes & Fears',
          shortLabel: '6. Psyche',
          description: 'Innermost emotional expectations or subconscious blocks.'
        },
        {
          title: 'Final Outcome / Synthesis',
          shortLabel: '7. Outcome',
          description: 'The natural crystallization of your path based on current awareness.'
        }
      ]
    },
    liebes_beziehung: {
      name: 'Love & Relationship Spread',
      subtitle: 'Soul Connection & Interpersonal Dynamics',
      description: 'Analyzes the sacred energetic bond between two souls: your state, your partner\'s state, and shared destiny.',
      positions: [
        {
          title: 'Your Inner State / Expectation',
          shortLabel: 'You',
          description: 'Your true feelings, desires, and conscious or subconscious intentions in this bond.'
        },
        {
          title: 'The Connecting Bond / Shared Energy',
          shortLabel: 'The Bond',
          description: 'The alchemical meeting point, mutual challenge, or spiritual lesson uniting both.'
        },
        {
          title: 'Partner\'s State & Stance',
          shortLabel: 'The Partner',
          description: 'The emotional mindset, projections, and feelings of your partner toward you.'
        },
        {
          title: 'Shared Trajectory / Destiny',
          shortLabel: 'Future',
          description: 'Where this relational alchemy is leading and the soul maturation it provides.'
        }
      ]
    },
    thelemisches_kreuz: {
      name: 'The Thelemic Cross (Core Analysis)',
      subtitle: 'Balanced Cross Geometry for Complex Life Inquiries',
      description: 'An advanced Thelemic evolution of the Celtic Cross according to Aleister Crowley. Geometrically balanced on the equal-armed cross, revealing True Will (Thelema), Root, Crown, and Quintessence.',
      positions: [
        {
          title: 'The Heart / The Center',
          shortLabel: '1. Heart',
          description: 'The primary core of your inquiry, present vibration, and energetic center.'
        },
        {
          title: 'The Crossing / Dynamic Force',
          shortLabel: '2. Crossing',
          description: 'The force crossing the center—either as an activating catalyst or friction.'
        },
        {
          title: 'The Basis / Foundation',
          shortLabel: '3. Root',
          description: 'Subconscious motivations, karmic origins, and the soil upon which all rests.'
        },
        {
          title: 'The Root / The Past',
          shortLabel: '4. Past',
          description: 'Influences from the recent past now receding but having established current ground.'
        },
        {
          title: 'The Crown / Higher Self',
          shortLabel: '5. Crown (Will)',
          description: 'Your True Will (Thelema), highest spiritual potential, and divine inspiration.'
        },
        {
          title: 'The Next / Immediate Future',
          shortLabel: '6. Next Step',
          description: 'The phase lying directly ahead and the next energetic turning point.'
        },
        {
          title: 'Self-Perception / Stance',
          shortLabel: '7. Querent',
          description: 'Your conscious attitude, self-image, and psychological orientation.'
        },
        {
          title: 'Environment / External Forces',
          shortLabel: '8. Environment',
          description: 'Surrounding people, family, workplace, and external fateful forces.'
        },
        {
          title: 'Hopes & Fears',
          shortLabel: '9. Hidden Psyche',
          description: 'Your secret desires or subconscious anxieties regarding the outcome.'
        },
        {
          title: 'The Quintessence / Thelemic Result',
          shortLabel: '10. Quintessence',
          description: 'The ultimate alchemical synthesis in alignment with your True Will.'
        }
      ]
    },
    astrologische_haeuser: {
      name: 'The Astrological Houses System (Overview)',
      subtitle: 'The 12 Houses of the Zodiac for Comprehensive Life Audits & Annual Readings',
      description: 'Because the Thoth Tarot is deeply linked with Western Astrology, the 12-House Wheel spread is ideal for annual readings and holistic life reviews across all 12 zodiacal houses.',
      positions: [
        {
          title: '1st House (Aries) – Self, Identity & Vitality',
          shortLabel: 'I. Self (Ascendant)',
          description: 'Your personality, outward energy, physical body, drive, and new beginnings.'
        },
        {
          title: '2nd House (Taurus) – Finances, Values & Matter',
          shortLabel: 'II. Wealth & Values',
          description: 'Material possessions, financial security, self-worth, and tangible stability.'
        },
        {
          title: '3rd House (Gemini) – Communication, Intellect & Environment',
          shortLabel: 'III. Communication',
          description: 'Mind, dialogue, learning, siblings, and immediate daily surroundings.'
        },
        {
          title: '4th House (Cancer) – Roots, Family & Soul Home',
          shortLabel: 'IV. Roots (IC)',
          description: 'Ancestry, family, emotional security, inner child, and foundation.'
        },
        {
          title: '5th House (Leo) – Creativity, Romance & Joy',
          shortLabel: 'V. Heart & Joy',
          description: 'Creative self-expression, romance, sexuality, play, and authentic passion.'
        },
        {
          title: '6th House (Virgo) – Health, Duty & Daily Work',
          shortLabel: 'VI. Work & Health',
          description: 'Daily routines, physical health, self-care, and structured duty.'
        },
        {
          title: '7th House (Libra) – Partnerships & Relationships',
          shortLabel: 'VII. Union (DC)',
          description: 'Committed relationships, marriage, contracts, and reflection through the other.'
        },
        {
          title: '8th House (Scorpio) – Transformation, Depth & Rebirth',
          shortLabel: 'VIII. Rebirth & Depth',
          description: 'Catalytic crises, shared finances, letting go of old paradigms, and esoteric depth.'
        },
        {
          title: '9th House (Sagittarius) – Philosophy, Vision & Meaning',
          shortLabel: 'IX. Philosophy',
          description: 'Worldview, spirituality, higher learning, long journeys, and truth-seeking.'
        },
        {
          title: '10th House (Capricorn) – Vocation, Standing & Ambition',
          shortLabel: 'X. Vocation (MC)',
          description: 'Public career, life calling, social recognition, and pinnacle responsibility.'
        },
        {
          title: '11th House (Aquarius) – Vision, Friends & Community',
          shortLabel: 'XI. Alliances',
          description: 'Friendships, collective networks, humanitarian ideals, and future aspirations.'
        },
        {
          title: '12th House (Pisces) – Subconscious, Transcendence & Karma',
          shortLabel: 'XII. Karma & Silence',
          description: 'Solitude, meditation, karmic completion, dream life, and cosmic oneness.'
        }
      ]
    }
  },

  es: {
    tageskarte: {
      name: 'Carta Diaria',
      subtitle: 'Impulso y Enfoque Cotidiano',
      description: 'Roba una carta como guía energética para tu día. Ideal para inspiración matutina y atención plena.',
      positions: [
        {
          title: 'Impulso del Día',
          shortLabel: 'Enfoque',
          description: 'El tema central, la energía o la lección que te acompaña hoy.'
        }
      ]
    },
    drei_karten: {
      name: 'Tirada de Tres Cartas',
      subtitle: 'Línea de Tiempo o Situación y Consejo',
      description: 'El clásico del tarot. Ilumina el curso temporal o aclara una situación con su obstáculo y consejo.',
      positions: [
        {
          title: 'Pasado / Origen',
          shortLabel: 'Ayer',
          description: 'Influencias previas, causas y vivencias que condujeron a tu situación actual.'
        },
        {
          title: 'Presente / Núcleo',
          shortLabel: 'Hoy',
          description: 'La dinámica actual, el estado presente y la realidad emocional del aquí y ahora.'
        },
        {
          title: 'Futuro / Perspectiva',
          shortLabel: 'Mañana',
          description: 'El desarrollo venidero, el potencial latente o el siguiente paso natural.'
        }
      ]
    },
    vier_karten: {
      name: 'Tirada de Cuatro Cartas',
      subtitle: 'La Brújula / Cruz de Orientación',
      description: 'Otorga claridad ante decisiones y dilemas. Muestra tema, advertencia, consejo y meta.',
      positions: [
        {
          title: 'El Tema Central',
          shortLabel: '1. Tema',
          description: 'De qué se trata realmente la situación o etapa actual.'
        },
        {
          title: 'Lo que debes evitar',
          shortLabel: '2. Aviso',
          description: 'Trampas, ilusiones o actitudes perjudiciales.'
        },
        {
          title: 'Acción a tomar / Consejo',
          shortLabel: '3. Consejo',
          description: 'La actitud constructiva o acción concreta que te impulsará.'
        },
        {
          title: 'Hacia dónde conduce',
          shortLabel: '4. Meta',
          description: 'El desenlace y fruto a largo plazo al seguir el consejo.'
        }
      ]
    },
    sieben_karten: {
      name: 'Tirada de Siete Cartas',
      subtitle: 'La Herradura / Visión Integral',
      description: 'Sistema profundo para cuestiones complejas, metamorfosis personal y patrones kármicos.',
      positions: [
        {
          title: 'Influencia Pasada',
          shortLabel: '1. Pasado',
          description: 'Ecos del pasado reciente que aún resuenan.'
        },
        {
          title: 'Situación Presente',
          shortLabel: '2. Presente',
          description: 'El estado energético actual y tu percepción consciente.'
        },
        {
          title: 'Fuerzas Ocultas',
          shortLabel: '3. Oculto',
          description: 'Corrientes inconscientes, temores velados o variables invisibles.'
        },
        {
          title: 'El Punto de Inflexión',
          shortLabel: '4. Giro',
          description: 'El desafío crucial que debes transformar.'
        },
        {
          title: 'Entorno Exterior',
          shortLabel: '5. Entorno',
          description: 'La postura de los demás y factores circunstanciales.'
        },
        {
          title: 'Esperanzas y Temores',
          shortLabel: '6. Psique',
          description: 'Tus expectativas más íntimas y bloqueos emocionales.'
        },
        {
          title: 'Resultado Final / Síntesis',
          shortLabel: '7. Desenlace',
          description: 'La culminación natural del sendero según la conciencia actual.'
        }
      ]
    },
    liebes_beziehung: {
      name: 'Tirada de Amor y Pareja',
      subtitle: 'Conexión Álmica y Dinámica Vincular',
      description: 'Examina la vibración entre dos almas: tu estado, el de tu pareja y el destino compartido.',
      positions: [
        {
          title: 'Tu Estado y Expectativa',
          shortLabel: 'Tú',
          description: 'Tus verdaderos sentimientos, anhelos e intenciones.'
        },
        {
          title: 'El Vínculo Conector',
          shortLabel: 'El Lazo',
          description: 'El punto de encuentro alquímico y la lección compartida.'
        },
        {
          title: 'Estado de la Otra Persona',
          shortLabel: 'Tu Pareja',
          description: 'Sentimientos, estado anímico y proyecciones hacia ti.'
        },
        {
          title: 'Perspectiva y Destino Común',
          shortLabel: 'Futuro',
          description: 'Hacia dónde madura esta unión del alma.'
        }
      ]
    }
  },

  fr: {
    tageskarte: {
      name: 'Carte du Jour',
      subtitle: 'Impulsion Quotidienne & Clarté',
      description: 'Tire une carte comme phare énergétique pour votre journée. Idéal pour l\'inspiration matinale.',
      positions: [
        {
          title: 'Impulsion du Jour',
          shortLabel: 'Focus',
          description: 'Le thème central, l\'énergie ou la leçon qui accompagne votre journée.'
        }
      ]
    },
    drei_karten: {
      name: 'Tirage à Trois Cartes',
      subtitle: 'Ligne Temporelle ou Situation & Conseil',
      description: 'Le grand classique du tarot. Révèle le déroulement temporel ou éclaire une situation avec son défi et son conseil.',
      positions: [
        {
          title: 'Passé / Origine',
          shortLabel: 'Hier',
          description: 'Influences passées, racines et vécus ayant mené à votre état présent.'
        },
        {
          title: 'Présent / Cœur du Sujet',
          shortLabel: 'Aujourd\'hui',
          description: 'Dynamique active, réalité concrète et émotionnelle dans l\'ici et maintenant.'
        },
        {
          title: 'Futur / Perspective',
          shortLabel: 'Demain',
          description: 'Évolution probable, potentiel naissant ou prochaine étape naturelle.'
        }
      ]
    },
    vier_karten: {
      name: 'Tirage à Quatre Cartes',
      subtitle: 'La Boussole / Croix d\'Orientation',
      description: 'Offre une boussole limpide face aux choix cruciaux. Révèle thème, piège, conseil et aboutissement.',
      positions: [
        {
          title: 'Le Thème Central',
          shortLabel: '1. Thème',
          description: 'Le véritable enjeu de votre question ou de votre cycle de vie.'
        },
        {
          title: 'Ce qu\'il faut éviter',
          shortLabel: '2. Piège',
          description: 'Illusions, pièges d\'ego ou comportements nuisibles.'
        },
        {
          title: 'Action à Entreprendre / Conseil',
          shortLabel: '3. Conseil',
          description: 'L\'attitude bienfaisante et l\'acte concret qui vous élèvera.'
        },
        {
          title: 'Aboutissement / Horizon',
          shortLabel: '4. But',
          description: 'L\'aboutissement durable en suivant la guidance.'
        }
      ]
    },
    sieben_karten: {
      name: 'Tirage du Fer à Cheval',
      subtitle: 'Sept Cartes / Vision Totale',
      description: 'Tirage profond pour questions complexes, initiations personnelles et schémas du destin.',
      positions: [
        {
          title: 'Influence Passée',
          shortLabel: '1. Passé',
          description: 'Énergies récentes dont l\'écho persiste encore.'
        },
        {
          title: 'Situation Présente',
          shortLabel: '2. Présent',
          description: 'L\'état vibratoire actuel et votre regard lucide.'
        },
        {
          title: 'Forces Invisibles',
          shortLabel: '3. Caché',
          description: 'Courants inconscients, peurs refoulées ou facteurs occultes.'
        },
        {
          title: 'Le Point de Bascule / Obstacle',
          shortLabel: '4. Pivot',
          description: 'L\'épreuve initiatique centrale à transmuter.'
        },
        {
          title: 'Environnement Extérieur',
          shortLabel: '5. Entourage',
          description: 'Posture des autres et circonstances ambiantes.'
        },
        {
          title: 'Espoirs et Craintes',
          shortLabel: '6. Psyché',
          description: 'Vos attentes intimes ou blocages émotionnels profonds.'
        },
        {
          title: 'Résultat Ultime / Synthèse',
          shortLabel: '7. Issue',
          description: 'La concrétisation naturelle de votre voie selon votre conscience actuelle.'
        }
      ]
    },
    liebes_beziehung: {
      name: 'Tirage d\'Amour & Relation',
      subtitle: 'Alchimie des Âmes & Dynamique du Cœur',
      description: 'Analyse la reliance entre deux êtres : votre état, celui de votre partenaire et le destin partagé.',
      positions: [
        {
          title: 'Votre État Intérieur / Attente',
          shortLabel: 'Vous',
          description: 'Vos sentiments réels, désirs profonds et intentions dans ce lien.'
        },
        {
          title: 'Le Lien Fédérateur / Énergie Commune',
          shortLabel: 'Le Lien',
          description: 'Le creuset alchimique et l\'apprentissage commun.'
        },
        {
          title: 'État & Posture du Partenaire',
          shortLabel: 'L\'Autre',
          description: 'Ressentis, dispositions d\'esprit et projections vers vous.'
        },
        {
          title: 'Perspective Partagée / Destinée',
          shortLabel: 'Futur',
          description: 'Vers quelle maturation cette rencontre sacrée vous mène.'
        }
      ]
    }
  },

  ru: {
    tageskarte: {
      name: 'Карта дня',
      subtitle: 'Ежедневный импульс и осознанность',
      description: 'Вытягивает одну карту как энергетический ориентир на день. Идеально для утреннего озарения.',
      positions: [
        {
          title: 'Импульс дня',
          shortLabel: 'Фокус дня',
          description: 'Главная тема, энергия или урок, сопровождающий вас сегодня.'
        }
      ]
    },
    drei_karten: {
      name: 'Расклад на 3 карты',
      subtitle: 'Временная линия или ситуация и совет',
      description: 'Классический расклад. Освещает развитие во времени или проясняет ситуацию с преградой и советом.',
      positions: [
        {
          title: 'Прошлое / Истоки',
          shortLabel: 'Вчера',
          description: 'Прежние влияния, вызвавшие текущее положение дел.'
        },
        {
          title: 'Настоящее / Суть',
          shortLabel: 'Сегодня',
          description: 'Текущая динамика, состояние дел и реальность здесь и сейчас.'
        },
        {
          title: 'Будущее / Перспектива',
          shortLabel: 'Завтра',
          description: 'Предстоящее развитие, скрытый потенциал или естественный шаг.'
        }
      ]
    },
    vier_karten: {
      name: 'Расклад на 4 карты',
      subtitle: 'Компас / Крест решений',
      description: 'Дает ясную ориентацию при выборе. Показывает тему, предостережение, совет и цель.',
      positions: [
        {
          title: 'Ключевая тема',
          shortLabel: '1. Тема',
          description: 'Суть вопроса или текущего жизненного этапа.'
        },
        {
          title: 'Чего избегать',
          shortLabel: '2. Ловушка',
          description: 'Иллюзии, соблазны или вредные паттерны поведения.'
        },
        {
          title: 'Что предпринять / Совет',
          shortLabel: '3. Совет',
          description: 'Созидательный подход или действие, которое продвинет вас.'
        },
        {
          title: 'К чему ведет путь',
          shortLabel: '4. Итог',
          description: 'Долгосрочный результат следования совету.'
        }
      ]
    },
    sieben_karten: {
      name: 'Расклад Подкова (7 карт)',
      subtitle: 'Глубокий обзор судьбы',
      description: 'Масштабный расклад для сложных вопросов, личной трансформации и уроков судьбы.',
      positions: [
        {
          title: 'Влияние прошлого',
          shortLabel: '1. Прошлое',
          description: 'Недавние события, эхо которых все еще звучит.'
        },
        {
          title: 'Текущее состояние',
          shortLabel: '2. Настоящее',
          description: 'Энергетическое состояние и осознанное восприятие.'
        },
        {
          title: 'Скрытые влияния',
          shortLabel: '3. Тайное',
          description: 'Подсознательные импульсы, страхи или невидимые факторы.'
        },
        {
          title: 'Поворотный пункт / Преграда',
          shortLabel: '4. Перелом',
          description: 'Главный вызов, который необходимо преодолеть.'
        },
        {
          title: 'Внешнее окружение',
          shortLabel: '5. Среда',
          description: 'Отношение окружающих и внешние обстоятельства.'
        },
        {
          title: 'Надежды и страхи',
          shortLabel: '6. Психика',
          description: 'Глубинные эмоциональные ожидания и блоки.'
        },
        {
          title: 'Конечный итог / Синтез',
          shortLabel: '7. Исход',
          description: 'Естественный результат пути при текущем уровне осознанности.'
        }
      ]
    },
    liebes_beziehung: {
      name: 'Расклад на любовь и отношения',
      subtitle: 'Связь душ и динамика союза',
      description: 'Исследует энергетическую связь между партнерами: ваши чувства, позиция избранника и будущее союза.',
      positions: [
        {
          title: 'Ваше состояние и ожидания',
          shortLabel: 'Вы',
          description: 'Ваши истинные чувства, желания и внутренние намерения.'
        },
        {
          title: 'Связующая нить / Общая энергия',
          shortLabel: 'Связь',
          description: 'Точка алхимической встречи и совместный духовный урок.'
        },
        {
          title: 'Состояние и мысли партнера',
          shortLabel: 'Партнер',
          description: 'Чувства, настрой и проекции партнера на вас.'
        },
        {
          title: 'Совместное будущее / Судьба',
          shortLabel: 'Будущее',
          description: 'К какому развитию и созреванию ведет этот союз.'
        }
      ]
    }
  },

  tr: {
    tageskarte: {
      name: 'Günün Kartı',
      subtitle: 'Günlük İlham ve Odak',
      description: 'Gününüz için rehber niteliğinde tek bir kart çeker. Sabah farkındalığı için idealdir.',
      positions: [
        {
          title: 'Günün İlhamı',
          shortLabel: 'Günün Odağı',
          description: 'Bugün size eşlik eden ana tema, enerji veya ruhsal ders.'
        }
      ]
    },
    drei_karten: {
      name: 'Üç Kart Açılımı',
      subtitle: 'Zaman Çizelgesi ya da Durum ve Öğüt',
      description: 'Tarotun klasiği. Zaman akışını aydınlatır ya da engeller ve tavsiyelerle durumu netleştirir.',
      positions: [
        {
          title: 'Geçmiş / Temel',
          shortLabel: 'Dün',
          description: 'Mevcut duruma yol açan geçmiş etkiler ve deneyimler.'
        },
        {
          title: 'Şimdi / Ana Konu',
          shortLabel: 'Bugün',
          description: 'Şimdiki dinamikler ve anın getirdiği duygusal gerçeklik.'
        },
        {
          title: 'Gelecek / Perspektif',
          shortLabel: 'Yarın',
          description: 'Olası gelişmeler, beliren potansiyel veya bir sonraki adım.'
        }
      ]
    },
    vier_karten: {
      name: 'Dört Kart Açılımı',
      subtitle: 'Pusula / Karar Haçı',
      description: 'Karar anlarında net yön verir. Konu, uyarı, tavsiye ve hedefi gösterir.',
      positions: [
        {
          title: 'Ana Konu',
          shortLabel: '1. Konu',
          description: 'Meselenin özü ya da yaşam döngünüzün ana teması.'
        },
        {
          title: 'Kaçınılması Gereken',
          shortLabel: '2. Uyarı',
          description: 'Tuzaklar, yanılsamalar ya da zarar verebilecek tutumlar.'
        },
        {
          title: 'Yapılması Gereken / Tavsiye',
          shortLabel: '3. Tavsiye',
          description: 'Sizi ileriye taşıyacak yapıcı tutum ve eylem.'
        },
        {
          title: 'Yolun Gittiği Yer / Sonuç',
          shortLabel: '4. Hedef',
          description: 'Tavsiyeye uyulduğunda ortaya çıkacak uzun vadeli sonuç.'
        }
      ]
    },
    sieben_karten: {
      name: 'Yedi Kart Nalı',
      subtitle: 'Derin Yaşam Tablosu',
      description: 'Karmaşık sorular, dönüşüm ve kader döngüleri için kapsamlı açılım.',
      positions: [
        {
          title: 'Geçmişin Etkisi',
          shortLabel: '1. Geçmiş',
          description: 'Hala yankısı süren yakın geçmiş etkileri.'
        },
        {
          title: 'Şimdiki Durum',
          shortLabel: '2. Şimdi',
          description: 'Mevcut enerjiniz ve bilinçli algınız.'
        },
        {
          title: 'Gizli Etkenler',
          shortLabel: '3. Gizli',
          description: 'Bilinçdışı akıntılar, bastırılmış korkular ve görünmeyenler.'
        },
        {
          title: 'Dönüm Noktası / Engel',
          shortLabel: '4. Dönüm',
          description: 'Aşılması gereken temel sınav.'
        },
        {
          title: 'Dış Çevre',
          shortLabel: '5. Çevre',
          description: 'Başkalarının tutumu ve dışsal koşullar.'
        },
        {
          title: 'Umutlar ve Korkular',
          shortLabel: '6. Ruh Hali',
          description: 'İçsel beklentileriniz ya da gizli blokajlar.'
        },
        {
          title: 'Nihai Sonuç / Sentez',
          shortLabel: '7. Sonuç',
          description: 'Şimdiki farkındalıkla ulaşılan doğal sonuç.'
        }
      ]
    },
    liebes_beziehung: {
      name: 'Aşk ve İlişki Açılımı',
      subtitle: 'Ruh Bağı ve İlişki Dinamikleri',
      description: 'İki ruh arasındaki enerjiyi inceler: sizin durumunuz, partnerin duruşu ve ortak kader.',
      positions: [
        {
          title: 'İçsel Durumunuz ve Beklentiniz',
          shortLabel: 'Sen',
          description: 'İlişkideki gerçek duygularınız ve niyetleriniz.'
        },
        {
          title: 'Bağlayıcı Enerji / Ortak Ders',
          shortLabel: 'Bağ',
          description: 'İki insanı buluşturan kimya ve ruhsal öğrenim.'
        },
        {
          title: 'Partnerin Durumu ve Yaklaşımı',
          shortLabel: 'Partner',
          description: 'Karşı tarafın size yönelik hisleri ve bakış açısı.'
        },
        {
          title: 'Gelecek ve Ortak Kader',
          shortLabel: 'Gelecek',
          description: 'Bu ilişkinin ruhsal olarak taşıdığı nihai olgunluk.'
        }
      ]
    }
  },

  zh: {
    tageskarte: {
      name: '每日一牌',
      subtitle: '每日能量启示与觉察',
      description: '抽取一张牌作为当天的能量指引，特别适合清晨唤醒灵感与专注。',
      positions: [
        {
          title: '今日启示',
          shortLabel: '今日焦点',
          description: '伴随你今天的核心议题、能量流动或精神课题。'
        }
      ]
    },
    drei_karten: {
      name: '三牌时间流牌阵',
      subtitle: '过去·现在·未来 或 状况与建议',
      description: '塔罗经典牌阵，清晰展现时间脉络或剖析当下困境与行动建议。',
      positions: [
        {
          title: '过去 / 起因背景',
          shortLabel: '昨日',
          description: '导致当前局面的往昔影响、经验与根源。'
        },
        {
          title: '现在 / 核心议题',
          shortLabel: '今日',
          description: '当下的内在状态、现实挑战以及此时此地的能量场。'
        },
        {
          title: '未来 / 发展远景',
          shortLabel: '明日',
          description: '可预见的发展趋势、潜在可能或下一步自然结果。'
        }
      ]
    },
    vier_karten: {
      name: '四牌指引十字牌阵',
      subtitle: '人生罗盘 / 抉择十字',
      description: '在面临抉择或困惑时提供清晰方向：揭示主题、误区、行动建议与长远目标。',
      positions: [
        {
          title: '核心主题',
          shortLabel: '1. 主题',
          description: '当前人生阶段或问题的本质核心所在。'
        },
        {
          title: '应避免的陷阱',
          shortLabel: '2. 警示',
          description: '可能产生阻碍的幻象、执念或不利行为模式。'
        },
        {
          title: '应采取的行动 / 建议',
          shortLabel: '3. 建议',
          description: '能助你突破瓶颈的积极心态与具体实践。'
        },
        {
          title: '通往的结果 / 愿景',
          shortLabel: '4. 目标',
          description: '践行建议后将自然显现的长远收获。'
        }
      ]
    },
    sieben_karten: {
      name: '七牌马蹄铁深度牌阵',
      subtitle: '命运全景透视',
      description: '适用于复杂人生议题、内在蜕变与命运规律的全面深邃探查。',
      positions: [
        {
          title: '过去遗存的影响',
          shortLabel: '1. 往昔',
          description: '仍在产生余波的近期事件与心理烙印。'
        },
        {
          title: '当下的真实处境',
          shortLabel: '2. 现况',
          description: '目前的能量状态及清醒的显意识认知。'
        },
        {
          title: '潜藏的隐性力量',
          shortLabel: '3. 隐秘',
          description: '潜意识潜流、深层恐惧或未被觉察的客观变量。'
        },
        {
          title: '转折点 / 核心关卡',
          shortLabel: '4. 关口',
          description: '必须跨越或炼化的核心挑战。'
        },
        {
          title: '外部人际与环境',
          shortLabel: '5. 环境',
          description: '他人对你的态度以及外在客观条件。'
        },
        {
          title: '希望与内心恐惧',
          shortLabel: '6. 心智',
          description: '最真实的情感期盼或自我受限的卡点。'
        },
        {
          title: '最终走向 / 综合果报',
          shortLabel: '7. 归宿',
          description: '以当前认知与能量自然汇聚的终局。'
        }
      ]
    },
    liebes_beziehung: {
      name: '灵魂伴侣与双人关系牌阵',
      subtitle: '灵魂联结与情感炼金',
      description: '深入分析两颗心灵之间的能量场：你的态度、伴侣的心境与共同命运。',
      positions: [
        {
          title: '你的内心状态与期盼',
          shortLabel: '你',
          description: '你在这段关系中真实的感受、渴望与潜藏意图。'
        },
        {
          title: '联结的纽带 / 共同能量',
          shortLabel: '纽带',
          description: '两颗灵魂相遇的炼金交汇点与共同成长功课。'
        },
        {
          title: '对方的心态与态度',
          shortLabel: '对方',
          description: '伴侣内心的起伏、对你的投射以及真实情感。'
        },
        {
          title: '共同的未来远景 / 命运宿命',
          shortLabel: '未来',
          description: '这段神圣交汇将把彼此引向何种灵魂成熟之境。'
        }
      ]
    }
  },

  ja: {
    tageskarte: {
      name: 'デイリーカード',
      subtitle: '日々のインスピレーションと焦点',
      description: '一日の導きとなるエネルギーを引きます。朝の瞑想や気付きに最適です。',
      positions: [
        {
          title: '本日のインパルス',
          shortLabel: '今日の焦点',
          description: '今日一日を司る中心的テーマ、エネルギー、または魂の学び。'
        }
      ]
    },
    drei_karten: {
      name: 'スリーカード（3枚引き）',
      subtitle: '過去・現在・未来 または 状況と助言',
      description: 'タロットの伝統的スプレッド。時間軸の展開や、障害と助言を明確に示します。',
      positions: [
        {
          title: '過去 / 背景・要因',
          shortLabel: '昨日',
          description: '現在の状況をもたらした過去の影響と経験。'
        },
        {
          title: '現在 / 核心のテーマ',
          shortLabel: '今日',
          description: '現在のダイナミクス、現状の感情や意識のあり方。'
        },
        {
          title: '未来 / 展望と可能性',
          shortLabel: '明日',
          description: '予測される展開、潜在的な可能性、または次の一歩。'
        }
      ]
    },
    vier_karten: {
      name: 'フォーカード（4枚引き）',
      subtitle: '人生の羅針盤 / 決断のクロス',
      description: '岐路に立った時に明確な方向性を示します。テーマ、警告、助言、到達点。',
      positions: [
        {
          title: '中核のテーマ',
          shortLabel: '1. テーマ',
          description: '現在直面している問いの本質。'
        },
        {
          title: '避けるべきこと',
          shortLabel: '2. 警告',
          description: '陥りやすい罠、幻想、あるいは有害な執着。'
        },
        {
          title: '為すべきこと / 助言',
          shortLabel: '3. 助言',
          description: '前進を促す建設的な態度や具体的な行動。'
        },
        {
          title: '到達する未来 / 目的地',
          shortLabel: '4. 目標',
          description: '助言に従うことで得られる長期的な果実。'
        }
      ]
    },
    sieben_karten: {
      name: 'ホースシュー（7枚引き）',
      subtitle: '深層の全体展望',
      description: '複雑な人生の問い、内面の変容、運命のパターンを読み解く深遠なスプレッド。',
      positions: [
        {
          title: '過去の影響',
          shortLabel: '1. 過去',
          description: 'いまだ影響を及ぼしている近い過去の余波。'
        },
        {
          title: '現在の状況',
          shortLabel: '2. 現在',
          description: '現在のエネルギー状態と顕在意識での認識。'
        },
        {
          title: '隠された影響',
          shortLabel: '3. 潜在意識',
          description: '無意識の流れ、恐れ、または目に見えない要因。'
        },
        {
          title: '転換点 / 障害',
          shortLabel: '4. 岐路',
          description: '乗り越えるべき中核的な試練。'
        },
        {
          title: '周囲の環境',
          shortLabel: '5. 環境',
          description: '周囲の人々の姿勢や外部の客観的状況。'
        },
        {
          title: '希望と恐れ',
          shortLabel: '6. 心情',
          description: '心の奥底にある期待や無意識のブロック。'
        },
        {
          title: '最終結果 / 統合',
          shortLabel: '7. 結末',
          description: '現在の意識と行動が自然にもたらす未来の結実。'
        }
      ]
    },
    liebes_beziehung: {
      name: '愛と絆のスプレッド',
      subtitle: '魂の共鳴とパートナーシップ',
      description: '二つの魂の間に流れるエネルギーを読み解きます：あなた、相手、そして共通の運命。',
      positions: [
        {
          title: 'あなたの内面・期待',
          shortLabel: 'あなた',
          description: 'この関係におけるあなたの真の想い、願い、意図。'
        },
        {
          title: '結びつく絆 / 共通のエネルギー',
          shortLabel: '絆',
          description: '二人を結びつける錬金術的交点と魂の課題。'
        },
        {
          title: '相手の状態・姿勢',
          shortLabel: 'お相手',
          description: '相手のあなたに対する感情、心情、投影。'
        },
        {
          title: '二人の展望 / 運命の導き',
          shortLabel: '未来',
          description: 'この神聖な結びつきがもたらす魂の成長と未来。'
        }
      ]
    }
  }
};

// ==========================================
// ELEMENT & SUIT TRANSLATIONS
// ==========================================
export const ELEMENT_NAMES: Record<SupportedLanguage, Record<string, string>> = {
  de: { Feuer: 'Feuer', Wasser: 'Wasser', Luft: 'Luft', Erde: 'Erde', Geist: 'Geist' },
  en: { Feuer: 'Fire', Wasser: 'Water', Luft: 'Air', Erde: 'Earth', Geist: 'Spirit' },
  es: { Feuer: 'Fuego', Wasser: 'Agua', Luft: 'Aire', Erde: 'Tierra', Geist: 'Espíritu' },
  fr: { Feuer: 'Feu', Wasser: 'Eau', Luft: 'Air', Erde: 'Terre', Geist: 'Esprit' },
  ru: { Feuer: 'Огонь', Wasser: 'Вода', Luft: 'Воздух', Erde: 'Земля', Geist: 'Дух' },
  tr: { Feuer: 'Ateş', Wasser: 'Su', Luft: 'Hava', Erde: 'Toprak', Geist: 'Ruh' },
  zh: { Feuer: '火', Wasser: '水', Luft: '风', Erde: '土', Geist: '灵' },
  ja: { Feuer: '火', Wasser: '水', Luft: '風', Erde: '地', Geist: '霊' }
};

export const SUIT_NAMES: Record<SupportedLanguage, Record<string, string>> = {
  de: { wands: 'Stäbe', cups: 'Kelche', swords: 'Schwerter', disks: 'Scheiben' },
  en: { wands: 'Wands', cups: 'Cups', swords: 'Swords', disks: 'Disks' },
  es: { wands: 'Bastos', cups: 'Copas', swords: 'Espadas', disks: 'Discos' },
  fr: { wands: 'Bâtons', cups: 'Coupes', swords: 'Épées', disks: 'Disques' },
  ru: { wands: 'Жезлы', cups: 'Чаши', swords: 'Мечи', disks: 'Диски' },
  tr: { wands: 'Asalar', cups: 'Kupalar', swords: 'Kılıçlar', disks: 'Diskler' },
  zh: { wands: '权杖', cups: '圣杯', swords: '宝剑', disks: '圆盘' },
  ja: { wands: 'ワンド', cups: 'カップ', swords: 'ソード', disks: 'ディスク' }
};

// ==========================================
// CARD NAME & CROWLEY TITLE TRANSLATIONS (All 78 Cards)
// ==========================================
export interface LocalizedCardInfo {
  name: string;
  thothTitle?: string;
}

export const CARD_LOCALIZATIONS: Record<SupportedLanguage, Record<string, LocalizedCardInfo>> = {
  de: {
    'atu-0': { name: 'Der Narr' },
    'atu-1': { name: 'Der Magier' },
    'atu-2': { name: 'Die Hohepriesterin' },
    'atu-3': { name: 'Die Kaiserin' },
    'atu-4': { name: 'Der Kaiser' },
    'atu-5': { name: 'Der Hierophant' },
    'atu-6': { name: 'Die Liebenden' },
    'atu-7': { name: 'Der Wagen' },
    'atu-8': { name: 'Ausgleichung' },
    'atu-9': { name: 'Der Eremit' },
    'atu-10': { name: 'Glücksrad' },
    'atu-11': { name: 'Lust' },
    'atu-12': { name: 'Der Gehängte' },
    'atu-13': { name: 'Der Tod' },
    'atu-14': { name: 'Kunst' },
    'atu-15': { name: 'Der Teufel' },
    'atu-16': { name: 'Der Turm' },
    'atu-17': { name: 'Der Stern' },
    'atu-18': { name: 'Der Mond' },
    'atu-19': { name: 'Die Sonne' },
    'atu-20': { name: 'Das Äon' },
    'atu-21': { name: 'Das Universum' },
    'wands-1': { name: 'Ass der Stäbe', thothTitle: 'Wurzel des Feuers' },
    'wands-2': { name: 'Zwei der Stäbe', thothTitle: 'Herrschaft' },
    'wands-3': { name: 'Drei der Stäbe', thothTitle: 'Tugend' },
    'wands-4': { name: 'Vier der Stäbe', thothTitle: 'Vollendung' },
    'wands-5': { name: 'Fünf der Stäbe', thothTitle: 'Streit' },
    'wands-6': { name: 'Sechs der Stäbe', thothTitle: 'Sieg' },
    'wands-7': { name: 'Sieben der Stäbe', thothTitle: 'Tapferkeit' },
    'wands-8': { name: 'Acht der Stäbe', thothTitle: 'Schnelligkeit' },
    'wands-9': { name: 'Neun der Stäbe', thothTitle: 'Stärke' },
    'wands-10': { name: 'Zehn der Stäbe', thothTitle: 'Unterdrückung' },
    'wands-knight': { name: 'Ritter der Stäbe', thothTitle: 'Feuriger Teil des Feuers' },
    'wands-queen': { name: 'Königin der Stäbe', thothTitle: 'Wässriger Teil des Feuers' },
    'wands-prince': { name: 'Prinz der Stäbe', thothTitle: 'Luftiger Teil des Feuers' },
    'wands-princess': { name: 'Prinzessin der Stäbe', thothTitle: 'Erdiger Teil des Feuers' },
    'cups-1': { name: 'Ass der Kelche', thothTitle: 'Wurzel des Wassers' },
    'cups-2': { name: 'Zwei der Kelche', thothTitle: 'Liebe' },
    'cups-3': { name: 'Drei der Kelche', thothTitle: 'Fülle' },
    'cups-4': { name: 'Vier der Kelche', thothTitle: 'Luxus' },
    'cups-5': { name: 'Fünf der Kelche', thothTitle: 'Enttäuschung' },
    'cups-6': { name: 'Sechs der Kelche', thothTitle: 'Freude' },
    'cups-7': { name: 'Sieben der Kelche', thothTitle: 'Verderbnis' },
    'cups-8': { name: 'Acht der Kelche', thothTitle: 'Trägheit' },
    'cups-9': { name: 'Neun der Kelche', thothTitle: 'Glück' },
    'cups-10': { name: 'Zehn der Kelche', thothTitle: 'Sättigung' },
    'cups-knight': { name: 'Ritter der Kelche', thothTitle: 'Feuriger Teil des Wassers' },
    'cups-queen': { name: 'Königin der Kelche', thothTitle: 'Wässriger Teil des Wassers' },
    'cups-prince': { name: 'Prinz der Kelche', thothTitle: 'Luftiger Teil des Wassers' },
    'cups-princess': { name: 'Prinzessin der Kelche', thothTitle: 'Erdiger Teil des Wassers' },
    'swords-1': { name: 'Ass der Schwerter', thothTitle: 'Wurzel der Luft' },
    'swords-2': { name: 'Zwei der Schwerter', thothTitle: 'Frieden' },
    'swords-3': { name: 'Drei der Schwerter', thothTitle: 'Kummer' },
    'swords-4': { name: 'Vier der Schwerter', thothTitle: 'Waffenstillstand' },
    'swords-5': { name: 'Fünf der Schwerter', thothTitle: 'Niederlage' },
    'swords-6': { name: 'Sechs der Schwerter', thothTitle: 'Wissenschaft' },
    'swords-7': { name: 'Sieben der Schwerter', thothTitle: 'Vergeblichkeit' },
    'swords-8': { name: 'Acht der Schwerter', thothTitle: 'Einmischung' },
    'swords-9': { name: 'Neun der Schwerter', thothTitle: 'Grausamkeit' },
    'swords-10': { name: 'Zehn der Schwerter', thothTitle: 'Untergang' },
    'swords-knight': { name: 'Ritter der Schwerter', thothTitle: 'Feuriger Teil der Luft' },
    'swords-queen': { name: 'Königin der Schwerter', thothTitle: 'Wässriger Teil der Luft' },
    'swords-prince': { name: 'Prinz der Schwerter', thothTitle: 'Luftiger Teil der Luft' },
    'swords-princess': { name: 'Prinzessin der Schwerter', thothTitle: 'Erdiger Teil der Luft' },
    'disks-1': { name: 'Ass der Scheiben', thothTitle: 'Wurzel der Erde' },
    'disks-2': { name: 'Zwei der Scheiben', thothTitle: 'Wechsel' },
    'disks-3': { name: 'Drei der Scheiben', thothTitle: 'Werke' },
    'disks-4': { name: 'Vier der Scheiben', thothTitle: 'Macht' },
    'disks-5': { name: 'Fünf der Scheiben', thothTitle: 'Sorge' },
    'disks-6': { name: 'Sechs der Scheiben', thothTitle: 'Erfolg' },
    'disks-7': { name: 'Sieben der Scheiben', thothTitle: 'Fehlschlag' },
    'disks-8': { name: 'Acht der Scheiben', thothTitle: 'Umsicht' },
    'disks-9': { name: 'Neun der Scheiben', thothTitle: 'Gewinn' },
    'disks-10': { name: 'Zehn der Scheiben', thothTitle: 'Reichtum' },
    'disks-knight': { name: 'Ritter der Scheiben', thothTitle: 'Feuriger Teil der Erde' },
    'disks-queen': { name: 'Königin der Scheiben', thothTitle: 'Wässriger Teil der Erde' },
    'disks-prince': { name: 'Prinz der Scheiben', thothTitle: 'Luftiger Teil der Erde' },
    'disks-princess': { name: 'Prinzessin der Scheiben', thothTitle: 'Erdiger Teil der Erde' },
  },

  en: {
    'atu-0': { name: 'The Fool' },
    'atu-1': { name: 'The Magus' },
    'atu-2': { name: 'The High Priestess' },
    'atu-3': { name: 'The Empress' },
    'atu-4': { name: 'The Emperor' },
    'atu-5': { name: 'The Hierophant' },
    'atu-6': { name: 'The Lovers' },
    'atu-7': { name: 'The Chariot' },
    'atu-8': { name: 'Adjustment' },
    'atu-9': { name: 'The Hermit' },
    'atu-10': { name: 'Fortune' },
    'atu-11': { name: 'Lust' },
    'atu-12': { name: 'The Hanged Man' },
    'atu-13': { name: 'Death' },
    'atu-14': { name: 'Art' },
    'atu-15': { name: 'The Devil' },
    'atu-16': { name: 'The Tower' },
    'atu-17': { name: 'The Star' },
    'atu-18': { name: 'The Moon' },
    'atu-19': { name: 'The Sun' },
    'atu-20': { name: 'The Aeon' },
    'atu-21': { name: 'The Universe' },
    'wands-1': { name: 'Ace of Wands', thothTitle: 'Root of Fire' },
    'wands-2': { name: 'Two of Wands', thothTitle: 'Dominion' },
    'wands-3': { name: 'Three of Wands', thothTitle: 'Virtue' },
    'wands-4': { name: 'Four of Wands', thothTitle: 'Completion' },
    'wands-5': { name: 'Five of Wands', thothTitle: 'Strife' },
    'wands-6': { name: 'Six of Wands', thothTitle: 'Victory' },
    'wands-7': { name: 'Seven of Wands', thothTitle: 'Valour' },
    'wands-8': { name: 'Eight of Wands', thothTitle: 'Swiftness' },
    'wands-9': { name: 'Nine of Wands', thothTitle: 'Strength' },
    'wands-10': { name: 'Ten of Wands', thothTitle: 'Oppression' },
    'wands-knight': { name: 'Knight of Wands', thothTitle: 'Fiery Part of Fire' },
    'wands-queen': { name: 'Queen of Wands', thothTitle: 'Watery Part of Fire' },
    'wands-prince': { name: 'Prince of Wands', thothTitle: 'Airy Part of Fire' },
    'wands-princess': { name: 'Princess of Wands', thothTitle: 'Earthy Part of Fire' },
    'cups-1': { name: 'Ace of Cups', thothTitle: 'Root of Water' },
    'cups-2': { name: 'Two of Cups', thothTitle: 'Love' },
    'cups-3': { name: 'Three of Cups', thothTitle: 'Abundance' },
    'cups-4': { name: 'Four of Cups', thothTitle: 'Luxury' },
    'cups-5': { name: 'Five of Cups', thothTitle: 'Disappointment' },
    'cups-6': { name: 'Six of Cups', thothTitle: 'Pleasure' },
    'cups-7': { name: 'Seven of Cups', thothTitle: 'Debauch' },
    'cups-8': { name: 'Eight of Cups', thothTitle: 'Indolence' },
    'cups-9': { name: 'Nine of Cups', thothTitle: 'Happiness' },
    'cups-10': { name: 'Ten of Cups', thothTitle: 'Satiety' },
    'cups-knight': { name: 'Knight of Cups', thothTitle: 'Fiery Part of Water' },
    'cups-queen': { name: 'Queen of Cups', thothTitle: 'Watery Part of Water' },
    'cups-prince': { name: 'Prince of Cups', thothTitle: 'Airy Part of Water' },
    'cups-princess': { name: 'Princess of Cups', thothTitle: 'Earthy Part of Water' },
    'swords-1': { name: 'Ace of Swords', thothTitle: 'Root of Air' },
    'swords-2': { name: 'Two of Swords', thothTitle: 'Peace' },
    'swords-3': { name: 'Three of Swords', thothTitle: 'Sorrow' },
    'swords-4': { name: 'Four of Swords', thothTitle: 'Truce' },
    'swords-5': { name: 'Five of Swords', thothTitle: 'Defeat' },
    'swords-6': { name: 'Six of Swords', thothTitle: 'Science' },
    'swords-7': { name: 'Seven of Swords', thothTitle: 'Futility' },
    'swords-8': { name: 'Eight of Swords', thothTitle: 'Interference' },
    'swords-9': { name: 'Nine of Swords', thothTitle: 'Cruelty' },
    'swords-10': { name: 'Ten of Swords', thothTitle: 'Ruin' },
    'swords-knight': { name: 'Knight of Swords', thothTitle: 'Fiery Part of Air' },
    'swords-queen': { name: 'Queen of Swords', thothTitle: 'Watery Part of Air' },
    'swords-prince': { name: 'Prince of Swords', thothTitle: 'Airy Part of Air' },
    'swords-princess': { name: 'Princess of Swords', thothTitle: 'Earthy Part of Air' },
    'disks-1': { name: 'Ace of Disks', thothTitle: 'Root of Earth' },
    'disks-2': { name: 'Two of Disks', thothTitle: 'Change' },
    'disks-3': { name: 'Three of Disks', thothTitle: 'Works' },
    'disks-4': { name: 'Four of Disks', thothTitle: 'Power' },
    'disks-5': { name: 'Five of Disks', thothTitle: 'Worry' },
    'disks-6': { name: 'Six of Disks', thothTitle: 'Success' },
    'disks-7': { name: 'Seven of Disks', thothTitle: 'Failure' },
    'disks-8': { name: 'Eight of Disks', thothTitle: 'Prudence' },
    'disks-9': { name: 'Nine of Disks', thothTitle: 'Gain' },
    'disks-10': { name: 'Ten of Disks', thothTitle: 'Wealth' },
    'disks-knight': { name: 'Knight of Disks', thothTitle: 'Fiery Part of Earth' },
    'disks-queen': { name: 'Queen of Disks', thothTitle: 'Watery Part of Earth' },
    'disks-prince': { name: 'Prince of Disks', thothTitle: 'Airy Part of Earth' },
    'disks-princess': { name: 'Princess of Disks', thothTitle: 'Earthy Part of Earth' },
  },

  es: {
    'atu-0': { name: 'El Loco' },
    'atu-1': { name: 'El Mago' },
    'atu-2': { name: 'La Sacerdotisa' },
    'atu-3': { name: 'La Emperatriz' },
    'atu-4': { name: 'El Emperador' },
    'atu-5': { name: 'El Hierofante' },
    'atu-6': { name: 'Los Enamorados' },
    'atu-7': { name: 'El Carro' },
    'atu-8': { name: 'Ajuste' },
    'atu-9': { name: 'El Ermitaño' },
    'atu-10': { name: 'La Fortuna' },
    'atu-11': { name: 'Deseo' },
    'atu-12': { name: 'El Colgado' },
    'atu-13': { name: 'La Muerte' },
    'atu-14': { name: 'Arte' },
    'atu-15': { name: 'El Diablo' },
    'atu-16': { name: 'La Torre' },
    'atu-17': { name: 'La Estrella' },
    'atu-18': { name: 'La Luna' },
    'atu-19': { name: 'El Sol' },
    'atu-20': { name: 'El Eón' },
    'atu-21': { name: 'El Universo' },
    'wands-1': { name: 'As de Bastos', thothTitle: 'Raíz del Fuego' },
    'wands-2': { name: 'Dos de Bastos', thothTitle: 'Dominio' },
    'wands-3': { name: 'Tres de Bastos', thothTitle: 'Virtud' },
    'wands-4': { name: 'Cuatro de Bastos', thothTitle: 'Consumación' },
    'wands-5': { name: 'Cinco de Bastos', thothTitle: 'Lucha' },
    'wands-6': { name: 'Seis de Bastos', thothTitle: 'Victoria' },
    'wands-7': { name: 'Siete de Bastos', thothTitle: 'Valor' },
    'wands-8': { name: 'Ocho de Bastos', thothTitle: 'Rapidez' },
    'wands-9': { name: 'Nueve de Bastos', thothTitle: 'Fuerza' },
    'wands-10': { name: 'Diez de Bastos', thothTitle: 'Opresión' },
    'wands-knight': { name: 'Caballero de Bastos', thothTitle: 'Parte Ígnea del Fuego' },
    'wands-queen': { name: 'Reina de Bastos', thothTitle: 'Parte Acuática del Fuego' },
    'wands-prince': { name: 'Príncipe de Bastos', thothTitle: 'Parte Aérea del Fuego' },
    'wands-princess': { name: 'Princesa de Bastos', thothTitle: 'Parte Terrenal del Fuego' },
    'cups-1': { name: 'As de Copas', thothTitle: 'Raíz del Agua' },
    'cups-2': { name: 'Dos de Copas', thothTitle: 'Amor' },
    'cups-3': { name: 'Tres de Copas', thothTitle: 'Abundancia' },
    'cups-4': { name: 'Cuatro de Copas', thothTitle: 'Lujo' },
    'cups-5': { name: 'Cinco de Copas', thothTitle: 'Desilusión' },
    'cups-6': { name: 'Seis de Copas', thothTitle: 'Placer' },
    'cups-7': { name: 'Siete de Copas', thothTitle: 'Corrupción' },
    'cups-8': { name: 'Ocho de Copas', thothTitle: 'Indolencia' },
    'cups-9': { name: 'Nueve de Copas', thothTitle: 'Dicha' },
    'cups-10': { name: 'Diez de Copas', thothTitle: 'Saciedad' },
    'cups-knight': { name: 'Caballero de Copas', thothTitle: 'Parte Ígnea del Agua' },
    'cups-queen': { name: 'Reina de Copas', thothTitle: 'Parte Acuática del Agua' },
    'cups-prince': { name: 'Príncipe de Copas', thothTitle: 'Parte Aérea del Agua' },
    'cups-princess': { name: 'Princesa de Copas', thothTitle: 'Parte Terrenal del Agua' },
    'swords-1': { name: 'As de Espadas', thothTitle: 'Raíz del Aire' },
    'swords-2': { name: 'Dos de Espadas', thothTitle: 'Paz' },
    'swords-3': { name: 'Tres de Espadas', thothTitle: 'Pena' },
    'swords-4': { name: 'Cuatro de Espadas', thothTitle: 'Tregua' },
    'swords-5': { name: 'Cinco de Espadas', thothTitle: 'Derrota' },
    'swords-6': { name: 'Seis de Espadas', thothTitle: 'Ciencia' },
    'swords-7': { name: 'Siete de Espadas', thothTitle: 'Futilidad' },
    'swords-8': { name: 'Ocho de Espadas', thothTitle: 'Interferencia' },
    'swords-9': { name: 'Nueve de Espadas', thothTitle: 'Crueldad' },
    'swords-10': { name: 'Diez de Espadas', thothTitle: 'Ruina' },
    'swords-knight': { name: 'Caballero de Espadas', thothTitle: 'Parte Ígnea del Aire' },
    'swords-queen': { name: 'Reina de Espadas', thothTitle: 'Parte Acuática del Aire' },
    'swords-prince': { name: 'Príncipe de Espadas', thothTitle: 'Parte Aérea del Aire' },
    'swords-princess': { name: 'Princesa de Espadas', thothTitle: 'Parte Terrenal del Aire' },
    'disks-1': { name: 'As de Discos', thothTitle: 'Raíz de la Tierra' },
    'disks-2': { name: 'Dos de Discos', thothTitle: 'Cambio' },
    'disks-3': { name: 'Tres de Discos', thothTitle: 'Obras' },
    'disks-4': { name: 'Cuatro de Discos', thothTitle: 'Poder' },
    'disks-5': { name: 'Cinco de Discos', thothTitle: 'Preocupación' },
    'disks-6': { name: 'Seis de Discos', thothTitle: 'Éxito' },
    'disks-7': { name: 'Siete de Discos', thothTitle: 'Fracaso' },
    'disks-8': { name: 'Ocho de Discos', thothTitle: 'Prudencia' },
    'disks-9': { name: 'Nueve de Discos', thothTitle: 'Ganancia' },
    'disks-10': { name: 'Diez de Discos', thothTitle: 'Riqueza' },
    'disks-knight': { name: 'Caballero de Discos', thothTitle: 'Parte Ígnea de la Tierra' },
    'disks-queen': { name: 'Reina de Discos', thothTitle: 'Parte Acuática de la Tierra' },
    'disks-prince': { name: 'Príncipe de Discos', thothTitle: 'Parte Aérea de la Tierra' },
    'disks-princess': { name: 'Princesa de Discos', thothTitle: 'Parte Terrenal de la Tierra' },
  },

  fr: {
    'atu-0': { name: 'Le Mat' },
    'atu-1': { name: 'Le Mage' },
    'atu-2': { name: 'La Papesse' },
    'atu-3': { name: 'L\'Impératrice' },
    'atu-4': { name: 'L\'Empereur' },
    'atu-5': { name: 'Le Hiérophante' },
    'atu-6': { name: 'Les Amoureux' },
    'atu-7': { name: 'Le Chariot' },
    'atu-8': { name: 'Ajustement' },
    'atu-9': { name: 'L\'Ermite' },
    'atu-10': { name: 'La Fortune' },
    'atu-11': { name: 'Désir' },
    'atu-12': { name: 'Le Pendu' },
    'atu-13': { name: 'La Mort' },
    'atu-14': { name: 'L\'Art' },
    'atu-15': { name: 'Le Diable' },
    'atu-16': { name: 'La Tour' },
    'atu-17': { name: 'L\'Étoile' },
    'atu-18': { name: 'La Lune' },
    'atu-19': { name: 'Le Soleil' },
    'atu-20': { name: 'L\'Éon' },
    'atu-21': { name: 'L\'Univers' },
    'wands-1': { name: 'As de Bâtons', thothTitle: 'Racine du Feu' },
    'wands-2': { name: 'Deux de Bâtons', thothTitle: 'Domination' },
    'wands-3': { name: 'Trois de Bâtons', thothTitle: 'Vertu' },
    'wands-4': { name: 'Quatre de Bâtons', thothTitle: 'Achèvement' },
    'wands-5': { name: 'Cinq de Bâtons', thothTitle: 'Conflit' },
    'wands-6': { name: 'Six de Bâtons', thothTitle: 'Victoire' },
    'wands-7': { name: 'Sept de Bâtons', thothTitle: 'Vaillance' },
    'wands-8': { name: 'Huit de Bâtons', thothTitle: 'Célérité' },
    'wands-9': { name: 'Neuf de Bâtons', thothTitle: 'Force' },
    'wands-10': { name: 'Dix de Bâtons', thothTitle: 'Oppression' },
    'wands-knight': { name: 'Chevalier de Bâtons', thothTitle: 'Part Ignée du Feu' },
    'wands-queen': { name: 'Reine de Bâtons', thothTitle: 'Part Aqueuse du Feu' },
    'wands-prince': { name: 'Prince de Bâtons', thothTitle: 'Part Aérienne du Feu' },
    'wands-princess': { name: 'Princesse de Bâtons', thothTitle: 'Part Terrestre du Feu' },
    'cups-1': { name: 'As de Coupes', thothTitle: 'Racine de l\'Eau' },
    'cups-2': { name: 'Deux de Coupes', thothTitle: 'Amour' },
    'cups-3': { name: 'Trois de Coupes', thothTitle: 'Abondance' },
    'cups-4': { name: 'Quatre de Coupes', thothTitle: 'Luxe' },
    'cups-5': { name: 'Cinq de Coupes', thothTitle: 'Déception' },
    'cups-6': { name: 'Six de Coupes', thothTitle: 'Plaisir' },
    'cups-7': { name: 'Sept de Coupes', thothTitle: 'Débauche' },
    'cups-8': { name: 'Huit de Coupes', thothTitle: 'Indolence' },
    'cups-9': { name: 'Neuf de Coupes', thothTitle: 'Bonheur' },
    'cups-10': { name: 'Dix de Coupes', thothTitle: 'Satiété' },
    'cups-knight': { name: 'Chevalier de Coupes', thothTitle: 'Part Ignée de l\'Eau' },
    'cups-queen': { name: 'Reine de Coupes', thothTitle: 'Part Aqueuse de l\'Eau' },
    'cups-prince': { name: 'Prince de Coupes', thothTitle: 'Part Aérienne de l\'Eau' },
    'cups-princess': { name: 'Princesse de Coupes', thothTitle: 'Part Terrestre de l\'Eau' },
    'swords-1': { name: 'As d\'Épées', thothTitle: 'Racine de l\'Air' },
    'swords-2': { name: 'Deux d\'Épées', thothTitle: 'Paix' },
    'swords-3': { name: 'Trois d\'Épées', thothTitle: 'Chagrin' },
    'swords-4': { name: 'Quatre d\'Épées', thothTitle: 'Trêve' },
    'swords-5': { name: 'Cinq d\'Épées', thothTitle: 'Défaite' },
    'swords-6': { name: 'Six d\'Épées', thothTitle: 'Science' },
    'swords-7': { name: 'Sept d\'Épées', thothTitle: 'Futilité' },
    'swords-8': { name: 'Huit d\'Épées', thothTitle: 'Ingérence' },
    'swords-9': { name: 'Neuf d\'Épées', thothTitle: 'Cruauté' },
    'swords-10': { name: 'Dix d\'Épées', thothTitle: 'Ruine' },
    'swords-knight': { name: 'Chevalier d\'Épées', thothTitle: 'Part Ignée de l\'Air' },
    'swords-queen': { name: 'Reine d\'Épées', thothTitle: 'Part Aqueuse de l\'Air' },
    'swords-prince': { name: 'Prince d\'Épées', thothTitle: 'Part Aérienne de l\'Air' },
    'swords-princess': { name: 'Princesse d\'Épées', thothTitle: 'Part Terrestre de l\'Air' },
    'disks-1': { name: 'As de Disques', thothTitle: 'Racine de la Terre' },
    'disks-2': { name: 'Deux de Disques', thothTitle: 'Changement' },
    'disks-3': { name: 'Trois de Disques', thothTitle: 'Travaux' },
    'disks-4': { name: 'Quatre de Disques', thothTitle: 'Pouvoir' },
    'disks-5': { name: 'Cinq de Disques', thothTitle: 'Inquiétude' },
    'disks-6': { name: 'Six de Disques', thothTitle: 'Succès' },
    'disks-7': { name: 'Sept de Disques', thothTitle: 'Échec' },
    'disks-8': { name: 'Huit de Disques', thothTitle: 'Prudence' },
    'disks-9': { name: 'Neuf de Disques', thothTitle: 'Gain' },
    'disks-10': { name: 'Dix de Disques', thothTitle: 'Richesse' },
    'disks-knight': { name: 'Chevalier de Disques', thothTitle: 'Part Ignée de la Terre' },
    'disks-queen': { name: 'Reine de Disques', thothTitle: 'Part Aqueuse de la Terre' },
    'disks-prince': { name: 'Prince de Disques', thothTitle: 'Part Aérienne de la Terre' },
    'disks-princess': { name: 'Princesse de Disques', thothTitle: 'Part Terrestre de la Terre' },
  },

  ru: {
    'atu-0': { name: 'Дурак' },
    'atu-1': { name: 'Маг' },
    'atu-2': { name: 'Верховная Жрица' },
    'atu-3': { name: 'Императрица' },
    'atu-4': { name: 'Император' },
    'atu-5': { name: 'Иерофант' },
    'atu-6': { name: 'Влюбленные' },
    'atu-7': { name: 'Колесница' },
    'atu-8': { name: 'Регулирование' },
    'atu-9': { name: 'Отшельник' },
    'atu-10': { name: 'Фортуна' },
    'atu-11': { name: 'Вожделение' },
    'atu-12': { name: 'Повешенный' },
    'atu-13': { name: 'Смерть' },
    'atu-14': { name: 'Искусство' },
    'atu-15': { name: 'Дьявол' },
    'atu-16': { name: 'Башня' },
    'atu-17': { name: 'Звезда' },
    'atu-18': { name: 'Луна' },
    'atu-19': { name: 'Солнце' },
    'atu-20': { name: 'Эон' },
    'atu-21': { name: 'Вселенная' },
    'wands-1': { name: 'Туз Жезлов', thothTitle: 'Корень Огня' },
    'wands-2': { name: 'Двойка Жезлов', thothTitle: 'Власть' },
    'wands-3': { name: 'Тройка Жезлов', thothTitle: 'Добродетель' },
    'wands-4': { name: 'Четверка Жезлов', thothTitle: 'Завершение' },
    'wands-5': { name: 'Пятерка Жезлов', thothTitle: 'Борьба' },
    'wands-6': { name: 'Шестерка Жезлов', thothTitle: 'Победа' },
    'wands-7': { name: 'Семерка Жезлов', thothTitle: 'Доблесть' },
    'wands-8': { name: 'Восьмерка Жезлов', thothTitle: 'Быстрота' },
    'wands-9': { name: 'Девятка Жезлов', thothTitle: 'Сила' },
    'wands-10': { name: 'Десятка Жезлов', thothTitle: 'Угнетение' },
    'wands-knight': { name: 'Рыцарь Жезлов', thothTitle: 'Огненная часть Огня' },
    'wands-queen': { name: 'Королева Жезлов', thothTitle: 'Водная часть Огня' },
    'wands-prince': { name: 'Принц Жезлов', thothTitle: 'Воздушная часть Огня' },
    'wands-princess': { name: 'Принцесса Жезлов', thothTitle: 'Земная часть Огня' },
    'cups-1': { name: 'Туз Чаш', thothTitle: 'Корень Воды' },
    'cups-2': { name: 'Двойка Чаш', thothTitle: 'Любовь' },
    'cups-3': { name: 'Тройка Чаш', thothTitle: 'Изобилие' },
    'cups-4': { name: 'Четверка Чаш', thothTitle: 'Роскошь' },
    'cups-5': { name: 'Пятерка Чаш', thothTitle: 'Разочарование' },
    'cups-6': { name: 'Шестерка Чаш', thothTitle: 'Удовольствие' },
    'cups-7': { name: 'Семерка Чаш', thothTitle: 'Распутство' },
    'cups-8': { name: 'Восьмерка Чаш', thothTitle: 'Праздность' },
    'cups-9': { name: 'Девятка Чаш', thothTitle: 'Счастье' },
    'cups-10': { name: 'Десятка Чаш', thothTitle: 'Пресыщение' },
    'cups-knight': { name: 'Рыцарь Чаш', thothTitle: 'Огненная часть Воды' },
    'cups-queen': { name: 'Королева Чаш', thothTitle: 'Водная часть Воды' },
    'cups-prince': { name: 'Принц Чаш', thothTitle: 'Воздушная часть Воды' },
    'cups-princess': { name: 'Принцесса Чаш', thothTitle: 'Земная часть Воды' },
    'swords-1': { name: 'Туз Мечей', thothTitle: 'Корень Воздуха' },
    'swords-2': { name: 'Двойка Мечей', thothTitle: 'Мир' },
    'swords-3': { name: 'Тройка Мечей', thothTitle: 'Скорбь' },
    'swords-4': { name: 'Четверка Мечей', thothTitle: 'Перемирие' },
    'swords-5': { name: 'Пятерка Мечей', thothTitle: 'Поражение' },
    'swords-6': { name: 'Шестерка Мечей', thothTitle: 'Наука' },
    'swords-7': { name: 'Семерка Мечей', thothTitle: 'Тщетность' },
    'swords-8': { name: 'Восьмерка Мечей', thothTitle: 'Вмешательство' },
    'swords-9': { name: 'Девятка Мечей', thothTitle: 'Жестокость' },
    'swords-10': { name: 'Десятка Мечей', thothTitle: 'Крах' },
    'swords-knight': { name: 'Рыцарь Мечей', thothTitle: 'Огненная часть Воздуха' },
    'swords-queen': { name: 'Королева Мечей', thothTitle: 'Водная часть Воздуха' },
    'swords-prince': { name: 'Принц Мечей', thothTitle: 'Воздушная часть Воздуха' },
    'swords-princess': { name: 'Принцесса Мечей', thothTitle: 'Земная часть Воздуха' },
    'disks-1': { name: 'Туз Дисков', thothTitle: 'Корень Земли' },
    'disks-2': { name: 'Двойка Дисков', thothTitle: 'Перемена' },
    'disks-3': { name: 'Тройка Дисков', thothTitle: 'Труды' },
    'disks-4': { name: 'Четверка Дисков', thothTitle: 'Власть' },
    'disks-5': { name: 'Пятерка Дисков', thothTitle: 'Тревога' },
    'disks-6': { name: 'Шестерка Дисков', thothTitle: 'Успех' },
    'disks-7': { name: 'Семерка Дисков', thothTitle: 'Неудача' },
    'disks-8': { name: 'Восьмерка Дисков', thothTitle: 'Осмотрительность' },
    'disks-9': { name: 'Девятка Дисков', thothTitle: 'Прибыль' },
    'disks-10': { name: 'Десятка Дисков', thothTitle: 'Богатство' },
    'disks-knight': { name: 'Рыцарь Дисков', thothTitle: 'Огненная часть Земли' },
    'disks-queen': { name: 'Королева Дисков', thothTitle: 'Водная часть Земли' },
    'disks-prince': { name: 'Принц Дисков', thothTitle: 'Воздушная часть Земли' },
    'disks-princess': { name: 'Принцесса Дисков', thothTitle: 'Земная часть Земли' },
  },

  tr: {
    'atu-0': { name: 'Mecnun' },
    'atu-1': { name: 'Büyücü' },
    'atu-2': { name: 'Başrahibe' },
    'atu-3': { name: 'İmparatoriçe' },
    'atu-4': { name: 'İmparator' },
    'atu-5': { name: 'Aziz' },
    'atu-6': { name: 'Âşıklar' },
    'atu-7': { name: 'Savaş Arabası' },
    'atu-8': { name: 'Dengeleme' },
    'atu-9': { name: 'Ermiş' },
    'atu-10': { name: 'Kader Çarkı' },
    'atu-11': { name: 'Arzu' },
    'atu-12': { name: 'Asılmış Adam' },
    'atu-13': { name: 'Ölüm' },
    'atu-14': { name: 'Sanat' },
    'atu-15': { name: 'Şeytan' },
    'atu-16': { name: 'Yıkılan Kule' },
    'atu-17': { name: 'Yıldız' },
    'atu-18': { name: 'Ay' },
    'atu-19': { name: 'Güneş' },
    'atu-20': { name: 'Çağ' },
    'atu-21': { name: 'Evren' },
    'wands-1': { name: 'Asa Ası', thothTitle: 'Ateşin Kökü' },
    'wands-2': { name: 'Asa İkilisi', thothTitle: 'Hükümranlık' },
    'wands-3': { name: 'Asa Üçlüsü', thothTitle: 'Erdem' },
    'wands-4': { name: 'Asa Dörtlüsü', thothTitle: 'Tamamlanma' },
    'wands-5': { name: 'Asa Beşlisi', thothTitle: 'Çekişme' },
    'wands-6': { name: 'Asa Altılısı', thothTitle: 'Zafer' },
    'wands-7': { name: 'Asa Yedilisi', thothTitle: 'Cesaret' },
    'wands-8': { name: 'Asa Sekizlisi', thothTitle: 'Sürat' },
    'wands-9': { name: 'Asa Dokuzlusu', thothTitle: 'Güç' },
    'wands-10': { name: 'Asa Onlusu', thothTitle: 'Baskı' },
    'wands-knight': { name: 'Asa Şövalyesi', thothTitle: 'Ateşin Ateşli Yönü' },
    'wands-queen': { name: 'Asa Kraliçesi', thothTitle: 'Ateşin Sulu Yönü' },
    'wands-prince': { name: 'Asa Prensi', thothTitle: 'Ateşin Havai Yönü' },
    'wands-princess': { name: 'Asa Prensesi', thothTitle: 'Ateşin Topraksı Yönü' },
    'cups-1': { name: 'Kupa Ası', thothTitle: 'Suyun Kökü' },
    'cups-2': { name: 'Kupa İkilisi', thothTitle: 'Aşk' },
    'cups-3': { name: 'Kupa Üçlüsü', thothTitle: 'Bolluk' },
    'cups-4': { name: 'Kupa Dörtlüsü', thothTitle: 'Lüks' },
    'cups-5': { name: 'Kupa Beşlisi', thothTitle: 'Hayal Kırıklığı' },
    'cups-6': { name: 'Kupa Altılısı', thothTitle: 'Zevk' },
    'cups-7': { name: 'Kupa Yedilisi', thothTitle: 'Sefahat' },
    'cups-8': { name: 'Kupa Sekizlisi', thothTitle: 'Uyuşukluk' },
    'cups-9': { name: 'Kupa Dokuzlusu', thothTitle: 'Mutluluk' },
    'cups-10': { name: 'Kupa Onlusu', thothTitle: 'Doygunluk' },
    'cups-knight': { name: 'Kupa Şövalyesi', thothTitle: 'Suyun Ateşli Yönü' },
    'cups-queen': { name: 'Kupa Kraliçesi', thothTitle: 'Suyun Sulu Yönü' },
    'cups-prince': { name: 'Kupa Prensi', thothTitle: 'Suyun Havai Yönü' },
    'cups-princess': { name: 'Kupa Prensesi', thothTitle: 'Suyun Topraksı Yönü' },
    'swords-1': { name: 'Kılıç Ası', thothTitle: 'Havanın Kökü' },
    'swords-2': { name: 'Kılıç İkilisi', thothTitle: 'Barış' },
    'swords-3': { name: 'Kılıç Üçlüsü', thothTitle: 'Keder' },
    'swords-4': { name: 'Kılıç Dörtlüsü', thothTitle: 'Ateşkes' },
    'swords-5': { name: 'Kılıç Beşlisi', thothTitle: 'Yenilgi' },
    'swords-6': { name: 'Kılıç Altılısı', thothTitle: 'Bilim' },
    'swords-7': { name: 'Kılıç Yedilisi', thothTitle: 'Nafilelik' },
    'swords-8': { name: 'Kılıç Sekizlisi', thothTitle: 'Müdahale' },
    'swords-9': { name: 'Kılıç Dokuzlusu', thothTitle: 'Zulüm' },
    'swords-10': { name: 'Kılıç Onlusu', thothTitle: 'Yıkım' },
    'swords-knight': { name: 'Kılıç Şövalyesi', thothTitle: 'Havanın Ateşli Yönü' },
    'swords-queen': { name: 'Kılıç Kraliçesi', thothTitle: 'Havanın Sulu Yönü' },
    'swords-prince': { name: 'Kılıç Prensi', thothTitle: 'Havanın Havai Yönü' },
    'swords-princess': { name: 'Kılıç Prensesi', thothTitle: 'Havanın Topraksı Yönü' },
    'disks-1': { name: 'Disk Ası', thothTitle: 'Toprağın Kökü' },
    'disks-2': { name: 'Disk İkilisi', thothTitle: 'Değişim' },
    'disks-3': { name: 'Disk Üçlüsü', thothTitle: 'Eserler' },
    'disks-4': { name: 'Disk Dörtlüsü', thothTitle: 'Güç' },
    'disks-5': { name: 'Disk Beşlisi', thothTitle: 'Kaygı' },
    'disks-6': { name: 'Disk Altılısı', thothTitle: 'Başarı' },
    'disks-7': { name: 'Disk Yedilisi', thothTitle: 'Başarısızlık' },
    'disks-8': { name: 'Disk Sekizlisi', thothTitle: 'İhtiyat' },
    'disks-9': { name: 'Disk Dokuzlusu', thothTitle: 'Kazanç' },
    'disks-10': { name: 'Disk Onlusu', thothTitle: 'Zenginlik' },
    'disks-knight': { name: 'Disk Şövalyesi', thothTitle: 'Toprağın Ateşli Yönü' },
    'disks-queen': { name: 'Disk Kraliçesi', thothTitle: 'Toprağın Sulu Yönü' },
    'disks-prince': { name: 'Disk Prensi', thothTitle: 'Toprağın Havai Yönü' },
    'disks-princess': { name: 'Disk Prensesi', thothTitle: 'Toprağın Topraksı Yönü' },
  },

  zh: {
    'atu-0': { name: '愚者' },
    'atu-1': { name: '魔术师' },
    'atu-2': { name: '女祭司' },
    'atu-3': { name: '皇后' },
    'atu-4': { name: '皇帝' },
    'atu-5': { name: '教皇' },
    'atu-6': { name: '恋人' },
    'atu-7': { name: '战车' },
    'atu-8': { name: '调节' },
    'atu-9': { name: '隐士' },
    'atu-10': { name: '命运之轮' },
    'atu-11': { name: '欲望' },
    'atu-12': { name: '倒吊人' },
    'atu-13': { name: '死神' },
    'atu-14': { name: '艺术' },
    'atu-15': { name: '恶魔' },
    'atu-16': { name: '高塔' },
    'atu-17': { name: '星星' },
    'atu-18': { name: '月亮' },
    'atu-19': { name: '太阳' },
    'atu-20': { name: '新纪元 (永恒)' },
    'atu-21': { name: '宇宙' },
    'wands-1': { name: '权杖王牌', thothTitle: '火之根源' },
    'wands-2': { name: '权杖二', thothTitle: '支配' },
    'wands-3': { name: '权杖三', thothTitle: '美德' },
    'wands-4': { name: '权杖四', thothTitle: '圆满' },
    'wands-5': { name: '权杖五', thothTitle: '冲突' },
    'wands-6': { name: '权杖六', thothTitle: '胜利' },
    'wands-7': { name: '权杖七', thothTitle: '英勇' },
    'wands-8': { name: '权杖八', thothTitle: '迅疾' },
    'wands-9': { name: '权杖九', thothTitle: '力量' },
    'wands-10': { name: '权杖十', thothTitle: '压迫' },
    'wands-knight': { name: '权杖骑士', thothTitle: '火中之火' },
    'wands-queen': { name: '权杖王后', thothTitle: '水中之火' },
    'wands-prince': { name: '权杖王子', thothTitle: '风中之火' },
    'wands-princess': { name: '权杖公主', thothTitle: '土中之火' },
    'cups-1': { name: '圣杯王牌', thothTitle: '水之根源' },
    'cups-2': { name: '圣杯二', thothTitle: '爱' },
    'cups-3': { name: '圣杯三', thothTitle: '丰盛' },
    'cups-4': { name: '圣杯四', thothTitle: '奢靡' },
    'cups-5': { name: '圣杯五', thothTitle: '失望' },
    'cups-6': { name: '圣杯六', thothTitle: '愉悦' },
    'cups-7': { name: '圣杯七', thothTitle: '沉沦' },
    'cups-8': { name: '圣杯八', thothTitle: '怠惰' },
    'cups-9': { name: '圣杯九', thothTitle: '幸福' },
    'cups-10': { name: '圣杯十', thothTitle: '饱足' },
    'cups-knight': { name: '圣杯骑士', thothTitle: '火中之水' },
    'cups-queen': { name: '圣杯王后', thothTitle: '水中之水' },
    'cups-prince': { name: '圣杯王子', thothTitle: '风中之水' },
    'cups-princess': { name: '圣杯公主', thothTitle: '土中之水' },
    'swords-1': { name: '宝剑王牌', thothTitle: '风之根源' },
    'swords-2': { name: '宝剑二', thothTitle: '和平' },
    'swords-3': { name: '宝剑三', thothTitle: '悲伤' },
    'swords-4': { name: '宝剑四', thothTitle: '休战' },
    'swords-5': { name: '宝剑五', thothTitle: '挫败' },
    'swords-6': { name: '宝剑六', thothTitle: '科学' },
    'swords-7': { name: '宝剑七', thothTitle: '徒劳' },
    'swords-8': { name: '宝剑八', thothTitle: '干扰' },
    'swords-9': { name: '宝剑九', thothTitle: '残酷' },
    'swords-10': { name: '宝剑十', thothTitle: '破灭' },
    'swords-knight': { name: '宝剑骑士', thothTitle: '火中之风' },
    'swords-queen': { name: '宝剑王后', thothTitle: '水中之风' },
    'swords-prince': { name: '宝剑王子', thothTitle: '风中之风' },
    'swords-princess': { name: '宝剑公主', thothTitle: '土中之风' },
    'disks-1': { name: '圆盘王牌', thothTitle: '土之根源' },
    'disks-2': { name: '圆盘二', thothTitle: '变化' },
    'disks-3': { name: '圆盘三', thothTitle: '功作' },
    'disks-4': { name: '圆盘四', thothTitle: '力量' },
    'disks-5': { name: '圆盘五', thothTitle: '忧虑' },
    'disks-6': { name: '圆盘六', thothTitle: '成功' },
    'disks-7': { name: '圆盘七', thothTitle: '失败' },
    'disks-8': { name: '圆盘八', thothTitle: '审慎' },
    'disks-9': { name: '圆盘九', thothTitle: '收益' },
    'disks-10': { name: '圆盘十', thothTitle: '财富' },
    'disks-knight': { name: '圆盘骑士', thothTitle: '火中之土' },
    'disks-queen': { name: '圆盘王后', thothTitle: '水中之土' },
    'disks-prince': { name: '圆盘王子', thothTitle: '风中之土' },
    'disks-princess': { name: '圆盘公主', thothTitle: '土中之土' },
  },

  ja: {
    'atu-0': { name: '愚者' },
    'atu-1': { name: '魔術師' },
    'atu-2': { name: '女教皇' },
    'atu-3': { name: '女帝' },
    'atu-4': { name: '皇帝' },
    'atu-5': { name: '法王' },
    'atu-6': { name: '恋人' },
    'atu-7': { name: '戦車' },
    'atu-8': { name: '調整' },
    'atu-9': { name: '隠者' },
    'atu-10': { name: '運命の輪' },
    'atu-11': { name: '欲望' },
    'atu-12': { name: '吊るされた男' },
    'atu-13': { name: '死神' },
    'atu-14': { name: '技芸' },
    'atu-15': { name: '悪魔' },
    'atu-16': { name: '塔' },
    'atu-17': { name: '星' },
    'atu-18': { name: '月' },
    'atu-19': { name: '太陽' },
    'atu-20': { name: '永劫' },
    'atu-21': { name: '宇宙' },
    'wands-1': { name: 'ワンドのエース', thothTitle: '火の根源' },
    'wands-2': { name: 'ワンドの2', thothTitle: '支配' },
    'wands-3': { name: 'ワンドの3', thothTitle: '徳' },
    'wands-4': { name: 'ワンドの4', thothTitle: '完成' },
    'wands-5': { name: 'ワンドの5', thothTitle: '闘争' },
    'wands-6': { name: 'ワンドの6', thothTitle: '勝利' },
    'wands-7': { name: 'ワンドの7', thothTitle: '勇気' },
    'wands-8': { name: 'ワンドの8', thothTitle: '迅速' },
    'wands-9': { name: 'ワンドの9', thothTitle: '強さ' },
    'wands-10': { name: 'ワンドの10', thothTitle: '抑圧' },
    'wands-knight': { name: 'ワンドの騎士', thothTitle: '火の中の火' },
    'wands-queen': { name: 'ワンドの女王', thothTitle: '火の中の水' },
    'wands-prince': { name: 'ワンドの王子', thothTitle: '火の中の風' },
    'wands-princess': { name: 'ワンドの王女', thothTitle: '火の中の地' },
    'cups-1': { name: 'カップのエース', thothTitle: '水の根源' },
    'cups-2': { name: 'カップの2', thothTitle: '愛' },
    'cups-3': { name: 'カップの3', thothTitle: '豊穣' },
    'cups-4': { name: 'カップの4', thothTitle: '贅沢' },
    'cups-5': { name: 'カップの5', thothTitle: '失望' },
    'cups-6': { name: 'カップの6', thothTitle: '喜び' },
    'cups-7': { name: 'カップの7', thothTitle: '堕落' },
    'cups-8': { name: 'カップの8', thothTitle: '怠惰' },
    'cups-9': { name: 'カップの9', thothTitle: '幸福' },
    'cups-10': { name: 'カップの10', thothTitle: '飽食' },
    'cups-knight': { name: 'カップの騎士', thothTitle: '水の中の火' },
    'cups-queen': { name: 'カップの女王', thothTitle: '水の中の水' },
    'cups-prince': { name: 'カップの王子', thothTitle: '水の中の風' },
    'cups-princess': { name: 'カップの王女', thothTitle: '水の中の地' },
    'swords-1': { name: 'ソードのエース', thothTitle: '風の根源' },
    'swords-2': { name: 'ソードの2', thothTitle: '平和' },
    'swords-3': { name: 'ソードの3', thothTitle: '悲哀' },
    'swords-4': { name: 'ソードの4', thothTitle: '休戦' },
    'swords-5': { name: 'ソードの5', thothTitle: '敗北' },
    'swords-6': { name: 'ソードの6', thothTitle: '科学' },
    'swords-7': { name: 'ソードの7', thothTitle: '無益' },
    'swords-8': { name: 'ソードの8', thothTitle: '妨害' },
    'swords-9': { name: 'ソードの9', thothTitle: '残虐' },
    'swords-10': { name: 'ソードの10', thothTitle: '破滅' },
    'swords-knight': { name: 'ソードの騎士', thothTitle: '風の中の火' },
    'swords-queen': { name: 'ソードの女王', thothTitle: '風の中の水' },
    'swords-prince': { name: 'ソードの王子', thothTitle: '風の中の風' },
    'swords-princess': { name: 'ソードの王女', thothTitle: '風の中の地' },
    'disks-1': { name: 'ディスクのエース', thothTitle: '地の根源' },
    'disks-2': { name: 'ディスクの2', thothTitle: '変化' },
    'disks-3': { name: 'ディスクの3', thothTitle: '業（わざ）' },
    'disks-4': { name: 'ディスクの4', thothTitle: '力' },
    'disks-5': { name: 'ディスクの5', thothTitle: '心配' },
    'disks-6': { name: 'ディスクの6', thothTitle: '成功' },
    'disks-7': { name: 'ディスクの7', thothTitle: '失敗' },
    'disks-8': { name: 'ディスクの8', thothTitle: '慎重' },
    'disks-9': { name: 'ディスクの9', thothTitle: '獲得' },
    'disks-10': { name: 'ディスクの10', thothTitle: '富' },
    'disks-knight': { name: 'ディスクの騎士', thothTitle: '地の中の火' },
    'disks-queen': { name: 'ディスクの女王', thothTitle: '地の中の水' },
    'disks-prince': { name: 'ディスクの王子', thothTitle: '地の中の風' },
    'disks-princess': { name: 'ディスクの王女', thothTitle: '地の中の地' },
  }
};
