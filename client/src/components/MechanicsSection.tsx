import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { RefreshCcw, Heart, Zap, Crosshair } from 'lucide-react';

const MECHANICS = [
  {
    title: "Shared Vow System",
    description: "The five heroes share a single, unified life-bar. If one falls, the reunion fails. This synchronizes their survival and forces collective strategy.",
    icon: <Heart className="text-red-500" />,
    detail: "HP Linked: 100%"
  },
  {
    title: "Instant Class Swap",
    description: "Switch between the five Vanguard classes in real-time. Chain Seraphim's knockback into the Archer's precision shots to dominate the platforming trials.",
    icon: <RefreshCcw className="text-[#00F5FF]" />,
    detail: "Cooldown: 0.5s"
  },
  {
    title: "Precision Combat",
    description: "Battle mechanics mimic a frantic boss-rush. Every slash from the Samurai or blast from the Mage requires frame-perfect timing.",
    icon: <Zap className="text-[#FFD700]" />,
    detail: "Frame Data: Active"
  },
  {
    title: "Tactical Reunion",
    description: "Maintain Collective Morale above 60% by recovering artifacts like Leo's cloak to unlock the ultimate synergy attacks in Malakor's Lair.",
    icon: <Crosshair className="text-blue-500" />,
    detail: "Morale: 60% Required"
  }
];

export const MechanicsSection = () => {
  const revealRef = useScrollReveal(0.3);

  return (
    <section id="mechanics" className="relative py-32 px-8 bg-[#080612] overflow-hidden">
      {/* Background visual: Faint technical grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div ref={revealRef} className="reveal max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Core <span className="text-[#00F5FF]">Systems</span>
          </h2>
          <p className="text-xs font-mono tracking-[0.4em] text-white/30 uppercase">
            // Engineering the Vanguard Reunion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/10">
          {MECHANICS.map((mechanic, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              className="p-12 group transition-colors relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm group-hover:border-[#FFD700]/50 transition-colors">
                  {mechanic.icon}
                </div>
                <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
                  System_v3.0_{idx + 1}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white uppercase group-hover:text-[#FFD700] transition-colors">
                  {mechanic.title}
                </h3>
                <p className="text-white/50 leading-relaxed max-w-md">
                  {mechanic.description}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10" />
                <span className="text-[10px] font-mono text-[#00F5FF] uppercase border border-[#00F5FF]/20 px-2 py-1">
                  {mechanic.detail}
                </span>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-[#FFD700]/40 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Global System Stats Footer */}
        <div className="mt-12 flex flex-wrap justify-center gap-12 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>Shared Vow: Synchronized</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Switch Logic: Latency Free</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
            <span>Trial Difficulty: Dynamic</span>
          </div>
        </div>
      </div>
    </section>
  );
};