"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, MapPin, Users, DollarSign, Globe } from 'lucide-react';
import { getCountryBySlug } from '@/lib/countries';
import { motion } from 'framer-motion';

export default function CountryPage() {
  const params = useParams<{ slug: string } >();
  const country = getCountryBySlug(params.slug);
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'culture' | 'gastronomy' | 'tourism' | 'gallery'>('overview');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!country) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-[#05070f] text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-4">País no encontrado</h1>
          <Link href="/explorar" className="text-indigo-400 hover:underline">Volver a explorar</Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Resumen' },
    { id: 'history', label: 'Historia' },
    { id: 'culture', label: 'Cultura' },
    { id: 'gastronomy', label: 'Gastronomía' },
    { id: 'tourism', label: 'Turismo' },
    { id: 'gallery', label: 'Galería' },
  ] as const;

  return (
    <div className="min-h-screen bg-[#05070f] text-white pt-16">
      <div className="relative h-[72vh] flex items-end">
        <img 
          src={country.gallery[0]} 
          alt={country.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#05070f] to-[#05070f]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <Link href="/explorar" className="inline-flex items-center gap-2 text-sm mb-6 text-white/70 hover:text-white">
            <ArrowLeft className="w-4 h-4" /> VOLVER A EXPLORAR
          </Link>
          
          <div className="flex items-end gap-5">
            <span className="text-[120px] leading-none drop-shadow-2xl">{country.flag}</span>
            <div>
              <h1 className="text-[92px] tracking-[-6.5px] font-semibold leading-none">{country.name}</h1>
              <p className="text-3xl text-white/80 -mt-2">{country.capital}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 bg-black/30">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-6 py-8 text-sm">
          <div className="flex items-center gap-3"><Users className="text-white/50" /> <span><strong>{country.population}</strong> habitantes</span></div>
          <div className="flex items-center gap-3"><Globe className="text-white/50" /> <span><strong>{country.continent}</strong></span></div>
          <div className="flex items-center gap-3"><DollarSign className="text-white/50" /> <span><strong>{country.currency}</strong></span></div>
          <div className="flex items-center gap-3"><MapPin className="text-white/50" /> <span><strong>{country.language}</strong></span></div>
        </div>
      </div>

      <div className="sticky top-16 z-50 bg-[#05070f]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 flex overflow-x-auto hide-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-5 text-sm tracking-widest font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab.id 
                  ? 'border-white text-white' 
                  : 'border-transparent text-white/50 hover:text-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        {activeTab === 'overview' && (
          <div className="prose prose-invert max-w-none">
            <p className="text-2xl text-white/90 leading-tight tracking-tight mb-10">{country.shortDesc}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-xl mb-4 tracking-tight">Datos clave</h3>
                <ul className="space-y-3 text-white/80">
                  <li><strong>Capital:</strong> {country.capital}</li>
                  <li><strong>Idioma oficial:</strong> {country.language}</li>
                  <li><strong>Moneda:</strong> {country.currency}</li>
                  <li><strong>Población:</strong> {country.population}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-4 tracking-tight">Curiosidades rápidas</h3>
                <ul className="space-y-3 text-white/80 list-disc pl-5">
                  {country.curiosities.slice(0, 3).map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div>
            <h2 className="text-6xl tracking-tighter font-semibold mb-8">Historia</h2>
            <div className="prose prose-lg prose-invert max-w-none text-white/90 leading-relaxed text-[17px]">
              {country.history}
            </div>
          </div>
        )}

        {activeTab === 'culture' && (
          <div>
            <h2 className="text-6xl tracking-tighter font-semibold mb-8">Cultura &amp; Tradiciones</h2>
            <div className="prose prose-lg prose-invert max-w-none text-white/90 leading-relaxed text-[17px]">
              {country.culture}
            </div>
            <div className="mt-12">
              <h4 className="uppercase tracking-[3px] text-sm text-white/50 mb-4">Curiosidades culturales</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {country.curiosities.map((curio, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-white/90">
                    {curio}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gastronomy' && (
          <div>
            <h2 className="text-6xl tracking-tighter font-semibold mb-3">Gastronomía</h2>
            <p className="text-white/60 mb-10 text-xl">Sabores que cuentan historias de generaciones.</p>
            
            <div className="space-y-8">
              {country.gastronomy.map((dish, index) => (
                <div key={index} className="group grid md:grid-cols-5 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-2 hover:bg-white/10 transition">
                  <div className="md:col-span-2 overflow-hidden rounded-[22px]">
                    <img src={dish.image} alt={dish.name} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="md:col-span-3 p-6 md:pr-8">
                    <h3 className="text-4xl tracking-tighter font-semibold mb-3">{dish.name}</h3>
                    <p className="text-white/80 text-lg mb-6">{dish.description}</p>
                    
                    <div>
                      <div className="uppercase text-xs tracking-[2px] text-white/50 mb-2">INGREDIENTES PRINCIPALES</div>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ing, i) => (
                          <span key={i} className="text-xs px-4 py-1.5 bg-white/10 rounded-full border border-white/10">{ing}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tourism' && (
          <div>
            <h2 className="text-6xl tracking-tighter font-semibold mb-10">Lugares Imperdibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {country.tourism.map((place, index) => (
                <div key={index} className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col">
                  <div className="relative h-80">
                    <img src={place.image} alt={place.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition" />
                    <div className="absolute top-5 right-5 text-xs px-4 py-1 bg-black/70 backdrop-blur rounded-full tracking-widest border border-white/20">{place.type}</div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-semibold text-3xl tracking-tight mb-4">{place.name}</h3>
                    <p className="text-white/80 flex-1">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <h2 className="text-6xl tracking-tighter font-semibold mb-10">Galería Visual</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {country.gallery.map((img, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImage(index)}
                  className="group relative aspect-[16/10] overflow-hidden rounded-3xl cursor-pointer border border-white/10"
                >
                  <img 
                    src={img} 
                    alt={`${country.name} - foto ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest">VER EN GRANDE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            <img 
              src={country.gallery[selectedImage]} 
              alt="Gallery image" 
              className="w-full max-h-[88vh] object-contain rounded-2xl"
            />
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl leading-none"
            >
              ×
            </button>
            
            <div className="flex justify-between mt-4 text-sm text-white/60">
              <button onClick={() => setSelectedImage((selectedImage - 1 + country.gallery.length) % country.gallery.length)} className="hover:text-white">← ANTERIOR</button>
              <div>{selectedImage + 1} / {country.gallery.length}</div>
              <button onClick={() => setSelectedImage((selectedImage + 1) % country.gallery.length)} className="hover:text-white">SIGUIENTE →</button>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-white/10 py-10 text-center">
        <Link href="/juegos" className="text-sm tracking-widest text-white/60 hover:text-white">¿QUIERES PROBAR TUS CONOCIMIENTOS SOBRE ESTE PAÍS? → JUEGA AHORA</Link>
      </div>
    </div>
  );
}
