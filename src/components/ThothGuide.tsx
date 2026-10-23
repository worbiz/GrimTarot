import React from 'react';
import { Sparkles, BookOpen, Eye, RotateCw, Flame } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SupportedLanguage } from '../i18n/types';

interface GuideSection {
  badge: string;
  title: string;
  subtitle: string;
  bookTitle: string;
  bookDesc1: string;
  bookDesc2: string;
  atuTitle: string;
  atus: { title: string; desc: string }[];
  courtTitle: string;
  courtDesc: string;
  courtCards: { name: string; element: string; desc: string }[];
}

const GUIDE_CONTENT: Record<SupportedLanguage, GuideSection> = {
  de: {
    badge: 'Infothek & Esoterik',
    title: 'Das Aleister Crowley Thoth Tarot',
    subtitle: 'Hintergründe, kosmische Symbolik und Besonderheiten des berühmten Meisterwerks.',
    bookTitle: 'Das Buch Thoth & Lady Frieda Harris',
    bookDesc1: 'Das Crowley Thoth Tarot wurde zwischen 1938 und 1943 von dem Okkultisten Aleister Crowley konzipiert und von der Künstlerin Lady Frieda Harris in fünfjähriger Arbeit im Stil des synthetischen Kubismus gemalt.',
    bookDesc2: 'Es gilt als eines der komplexesten und tiefgründigsten Tarotdecks der Welt, da es Astrologie, Alchemie, Kabbalah (Lebensbaum), hebräische Buchstaben und altägyptische Mythologie miteinander verschmilzt.',
    atuTitle: 'Namensanpassungen der Großen Arkana (Atu)',
    atus: [
      {
        title: 'Atu VIII: Ausgleichung (Adjustment) statt Gerechtigkeit',
        desc: 'Verkörpert die ägyptische Göttin Ma’at und das absolute kosmische Gleichgewicht von Ursache und Wirkung.'
      },
      {
        title: 'Atu XI: Lust statt Kraft',
        desc: 'Zeigt Babalon auf dem siebenköpfigen Tier. Nicht rohe körperliche Zähmung, sondern feurige, ekstatische Hingabe ans Leben.'
      },
      {
        title: 'Atu XIV: Kunst (Art) statt Mäßigung',
        desc: 'Das große alchemistische Meisterwerk der Synthese: Die Vereinigung von Feuer und Wasser zum Elixier der Transformation.'
      },
      {
        title: 'Atu XX: Das Äon statt Das Gericht',
        desc: 'Zeigt den Anbruch des Zeitalters des Kindes Horus (Harpokrates) und den Bewusstseinssprung in eine neue Ära.'
      },
      {
        title: 'Atu XXI: Das Universum statt Die Welt',
        desc: 'Die kosmische Jungfrau tanzt im Kreis der Schlange des Schicksals – die vollendete Schöpfung.'
      }
    ],
    courtTitle: 'Das System der Hofkarten im Thoth Tarot',
    courtDesc: 'Crowley ersetzte die traditionellen Hofkarten (König, Königin, Ritter, Bube) durch folgende elementare Struktur:',
    courtCards: [
      { name: 'Ritter (Knight)', element: 'Feuer des Elements', desc: 'Dynamische Kraft, Initiative und plötzlicher Impuls.' },
      { name: 'Königin (Queen)', element: 'Wasser des Elements', desc: 'Empfangende Tiefe, Intuition, Pflege und Manifestation.' },
      { name: 'Prinz (Prince)', element: 'Luft des Elements', desc: 'Intellektuelle Umsetzung, Ideenfluss und Analyse.' },
      { name: 'Prinzessin (Princess)', element: 'Erde des Elements', desc: 'Materielle Verankerung, Keimzelle des neuen Zyklus.' }
    ]
  },

  en: {
    badge: 'Compendium & Esoterica',
    title: 'The Aleister Crowley Thoth Tarot',
    subtitle: 'Cosmic symbolism, alchemical keys, and origins of the occult masterpiece.',
    bookTitle: 'The Book of Thoth & Lady Frieda Harris',
    bookDesc1: 'The Crowley Thoth Tarot was conceived between 1938 and 1943 by occultist Aleister Crowley and executed over five years of devotion by artist Lady Frieda Harris using synthetic cubism.',
    bookDesc2: 'It stands as one of the most profound tarot decks in human history, fusing Western astrology, Hermetic alchemy, Qabalah (Tree of Life), Hebrew letters, and ancient Egyptian thelema.',
    atuTitle: 'Major Arcana (Atu) Attributions & Revisions',
    atus: [
      {
        title: 'Atu VIII: Adjustment (Replacing Traditional Justice)',
        desc: 'Embodying the Egyptian goddess Ma’at and the exact equilibrium of cosmic cause and consequence.'
      },
      {
        title: 'Atu XI: Lust (Replacing Traditional Strength)',
        desc: 'Depicting Babalon astride the Great Beast. Not brute suppression, but ecstatic, fiery devotion to life.'
      },
      {
        title: 'Atu XIV: Art (Replacing Traditional Temperance)',
        desc: 'The Great Alchemical Work: The sacred union of Fire and Water into the golden elixir of transmutation.'
      },
      {
        title: 'Atu XX: The Aeon (Replacing Traditional Judgement)',
        desc: 'Signifying the dawning Age of Horus the Child (Harpocrates) and humanity’s leap in spiritual consciousness.'
      },
      {
        title: 'Atu XXI: The Universe (Replacing The World)',
        desc: 'The maiden dancing inside the serpent ring of eternity—the ultimate cosmic synthesis.'
      }
    ],
    courtTitle: 'The Court Card Elemental Matrix',
    courtDesc: 'Crowley restructured the conventional court (King, Queen, Knight, Page) into an alchemical four-fold hierarchy:',
    courtCards: [
      { name: 'Knight', element: 'Fire of the Element', desc: 'Active kinetic force, supreme will, and initial impulse.' },
      { name: 'Queen', element: 'Water of the Element', desc: 'Receptive subconscious depth, gestation, and manifestation.' },
      { name: 'Prince', element: 'Air of the Element', desc: 'Intellectual synthesis, analysis, and ideological direction.' },
      { name: 'Princess', element: 'Earth of the Element', desc: 'Physical crystallization and seed of future cycles.' }
    ]
  },

  es: {
    badge: 'Compendio Esotérico',
    title: 'El Tarot Thoth de Aleister Crowley',
    subtitle: 'Simbolismo cósmico, claves alquímicas y secretos de la obra maestra.',
    bookTitle: 'El Libro de Thoth y Lady Frieda Harris',
    bookDesc1: 'El Tarot Thoth fue concebido entre 1938 y 1943 por Aleister Crowley y pintado durante cinco años por la artista Lady Frieda Harris bajo el estilo del cubismo sintético.',
    bookDesc2: 'Es una de las barajas más complejas y trascendentes del mundo, entrelazando astrología, alquimia, cábala hermética, letras hebreas y mitología del antiguo Egipto.',
    atuTitle: 'Transformaciones de los Arcanos Mayores (Atu)',
    atus: [
      {
        title: 'Atu VIII: Ajuste (en lugar de Justicia)',
        desc: 'Representa a la diosa egipcia Ma\'at y el equilibrio cósmico absoluto entre causa y efecto.'
      },
      {
        title: 'Atu XI: Deseo / Pasión (en lugar de Fuerza)',
        desc: 'Muestra a Babalon sobre la Bestia de siete cabezas. No es sumisión animal, sino devoción extática y ardiente por la existencia.'
      },
      {
        title: 'Atu XIV: Arte (en lugar de Templanza)',
        desc: 'La Gran Obra Alquímica: la fusión sagrada de Fuego y Agua en el elixir de la transmutación.'
      },
      {
        title: 'Atu XX: El Eón (en lugar de El Juicio)',
        desc: 'El nacimiento de la Nueva Era de Horus (Harpócrates) y el salto de la conciencia cósmica.'
      },
      {
        title: 'Atu XXI: El Universo (en lugar de El Mundo)',
        desc: 'La doncella cósmica que danza dentro de la serpiente ouroboros: la creación consumada.'
      }
    ],
    courtTitle: 'Estructura Alquímica de las Figuras de la Corte',
    courtDesc: 'Crowley redefinió la corte tradicional según la dinámica de las cuatro fuerzas elementales:',
    courtCards: [
      { name: 'Caballero (Knight)', element: 'Fuego del Elemento', desc: 'Fuerza dinámica, impulso e iniciativa primordial.' },
      { name: 'Reina (Queen)', element: 'Agua del Elemento', desc: 'Profundidad receptiva, intuición, nutrición y manifestación.' },
      { name: 'Príncipe (Prince)', element: 'Aire del Elemento', desc: 'Intelecto activo, flujo de ideas y dirección mental.' },
      { name: 'Princesa (Princess)', element: 'Tierra del Elemento', desc: 'Anclaje material y semilla del próximo ciclo.' }
    ]
  },

  fr: {
    badge: 'Compendium & Ésotérisme',
    title: 'Le Tarot Thoth d\'Aleister Crowley',
    subtitle: 'Symbolisme céleste, clés alchimiques et origines du chef-d\'œuvre occulte.',
    bookTitle: 'Le Livre de Thoth & Lady Frieda Harris',
    bookDesc1: 'Le Tarot Thoth fut conçu entre 1938 et 1943 par l\'occultiste Aleister Crowley et peint pendant cinq années par Lady Frieda Harris dans une esthétique de cubisme synthétique.',
    bookDesc2: 'Il est reconnu comme l\'un des jeux les plus profonds, conjuguant astrologie occidentale, alchimie hermétique, Kabbale, alphabet hébraïque et panthéon égyptien.',
    atuTitle: 'Reconfiguration des Arcanes Majeurs (Atu)',
    atus: [
      {
        title: 'Atu VIII : Ajustement (au lieu de la Justice)',
        desc: 'Incarne la déesse égyptienne Maât et l\'équilibre cosmique parfait de la causalité.'
      },
      {
        title: 'Atu XI : Désir (au lieu de la Force)',
        desc: 'Babalon chevauchant la Bête. Non pas un domptage sauvage, mais l\'extase sacrée de l\'élan vital.'
      },
      {
        title: 'Atu XIV : L\'Art (au lieu de la Tempérance)',
        desc: 'Le Grand Œuvre alchimique : l\'union du Feu et de l\'Eau créant l\'élixir d\'immortalité.'
      },
      {
        title: 'Atu XX : L\'Éon (au lieu du Jugement)',
        desc: 'L\'avènement de l\'Ère nouvelle de l\'enfant Horus (Harpocrate) et l\'éveil spirituel de l\'humanité.'
      },
      {
        title: 'Atu XXI : L\'Univers (au lieu du Monde)',
        desc: 'La vierge cosmique dansant au sein du serpent Ouroboros—la création totale achevée.'
      }
    ],
    courtTitle: 'La Matrice Élémentaire des Cartes de Cour',
    courtDesc: 'Crowley a réorganisé les figures royales en une pure tétra-alchimie :',
    courtCards: [
      { name: 'Chevalier (Knight)', element: 'Feu de l\'Élément', desc: 'Force cinétique pure, volonté agissante et éclair initial.' },
      { name: 'Reine (Queen)', element: 'Eau de l\'Élément', desc: 'Gestation intérieure, réceptivité psychique et incarnation.' },
      { name: 'Prince (Prince)', element: 'Air de l\'Élément', desc: 'Analyse méthodique, élaboration théorique et discours.' },
      { name: 'Princesse (Princess)', element: 'Terre de l\'Élément', desc: 'Enracinement physique et germe du cycle à venir.' }
    ]
  },

  ru: {
    badge: 'Эзотерический компендиум',
    title: 'Таро Тота Алистера Кроули',
    subtitle: 'Космический символизм, алхимические ключи и тайны шедевра.',
    bookTitle: 'Книга Тота и леди Фрида Харрис',
    bookDesc1: 'Колода Таро Тота была создана оккультистом Алистером Кроули и художницей леди Фридой Харрис в период с 1938 по 1943 год в стиле синтетического кубизма.',
    bookDesc2: 'Это одна из самых глубоких колод в истории, объединяющая астрологию, герметическую алхимию, каббалу, древнеегипетскую мифологию и телему.',
    atuTitle: 'Особые названия Старших Арканов (Ату)',
    atus: [
      {
        title: 'Ату VIII: Регулирование (вместо Справедливости)',
        desc: 'Олицетворяет богиню Маат и абсолютное космическое равновесие кармы.'
      },
      {
        title: 'Ату XI: Вожделение (вместо Силы)',
        desc: 'Бабалон верхом на Звере. Не подавление инстинктов, а пламенная экстатическая любовь к жизни.'
      },
      {
        title: 'Ату XIV: Искусство (вместо Умеренности)',
        desc: 'Великое алхимическое Делание: слияние Огня и Воды в эликсир трансформации.'
      },
      {
        title: 'Ату XX: Эон (вместо Суда)',
        desc: 'Начало Эона дитя Гора (Гарпократа) и эволюционный скачок человеческого духа.'
      },
      {
        title: 'Ату XXI: Вселенная (вместо Мира)',
        desc: 'Дева, танцующая в кольце змея Уробороса — венец творения.'
      }
    ],
    courtTitle: 'Система придворных карт Кроули',
    courtDesc: 'Кроули заменил традиционные карты двора на стихийную четверичную модель:',
    courtCards: [
      { name: 'Рыцарь (Knight)', element: 'Огонь стихии', desc: 'Динамическая мощь, инициатива и стремительный импульс.' },
      { name: 'Королева (Queen)', element: 'Вода стихии', desc: 'Приемлющая глубина, интуиция и взращивание.' },
      { name: 'Принц (Prince)', element: 'Воздух стихии', desc: 'Интеллектуальная реализация, анализ и концепция.' },
      { name: 'Принцесса (Princess)', element: 'Земля стихии', desc: 'Материальное закрепление и семя будущего цикла.' }
    ]
  },

  tr: {
    badge: 'Ezoterik Rehber',
    title: 'Aleister Crowley Thoth Tarotu',
    subtitle: 'Kozmik sembolizm, simya anahtarları ve başyapıtın gizemleri.',
    bookTitle: 'Thoth Kitabı ve Leydi Frieda Harris',
    bookDesc1: 'Thoth Tarotu, 1938-1943 yılları arasında okültist Aleister Crowley tarafından tasarlanmış ve sanatçı Leydi Frieda Harris tarafından sentetik kübizm tarzında resmedilmiştir.',
    bookDesc2: 'Astroloji, simya, Kabala, İbrani harfleri ve Antik Mısır mitolojisini harmanlayan dünyanın en derinlikli tarot sistemlerinden biridir.',
    atuTitle: 'Büyük Arkana (Atu) Başlık Değişimleri',
    atus: [
      {
        title: 'Atu VIII: Dengeleme (Adalet yerine)',
        desc: 'Mısır tanrıçası Ma\'at\'ı ve etki-tepki yasasının kozmik dengesini temsil eder.'
      },
      {
        title: 'Atu XI: Arzu (Güç yerine)',
        desc: 'Yedi başlı canavarın üzerindeki Babalon. Kaba kuvveti bastırmak değil, yaşama duyulan ateşli adanmışlık.'
      },
      {
        title: 'Atu XIV: Sanat (Denge/Ölçülülük yerine)',
        desc: 'Büyük simyevi eser: Ateş ve Suyun kutsal birleşimiyle dönüşüm iksirinin yaratılması.'
      },
      {
        title: 'Atu XX: Çağ (Mahkeme yerine)',
        desc: 'Çocuk Horus (Harpokrates) çağının doğuşu ve insan bilincinin yeni boyuta sıçrayışı.'
      },
      {
        title: 'Atu XXI: Evren (Dünya yerine)',
        desc: 'Kader yılanının halkasında dans eden bakire—tamamlanmış kozmik yaratım.'
      }
    ],
    courtTitle: 'Thoth Saray Kartları Sistemi',
    courtDesc: 'Crowley, geleneksel saray figürlerini dört temel element dinamiğine göre yeniden yapılandırdı:',
    courtCards: [
      { name: 'Şövalye (Knight)', element: 'Elementin Ateşi', desc: 'Dinamik güç, inisiyatif ve ani kıvılcım.' },
      { name: 'Kraliçe (Queen)', element: 'Elementin Suyu', desc: 'Alıcı derinlik, sezgi, besleme ve tezahür.' },
      { name: 'Prens (Prince)', element: 'Elementin Havası', desc: 'Entelektüel uygulama, fikir akışı ve yön belirleme.' },
      { name: 'Prenses (Princess)', element: 'Elementin Toprağı', desc: 'Maddi köklenme ve bir sonraki döngünün tohumu.' }
    ]
  },

  zh: {
    badge: '神秘学典籍',
    title: '阿莱斯特·克劳利 托特塔罗秘典',
    subtitle: '宇宙神秘象征、炼金钥匙与旷世杰作的渊源。',
    bookTitle: '托特之书与芙里达·哈里斯夫人',
    bookDesc1: '托特塔罗牌于1938年至1943年间由著名神秘学家阿莱斯特·克劳利策划构思，并由画家芙里达·哈里斯夫人历时五年以综合立体主义风格绘制而成。',
    bookDesc2: '它被公认为世界塔罗史上最具深度与智慧的体系，融汇西方占星学、赫尔墨斯炼金术、卡巴拉生命之树、希伯来字母与古埃及神话。',
    atuTitle: '大阿卡纳 (Atu) 的重要重构与更名',
    atus: [
      {
        title: 'Atu VIII: 调节 (取代传统“正义”)',
        desc: '化身为埃及真理女神玛阿特，象征宇宙因果业力毫厘不爽的绝对动态平衡。'
      },
      {
        title: 'Atu XI: 欲望 (取代传统“力量”)',
        desc: '描绘大巴比伦女神驾驭七头兽。非肉体暴力的驯服，而是对生命燃烧烈火般的狂喜奉献。'
      },
      {
        title: 'Atu XIV: 艺术 (取代传统“节制”)',
        desc: '炼金术终极巨作：水火圣婚交融为转化的金色不朽灵药。'
      },
      {
        title: 'Atu XX: 新纪元 (取代传统“审判”)',
        desc: '标志着荷鲁斯孩童时代（哈波克拉底）的降临与人类意识向新维度的伟大跃迁。'
      },
      {
        title: 'Atu XXI: 宇宙 (取代传统“世界”)',
        desc: '宇宙神圣少女在衔尾蛇的永恒之环中翩然起舞——圆满的创世。'
      }
    ],
    courtTitle: '托特宫廷牌的四元素矩阵',
    courtDesc: '克劳利彻底重塑了传统的国王、王后、骑士、侍从，建立严密的元素对应关系：',
    courtCards: [
      { name: '骑士 (Knight)', element: '元素的火中之火', desc: '纯粹动能、最高意志与原始推动力。' },
      { name: '王后 (Queen)', element: '元素的水中之水', desc: '包容接纳的深层潜意识、滋养与显化。' },
      { name: '王子 (Prince)', element: '元素的风中之风', desc: '智性构想、理性分析与行动规划。' },
      { name: '公主 (Princess)', element: '元素的土中之土', desc: '物质现实的固化落地，亦是孕育下一轮循环的种子。' }
    ]
  },

  ja: {
    badge: '神秘学便覧',
    title: 'アレイスター・クローリー トート・タロット手引',
    subtitle: '宇宙の象徴体系、錬金術の鍵、そして不朽の傑作の起源。',
    bookTitle: 'トートの書とレディ・フリーダ・ハリス',
    bookDesc1: 'トート・タロットは1938年から1943年にかけ、オカルティズムの探求者アレイスター・クローリーが着想し、画家レディ・フリーダ・ハリスが5年の歳月を費やして総合的キュビズムの手法で描き上げました。',
    bookDesc2: '占星術、ヘルメス錬金術、カバラ（生命の樹）、ヘブライ文字、そして古代エジプト神話が有機的に融合した、世界で最も深遠なタロット体系です。',
    atuTitle: '大アルカナ（Atu）の重要な改変と命名',
    atus: [
      {
        title: 'Atu VIII: 調整（従来の「正義」に代わる）',
        desc: 'エジプトの女神マアトを体現し、原因と結果の絶対的な宇宙の均衡を示します。'
      },
      {
        title: 'Atu XI: 欲望（従来の「力」に代わる）',
        desc: '七つ頭の獣に乗るババロンを描きます。粗野な抑圧ではなく、生に対する燃えるような歓喜の献身です。'
      },
      {
        title: 'Atu XIV: 技芸（従来の「節制」に代わる）',
        desc: '大いなる錬金術の作業：火と水の神聖な結合による変容のエリクサー生成。'
      },
      {
        title: 'Atu XX: 永劫（従来の「審判」に代わる）',
        desc: 'ホルスの子（ハルポクラテス）の新時代の幕開けと、人類意識の飛躍的進化。'
      },
      {
        title: 'Atu XXI: 宇宙（従来の「世界」に代わる）',
        desc: 'ウロボロスの蛇の環の中で踊る処女—完成された大宇宙の顕現。'
      }
    ],
    courtTitle: 'トート・コートカードのエレメント構造',
    courtDesc: 'クローリーは従来の王・女王・騎士・小姓を、厳密な四元素の錬金術的対応へと再編しました：',
    courtCards: [
      { name: '騎士 (Knight)', element: '元素の中の火', desc: '能動的な運動エネルギー、意志、突発的な衝動。' },
      { name: '女王 (Queen)', element: '元素の中の水', desc: '受容的な深層意識、直感、育成と具現化。' },
      { name: '王子 (Prince)', element: '元素の中の風', desc: '知的な統合、概念の分析と方向付け。' },
      { name: '王女 (Princess)', element: '元素の中の地', desc: '物質的定着と、新たなサイクルの萌芽となる種子。' }
    ]
  }
};

