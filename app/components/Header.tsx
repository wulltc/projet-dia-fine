// app/components/Header.tsx
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'projects', href: '#featured' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Diafine
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {t('header.tagline')}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200 relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-emerald-600 dark:bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {t('nav.invest')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              aria-label={t('header.menuToggle')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md font-medium transition-all duration-200 w-full text-left"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <div className="pt-2">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg">
                  {t('nav.invest')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}