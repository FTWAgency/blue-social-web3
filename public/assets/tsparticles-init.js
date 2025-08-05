// Detect mobile and reduced motion
const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Remove particles for accessibility
  document.getElementById('tsparticles').style.display = 'none';
} else if (isMobile) {
  // Fewer particles on mobile
  tsParticles.load('tsparticles', {
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
        width: 2,
        shadow: { enable: true, color: '#00ffff', blur: 8 }
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
        attract: { enable: false }
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
  });
} else {
  // Desktop config
  tsParticles.load('tsparticles', {
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
        width: 2,
        shadow: { enable: true, color: '#00ffff', blur: 10 }
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
        attract: { enable: false }
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
    detectRetina: true,
    fullScreen: { enable: true, zIndex: 0 }
  });
}

// Style the background div
document.addEventListener('DOMContentLoaded', function () {
  const el = document.getElementById('tsparticles');
  if (el) {
    el.style.position = 'fixed';
    el.style.top = '0';
    el.style.left = '0';
    el.style.width = '100vw';
    el.style.height = '100vh';
    el.style.zIndex = '0';
    el.style.pointerEvents = 'none';
    el.style.filter = 'blur(0.5px) brightness(0.8)';
    el.style.transition = 'opacity 0.3s';
  }
}); 