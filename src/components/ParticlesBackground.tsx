import React, { useCallback } from 'react';
import { Particles } from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Optional: Add any initialization after particles are loaded
  }, []);

  // Detect mobile and reduced motion
  const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  const config = isMobile ? {
    background: {
      color: { value: '#0a0a23' },
      opacity: 0.7
    },
    particles: {
      number: { value: 12, density: { enable: true, value_area: 600 } },
      color: { value: ['#1e90ff', '#8a2be2'] },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 8, random: { enable: true, minimumValue: 4 } },
      links: {
        enable: true,
        distance: 120,
        color: '#00ffff',
        opacity: 0.18,
        width: 2
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: { default: 'out' as const }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true
      }
    },
    detectRetina: true
  } : {
    background: {
      color: { value: '#0a0a23' },
      opacity: 0.7
    },
    particles: {
      number: { value: 40, density: { enable: true, value_area: 900 } },
      color: { value: ['#1e90ff', '#8a2be2'] },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 10, random: { enable: true, minimumValue: 5 } },
      links: {
        enable: true,
        distance: 180,
        color: '#00ffff',
        opacity: 0.18,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: { default: 'out' as const }
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'attract' },
        onClick: { enable: false },
        resize: true
      },
      modes: {
        attract: {
          distance: 180,
          duration: 0.4,
          speed: 1.5
        }
      }
    },
    detectRetina: true
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'blur(0.5px) brightness(0.8)',
        transition: 'opacity 0.3s'
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />
    </div>
  );
};

export default ParticlesBackground; 