// app/root.tsx
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Diafine - Plateforme d'Investissement en Afrique de l'Ouest" },
    {
      name: "description",
      content: "Plateforme d'investissement leader connectant investisseurs et projets innovants. ROI attractifs, projets verifies, impact positif en Afrique de l'Ouest.",
    },
    {
      name: "keywords",
      content: "investissement, Afrique de l'Ouest, fintech, projets, ROI, énergie renouvelable, agriculture, technologie",
    },
    {
      name: "theme-color",
      content: "#10b981",
    },
    // Open Graph
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "Diafine - Plateforme d'Investissement en Afrique de l'Ouest",
    },
    {
      property: "og:description",
      content: "Découvrez des opportunités d'investissement exceptionnelles en Afrique de l'Ouest avec Diafine.",
    },
    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Diafine - Plateforme d'Investissement en Afrique de l'Ouest",
    },
  ];
};

export default function App() {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💎</text></svg>" />
        
        {/* Force viewport mobile */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Supprimer les anciens viewport
              var existingViewport = document.querySelector('meta[name="viewport"]');
              if (existingViewport) existingViewport.remove();
              
              // Créer nouveau viewport
              var viewport = document.createElement('meta');
              viewport.name = 'viewport';
              viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
              document.head.appendChild(viewport);
            })();
          `
        }} />
      </head>
      <body className="font-inter antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}