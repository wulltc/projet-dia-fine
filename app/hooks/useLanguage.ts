// app/hooks/useLanguage.ts
import { useEffect } from 'react';
import { useAppStore, languageActions, translate } from '../stores/appStore';

export function useLanguage() {
  // Utiliser le store directement comme hook
  const { language, isHydrated } = useAppStore();

  // Initialiser au premier mount
  useEffect(() => {
    languageActions.initialize();
  }, []);

  return {
    language,
    isHydrated,
    isFrench: language === 'fr',
    isEnglish: language === 'en',
    toggleLanguage: languageActions.toggle,
    t: (key: string) => translate(key, language)
  };
}