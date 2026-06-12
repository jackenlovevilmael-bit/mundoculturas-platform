"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import { countries } from '@/lib/countries';
import { useLanguage } from '@/components/LanguageProvider';
import { motion } from 'framer-motion';

export default function ExplorarPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('Todos');

  const continents = ['Todos', 'Europa', 'Asia', 'América', 'África'];

  const filteredCountries = useMemo(() => {
    return countries
      .filter(country => {
        const matchesSearch = 
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesContinent = selectedContinent === 'Todos' || country.continent === selectedContinent;
        
        return matchesSearch && matchesContinent;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedContinent]);

  return (
    <div className="min-h-screen bg-[#05070f] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-12 pb-10">
          <div className="text-indigo-400 tracking-[4px] text-sm mb-2">DESCUBRE EL MUNDO</div>
          <h1 className="text-7xl tracking-tighter font-semibold">Explorar Países</h1>
          <p className="text-white/60 text-xl mt-3 max-w-lg">Busca, filtra y descubre culturas fascinantes de todo el planeta.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10 sticky top-20 z-40 bg-[#05070f] py-4">
          <div className="relative flex-1">
            <Search className="absolute left-5 top-4 text-white/40 w-5 h-5" />
            <input
              type="text"
              placeholder={t('common.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-white/30 pl-14 py-4 rounded-2xl text-lg placeholder:text-white/40 outline-none"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`px-6 py-3.5 rounded-2xl text-sm font-medium transition-all border ${
                  selectedContinent === continent 
                    ? 'bg-white text-black border-white' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {continent}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.015, 0.3) }}
              >
                <Link 
                  href={`/paises/${country.slug}`}
                  className="group block rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 hover:border-white/30 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={country.gallery[0]} 
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 px-4 py-1 bg-black/70 backdrop-blur rounded-full text-xs tracking-widest border border-white/20">
                      {country.continent}
                    </div>
                    <div className="absolute bottom-4 left-4 text-6xl drop-shadow-xl">{country.flag}</div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="font-semibold text-3xl tracking-tighter mb-1">{country.name}</div>
                    <div className="text-white/60 mb-4">{country.capital}</div>
                    
                    <div className="mt-auto text-sm text-white/70 line-clamp-3">
                      {country.shortDesc}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs tracking-widest">
                      <span className="text-white/50">{country.population}</span>
                      <span className="text-emerald-400 group-hover:underline">EXPLORAR →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-white/50">
              No se encontraron países con esos criterios.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
