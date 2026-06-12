"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { Globe, Menu, X, Sun, Moon, Trophy, Map, Gamepad2, Compass } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home'), icon: Globe },
    { href: '/explorar', label: t('nav.explore'), icon: Compass },
    { href: '/mapa', label: t('nav.map'), icon: Map },
    { href: '/juegos', label: t('nav.games'), icon: Gamepad2 },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#05070f]/95 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-2xl tracking-tighter">MundoCulturas</div>
            <div className="text-[10px] text-white/50 -mt-1">EL MUNDO EN TUS MANOS</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
            >
              <link.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center bg-white/5 rounded-full p-0.5 border border-white/10">
            <button
              onClick={() => setLanguage('es')}
              className={`px-4 py-1.5 text-xs rounded-full transition-all ${language === 'es' ? 'bg-white text-black font-semibold' : 'hover:bg-white/10'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-1.5 text-xs rounded-full transition-all ${language === 'en' ? 'bg-white text-black font-semibold' : 'hover:bg-white/10'}`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors border border-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 border border-white/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#05070f]/98 backdrop-blur-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-4 text-lg">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2 hover:text-indigo-400 transition"
                >
                  <link.icon className="w-5 h-5" /> {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex gap-2">
                <button onClick={() => { setLanguage('es'); setIsOpen(false); }} className={`flex-1 py-2 rounded-xl ${language === 'es' ? 'bg-white text-black' : 'bg-white/5'}`}>Español</button>
                <button onClick={() => { setLanguage('en'); setIsOpen(false); }} className={`flex-1 py-2 rounded-xl ${language === 'en' ? 'bg-white text-black' : 'bg-white/5'}`}>English</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
