// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";
import { useLanguage } from "../hooks/useLanguage";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedArticles from "../components/FeaturedArticles";
import ArticleSlider from "../components/ArticleSlider";
import Footer from "../components/Footer";
import About from "~/components/About";

export const meta: MetaFunction = () => {
  return [
    { title: "Diafine - Investissez dans l'Avenir de l'Afrique de l'Ouest" },
    { 
      name: "description", 
      content: "Plateforme d'investissement leader connectant investisseurs et projets innovants. ROI attractifs, projets verifies, impact positif en Afrique de l'Ouest." 
    },
    {
      name: "keywords",
      content: "investissement Afrique de l'Ouest, fintech Togo, projets innovants, ROI, énergie renouvelable, agriculture intelligente, technologie financière"
    },
    // Open Graph
    {
      property: "og:title",
      content: "Diafine - Investissez dans l'Avenir de l'Afrique de l'Ouest"
    },
    {
      property: "og:description",
      content: "Découvrez des opportunités d'investissement exceptionnelles avec des ROI attractifs. Projets soigneusement sélectionnés et vérifiés."
    },
    // Twitter
    {
      name: "twitter:title",
      content: "Diafine - Investissez dans l'Avenir de l'Afrique de l'Ouest"
    },
    {
      name: "twitter:description",
      content: "Découvrez des opportunités d'investissement exceptionnelles avec des ROI attractifs."
    }
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Projects Section */}
        <FeaturedArticles />
        
        {/* Additional Projects Slider */}
        <ArticleSlider />
        
        {/* About Section */}
        <About />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
