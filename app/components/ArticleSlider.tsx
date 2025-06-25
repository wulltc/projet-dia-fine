// app/components/ArticleSlider.tsx
import { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { articles } from '../data/data';

export default function ArticleSlider() {
  const { t, language } = useLanguage();
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const additionalProjects = articles[language].additional;

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 320; // Width of one card + gap
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth,
            scrollPosition + scrollAmount
          );
      
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  };

  return (
    <section id="more-projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('moreProjects.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              {t('moreProjects.subtitle')}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => scroll('left')}
              disabled={scrollPosition <= 0}
              className="p-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {additionalProjects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-80 bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 group-hover:from-emerald-500/20 group-hover:to-teal-600/20 transition-all duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80`;
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* ROI Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {project.expectedROI}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical' as const
                  }}>
                    {project.excerpt}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-600 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        {t('project.investment')}
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">
                        {project.investmentRange}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-600 rounded-lg">
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        {t('project.timeline')}
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">
                        {project.timeline}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                      {t('featured.invest')}
                    </button>
                    <button className="px-3 py-2 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-500 rounded-lg font-semibold text-sm transition-all duration-300 group/btn">
                      <svg
                        className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-teal-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Mobile scroll indicators */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(additionalProjects.length / 2) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-full text-slate-700 dark:text-slate-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-2"></span>
            {language === 'fr' ? 'Tous les projets sont audités et vérifiés' : 'All projects are audited and verified'}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'fr' ? 'Prêt à diversifier votre portefeuille ?' : 'Ready to diversify your portfolio?'}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Rejoignez des milliers d\'investisseurs qui font confiance à Diafine pour leurs investissements en Afrique de l\'Ouest.'
              : 'Join thousands of investors who trust Diafine for their investments in West Africa.'
            }
          </p>
          <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <span className="flex items-center">
              {language === 'fr' ? 'Commencer maintenant' : 'Get started now'}
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}