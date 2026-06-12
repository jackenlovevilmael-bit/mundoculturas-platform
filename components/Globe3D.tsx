"use client";

import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

// Datos de países con coordenadas (lat, lng)
export interface CountryPin {
  slug: string;
  name: string;
  capital: string;
  lat: number;
  lng: number;
  flag: string;
  color: string;
}

const countryPins: CountryPin[] = [
  { slug: 'espana', name: 'España', capital: 'Madrid', lat: 40.4168, lng: -3.7038, flag: '🇪🇸', color: '#ef4444' },
  { slug: 'francia', name: 'Francia', capital: 'París', lat: 48.8566, lng: 2.3522, flag: '🇫🇷', color: '#3b82f6' },
  { slug: 'japon', name: 'Japón', capital: 'Tokio', lat: 35.6762, lng: 139.6503, flag: '🇯🇵', color: '#f43f5e' },
  { slug: 'mexico', name: 'México', capital: 'Ciudad de México', lat: 19.4326, lng: -99.1332, flag: '🇲🇽', color: '#10b981' },
  { slug: 'brasil', name: 'Brasil', capital: 'Brasilia', lat: -15.8267, lng: -47.9218, flag: '🇧🇷', color: '#f59e0b' },
  { slug: 'india', name: 'India', capital: 'Nueva Delhi', lat: 28.6139, lng: 77.2090, flag: '🇮🇳', color: '#8b5cf6' },
  { slug: 'egipto', name: 'Egipto', capital: 'El Cairo', lat: 30.0444, lng: 31.2357, flag: '🇪🇬', color: '#fbbf24' },
  { slug: 'italia', name: 'Italia', capital: 'Roma', lat: 41.9028, lng: 12.4964, flag: '🇮🇹', color: '#14b8a6' },
  { slug: 'china', name: 'China', capital: 'Pekín', lat: 39.9042, lng: 116.4074, flag: '🇨🇳', color: '#ef4444' },
  { slug: 'peru', name: 'Perú', capital: 'Lima', lat: -12.0464, lng: -77.0428, flag: '🇵🇪', color: '#f97316' },
  { slug: 'sudafrica', name: 'Sudáfrica', capital: 'Ciudad del Cabo', lat: -33.9249, lng: 18.4241, flag: '🇿🇦', color: '#06b6d4' },
  { slug: 'australia', name: 'Australia', capital: 'Canberra', lat: -35.2809, lng: 149.1300, flag: '🇦🇺', color: '#8b5cf6' },
];

function latLngToVector3(lat: number, lng: number, radius: number = 2): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
}

