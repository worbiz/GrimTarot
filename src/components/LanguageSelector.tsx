import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../i18n/types';
import { Globe, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, languageMeta, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button in Header */}
      <button
        onClick={() => setIsOpen(true)}
        title={t('selectLanguage', 'Sprache wählen')}
        className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#121214] border border-[#27272a] hover:border-[#c5a059]/60 text-xs text-[#d4d4d8] hover:text-[#f4f4f5] transition cursor-pointer"
      >
        <span className="text-sm leading-none">{languageMeta.flag}</span>
        <span className="text-[10px] font-mono uppercase text-[#c5a059] font-semibold">
          {languageMeta.code}
        </span>
      </button>

      {/* Language Selection Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-sm rounded-xl bg-[#121214] border border-[#c5a059]/40 p-5 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-[#71717a] hover:text-[#f4f4f5] hover:bg-[#27272a] transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#27272a]">
                <div className="w-8 h-8 rounded-lg bg-[#0a0a0b] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#f4f4f5]">
                    {t('selectLanguage', 'Sprache wählen')}
                  </h3>
                  <p className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                    8 Languages Available
                  </p>
                </div>
              </div>

              {/* Language Grid */}
              <div className="grid grid-cols-2 gap-2 max-h-[60vh] overflow-y-auto pr-1">
                {SUPPORTED_LANGUAGES.map((lang) => {
                  const isSelected = lang.code === language;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => handleSelect(lang.code)}
                      className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition cursor-pointer ${
                        isSelected
                          ? 'bg-[#1c1c20] border-[#c5a059] text-[#f4f4f5] shadow-[0_0_12px_rgba(197,160,89,0.15)]'
                          : 'bg-[#0a0a0b] border-[#27272a] text-[#a1a1aa] hover:border-[#3f3f46] hover:text-[#d4d4d8] hover:bg-[#151518]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base leading-none">{lang.flag}</span>
                        <div>
                          <div className={`text-xs font-medium leading-tight ${isSelected ? 'text-[#f4f4f5] font-semibold' : ''}`}>
                            {lang.nativeName}
                          </div>
                          <div className="text-[9px] text-[#71717a] font-mono">
                            {lang.name}
                          </div>
                        </div>
                      </div>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Footer info */}
              <div className="mt-4 pt-3 border-t border-[#27272a] text-center">
                <span className="text-[10px] text-[#71717a] font-mono">
                  Offline • Auto-saved
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
