// app/components/LanguageToggle.tsx
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label={`Switch to ${language === 'fr' ? 'English' : 'French'}`}
    >
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {language === 'fr' ? '🇫🇷' : '🇺🇸'}
        </span>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {language === 'fr' ? 'FR' : 'EN'}
        </span>
      </div>
      <svg
        className="w-4 h-4 text-slate-500 dark:text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    </button>
  );
}