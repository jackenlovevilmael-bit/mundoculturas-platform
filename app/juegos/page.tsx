"use client";

import React, { useState } from 'react';
import { Trophy, Star, Award, RotateCcw } from 'lucide-react';
import { countries } from '@/lib/countries';
import { toast } from 'sonner';

interface GameScore {
  correct: number;
  total: number;
}

export default function JuegosPage() {
  const [activeGame, setActiveGame] = useState<'flags' | 'capitals' | 'food' | 'passport' | null>(null);
  
  const [flagGame, setFlagGame] = useState({
    currentQuestion: 0,
    score: 0,
    questions: countries.slice(0, 8).map((c, i) => ({
      flag: c.flag,
      correct: c.name,
      options: [...countries].sort(() => 0.5 - Math.random()).slice(0, 3).map(cc => cc.name).concat(c.name).sort(() => 0.5 - Math.random())
    })),
    finished: false
  });

  const handleFlagAnswer = (answer: string) => {
    const isCorrect = answer === flagGame.questions[flagGame.currentQuestion].correct;
    
    if (isCorrect) {
      setFlagGame(prev => ({ ...prev, score: prev.score + 1 }));
      toast.success("\u00a1Correcto! \ud83c\udf89", { description: "+10 puntos" });
    } else {
      toast.error("\u00a1Casi!", { description: `La respuesta era ${flagGame.questions[flagGame.currentQuestion].correct}` });
    }

    if (flagGame.currentQuestion < flagGame.questions.length - 1) {
      setFlagGame(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    } else {
      setFlagGame(prev => ({ ...prev, finished: true }));
      const finalScore = flagGame.score + (isCorrect ? 1 : 0);
      toast(`\u00a1Juego terminado! Puntuación: ${finalScore}/${flagGame.questions.length}`, {
        description: finalScore > 6 ? "\u00a1Eres un experto mundial!" : "\u00a1Sigue practicando!"
      });
    }
  };

  const resetFlagGame = () => {
    setFlagGame({
      currentQuestion: 0,
      score: 0,
      questions: [...countries].sort(() => 0.5 - Math.random()).slice(0, 8).map((c) => ({
        flag: c.flag,
        correct: c.name,
        options: [...countries].sort(() => 0.5 - Math.random()).slice(0, 3).map(cc => cc.name).concat(c.name).sort(() => 0.5 - Math.random())
      })),
      finished: false
    });
  };

  const [passport, setPassport] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mundoculturas-passport');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const toggleStamp = (slug: string) => {
    const newPassport = passport.includes(slug) 
      ? passport.filter(s => s !== slug) 
      : [...passport, slug];
    
    setPassport(newPassport);
    localStorage.setItem('mundoculturas-passport', JSON.stringify(newPassport));
    
    if (!passport.includes(slug)) {
      toast.success("\u00a1Sello añadido a tu Pasaporte!", { description: "\u00a1Sigue coleccionando!" });
    }
  };

  const progress = Math.round((passport.length / countries.length) * 100);

  return (
    <div className="min-h-screen bg-[#05070f] pt-20 pb-16 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="pt-8 pb-12 text-center">
          <div className="text-amber-400 tracking-[3px] text-sm">APRENDE JUGANDO</div>
          <h1 className="text-7xl tracking-tighter font-semibold mt-1">Juegos Educativos</h1>
          <p className="text-white/60 mt-3 text-xl">Pon a prueba tus conocimientos del mundo y gana logros.</p>
        </div>

        {!activeGame && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div onClick={() => setActiveGame('flags')} className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-8 transition flex flex-col">
              <div className="text-6xl mb-8">🏳️</div>
              <h3 className="text-4xl tracking-tighter font-semibold mb-3">Adivina la Bandera</h3>
              <p className="text-white/70 flex-1">¿Reconoces estas banderas icónicas? 8 preguntas para poner a prueba tu memoria visual.</p>
              <div className="mt-8 text-emerald-400 flex items-center gap-2 text-sm tracking-widest group-hover:gap-3 transition">JUGAR AHORA →</div>
            </div>

            <div onClick={() => { toast.info("Juego de capitales próximamente. \u00a1Pronto disponible!"); }} className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-8 transition flex flex-col opacity-75">
              <div className="text-6xl mb-8">🏛️</div>
              <h3 className="text-4xl tracking-tighter font-semibold mb-3">Adivina la Capital</h3>
              <p className="text-white/70 flex-1">Conecta cada país con su capital. Desafío de geografía clásica.</p>
              <div className="mt-8 text-xs tracking-widest">PRÓXIMAMENTE</div>
            </div>

            <div onClick={() => { toast.info("Quiz de gastronomía en desarrollo. \u00a1Vuelve pronto!"); }} className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-8 transition flex flex-col opacity-75">
              <div className="text-6xl mb-8">🍜</div>
              <h3 className="text-4xl tracking-tighter font-semibold mb-3">¿De qué país es esta comida?</h3>
              <p className="text-white/70 flex-1">Identifica el origen de platos icónicos del mundo.</p>
              <div className="mt-8 text-xs tracking-widest">PRÓXIMAMENTE</div>
            </div>

            <div onClick={() => setActiveGame('passport')} className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-8 transition flex flex-col md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-8">
                <div className="text-6xl">🛂</div>
                <div className="text-right">
                  <div className="text-3xl font-semibold tabular-nums tracking-tighter">{passport.length}</div>
                  <div className="text-[10px] text-white/50 -mt-1 tracking-widest">SELLOS</div>
                </div>
              </div>
              <h3 className="text-4xl tracking-tighter font-semibold mb-3">Pasaporte Mundial</h3>
              <p className="text-white/70 flex-1">Colecciona sellos visitando países en el globo y explorando perfiles. ¡Conviértete en un ciudadano del mundo!</p>
              <div className="mt-8 text-emerald-400 flex items-center gap-2 text-sm tracking-widest group-hover:gap-3 transition">ABRIR PASAPORTE →</div>
            </div>
          </div>
        )}

        {activeGame === 'flags' && (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => { setActiveGame(null); resetFlagGame(); }} className="text-sm flex items-center gap-2 text-white/60 hover:text-white">
                ← VOLVER A JUEGOS
              </button>
              <div className="text-sm tracking-widest text-white/60">PREGUNTA {flagGame.currentQuestion + 1} / {flagGame.questions.length}</div>
            </div>

            {!flagGame.finished ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
                <div className="text-[140px] mb-4 leading-none drop-shadow-xl">{flagGame.questions[flagGame.currentQuestion].flag}</div>
                <h3 className="text-4xl tracking-tighter mb-10">¿A qué país pertenece esta bandera?</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {flagGame.questions[flagGame.currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleFlagAnswer(option)}
                      className="py-5 px-8 rounded-2xl border border-white/20 hover:bg-white hover:text-black active:scale-[0.985] text-xl font-medium transition-all text-left pl-8"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Trophy className="mx-auto w-20 h-20 text-amber-400 mb-6" />
                <div className="text-7xl font-semibold tracking-tighter mb-2">{flagGame.score} / {flagGame.questions.length}</div>
                <p className="text-2xl text-white/70 mb-10">¡Excelente trabajo, explorador!</p>
                
                <button onClick={resetFlagGame} className="flex items-center gap-3 mx-auto px-10 py-4 bg-white text-black rounded-2xl font-semibold">
                  <RotateCcw className="w-4 h-4" /> JUGAR DE NUEVO
                </button>
              </div>
            )}
          </div>
        )}

        {activeGame === 'passport' && (
          <div>
            <div className="flex justify-between items-baseline mb-8">
              <div>
                <h2 className="text-5xl tracking-tighter font-semibold">Tu Pasaporte Mundial</h2>
                <p className="text-white/60">Haz clic en los países para coleccionar sellos</p>
              </div>
              <div className="text-right">
                <div className="text-6xl tabular-nums tracking-tighter font-semibold text-emerald-400">{progress}<span className="text-3xl text-white/40">%</span></div>
                <div className="text-xs tracking-[2px] -mt-2 text-white/50">COMPLETADO</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {countries.map(country => {
                const stamped = passport.includes(country.slug);
                return (
                  <button
                    key={country.slug}
                    onClick={() => toggleStamp(country.slug)}
                    className={`group relative p-6 rounded-3xl border text-left transition-all active:scale-[0.985] ${stamped ? 'bg-emerald-950/40 border-emerald-500/60' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                  >
                    <div className="flex justify-between">
                      <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{country.flag}</span>
                      {stamped && <Award className="text-emerald-400 w-6 h-6" />}
                    </div>
                    <div className="font-semibold tracking-tight text-xl leading-tight pr-8">{country.name}</div>
                    <div className="text-xs text-white/50 mt-1">{country.capital}</div>
                    
                    {stamped && <div className="absolute bottom-5 right-5 text-[10px] px-3 py-px bg-emerald-500/90 text-emerald-950 rounded tracking-widest">SELLADO</div>}
                  </button>
                );
              })}
            </div>

            <div className="text-center mt-12 text-sm text-white/40 tracking-widest">PROGRESO GUARDADO AUTOMÁTICAMENTE EN TU NAVEGADOR</div>
          </div>
        )}
      </div>
    </div>
  );
}
