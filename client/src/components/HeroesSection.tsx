import { useScrollReveal } from '@/hooks/useScrollReveal';
import Carousel from './Carousel/Carousel';

export const HeroesSection = () => {
  const revealRef = useScrollReveal(0.3);

  return (
    <section
      id="heroes"
      className="relative py-32 px-8 bg-[#080612] overflow-hidden min-h-screen flex items-center"
    >
      
      {/* Background Hero Accent Glow - Themed to Gold for the Vanguard crest */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[250px] opacity-10 bg-[#FFD700] pointer-events-none"
      />
      
      <div ref={revealRef} className="reveal max-w-[1400px] mx-auto w-full relative z-10">
        {/* Section Header with Archive Branding */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#00F5FF]" />
              <span className="text-[10px] font-mono tracking-[0.5em] text-[#00F5FF] uppercase">
                Personnel Files
              </span>
            </div>
            <h2
              className="text-6xl md:text-7xl font-black text-[#FFD700] uppercase tracking-tighter"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Vanguard
            </h2>
            <p className="mt-2 text-sm font-mono tracking-widest text-white/40">
              // REUNITED FOR THE SHARED VOW
            </p>
          </div>

          <div className="text-right hidden md:block">
            <div className="p-4 border border-white/5 bg-white/5 backdrop-blur-sm">
              <span className="block text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-1">
                Mission Objective
              </span>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                Rescue Leo // Trial X
              </span>
            </div>
          </div>
        </div>

        {/* 
            Massive Carousel Integration 
            The baseWidth is set to 600 to allow the full character stats 
            and descriptions to render without being cramped.
        */}
        <div className="flex justify-center items-center w-full min-h-[1000px] py-24" style={{ position: 'relative' }}>
          <Carousel
            baseWidth={1400}      // Matches the scaled-up dossier width
            autoplay={true}
            autoplayDelay={9000}
            //loop={true}           // Essential for the jumping logic to work[cite: 2]
          />
        </div>

        {/* Narrative Footer */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#FFD700] uppercase tracking-widest">Status</span>
            <p className="text-sm text-white/40 leading-relaxed">
              Active and deployed. All five classes have converged on the Whitefield region.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#FFD700] uppercase tracking-widest">Formation</span>
            <p className="text-sm text-white/40 leading-relaxed">
              Standard Vanguard configuration. Shared Vow lifebar synchronization active.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#FFD700] uppercase tracking-widest">Threat Level</span>
            <p className="text-sm text-white/40 leading-relaxed">
              Extreme. Lord Malakor has initiated the Ten Trials sequence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};