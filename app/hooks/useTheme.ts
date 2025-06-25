// app/hooks/useTheme.ts
import { useEffect } from 'react';
import { useAppStore, themeActions } from '../stores/appStore';

export function useTheme() {
  // Utiliser le store directement comme hook
  const { theme, resolvedTheme } = useAppStore();

  // Initialiser au premier mount
  useEffect(() => {
    themeActions.initialize();
  }, []);

  return {
    theme,
    resolvedTheme,
    setTheme: themeActions.setTheme,
    toggleTheme: themeActions.toggle,
    isLight: resolvedTheme === 'light',
    isDark: resolvedTheme === 'dark',
    isSystem: theme === 'system'
  };
}