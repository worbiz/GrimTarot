// Grim Thoth Tarot Generated Artworks and Visual Motif Engines
import foolImg from '../assets/images/grim_thoth_fool_1788023353854.jpg';
import magusImg from '../assets/images/grim_thoth_magus_1788023313616.jpg';
import priestessImg from '../assets/images/grim_thoth_priestess_1788023416965.jpg';
import empressImg from '../assets/images/grim_thoth_empress_1788024542362.jpg';
import emperorImg from '../assets/images/grim_thoth_emperor_1788024524957.jpg';
import hierophantImg from '../assets/images/grim_thoth_hierophant_1788024682645.jpg';
import loversImg from '../assets/images/grim_thoth_lovers_1788024666001.jpg';
import chariotImg from '../assets/images/grim_thoth_chariot_1788024695044.jpg';
import adjustmentImg from '../assets/images/grim_thoth_adjustment_1788024707917.jpg';
import hermitImg from '../assets/images/grim_thoth_hermit_1788024653113.jpg';
import fortuneImg from '../assets/images/grim_thoth_fortune_1788024721171.jpg';
import lustImg from '../assets/images/grim_thoth_lust_1788023403490.jpg';
import hangedManImg from '../assets/images/grim_thoth_hanged_man_1788024736881.jpg';
import deathImg from '../assets/images/grim_thoth_death_1788024556900.jpg';
import artImg from '../assets/images/grim_thoth_art_1788023327937.jpg';
import devilImg from '../assets/images/grim_thoth_devil_1788024583863.jpg';
import towerImg from '../assets/images/grim_thoth_tower_1788024570560.jpg';
import starImg from '../assets/images/grim_thoth_star_1788024608769.jpg';
import moonImg from '../assets/images/grim_thoth_moon_1788024597001.jpg';
import sunImg from '../assets/images/grim_thoth_sun_1788024626629.jpg';
import aeonImg from '../assets/images/grim_thoth_aeon_1788024639461.jpg';
import universeImg from '../assets/images/grim_thoth_universe_1788023341342.jpg';

import wandsImg from '../assets/images/grim_thoth_wands_1788024749947.jpg';
import cupsImg from '../assets/images/grim_thoth_cups_1788024764574.jpg';
import swordsImg from '../assets/images/grim_thoth_swords_1788024778620.jpg';
import disksImg from '../assets/images/grim_thoth_disks_1788024791569.jpg';

import cardBackImg from '../assets/images/grim_thoth_back_1788023370734.jpg';

export const CARD_BACK_IMAGE = cardBackImg;

export const BESPOKE_CARD_IMAGES: Record<string, string> = {
  // All 22 Major Arcana (Atu 0 to XXI)
  'atu-0': foolImg,
  'atu-1': magusImg,
  'atu-2': priestessImg,
  'atu-3': empressImg,
  'atu-4': emperorImg,
  'atu-5': hierophantImg,
  'atu-6': loversImg,
  'atu-7': chariotImg,
  'atu-8': adjustmentImg,
  'atu-9': hermitImg,
  'atu-10': fortuneImg,
  'atu-11': lustImg,
  'atu-12': hangedManImg,
  'atu-13': deathImg,
  'atu-14': artImg,
  'atu-15': devilImg,
  'atu-16': towerImg,
  'atu-17': starImg,
  'atu-18': moonImg,
  'atu-19': sunImg,
  'atu-20': aeonImg,
  'atu-21': universeImg,

  // Elemental Suits (Wands, Cups, Swords, Disks)
  'wands-master': wandsImg,
  'cups-master': cupsImg,
  'swords-master': swordsImg,
  'disks-master': disksImg,
};

export const getCardArtwork = (cardId: string, suit?: string): string => {
  if (BESPOKE_CARD_IMAGES[cardId]) {
    return BESPOKE_CARD_IMAGES[cardId];
  }
  if (suit) {
    if (suit === 'wands') return wandsImg;
    if (suit === 'cups') return cupsImg;
    if (suit === 'swords') return swordsImg;
    if (suit === 'disks') return disksImg;
  }
  return cardBackImg;
};
