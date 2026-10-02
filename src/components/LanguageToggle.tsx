import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  showFullLabel?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = '',
  showFullLabel = false,
}) => {
  const { language, toggleLanguage, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-xl border transition-all duration-200 ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs font-mono font-semibold rounded-lg transition-all ${
          language === 'en'
            ? 'bg-cyan-500 text-slate-950 shadow-sm'
            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
        }`}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        EN
      </button>

      <span className="text-slate-600 text-xs select-none">|</span>

      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-2 py-1 text-xs font-mono font-semibold rounded-lg transition-all ${
          language === 'hi'
            ? 'bg-cyan-500 text-slate-950 shadow-sm'
            : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
        }`}
        aria-pressed={language === 'hi'}
        title="हिन्दी में बदलें (Switch to Hindi)"
      >
        HI
      </button>

      {showFullLabel && (
        <span className="ml-2 text-xs font-medium text-slate-400 font-mono">
          {language === 'en' ? 'English' : 'हिन्दी'}
        </span>
      )}
    </div>
  );
};
