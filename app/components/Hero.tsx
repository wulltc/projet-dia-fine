// app/components/Hero.tsx
import { useLanguage } from '../hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background elements */}
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20"
          style={{ animation: 'blob 7s infinite' }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-72 h-72 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20"
          style={{ animation: 'blob 7s infinite 2s' }}
        ></div>
        <div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20"
          style={{ animation: 'blob 7s infinite 4s' }}
        ></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e\")",
            WebkitMask: 'linear-gradient(0deg,white,rgba(255,255,255,0.6))',
            mask: 'linear-gradient(0deg,white,rgba(255,255,255,0.6))'
          }}
        ></div>
        <div 
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e\")",
            WebkitMask: 'linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))',
            mask: 'linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium mb-8 opacity-0"
            style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            {t('hero.badge')}
          </div>

          {/* Main Title */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 opacity-0"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto opacity-0"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.4s forwards' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p 
            className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed opacity-0"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.6s forwards' }}
          >
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.8s forwards' }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            
            <button className="group flex items-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              {t('hero.watchDemo')}
            </button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-0"
            style={{ animation: 'fadeInUp 0.6s ease-out 1s forwards' }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                500K+
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {t('hero.stats.investors')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                50M€
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {t('hero.stats.funds')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                120+
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {t('hero.stats.projects')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                32%
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {t('hero.stats.roi')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 dark:bg-slate-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}