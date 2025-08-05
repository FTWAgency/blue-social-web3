import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TechnologyLayer {
  title: string;
  tag: string;
  description: string;
  gradient: string;
  icon: string;
  iconBg: string;
}

const BuiltOnBaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth <= 768;

  const layers: TechnologyLayer[] = [
    {
      title: "Base",
      tag: "On-chain Layer",
      description: "Scalable L2 by Coinbase securing all social interactions and token movement on-chain.",
      gradient: "from-blue-500 to-cyan-500",
      icon: "/assets/baselogo.png",
      iconBg: "bg-white"
    },
    {
      title: "Thirdweb + Smart Wallets",
      tag: "Web3 Infrastructure",
      description: "Seamless wallet integration and smart contract interactions — built for Web2-level UX.",
      gradient: "from-blue-600 to-purple-600",
      icon: "/assets/thirdweblogo.png",
      iconBg: "bg-black"
    },
    {
      title: "Blue Protocol",
      tag: "Offline Layer",
      description: "Proprietary Bluetooth mesh protocol enabling encrypted, real-world discovery, messaging and payments without WiFi or internet.",
      gradient: "from-purple-600 to-purple-700",
      icon: "🔵",
      iconBg: "bg-purple-500/20"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    if (isMobile) {
      // Simple fade-in animation for mobile
      const cards = cardsRef.current.querySelectorAll('.tech-card');
      gsap.fromTo(cards, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out"
        }
      );
    } else {
      // Desktop pinned scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true,
          scrub: 1,
        }
      });

      // Animate each card in sequence
      layers.forEach((_, index) => {
        const card = cardsRef.current?.querySelector(`.tech-card:nth-child(${index + 1})`);
        if (card) {
          tl.fromTo(card,
            { 
              opacity: 0, 
              y: 100, 
              scale: 0.8,
              filter: "blur(10px)"
            },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: "blur(0px)",
              duration: 0.5,
              ease: "power2.out"
            },
            index * 0.3
          );
        }
      });

      // Animate the connecting line
      const line = cardsRef.current?.querySelector('.connecting-line');
      if (line) {
        tl.fromTo(line,
          { 
            opacity: 0,
            scaleY: 0
          },
          { 
            opacity: 1,
            scaleY: 1,
            duration: 0.3,
            ease: "power2.out"
          },
          0.1
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built on Base. Powered by Bluetooth.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A three-layer architecture that brings Web3 social to the real world
          </p>
        </div>

        <div ref={cardsRef} className="relative max-w-4xl mx-auto">
          {/* Animated connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px connecting-line">
            <svg 
              width="2" 
              height="100%" 
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}
            >
              <defs>
                <pattern 
                  id="dashPattern" 
                  patternUnits="userSpaceOnUse" 
                  width="8" 
                  height="8"
                >
                  <line 
                    x1="0" 
                    y1="4" 
                    x2="8" 
                    y2="4" 
                    stroke="rgba(59, 130, 246, 0.8)" 
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                </pattern>
              </defs>
              <rect 
                width="100%" 
                height="100%" 
                fill="url(#dashPattern)"
                className="animate-pulse"
                style={{
                  animation: 'dashMove 2s linear infinite'
                }}
              />
            </svg>
          </div>

          {/* Technology cards */}
          {layers.map((layer, index) => (
            <div
              key={index}
              className={`tech-card relative mb-8 last:mb-0 ${
                index === 1 ? 'z-10' : 'z-5'
              }`}
            >
              <div className={`relative bg-gradient-to-r ${layer.gradient} rounded-2xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm`}>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${layer.gradient} rounded-2xl opacity-20 blur-xl`}></div>
                
                <div className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 ${layer.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 overflow-hidden`}>
                    {layer.icon.startsWith('/') ? (
                      <img 
                        src={layer.icon} 
                        alt={`${layer.title} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{layer.icon}</span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm border border-white/20">
                        {layer.tag}
                      </span>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dashMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-16px);
          }
        }
      `}</style>
    </section>
  );
};

export default BuiltOnBaseSection; 