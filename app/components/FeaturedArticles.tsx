// app/components/FeaturedArticles.tsx
import { useLanguage } from '../hooks/useLanguage';
import { articles } from '../data/data';

export default function FeaturedArticles() {
  const { t, language } = useLanguage();
  const featuredProjects = articles[language].featured;

  return (
    <section id="featured" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('featured.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('featured.subtitle')}
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                index === 1 ? 'lg:scale-105' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 group-hover:from-emerald-500/30 group-hover:to-teal-600/30 transition-all duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80`;
                  }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* ROI Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {project.expectedROI} ROI
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical' as const
                }}>
                  {project.excerpt}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      {t('project.investment')}
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {project.investmentRange}
                    </div>
                  </div>
                  <div className="text-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                      {t('project.timeline')}
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {project.timeline}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {t('featured.invest')}
                  </button>
                  <button className="px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg font-semibold transition-all duration-300 group">
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            {t('featured.moreProjects')}
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {t('featured.portfolioDescription')}
          </p>
          <button className="group relative px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <span className="relative z-10 flex items-center">
              {t('featured.learnMore')}
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