"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones completas
const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.home': 'Inicio',
    'nav.explore': 'Explorar',
    'nav.map': 'Mapa Mundial',
    'nav.games': 'Juegos',
    'nav.passport': 'Pasaporte',
    'hero.title': 'Descubre el Mundo',
    'hero.subtitle': 'Explora culturas, historia y paisajes de 195 países con la plataforma educativa más inmersiva del planeta.',
    'hero.cta': 'Explorar el Globo',
    'hero.secondary': 'Ver Juegos Educativos',
    'globe.title': 'Globo Interactivo 3D',
    'globe.instruction': 'Arrastra para rotar • Rueda para zoom • Clic en un pin para descubrir',
    'globe.loading': 'Cargando experiencia 3D premium...',
    'common.explore': 'Explorar País',
    'common.close': 'Cerrar',
    'common.play': 'Jugar',
    'common.back': 'Volver',
    'common.loading': 'Cargando...',
    'common.search': 'Buscar países...',
    'common.all': 'Todos',
    'stats.countries': 'Países',
    'stats.cultures': 'Culturas',
    'stats.games': 'Juegos',
    'stats.users': 'Exploradores',
  },
  en: {
    'nav.home': 'Home',
    'nav.explore': 'Explore',
    'nav.map': 'World Map',
    'nav.games': 'Games',
    'nav.passport': 'Passport',
    'hero.title': 'Discover the World',
    'hero.subtitle': 'Explore cultures, history and landscapes of 195 countries with the most immersive educational platform on the planet.',
    'hero.cta': 'Explore the Globe',
    'hero.secondary': 'Play Educational Games',
    'globe.title': 'Interactive 3D Globe',
    'globe.instruction': 'Drag to rotate • Scroll to zoom • Click a pin to discover',
    'globe.loading': 'Loading premium 3D experience...',
    'common.explore': 'Explore Country',
    'common.close': 'Close',
    'common.play': 'Play',
    'common.back': 'Back',
    'common.loading': 'Loading...',
    'common.search': 'Search countries...',
    'common.all': 'All',
    'stats.countries': 'Countries',
    'stats.cultures': 'Cultures',
    'stats.games': 'Games',
    'stats.users': 'Explorers',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('mundoculturas-language') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mundoculturas-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
