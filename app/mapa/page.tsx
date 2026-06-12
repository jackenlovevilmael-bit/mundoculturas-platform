"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { countries } from '@/lib/countries';
import { motion } from 'framer-motion';

export default function MapaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [continentFilter, setContinentFilter] = useState('Todos');

  const continents = ['Todos', ...Array.from(new Set(countries.map(c => c.continent)))];

  const filtered = useMemo(() => {
    return countries.filter(c => {
      const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         c.capital.toLowerCase().includes(searchTerm.toLowerCase());
      const matchContinent = continentFilter === 'Todos' || c.continent === continentFilter;
      return matchSearch && matchContinent;
    });
  }, [searchTerm, continentFilter]);

  return (
    <div className="min-h-screen bg-[#05070f] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="uppercase tracking-[4px] text-xs text-white/50 mb-2">VISTA GLOBAL</div>
          <h1 className="text-7xl tracking-tighter font-semibold">Mapa Mundial Interactivo</h1>
          <p className="text-white/60 mt-2 max-w-md">Explora por continente o busca cualquier país. Haz clic en una tarjeta para abrir su perfil completo.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-5 top-4 w-5 h-5 text-white/40" />
            <input 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Buscar por país o capital..."
              className="w-full bg-white/5 border border-white/10 pl-14 py-4 rounded-2xl text-lg placeholder:text-white/40 focus:outline-none focus:border-white/40"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {continents.map(cont => (
              <button 
                key={cont}
                onClick={() => setContinentFilter(cont)}
                className={`px-6 whitespace-nowrap py-3.5 text-sm rounded-2xl border transition ${continentFilter === cont ? 'bg-white text-black border-white' : 'border-white/10 hover:bg-white/5'}`}
              >
                {cont}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((country, idx) => (
            <motion.div 
              key={country.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.015 }}
            >
              <Link href={`/paises/${country.slug}`} className="block group rounded-3xl border border-white/10 overflow-hidden bg-zinc-950 hover:border-white/30 transition-all">
                <div className="h-2" style={{ backgroundColor: country.color }} />
                
                <div className="p-7">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-5xl">{country.flag}</span>
                        <div>
                          <div className="font-semibold text-3xl tracking-tighter leading-none">{country.name}</div>
                          <div className="text-white/60 mt-0.5">{country.capital}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-xs px-3 py-1 rounded bg-white/5 border border-white/10 tracking-widest self-start">{country.continent}</div>
                  </div>

                  <div className="mt-8 text-sm text-white/70 line-clamp-2 pr-4">{country.shortDesc}</div>

                  <div className="mt-7 pt-5 border-t border-white/10 flex justify-between text-xs text-white/50">
                    <div>{country.population}</div>
                    <div className="group-hover:text-emerald-400 transition">VER DETALLES →</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/50">No se encontraron resultados.</div>
        )}
      </div>
    </div>
  );
}
