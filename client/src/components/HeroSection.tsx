import { useEffect, useRef, useState } from 'react';
// Import the image so Vite manages the path correctly for Vercel
import heroBg from '../assets/oath.png';

export const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background: 'linear-gradient(135deg, rgba(8,6,18,.1) 0%, rgba(13,10,30,.1) 50%, rgba(8,6,18,.1) 100%)',
        }}
      />

      {/* Scanlines effect[cite: 1] */}
      <div className="scanlines absolute inset-0 z-2" />

      {/* Content[cite: 1] */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col items-center text-center"
      >
        {/* Eyebrow[cite: 1] */}
        <p
          className={`text-sm font-mono tracking-widest text-white/60 mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            textShadow: '0 0 20px rgba(255,215,0,.2)',
          }}
        >
           A 2D Action-Platformer — Turn-Based RPG Hybrid
        </p>

        {/* Title[cite: 1] */}
        <div className="mb-6">
          <h1
            className={`text-8xl md:text-9xl font-black tracking-widest transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{
              color: 'var(--gold)',
              textShadow: '0 0 15px rgba(255,215,0,0.6), 0 0 40px rgba(124,61,199,0.4), 4px 4px 0px rgba(8,6,18,0.9)',
              fontFamily: "'Cinzel', serif",
              letterSpacing: '0.15em',
            }}
          >
            OATHBOUND
          </h1>
        </div>

        {/* Decorative line[cite: 1] */}
        <div
          className={`w-32 h-1 mb-8 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Subtitle[cite: 1] */}
        <div className="mb-8 overflow-hidden">
          <h2
            className={`text-4xl md:text-5xl font-light tracking-widest transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{
              color: 'var(--gold)',
              textShadow: '0 0 40px rgba(255,215,0,.3)',
              fontFamily: "'Cinzel', serif",
            }}
          >
            The Ten Trials
          </h2>
        </div>

        {/* Description[cite: 1] */}
        <p
          className={`text-lg md:text-xl text-white/85 mb-12 max-w-3xl transition-all duration-700 delay-300 leading-relaxed ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            textShadow: '0 0 20px rgba(0,0,0,.5)',
          }}
        >
          Five heroes. One kidnapped squire.
          <br />
          <em className="text-yellow-300">Strength through reunion.</em>
        </p>

        {/* CTAs[cite: 1] */}
        <div
          className={`flex gap-6 justify-center flex-wrap transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            className="px-10 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              background: 'var(--gold)',
              color: 'var(--void)',
              boxShadow: '0 0 30px rgba(255,215,0,.3)',
            }}
          >
            BEGIN THE REUNION
          </button>
          <button
            className="px-10 py-4 font-mono text-sm tracking-widest uppercase border-2 transition-all duration-200 hover:bg-white/10 hover:shadow-lg active:scale-95"
            style={{
              borderColor: 'var(--gold)',
              color: 'var(--gold)',
              boxShadow: '0 0 20px rgba(255,215,0,.2)',
            }}
          >
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Scroll Hint[cite: 1] */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20">
        <span className="text-xs tracking-widest text-white/50 animate-pulse">SCROLL TO CONTINUE</span>
        <div
          className="w-0.5 h-10 bg-gradient-to-b from-yellow-400 to-transparent animate-bounce"
          style={{
            boxShadow: '0 0 10px rgba(255,215,0,.3)',
          }}
        />
      </div>

      {/* Floating particles effect[cite: 1] */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `rgba(255,215,0,${Math.random() * 0.5 + 0.1})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 15}s linear infinite`,
              '--drift': `${(Math.random() - 0.5) * 100}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </section>
  );
};