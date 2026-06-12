"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Users, Globe2, Trophy, Star } from 'lucide-react';
import dynamic from 'next/dynamic';
import { countries, getCountryBySlug } from '@/lib/countries';
import { useLanguage } from '@/components/LanguageProvider';
import { toast } from 'sonner';

const Globe3D = dynamic(() => import('@/components/Globe3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white/60">Cargando globo 3D...</div>
});