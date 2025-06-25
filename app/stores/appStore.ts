// app/stores/appStore.ts
import { createStore } from 'aio-store/react';
import { translations } from '../data/translations';

type Language = 'fr' | 'en';
type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface AppState {
  language: Language;
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  isHydrated: boolean;
}

// Créer le store - il EST le hook
export const useAppStore = createStore<AppState>({
  language: 'fr',
  theme: 'system',
  resolvedTheme: 'light',
  isHydrated: false,
});

// Actions pour la langue
export const languageActions = {
  initialize: () => {
    if (typeof window === 'undefined') return;
    
    useAppStore.set(store => {
      store.isHydrated = true;
    });
    
    const savedLanguage = localStorage.getItem('diafine-language') as Language;
    
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      useAppStore.set(store => {
        store.language = savedLanguage;
      });
    } else {
      const browserLang = navigator.language.toLowerCase();
      const systemLang = browserLang.startsWith('fr') ? 'fr' : 'en';
      useAppStore.set(store => {
        store.language = systemLang;
      });
      localStorage.setItem('diafine-language', systemLang);
    }
  },

  toggle: () => {
    const currentState = useAppStore.get();
    if (!currentState.isHydrated) return;
    
    const newLanguage: Language = currentState.language === 'fr' ? 'en' : 'fr';
    useAppStore.set(store => {
      store.language = newLanguage;
    });
    localStorage.setItem('diafine-language', newLanguage);
  }
};

// Actions pour le thème
export const themeActions = {
  initialize: () => {
    if (typeof window === 'undefined') return;
    
    const savedTheme = localStorage.getItem('diafine-theme') as Theme;
    const initialTheme: Theme = savedTheme && ['light', 'dark', 'system'].includes(savedTheme) 
      ? savedTheme 
      : 'system';
    
    const resolved = themeActions.resolveTheme(initialTheme);
    useAppStore.set(store => {
      store.theme = initialTheme;
      store.resolvedTheme = resolved;
    });
    themeActions.applyTheme(resolved);
  },

  resolveTheme: (theme: Theme): ResolvedTheme => {
    if (theme === 'system') {
      return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    return theme;
  },

  applyTheme: (resolvedTheme: ResolvedTheme) => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', 
        resolvedTheme === 'dark' ? '#0f172a' : '#ffffff'
      );
    }
  },

  setTheme: (theme: Theme) => {
    const resolved = themeActions.resolveTheme(theme);
    useAppStore.set(store => {
      store.theme = theme;
      store.resolvedTheme = resolved;
    });
    themeActions.applyTheme(resolved);
    localStorage.setItem('diafine-theme', theme);
  },

  toggle: () => {
    const currentState = useAppStore.get();
    const themeOrder: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themeOrder.indexOf(currentState.theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    const newTheme = themeOrder[nextIndex];
    
    themeActions.setTheme(newTheme);
  }
};

// Fonction de traduction
export const translate = (key: string, language?: Language): string => {
  const currentLanguage = language || useAppStore.get().language;
  const keys = key.split('.');
  let value: any = translations[currentLanguage];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key;
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : key;
};