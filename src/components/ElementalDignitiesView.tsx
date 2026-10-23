import React, { useState } from 'react';
import { DrawnCard, SpreadId } from '../types/tarot';
import {
  analyzeElementalDignities,
  SpreadElementalDignitiesResult,
  DignityRelation
} from '../utils/elementalDignities';
import { Flame, Compass, Shield, Sparkles, AlertTriangle, Info, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ThothCardView } from './ThothCardView';

interface ElementalDignitiesViewProps {
  drawnCards: DrawnCard[];
  spreadId: SpreadId;
  spreadName: string;
}

export const ElementalDignitiesView: React.FC<ElementalDignitiesViewProps> = ({
  drawnCards,
  spreadId,
  spreadName
}) => {
  const { t, language, getCardName, getElementName } = useLanguage();
  const [showDoctrineInfo, setShowDoctrineInfo] = useState(false);
  const [expandedPairIndex, setExpandedPairIndex] = useState<number | null>(0);

  const dignities: SpreadElementalDignitiesResult = analyzeElementalDignities(drawnCards, spreadId);
  const isEn = language === 'en';

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Feuer':
        return { text: 'text-[#e69d45]', bg: 'bg-[#e69d45]', border: 'border-[#e69d45]/40', badge: 'bg-[#29140a]' };
      case 'Wasser':
        return { text: 'text-[#58a6ff]', bg: 'bg-[#58a6ff]', border: 'border-[#58a6ff]/40', badge: 'bg-[#0b1a2e]' };
      case 'Luft':
        return { text: 'text-[#79c0ff]', bg: 'bg-[#79c0ff]', border: 'border-[#79c0ff]/40', badge: 'bg-[#0d2238]' };
      case 'Erde':
        return { text: 'text-[#7ee787]', bg: 'bg-[#7ee787]', border: 'border-[#7ee787]/40', badge: 'bg-[#0f2416]' };
      default:
        return { text: 'text-[#c5a059]', bg: 'bg-[#c5a059]', border: 'border-[#c5a059]/40', badge: 'bg-[#241e10]' };
    }
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Feuer':
        return <Flame className="w-3.5 h-3.5 text-[#e69d45]" />;
      case 'Wasser':
        return <Compass className="w-3.5 h-3.5 text-[#58a6ff]" />;
      case 'Luft':
        return <Compass className="w-3.5 h-3.5 text-[#79c0ff]" />;
      case 'Erde':
        return <Shield className="w-3.5 h-3.5 text-[#7ee787]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />;
    }
  };

  return (
    <div className="rounded-xl border border-[#c5a059]/40 bg-[#121214] p-5 space-y-6 shadow-xl text-xs">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#27272a] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#1e1c12] border border-[#c5a059]/40 text-[#c5a059] text-[9px] font-mono uppercase tracking-widest mb-1.5">
            <Sparkles className="w-3 h-3" />
            {isEn ? 'Crowley & Golden Dawn Doctrine' : 'Crowley & Golden Dawn Lehre'}
          </div>
          <h3 className="text-lg font-serif font-bold text-[#f4f4f5]">
            {isEn ? 'Elemental Dignities (Elementarwürden)' : 'Elementarwürden – Der Einfluss der Elemente'}
          </h3>
          <p className="text-[11px] text-[#a1a1aa] leading-snug">
            {isEn
              ? 'Inter-elemental sympathies, enmities, and mutual reinforcement according to The Book of Thoth.'
              : 'Gegenseitige Stärkung, Hemmung und alchemistische Wechselwirkung der gezogenen Karten.'}
          </p>
        </div>

        {/* Info Toggle Button */}
        <button
          type="button"
          onClick={() => setShowDoctrineInfo(!showDoctrineInfo)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#27272a] bg-[#18181b] text-[#c5a059] hover:bg-[#202024] hover:border-[#c5a059]/40 text-[10px] font-mono transition cursor-pointer self-start sm:self-auto"
        >
          <Info className="w-3.5 h-3.5" />
          <span>{showDoctrineInfo ? (isEn ? 'Hide Guide' : 'Regeln verbergen') : (isEn ? 'Elemental Rules' : 'Deutungsregeln')}</span>
        </button>
      </div>

      {/* Doctrine Explanation Banner */}
      {showDoctrineInfo && (
        <div className="p-4 rounded-lg bg-[#0a0a0b] border border-[#c5a059]/30 space-y-3 animate-fade-in text-xs leading-relaxed text-[#d4d4d8]">
          <h4 className="font-serif font-bold text-[#f4f4f5] text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            {isEn ? 'The Law of Elemental Dignities (Corax / Crowley)' : 'Das Gesetz der Elementarwürden nach Aleister Crowley'}
          </h4>
          <p>
            {isEn
              ? 'In the Crowley Thoth Tarot, cards never exist in isolation. Their elemental nature (Fire, Water, Air, Earth) interacts directly with neighboring or paired cards in the spread:'
              : 'Im Crowley Thoth Tarot steht keine Karte isoliert für sich. Die Elemente (Feuer, Wasser, Luft, Erde) treten in direkten Austausch mit benachbarten oder gegenüberliegenden Karten:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded bg-[#18181b] border border-[#27272a] space-y-1">
              <span className="font-mono text-[#e69d45] font-bold block">
                ▲+△ {isEn ? 'Fire + Air: Friendly & Active' : 'Feuer + Luft: Befreundet & Aktiv'}
              </span>
              <span className="text-[#a1a1aa] block">
                {isEn
                  ? 'Air feeds the flame; Fire expands and heats Air. Ideas ignite rapid creative action.'
                  : 'Luft nährt das Feuer; Feuer erwärmt die Luft. Pläne und Inspiration zünden sofort.'}
              </span>
            </div>

            <div className="p-2.5 rounded bg-[#18181b] border border-[#27272a] space-y-1">
              <span className="font-mono text-[#7ee787] font-bold block">
                ▼+▽ {isEn ? 'Water + Earth: Friendly & Passive' : 'Wasser + Erde: Befreundet & Fruchtbar'}
              </span>
              <span className="text-[#a1a1aa] block">
                {isEn
                  ? 'Water moistens soil; Earth holds and gives shape to Water. Stable, fertile manifestation.'
                  : 'Wasser tränkt die Erde; Erde schenkt Form und Halt. Stabile, tiefe Verankerung.'}
              </span>
            </div>

            <div className="p-2.5 rounded bg-[#18181b] border border-[#ff7b72]/30 space-y-1">
              <span className="font-mono text-[#ff7b72] font-bold block">
                ▲⚡▼ {isEn ? 'Fire + Water: Contrary & Hostile' : 'Feuer + Wasser: Feindlich / Widerstreitend'}
              </span>
              <span className="text-[#a1a1aa] block">
                {isEn
                  ? 'Water douses Fire; Fire boils Water into steam. Emotional conflict, burnout, or tension.'
                  : 'Wasser löscht Feuer; Feuer bringt Wasser zum Kochen. Heftige emotionale Reibung.'}
              </span>
            </div>

            <div className="p-2.5 rounded bg-[#18181b] border border-[#ff9b72]/30 space-y-1">
              <span className="font-mono text-[#ff9b72] font-bold block">
                △⚡▽ {isEn ? 'Air + Earth: Contrary & Hostile' : 'Luft + Erde: Feindlich / Hemmend'}
              </span>
              <span className="text-[#a1a1aa] block">
                {isEn
                  ? 'Earth smothers Air; Air dries Earth into dust. Intellectual theories blocked by rigid reality.'
                  : 'Erde erstickt den Wind; Wind wirbelt Staub auf. Theorie prallt auf harte Realität.'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Overall Harmony Score & Elemental Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Harmony Score Card */}
        <div className="p-4 rounded-lg bg-[#0a0a0b] border border-[#27272a] flex flex-col justify-between space-y-3">
          <div>
            <span className="text-[10px] font-mono text-[#71717a] uppercase tracking-wider block">
              {isEn ? 'Elemental Harmony Index' : 'Elementarer Harmonie-Index'}
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-serif font-bold text-[#c5a059]">
                {dignities.harmonyScore}%
              </span>
              <span className="text-[10px] font-mono text-[#a1a1aa]">
                {isEn ? dignities.harmonyLabelEnglish : dignities.harmonyLabelGerman}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#18181b] rounded-full h-2 overflow-hidden border border-[#27272a]">
            <div
              className={`h-full transition-all duration-700 ${
                dignities.harmonyScore >= 70
                  ? 'bg-gradient-to-r from-[#c5a059] to-[#7ee787]'
                  : dignities.harmonyScore >= 45
                  ? 'bg-gradient-to-r from-[#e69d45] to-[#c5a059]'
                  : 'bg-gradient-to-r from-[#ff7b72] to-[#e69d45]'
              }`}
              style={{ width: `${dignities.harmonyScore}%` }}
            />
          </div>

          <div className="text-[11px] text-[#a1a1aa] leading-snug">
            <span className="font-mono text-[#c5a059] block font-bold mb-0.5">
              {isEn ? 'Dominant Element:' : 'Dominierendes Element:'} {getElementName(dignities.distribution.dominantElement)}
            </span>
            {dignities.distribution.lackingElements.length > 0 && (
              <span className="text-[#ff9b72] block text-[10px] font-mono">
                {isEn ? 'Missing:' : 'Fehlt:'} {dignities.distribution.lackingElements.map(e => getElementName(e)).join(', ')}
              </span>
            )}
          </div>
        </div>

        {/* Elemental Proportions */}
        <div className="md:col-span-2 p-4 rounded-lg bg-[#0a0a0b] border border-[#27272a] space-y-3">
          <span className="text-[10px] font-mono text-[#71717a] uppercase tracking-wider block">
            {isEn ? 'Elemental Distribution in this Reading' : 'Elementare Kräfteverteilung in der Legung'}
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['Feuer', 'Wasser', 'Luft', 'Erde'] as const).map(el => {
              const count = dignities.distribution.counts[el];
              const pct = dignities.distribution.percentages[el];
              const colors = getElementColor(el);
              const isDominant = dignities.distribution.dominantElement === el;

              return (
                <div
                  key={el}
                  className={`p-2.5 rounded-lg border ${
                    isDominant ? `${colors.border} ${colors.badge} ring-1 ring-[#c5a059]/30` : 'border-[#27272a] bg-[#121214]'
                  } space-y-1.5`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {getElementIcon(el)}
                      <span className={`text-[11px] font-mono font-bold ${colors.text}`}>
                        {getElementName(el)}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#a1a1aa]">{count}x</span>
                  </div>

                  <div className="w-full bg-[#18181b] rounded-full h-1.5 overflow-hidden">
                    <div className={`h-full ${colors.bg}`} style={{ width: `${pct}%` }} />
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-[#71717a]">
                    <span>{pct}%</span>
                    {isDominant && <span className="text-[#c5a059] font-bold">HERRSCHEND</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Crowley Synthesis Note */}
          <div className="p-2.5 rounded bg-[#18181b] border border-[#27272a] text-[11px] text-[#d4d4d8] leading-relaxed">
            <p className="text-[#f4f4f5]">
              {isEn ? dignities.crowleySynthesisEnglish : dignities.crowleySynthesisGerman}
            </p>
            <p className="text-[#c5a059] font-mono text-[10px] mt-1">
              ✦ {isEn ? dignities.elementalActionAdviceEnglish : dignities.elementalActionAdviceGerman}
            </p>
          </div>
        </div>
      </div>

      {/* Key Pair Interactions in this Spread */}
      {dignities.keyPairs.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c5a059] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {isEn ? 'Crucial Position Pairs & Dignities' : 'Schlüssel-Achsen & Elementar-Verbindungen'}
            </h4>
            <span className="text-[10px] font-mono text-[#71717a]">
              {dignities.keyPairs.length} {isEn ? 'Axes Evaluated' : 'Achsen analysiert'}
            </span>
          </div>

          <div className="space-y-2">
            {dignities.keyPairs.map((pair, idx) => {
              const isExpanded = expandedPairIndex === idx;
              const rel = pair.relation;
              const cardAName = getCardName(pair.cardA.card);
              const cardBName = getCardName(pair.cardB.card);
              const elemAName = getElementName(pair.cardA.card.element);
              const elemBName = getElementName(pair.cardB.card.element);

              return (
                <div
                  key={idx}
                  className={`rounded-lg border transition ${
                    isExpanded ? 'border-[#c5a059]/50 bg-[#161619]' : 'border-[#27272a] bg-[#0a0a0b] hover:border-[#3f3f46]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedPairIndex(isExpanded ? null : idx)}
                    className="w-full p-3 flex items-center justify-between text-left cursor-pointer gap-2"
                  >
                    <div className="flex items-center gap-2.5 flex-wrap min-w-0">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${rel.badgeBg} ${rel.colorClass}`}>
                        {rel.symbol} {isEn ? rel.nameEnglish : rel.nameGerman}
                      </span>
                      <span className="text-xs font-serif font-bold text-[#f4f4f5] truncate">
                        {isEn ? pair.relationshipLabelEnglish : pair.relationshipLabelGerman}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-[#a1a1aa]">
                        <span className="text-[#f4f4f5]">{cardAName}</span>
                        <span className="text-[#71717a]">({elemAName})</span>
                        <span className="text-[#c5a059]">⇄</span>
                        <span className="text-[#f4f4f5]">{cardBName}</span>
                        <span className="text-[#71717a]">({elemBName})</span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#c5a059]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#71717a]" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-3 pt-0 border-t border-[#27272a] mt-1 space-y-2.5 text-xs">
                      {/* Pair Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {/* Card A */}
                        <div className="p-2.5 rounded bg-[#121214] border border-[#27272a] flex items-center gap-3">
                          <div className="w-10 flex-shrink-0">
                            <ThothCardView
                              card={pair.cardA.card}
                              size="sm"
                              isFlipped={true}
                              isReversed={pair.cardA.isReversed}
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[9px] font-mono text-[#c5a059] block truncate">
                              #{pair.cardA.positionIndex + 1}: {pair.cardA.positionTitle}
                            </span>
                            <span className="font-serif font-bold text-[#f4f4f5] text-xs block truncate">
                              {cardAName}
                            </span>
                            <span className="text-[10px] text-[#a1a1aa] font-mono">
                              {elemAName} • {pair.cardA.card.astrology}
                            </span>
                          </div>
                        </div>

                        {/* Card B */}
                        <div className="p-2.5 rounded bg-[#121214] border border-[#27272a] flex items-center gap-3">
                          <div className="w-10 flex-shrink-0">
                            <ThothCardView
                              card={pair.cardB.card}
                              size="sm"
                              isFlipped={true}
                              isReversed={pair.cardB.isReversed}
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[9px] font-mono text-[#c5a059] block truncate">
                              #{pair.cardB.positionIndex + 1}: {pair.cardB.positionTitle}
                            </span>
                            <span className="font-serif font-bold text-[#f4f4f5] text-xs block truncate">
                              {cardBName}
                            </span>
                            <span className="text-[10px] text-[#a1a1aa] font-mono">
                              {elemBName} • {pair.cardB.card.astrology}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Explanation & Crowley Advice */}
                      <div className="p-3 rounded bg-[#0a0a0b] border border-[#27272a] space-y-1.5 leading-relaxed">
                        <p className="text-[#d4d4d8]">
                          {isEn ? rel.descriptionEnglish : rel.descriptionGerman}
                        </p>
                        <div className="pt-1 flex items-start gap-1.5 text-[11px] text-[#c5a059]">
                          <span className="font-bold font-mono">✦ Rat des Thoth:</span>
                          <span>{isEn ? rel.alchemicalAdviceEnglish : rel.alchemicalAdviceGerman}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
