"use client";

export const dynamic = 'force-dynamic';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Users, Globe2, Trophy, Star } from 'lucide-react';
import Globe3D, { CountryPin } from '@/components/Globe3D';
import { countries, getCountryBySlug } from '@/lib/countries';
import { useLanguage } from '@/components/LanguageProvider';
import { toast } from 'sonner';