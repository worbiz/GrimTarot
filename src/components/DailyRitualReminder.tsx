import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sun,
  Bell,
  BellRing,
  BellOff,
  Flame,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
  Volume2,
  VolumeX,
  X,
  Eye,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import {
  getDailyRitualStatus,
  getDailyRitualSettings,
  saveDailyRitualSettings,
  DailyRitualSettings,
  DailyRitualStatus,
  getNotificationPermissionStatus,
  requestBrowserNotificationPermission,
  dispatchLocalNotification,
  playOccultChime,
  checkDailyReminderTrigger,
} from '../utils/dailyRitual';
import { ThothCardView } from './ThothCardView';
import { getPositionInterpretationDetail } from '../data/interpretations';
import { useLanguage } from '../i18n/LanguageContext';

interface DailyRitualReminderProps {
  onStartDailyDraw: () => void;
  onGoToJournal?: () => void;
  compact?: boolean;
}

export const DailyRitualReminder: React.FC<DailyRitualReminderProps> = ({
  onStartDailyDraw,
  onGoToJournal,
}) => {
  const [status, setStatus] = useState<DailyRitualStatus>(getDailyRitualStatus());
  const [settings, setSettings] = useState<DailyRitualSettings>(getDailyRitualSettings());
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState(getNotificationPermissionStatus());
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showCardModal, setShowCardModal] = useState(false);
  const { t, language, getCardName, getCardThothTitle } = useLanguage();

  // Refresh status on mount and when window regains focus
  useEffect(() => {
    const refresh = () => {
      setStatus(getDailyRitualStatus());
      setSettings(getDailyRitualSettings());
      setPermissionStatus(getNotificationPermissionStatus());
    };

    refresh();
    window.addEventListener('focus', refresh);
    
    // Check scheduled reminder on mount
    const fired = checkDailyReminderTrigger();
    if (fired) {
      setToastMessage(t('dailyCardNotDrawn', 'Zeit für dein tägliches Ritual: Ziehe deine heutige Thoth-Tageskarte.'));
    }

    // Interval to check every minute
    const interval = setInterval(() => {
      if (checkDailyReminderTrigger()) {
        setToastMessage(t('dailyCardNotDrawn', 'Zeit für dein tägliches Ritual: Ziehe deine heutige Thoth-Tageskarte.'));
      }
    }, 60000);

    return () => {
      window.removeEventListener('focus', refresh);
      clearInterval(interval);
    };
  }, []);

  const handleToggleEnabled = (val: boolean) => {
    const updated = { ...settings, enabled: val };
    setSettings(updated);
    saveDailyRitualSettings(updated);
  };

  const handleTimeChange = (time: string) => {
    const updated = { ...settings, reminderTime: time };
    setSettings(updated);
    saveDailyRitualSettings(updated);
  };

  const handleToggleSound = (val: boolean) => {
    const updated = { ...settings, soundAlert: val };
    setSettings(updated);
    saveDailyRitualSettings(updated);
    if (val) playOccultChime();
  };

  const handleRequestPermission = async () => {
    const res = await requestBrowserNotificationPermission();
    setPermissionStatus(res);
    if (res === 'granted') {
      const updated = { ...settings, browserNotificationsEnabled: true };
      setSettings(updated);
      saveDailyRitualSettings(updated);
      dispatchLocalNotification(
        'GrimTarot',
        t('notificationsActive', 'Benachrichtigungen sind aktiv')
      );
      setToastMessage(t('notificationsActive', 'Browser-Benachrichtigungen erfolgreich autorisiert!'));
    } else if (res === 'denied') {
      setToastMessage('Browser notifications blocked');
    }
  };

  const handleTestNotification = () => {
    if (settings.soundAlert) {
      playOccultChime();
    }
    const dispatched = dispatchLocalNotification(
      'GrimTarot',
      t('dailyCardNotDrawn', 'Der Schleier ist bereit: Ziehe deine heutige Thoth-Tageskarte.')
    );

    if (dispatched) {
      setToastMessage('Notification test dispatched');
    } else {
      setToastMessage(t('dailyRitualTitle', 'GrimTarot Ritual'));
    }
  };

  const todayCard = status.todayReading?.drawnCards[0]?.card;
  const todayPositionInfo = todayCard
    ? getPositionInterpretationDetail(todayCard, 'tageskarte', 0)
    : null;

  const localeCode = language === 'en' ? 'en-US' : language === 'de' ? 'de-DE' : language;
  const todayDateString = new Date().toLocaleDateString(localeCode, {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  });

  return (
    <div className="w-full">
      {/* Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md p-3.5 rounded-lg bg-[#18181b] border border-[#c5a059] shadow-2xl flex items-center justify-between gap-3 text-xs text-[#f4f4f5]"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="p-1 text-[#71717a] hover:text-[#f4f4f5] transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Banner / Card */}
      {!status.hasDrawnToday ? (
        /* Uncompleted Ritual State */
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-xl border border-[#c5a059]/40 bg-gradient-to-br from-[#18181c] via-[#121214] to-[#0d0d0f] p-4 sm:p-5 shadow-xl shadow-[#000000]/40 group"
        >
          {/* Subtle occult background pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,#c5a059_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] text-[10px] font-mono uppercase tracking-wider">
                  <Sun className="w-3 h-3 text-[#c5a059] animate-pulse" /> {t('dailyRitualTitle', 'Tägliches Ritual')}
                </span>
                {status.streak > 0 && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1e1e24] border border-[#3f3f46] text-[#e4e4e7] text-[10px] font-mono">
                    <Flame className="w-3 h-3 text-amber-500 fill-amber-500" /> {status.streak}{' '}
                    {t('daysCount', 'Tage')} {t('activeStreak', 'Serie')}
                  </span>
                )}
                <span className="text-[10px] text-[#71717a] font-mono">
                  {todayDateString}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-[#f4f4f5] tracking-wide">
                {t('dailyCardNotDrawn', 'Tagesimpuls noch unenthüllt')}
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-lg">
                {t('spreadSelectionSubtitle', 'Ziehe deine Crowley-Tageskarte, um den kosmischen Fokus des Tages zu entschlüsseln.')}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <button
                onClick={() => setShowSettingsModal(true)}
                title={t('reminderSettingsTitle', 'Erinnerung & Ritual konfigurieren')}
                className="p-2.5 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-[#a1a1aa] hover:text-[#c5a059] hover:border-[#c5a059]/50 transition cursor-pointer"
              >
                {settings.enabled ? (
                  <Bell className="w-4 h-4 text-[#c5a059]" />
                ) : (
                  <BellOff className="w-4 h-4 text-[#71717a]" />
                )}
              </button>

              <button
                onClick={onStartDailyDraw}
                className="px-4 py-2.5 rounded-lg bg-[#c5a059] text-[#0a0a0b] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#d8b46e] transition shadow-md shadow-[#c5a059]/10 flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>{t('performRitualBtn', 'Tageskarte ziehen')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Completed Ritual State */
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-xl border border-[#c5a059]/30 bg-[#121214] p-4 sm:p-5 shadow-lg"
        >
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {t('dailyRitualDone', 'Ritual vollendet')}
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1e1e24] border border-[#3f3f46] text-[#e4e4e7] text-[10px] font-mono">
                  <Flame className="w-3 h-3 text-amber-500 fill-amber-500" /> {status.streak}{' '}
                  {t('daysCount', 'Tage')} {t('activeStreak', 'Serie')}
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-0.5">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#f4f4f5]">
                  {t('dailyCardDrawn', 'Dein heutiger Begleiter')}:
                </h3>
                <span className="text-sm font-serif text-[#c5a059] font-medium">
                  {todayCard && getCardName(todayCard)}
                  {todayCard && getCardThothTitle(todayCard) && ` (${getCardThothTitle(todayCard)})`}
                </span>
              </div>

              {todayPositionInfo && (
                <p className="text-xs text-[#a1a1aa] italic line-clamp-1 border-l-2 border-[#c5a059]/40 pl-2 mt-1">
                  „{todayPositionInfo.actionAdvice}“
                </p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <button
                onClick={() => setShowSettingsModal(true)}
                title={t('reminderSettingsTitle', 'Erinnerung & Ritual konfigurieren')}
                className="p-2.5 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-[#a1a1aa] hover:text-[#c5a059] transition cursor-pointer"
              >
                <Bell className="w-4 h-4 text-[#c5a059]" />
              </button>

              {todayCard && (
                <button
                  onClick={() => setShowCardModal(true)}
                  className="px-3 py-2 rounded-lg bg-[#1a1a1c] border border-[#c5a059]/50 text-[#f4f4f5] text-xs hover:bg-[#242428] transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{t('viewTodayCardBtn', 'Karte ansehen')}</span>
                </button>
              )}

              {onGoToJournal && (
                <button
                  onClick={onGoToJournal}
                  className="px-3 py-2 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-[#a1a1aa] hover:text-[#f4f4f5] text-xs transition cursor-pointer"
                >
                  {t('navJournal', 'Tagebuch')}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettingsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0b]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-md bg-[#121214] border border-[#c5a059]/40 rounded-xl p-5 shadow-2xl space-y-5 text-xs text-[#d4d4d8] max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#27272a] pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-[#0a0a0b] border border-[#c5a059]/40 text-[#c5a059]">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#f4f4f5]">
                      {t('reminderSettingsTitle', 'Tägliches Ritual & Erinnerung')}
                    </h4>
                    <p className="text-[10px] text-[#71717a]">
                      Offline & Diskret
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="p-1 text-[#71717a] hover:text-[#f4f4f5] transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Status summary */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-lg bg-[#0a0a0b] border border-[#27272a]">
                <div>
                  <span className="text-[10px] text-[#71717a] block uppercase font-mono">Status</span>
                  <span className="font-bold text-xs flex items-center gap-1 mt-0.5">
                    {status.hasDrawnToday ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {t('dailyRitualDone', 'Vollendet')}
                      </span>
                    ) : (
                      <span className="text-amber-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {t('dailyCardNotDrawn', 'Noch offen')}
                      </span>
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#71717a] block uppercase font-mono">{t('activeStreak', 'Aktuelle Serie')}</span>
                  <span className="font-bold text-xs text-[#f4f4f5] flex items-center gap-1 mt-0.5">
                    <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {status.streak} {t('daysCount', 'Tage')}
                  </span>
                </div>
              </div>

              {/* Toggle Ritual Reminder */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#18181c] border border-[#27272a]">
                  <div>
                    <span className="font-bold text-[#f4f4f5] block">{t('reminderSettingsTitle', 'Tägliche Erinnerung')}</span>
                    <span className="text-[11px] text-[#a1a1aa] block mt-0.5">
                      {t('dailyRitualTitle', 'Tageskarten-Ritual')}
                    </span>
                  </div>
                  <button
                    onClick={() => handleToggleEnabled(!settings.enabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                      settings.enabled ? 'bg-[#c5a059]' : 'bg-[#27272a]'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-[#0a0a0b] transition-transform ${
                        settings.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Reminder Time Picker */}
                <div className="p-3 rounded-lg bg-[#18181c] border border-[#27272a] space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-[#f4f4f5] flex items-center gap-1.5 text-xs">
                      <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                      {t('reminderTimeLabel', 'Uhrzeit der Erinnerung')}
                    </label>
                    <span className="text-[10px] font-mono text-[#c5a059]">{settings.reminderTime}</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 pt-1">
                    {['07:00', '08:30', '12:00', '20:30'].map(tim => (
                      <button
                        key={tim}
                        onClick={() => handleTimeChange(tim)}
                        className={`py-1.5 rounded text-[11px] font-mono border transition cursor-pointer ${
                          settings.reminderTime === tim
                            ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#f4f4f5]'
                            : 'bg-[#0a0a0b] border-[#27272a] text-[#71717a] hover:border-[#3f3f46]'
                        }`}
                      >
                        {tim}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <span className="text-[10px] text-[#71717a]">{t('reminderTimeLabel', 'Uhrzeit')}:</span>
                    <input
                      type="time"
                      value={settings.reminderTime}
                      onChange={e => handleTimeChange(e.target.value)}
                      className="px-2 py-1 rounded bg-[#0a0a0b] border border-[#27272a] text-[#f4f4f5] text-xs focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                {/* Sound alert */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#18181c] border border-[#27272a]">
                  <div className="flex items-center gap-2">
                    {settings.soundAlert ? (
                      <Volume2 className="w-4 h-4 text-[#c5a059]" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-[#71717a]" />
                    )}
                    <div>
                      <span className="font-bold text-[#f4f4f5] block">{t('soundLabel', 'Mystischer Glockenklang (432 Hz)')}</span>
                      <span className="text-[11px] text-[#a1a1aa] block mt-0.5">
                        432 Hz Chime
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => playOccultChime()}
                      className="px-2 py-1 text-[10px] rounded bg-[#0a0a0b] border border-[#27272a] text-[#c5a059] hover:border-[#c5a059]/50 transition cursor-pointer"
                    >
                      {t('testChimeBtn', 'Test')}
                    </button>
                    <button
                      onClick={() => handleToggleSound(!settings.soundAlert)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        settings.soundAlert ? 'bg-[#c5a059]' : 'bg-[#27272a]'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-[#0a0a0b] transition-transform ${
                          settings.soundAlert ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Browser Notification Permissions */}
                <div className="p-3 rounded-lg bg-[#18181c] border border-[#27272a] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#f4f4f5]">{t('enableNotifications', 'Browser-Benachrichtigungen')}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${
                        permissionStatus === 'granted'
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-400'
                          : permissionStatus === 'denied'
                          ? 'bg-red-950/40 border-red-500/40 text-red-400'
                          : 'bg-[#0a0a0b] border-[#27272a] text-[#71717a]'
                      }`}
                    >
                      {permissionStatus === 'granted'
                        ? 'Active'
                        : permissionStatus === 'denied'
                        ? 'Blocked'
                        : 'Offline'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    {permissionStatus !== 'granted' && permissionStatus !== 'unsupported' && (
                      <button
                        onClick={handleRequestPermission}
                        className="px-3 py-1.5 rounded bg-[#c5a059] text-[#0a0a0b] font-bold text-[11px] uppercase tracking-wider hover:bg-[#d8b46e] transition cursor-pointer"
                      >
                        {t('enableNotifications', 'Erlaubnis erteilen')}
                      </button>
                    )}

                    <button
                      onClick={handleTestNotification}
                      className="px-3 py-1.5 rounded bg-[#0a0a0b] border border-[#c5a059]/40 text-[#c5a059] text-[11px] hover:bg-[#1a1a1c] transition cursor-pointer"
                    >
                      {t('testChimeBtn', 'Signal testen')}
                    </button>
                  </div>
                </div>

                {/* Privacy Guarantee */}
                <div className="p-3 rounded bg-[#0a0a0b] border border-[#27272a] flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <p className="text-[10px] text-[#71717a] leading-relaxed">
                    <strong className="text-[#a1a1aa]">100% Offline:</strong> Local storage only.
                  </p>
                </div>
              </div>

              {/* Close button */}
              <div className="pt-2">
                <button
                  onClick={() => setShowSettingsModal(false)}
                  className="w-full py-2.5 rounded bg-[#1a1a1c] border border-[#27272a] text-[#f4f4f5] text-xs font-bold hover:bg-[#242428] transition cursor-pointer"
                >
                  {t('closeModal', 'Fertig')}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card Details Modal when viewing drawn card */}
      {showCardModal && todayCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0b]/85 backdrop-blur-sm">
          <div className="relative w-full max-w-sm max-h-[92vh] overflow-y-auto rounded-xl bg-[#121214] border border-[#c5a059]/50 p-4 shadow-2xl">
            <button
              onClick={() => setShowCardModal(false)}
              className="absolute top-3 right-3 p-1 rounded-full bg-[#0a0a0b] border border-[#27272a] text-[#71717a] hover:text-[#f4f4f5] z-30 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center pt-2 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c5a059]">
                {t('dailyRitualButton', 'Heutige Tageskarte')}
              </span>
              <h3 className="font-serif font-bold text-lg text-[#f4f4f5]">
                {getCardName(todayCard)}
              </h3>
            </div>

            <div className="flex justify-center pb-4">
              <ThothCardView
                card={todayCard}
                size="lg"
                showDetailsOnTap={true}
                positionTitle={t('dailyRitualButton', 'Tagesimpuls')}
              />
            </div>

            {todayPositionInfo && (
              <div className="space-y-3 p-3.5 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-xs">
                <div>
                  <span className="font-bold text-[#c5a059] block uppercase text-[10px] tracking-wider">
                    {t('generalMeaning', 'Bedeutung')}
                  </span>
                  <p className="text-[#f4f4f5] leading-relaxed mt-0.5">{todayPositionInfo.interpretation}</p>
                </div>
                <div>
                  <span className="font-bold text-[#c5a059] block uppercase text-[10px] tracking-wider">
                    {t('cosmicAdvice', 'Ratschlag')}
                  </span>
                  <p className="text-[#a1a1aa] leading-relaxed mt-0.5">{todayPositionInfo.actionAdvice}</p>
                </div>
              </div>
            )}

            <div className="pt-4">
              <button
                onClick={() => setShowCardModal(false)}
                className="w-full py-2.5 rounded bg-[#c5a059] text-[#0a0a0b] font-bold text-xs uppercase tracking-wider hover:bg-[#d8b46e] transition cursor-pointer"
              >
                {t('closeModal', 'Schließen')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
