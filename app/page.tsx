"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Users, Globe2, Trophy, Star } from 'lucide-react';
import Globe3D, { CountryPin } from '@/components/Globe3D';
import { countries, getCountryBySlug } from '@/lib/countries';
import { useLanguage } from '@/components/LanguageProvider';
import { toast } from 'sonner';

export default function Home() {
  const { t, language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<CountryPin | null>(null);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleCountrySelect = (pin: CountryPin) => {
    setSelectedCountry(pin);
    setShowCountryModal(true);
    const countryData = getCountryBySlug(pin.slug);
    toast.success(`¡Descubriendo ${pin.name}!`, {
      description: `Capital: ${pin.capital} • ${countryData?.population}`,
      action: {
        label: "Ver perfil completo",
        onClick: () => window.location.href = `/paises/${pin.slug}`,
      },
    });
  };

  const closeModal = () => {
    setShowCountryModal(false);
    setTimeout(() => setSelectedCountry(null), 300);
  };

  const featuredCountries = countries.slice(0, 6);

  const stats = [
    { icon: Globe2, value: "195", label: t('stats.countries') },
    { icon: Users, value: "7.8B", label: t('stats.cultures') },
    { icon: Trophy, value: "12+", label: t('stats.games') },
    { icon: Star, value: "250K+", label: t('stats.users') },
  ];

  return (
    <div className="min-h-screen bg-[#05070f] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#1a2338_0.8px,transparent_1px)] bg-[length:5px_5px] opacity-60" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 text-sm tracking-[3px]">
            PLATAFORMA EDUCATIVA PREMIUM • 2026
          </div>
          
          <h1 className="text-7xl md:text-[92px] font-semibold tracking-tighter leading-[0.9] mb-6">
            {t('hero.title')}<br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              EN TUS MANOS
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/70 mb-10 tracking-tight">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#globe" 
              className="group inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 active:scale-[0.985] transition-all"
            >
              {t('hero.cta')}
              <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </Link>
            <Link 
              href="/juegos" 
              className="group inline-flex items-center justify-center gap-3 border border-white/30 hover:bg-white/5 px-10 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              <Play className="w-5 h-5" /> {t('hero.secondary')}
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs tracking-[2px] text-white/40">
            <div>INSPIRED BY NATIONAL GEOGRAPHIC</div>
            <div>EDUCATIONAL QUALITY OF DUOLINGO</div>
            <div>VISUAL EXCELLENCE OF GOOGLE EARTH</div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] tracking-[3px] text-white/40">
          SCROLL TO BEGIN YOUR JOURNEY
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-y border-white/10 bg-black/20 py-6">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <stat.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <div className="text-3xl font-semibold tracking-tighter">{stat.value}</div>
                <div className="text-sm text-white/50 -mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3D GLOBE SECTION */}
      <section id="globe" className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="text-indigo-400 text-sm tracking-[4px] font-medium mb-3">EXPERIENCIA INMERSIVA</div>
          <h2 className="text-6xl tracking-tighter font-semibold">{t('globe.title')}</h2>
          <p className="mt-3 text-xl text-white/60 max-w-md">{t('globe.instruction')}</p>
        </div>

        <div className="relative h-[620px] md:h-[720px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Globe3D onCountrySelect={handleCountrySelect} />
        </div>

        <p className="text-center text-white/40 text-sm mt-6 tracking-widest">12 PAÍSES DESTACADOS • HAZ CLIC EN LOS PINES PARA DESCUBRIR</p>
      </section>

      {/* FEATURED COUNTRIES */}
      <section className="bg-[#0a0f1e] py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="text-emerald-400 text-sm tracking-[3px]">DESTINOS IMPRESCINDIBLES</div>
              <h3 className="text-5xl tracking-tighter font-semibold mt-1">Países Destacados</h3>
            </div>
            <Link href="/explorar" className="hidden md:flex items-center gap-2 text-sm hover:text-white/70 transition group">
              VER TODOS LOS PAÍSES <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {featuredCountries.map((country) => (
              <Link 
                key={country.slug} 
                href={`/paises/${country.slug}`}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3] border border-white/10 bg-zinc-950 hover:border-white/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 z-10" />
                
                <img 
                  src={country.gallery[0]} 
                  alt={country.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-3xl">{country.flag}</span>
                    <span className="font-semibold text-xl tracking-tight">{country.name}</span>
                  </div>
                  <div className="text-sm text-white/70">{country.capital}</div>
                </div>

                <div className="absolute top-4 right-4 z-20 px-3 py-1 text-[10px] rounded-full bg-black/60 backdrop-blur border border-white/20 tracking-widest">
                  {country.continent}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-teal-400 tracking-[3px] text-sm mb-4">LA MEJOR FORMA DE VIAJAR</div>
          <h2 className="text-6xl tracking-tighter font-semibold leading-none mb-6">
            Una plataforma diseñada<br />para que nunca dejes de explorar
          </h2>
          <p className="text-xl text-white/60">
            Combina la precisión visual de Google Earth, la profundidad cultural de National Geographic 
            y la gamificación adictiva de Duolingo. Todo en una experiencia premium y educativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { title: "Globo 3D Realista", desc: "Rotación fluida, nubes dinámicas, iluminación cinematográfica y pins interactivos de alta precisión." },
            { title: "Contenido Premium", desc: "Historias profundas, gastronomía profesional, galerías curadas y datos actualizados de cada país." },
            { title: "Aprendizaje Activo", desc: "12 juegos educativos, sistema de logros, pasaporte mundial y progreso gamificado." },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left hover:bg-white/10 transition">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-400 mb-6" />
              <h4 className="font-semibold text-2xl tracking-tight mb-3">{item.title}</h4>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 py-20 bg-black/40">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-6xl tracking-tighter font-semibold mb-4">¿Listo para tu próximo viaje?</h2>
          <p className="text-white/60 text-xl mb-10">Comienza explorando el globo o sumérgete en los juegos educativos.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/explorar" className="px-12 py-4 bg-white text-black rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/90 transition">
              Explorar Países <ArrowRight />
            </Link>
            <Link href="/juegos" className="px-12 py-4 border border-white/40 hover:bg-white/5 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-2 transition">
              Jugar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Country Quick View Modal */}
      <AnimatePresence>
        {showCountryModal && selectedCountry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6" onClick={closeModal}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="bg-[#0a0f1e] max-w-lg w-full rounded-3xl overflow-hidden border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img 
                  src={getCountryBySlug(selectedCountry.slug)?.gallery[0]} 
                  alt={selectedCountry.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-6xl drop-shadow-lg">{selectedCountry.flag}</span>
                    <div>
                      <div className="text-4xl font-semibold tracking-tighter">{selectedCountry.name}</div>
                      <div className="text-white/70 text-lg">{selectedCountry.capital}</div>
                    </div>
                  </div>
                </div>
                <button onClick={closeModal} className="absolute top-5 right-5 text-white/70 hover:text-white text-2xl leading-none">×</button>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm mb-8">
                  <div><span className="text-white/50 block text-xs tracking-widest">POBLACIÓN</span>{getCountryBySlug(selectedCountry.slug)?.population}</div>
                  <div><span className="text-white/50 block text-xs tracking-widest">CONTINENTE</span>{getCountryBySlug(selectedCountry.slug)?.continent}</div>
                  <div><span className="text-white/50 block text-xs tracking-widest">IDIOMA</span>{getCountryBySlug(selectedCountry.slug)?.language}</div>
                  <div><span className="text-white/50 block text-xs tracking-widest">MONEDA</span>{getCountryBySlug(selectedCountry.slug)?.currency}</div>
                </div>

                <Link 
                  href={`/paises/${selectedCountry.slug}`}
                  className="block w-full py-4 bg-white hover:bg-white/90 active:scale-[0.985] text-black text-center rounded-2xl font-semibold text-lg transition-all"
                >
                  VER PERFIL COMPLETO DEL PAÍS →
                </Link>
                <button 
                  onClick={closeModal}
                  className="block w-full py-4 text-white/50 hover:text-white/80 text-sm mt-1 tracking-widest transition"
                >
                  CERRAR VENTANA
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