// Componente del Pin interactivo
function CountryPin({ pin, onClick, radius = 2 }: { pin: CountryPin; onClick: (pin: CountryPin) => void; radius?: number }) {
  const meshRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  
  const position = useMemo(() => latLngToVector3(pin.lat, pin.lng, radius), [pin.lat, pin.lng, radius]);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = hovered ? 1.4 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={() => onClick(pin)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Pin base */}
      <mesh>
        <sphereGeometry args={[0.035]} />
        <meshPhongMaterial 
          color={pin.color} 
          emissive={pin.color} 
          emissiveIntensity={hovered ? 0.6 : 0.3}
          shininess={100}
        />
      </mesh>
      
      {/* Pin stem */}
      <mesh position={[0, 0.06, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.012, 0.12, 8]} />
        <meshPhongMaterial color="#ffffff" shininess={80} />
      </mesh>
      
      {/* Glow ring on hover */}
      {hovered && (
        <mesh>
          <ringGeometry args={[0.06, 0.09, 32]} />
          <meshBasicMaterial color={pin.color} transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      )}

      {/* Country label */}
      <Html
        position={[0, 0.22, 0]}
        style={{
          transition: 'all 0.2s ease',
          opacity: hovered ? 1 : 0.85,
          pointerEvents: 'none',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        center
      >
        <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs whitespace-nowrap flex items-center gap-1.5 shadow-xl">
          <span className="text-lg leading-none">{pin.flag}</span>
          <span className="font-medium text-white tracking-tight">{pin.name}</span>
        </div>
      </Html>
    </group>
  );
}

// Tierra principal
function Earth({ onCountryClick }: { onCountryClick: (pin: CountryPin) => void }) {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const atmosphereRef = useRef<THREE.Mesh>(null!);

  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    
    ctx.fillStyle = '#0a2540';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#1a3a2a';
    ctx.fillRect(150, 80, 280, 180);
    ctx.fillRect(420, 120, 160, 140);
    ctx.fillRect(620, 90, 280, 200);
    ctx.fillRect(780, 280, 180, 120);
    
    ctx.fillStyle = '#2d5a3d';
    ctx.fillRect(180, 110, 80, 60);
    ctx.fillRect(450, 150, 50, 70);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  }, []);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = state.clock.elapsedTime * 0.022;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <group>
      <Stars 
        radius={300} 
        depth={50} 
        count={800} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5}
      />

      <mesh ref={earthRef}>
        <sphereGeometry args={[2]} />
        <meshPhongMaterial 
          map={earthTexture}
          color="#e0e7ff"
          shininess={12}
          specular="#ffffff"
          emissive="#0a1628"
          emissiveIntensity={0.05}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.035]} />
        <meshPhongMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.18} 
          shininess={5}
        />
      </mesh>

      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[2.12]} />
        <meshPhongMaterial 
          color="#60a5fa" 
          transparent 
          opacity={0.06} 
          side={THREE.BackSide}
          shininess={0}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.18]} />
        <meshBasicMaterial 
          color="#1e3a8a" 
          transparent 
          opacity={0.035} 
          side={THREE.BackSide}
        />
      </mesh>

      {countryPins.map((pin) => (
        <CountryPin 
          key={pin.slug} 
          pin={pin} 
          onClick={onCountryClick} 
          radius={2}
        />
      ))}

      <ambientLight intensity={0.35} color="#a5b4fc" />
      <directionalLight 
        position={[-12, 18, -8]} 
        intensity={1.8} 
        color="#fefce8"
        castShadow
      />
      <pointLight position={[0, -10, -15]} intensity={0.4} color="#bae6fd" />
    </group>
  );
}

function CameraController() {
  const { camera } = useThree();
  
  React.useEffect(() => {
    camera.position.set(0, 1.5, 6.5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <OrbitControls 
      enablePan={false}
      enableZoom={true}
      minDistance={3.2}
      maxDistance={9}
      enableDamping 
      dampingFactor={0.08}
      rotateSpeed={0.6}
      zoomSpeed={0.8}
      autoRotate={true}
      autoRotateSpeed={0.08}
    />
  );
}

interface Globe3DProps {
  onCountrySelect: (country: CountryPin) => void;
  className?: string;
}

export default function Globe3D({ onCountrySelect, className = '' }: Globe3DProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleCountryClick = (pin: CountryPin) => {
    onCountrySelect(pin);
  };

  return (
    <div className={`relative w-full h-full rounded-3xl overflow-hidden bg-[#02040a] border border-white/10 shadow-2xl ${className}`}>
      <Canvas
        camera={{ position: [0, 1.5, 6.5], fov: 42 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true, 
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
        onCreated={() => setIsLoading(false)}
      >
        <Suspense fallback={null}>
          <Earth onCountryClick={handleCountryClick} />
          <CameraController />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl px-6 py-2.5 rounded-2xl border border-white/10 text-xs tracking-[2px] text-white/70 flex items-center gap-2 z-10">
        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
        ARRASTRA PARA ROTAR • SCROLL PARA ZOOM • CLIC EN PINES
      </div>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#05070f]/90 z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <p className="text-white/60 text-sm tracking-widest">CARGANDO EXPERIENCIA 3D...</p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.65)_92%)] z-10 rounded-3xl" />
    </div>
  );
}