export const ThothGuide: React.FC = () => {
  const { language } = useLanguage();
  const content = GUIDE_CONTENT[language] || GUIDE_CONTENT.de;

  return (
    <div className="space-y-6 pb-28 px-4 text-[#d4d4d8]">
      {/* Header */}
      <div className="text-center pt-2 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#121214] border border-[#c5a059]/30 text-[#c5a059] text-[10px] font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> {content.badge}
        </div>
        <h2 className="text-2xl font-serif font-bold text-[#f4f4f5] pt-1">
          {content.title}
        </h2>
        <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto leading-relaxed">
          {content.subtitle}
        </p>
      </div>

      {/* Main Intro Card */}
      <div className="p-5 rounded-lg bg-[#121214] border border-[#27272a] space-y-3 text-xs leading-relaxed">
        <h3 className="text-sm font-serif font-bold text-[#f4f4f5] flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#c5a059]" /> {content.bookTitle}
        </h3>
        <p className="text-[#a1a1aa]">{content.bookDesc1}</p>
        <p className="text-[#a1a1aa]">{content.bookDesc2}</p>
      </div>

      {/* Special Atu Renamings */}
      <div className="p-5 rounded-lg bg-[#121214] border border-[#27272a] space-y-3 text-xs leading-relaxed">
        <h3 className="text-sm font-serif font-bold text-[#c5a059] flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#c5a059]" /> {content.atuTitle}
        </h3>
        <div className="space-y-2">
          {content.atus.map((atu, idx) => (
            <div key={idx} className="p-3 rounded bg-[#0a0a0b] border border-[#27272a]">
              <span className="font-bold text-[#f4f4f5] block">{atu.title}</span>
              <span className="text-[#a1a1aa] mt-0.5 block">{atu.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hofkarten System */}
      <div className="p-5 rounded-lg bg-[#121214] border border-[#27272a] space-y-3 text-xs leading-relaxed">
        <h3 className="text-sm font-serif font-bold text-[#f4f4f5]">
          {content.courtTitle}
        </h3>
        <p className="text-[#a1a1aa]">{content.courtDesc}</p>
        <div className="grid grid-cols-2 gap-2">
          {content.courtCards.map((court, idx) => (
            <div key={idx} className="p-3 rounded bg-[#0a0a0b] border border-[#27272a]">
              <span className="font-bold text-[#c5a059] block">{court.name}</span>
              <span className="text-[#71717a] block text-[10px] uppercase font-mono">{court.element}</span>
              <span className="text-[#a1a1aa] mt-1 block">{court.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Elementarwürden – Der Einfluss der Elemente (Elemental Dignities) */}
      <div className="p-5 rounded-lg bg-[#0e1620] border border-[#58a6ff]/40 space-y-3.5 text-xs leading-relaxed">
        <div className="flex items-center gap-2 text-[#58a6ff]">
          <Flame className="w-4 h-4 text-[#e69d45]" />
          <h3 className="text-sm font-serif font-bold text-[#f4f4f5]">
            Elementarwürden – Der Einfluss der Elemente (Elemental Dignities)
          </h3>
        </div>
        <p className="text-[#a1a1aa]">
          In der Tradition des Hermetic Order of the Golden Dawn und im Crowley Thoth Tarot besitzen Karten keine statische Bedeutung. Ihre Wirkungskraft wird durch die alchemistische Beziehung der vier Elemente (<strong className="text-[#e69d45]">Feuer</strong>, <strong className="text-[#58a6ff]">Wasser</strong>, <strong className="text-[#79c0ff]">Luft</strong>, <strong className="text-[#7ee787]">Erde</strong>) zu ihren Nachbarkarten gestärkt, abgeschwächt oder neutralisiert.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 rounded bg-[#0a0a0b] border border-[#27272a] space-y-1">
            <span className="font-mono text-[#e69d45] font-bold text-[11px] block">
              ▲+△ Feuer & Luft (Aktiv & Befreundet)
            </span>
            <p className="text-[#d4d4d8] text-[11px]">
              Luft nährt das Feuer; Feuer erwärmt die Luft. Ideen werden zu feurigen Taten; Inspiration verbrennt Zweifel.
            </p>
          </div>

          <div className="p-3 rounded bg-[#0a0a0b] border border-[#27272a] space-y-1">
            <span className="font-mono text-[#7ee787] font-bold text-[11px] block">
              ▼+▽ Wasser & Erde (Passiv & Fruchtbar)
            </span>
            <p className="text-[#d4d4d8] text-[11px]">
              Wasser tränkt die Erde; Erde verleiht dem Wasser Form. Tiefe Gefühle kristallisieren in greifbarer Form.
            </p>
          </div>

          <div className="p-3 rounded bg-[#0a0a0b] border border-[#ff7b72]/30 space-y-1">
            <span className="font-mono text-[#ff7b72] font-bold text-[11px] block">
              ▲⚡▼ Feuer & Wasser (Feindlich / Gegensätzlich)
            </span>
            <p className="text-[#d4d4d8] text-[11px]">
              Wasser löscht Feuer; Feuer bringt Wasser zum Kochen. Emotionale Reibung, Leidenschaft versus Gefühlskälte.
            </p>
          </div>

          <div className="p-3 rounded bg-[#0a0a0b] border border-[#ff9b72]/30 space-y-1">
            <span className="font-mono text-[#ff9b72] font-bold text-[11px] block">
              △⚡▽ Luft & Erde (Feindlich / Hemmend)
            </span>
            <p className="text-[#d4d4d8] text-[11px]">
              Erde erstickt den Wind; Wind wirbelt Staub auf. Abstrakte Pläne prallen auf starre materielle Widerstände.
            </p>
          </div>
        </div>

        <div className="p-3 rounded bg-[#0a0a0b] border border-[#c5a059]/30 space-y-1">
          <span className="font-mono text-[10px] text-[#c5a059] uppercase font-bold block">
            ✦ Alchemistische Quintessenz in GrimTarot
          </span>
          <p className="text-[#d4d4d8] text-[11px]">
            In GrimTarot berechnet das System für jede Legung automatisch den <strong>Elementaren Harmonie-Index (0-100%)</strong>, ermittelt fehlende und herrschende Elemente und liefert spezifischen alchemistischen Rat nach Crowleys Book of Thoth.
          </p>
        </div>
      </div>
    </div>
  );
};

