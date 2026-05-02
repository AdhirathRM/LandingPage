import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';
import { Skull, Zap, Eye, Target } from 'lucide-react';
import EvilEye from "./EvilEye/EvilEye";

export const VillainSection = () => {
  const leftRef = useScrollReveal(0.1);
  const rightRef = useScrollReveal(0.3);

  return (
    <section
      id="villain"
      className="relative py-40 px-8 overflow-hidden min-h-screen flex flex-col justify-center bg-[#05040a]"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-red-950/20 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full">
        
        {/* Left Column: The Evil Eye */}
        <div ref={leftRef} className="reveal flex flex-col items-center justify-center relative">
          {/* Subtle Outer Rings */}
          <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border-[1px] border-red-600/10 animate-[spin_20s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] rounded-full border-[1px] border-red-500/5 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

          {/* The Eye Container - Box Overlays Removed */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-72 h-72 md:w-[480px] md:h-[480px] flex items-center justify-center rounded-full overflow-hidden border-2 border-red-600/30 shadow-[0_0_80px_rgba(220,20,60,0.4)] bg-[#080612]"
          >
            <div className="absolute inset-0 scale-100"> 
              <EvilEye
                eyeColor="#DC143C"      
                intensity={2.5}
                pupilSize={0.65}
                irisWidth={0.35}
                glowIntensity={0.8}
                scale={1.0} // Increased to fill the circle better
                pupilFollow={1.5}        
                backgroundColor="#05040a" 
              />
            </div>
          </motion.div>
          
          <p className="mt-8 text-[10px] font-mono text-red-500 tracking-[0.5em] uppercase animate-pulse">
            // Signal_Locked: Malakor_Is_Watching
          </p>
        </div>

        {/* Right Column: Lord Malakor Intel */}
        <div ref={rightRef} className="reveal space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <Skull className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Priority Alpha Target</span>
            </div>
            <h2 
              className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none" 
              style={{ 
                fontFamily: "'Cinzel', serif", 
                textShadow: '0 0 40px rgba(220,20,60,0.6)' 
              }}
            >
              Lord <span className="text-red-600">Malakor</span>
            </h2>
            <p className="text-sm tracking-[0.3em] uppercase text-white/40 font-mono italic">
              The Eternal Tyrant • Trial X Overseer
            </p>
          </div>

          <p className="text-lg leading-relaxed text-white/60 border-l-2 border-red-600/20 pl-6 py-2">
            A Vampire Lord of unimaginable power. Malakor seeks to isolate the Vanguard within his <span className="text-white">Ten Trials</span>, aiming to shatter their <span className="text-red-500">Shared Vow</span> in a frantic real-time struggle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-red-500/40 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-white/40 uppercase">Phase I</span>
                <Eye className="w-3 h-3 text-red-500" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3">Shadow Manifest</h4>
              <Progress value={100} className="h-1 bg-red-900/20" />
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-red-500/40 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-white/40 uppercase">Phase II</span>
                <Zap className="w-3 h-3 text-red-500" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3">Feral Desperation</h4>
              <Progress value={50} className="h-1 bg-red-900/20" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Combat Signatures</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                { label: "Trial Scorch", desc: "Area denial zones using lingering malice flame.", icon: <Target className="w-3 h-3" /> },
                { label: "Vow Breaker", desc: "Forced class-swap with temporary skill lock.", icon: <Skull className="w-3 h-3" /> }
              ].map((ability) => (
                <div key={ability.label} className="flex items-center gap-4 p-4 bg-red-600/5 border border-red-500/10 rounded-sm hover:bg-red-600/10 transition-all cursor-crosshair">
                  <div className="text-red-500">{ability.icon}</div>
                  <div>
                    <span className="block text-[10px] font-black text-white uppercase tracking-widest">{ability.label}</span>
                    <span className="text-[11px] text-white/40">{ability.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};