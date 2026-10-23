import { TarotReading } from '../types/tarot';
import { getSavedReadings } from './synthesisEngine';

export interface DailyRitualSettings {
  enabled: boolean;
  reminderTime: string; // "HH:MM" e.g. "08:30"
  browserNotificationsEnabled: boolean;
  soundAlert: boolean;
  lastNotifiedDate: string | null; // "YYYY-MM-DD"
}

export interface DailyRitualStatus {
  hasDrawnToday: boolean;
  todayReading: TarotReading | null;
  streak: number;
  totalDaysWithDraws: number;
}

const SETTINGS_KEY = 'grimtarot_daily_ritual_settings';

const DEFAULT_SETTINGS: DailyRitualSettings = {
  enabled: true,
  reminderTime: '08:30',
  browserNotificationsEnabled: false,
  soundAlert: true,
  lastNotifiedDate: null,
};

/**
 * Loads daily ritual preferences from localStorage
 */
export function getDailyRitualSettings(): DailyRitualSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (e) {
    console.error('Failed to load daily ritual settings:', e);
    return DEFAULT_SETTINGS;
  }
}

/**
 * Saves daily ritual preferences
 */
export function saveDailyRitualSettings(settings: DailyRitualSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save daily ritual settings:', e);
  }
}

/**
 * Determines whether today's Tageskarte has already been drawn and calculates current ritual streak.
 */
export function getDailyRitualStatus(): DailyRitualStatus {
  const readings = getSavedReadings();
  const todayStr = new Date().toDateString();

  // Find if today has a Tageskarte reading
  const todayReading = readings.find(r => {
    const dateStr = new Date(r.timestamp).toDateString();
    return dateStr === todayStr && (r.spreadId === 'tageskarte' || r.spreadName.toLowerCase().includes('tageskarte'));
  }) || null;

  const hasDrawnToday = !!todayReading;

  // Calculate streak of consecutive days
  // Collect all unique day timestamps at midnight UTC/local
  const uniqueDates = new Set<string>();
  readings.forEach(r => {
    const d = new Date(r.timestamp);
    const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    uniqueDates.add(dateKey);
  });

  const totalDaysWithDraws = uniqueDates.size;

  let streak = 0;
  const now = new Date();
  let checkDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // If haven't drawn today, start checking from yesterday to see if streak is still alive
  if (!hasDrawnToday) {
    checkDate.setDate(checkDate.getDate() - 1);
  }

  while (true) {
    const key = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, '0')}-${String(checkDate.getDate()).padStart(2, '0')}`;
    if (uniqueDates.has(key)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return {
    hasDrawnToday,
    todayReading,
    streak,
    totalDaysWithDraws,
  };
}

/**
 * Checks if browser notification API is accessible
 */
export function canUseBrowserNotifications(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

/**
 * Gets the current notification permission safely
 */
export function getNotificationPermissionStatus(): 'default' | 'granted' | 'denied' | 'unsupported' {
  if (!canUseBrowserNotifications()) {
    return 'unsupported';
  }
  try {
    return Notification.permission as 'default' | 'granted' | 'denied';
  } catch {
    return 'unsupported';
  }
}

/**
 * Requests browser notification permission
 */
export async function requestBrowserNotificationPermission(): Promise<'granted' | 'denied' | 'unsupported'> {
  if (!canUseBrowserNotifications()) {
    return 'unsupported';
  }
  try {
    const result = await Notification.requestPermission();
    return result as 'granted' | 'denied';
  } catch (err) {
    console.warn('Could not request Notification permission (likely iframe sandbox restrictions):', err);
    return 'unsupported';
  }
}

/**
 * Plays a mystical occult chime / singing bowl sound using Web Audio API
 */
export function playOccultChime(): void {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const now = ctx.currentTime;
    
    // Create fundamental frequency (Tibetan bell 432 Hz + overtone 864 Hz + 1296 Hz)
    const tones = [
      { freq: 432, gain: 0.25, decay: 2.5 },
      { freq: 864, gain: 0.12, decay: 2.0 },
      { freq: 1296, gain: 0.06, decay: 1.4 },
    ];

    tones.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gainNode.gain.setValueAtTime(0.001, now);
      gainNode.gain.exponentialRampToValueAtTime(gain, now + 0.04);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay);
    });
  } catch (e) {
    // Web Audio blocked or not permitted, safe ignore
    console.warn('Audio chime skipped:', e);
  }
}

/**
 * Sends a native browser notification if granted
 */
export function dispatchLocalNotification(title: string, body: string): boolean {
  if (canUseBrowserNotifications() && Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body,
        badge: '/icons/icon-192.png',
        tag: 'grimtarot-daily-ritual',
      });
      return true;
    } catch (e) {
      console.warn('Browser notification failed to dispatch:', e);
    }
  }
  return false;
}

/**
 * Checks whether it is time to remind the user today
 */
export function checkDailyReminderTrigger(): boolean {
  const settings = getDailyRitualSettings();
  if (!settings.enabled) return false;

  const status = getDailyRitualStatus();
  if (status.hasDrawnToday) return false;

  const now = new Date();
  const todayKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  // If already notified today, do not spam
  if (settings.lastNotifiedDate === todayKey) return false;

  // Check if current hour:minute >= scheduled time
  const [remHour, remMin] = settings.reminderTime.split(':').map(Number);
  const scheduledDate = new Date();
  scheduledDate.setHours(remHour || 8, remMin || 30, 0, 0);

  if (now >= scheduledDate) {
    // Mark as notified for today
    saveDailyRitualSettings({
      ...settings,
      lastNotifiedDate: todayKey,
    });

    if (settings.soundAlert) {
      playOccultChime();
    }

    if (settings.browserNotificationsEnabled) {
      dispatchLocalNotification(
        'GrimTarot • Tägliches Ritual',
        'Der Schleier des Tages wartet auf dich. Ziehe deine heutige Thoth-Tageskarte.'
      );
    }
    return true;
  }

  return false;
}
