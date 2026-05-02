import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, Flame, Skull, Lock, Eye, 
  Zap, Wind, Mountain, Anchor, Sword 
} from 'lucide-react';

const TRIALS = [
  { id: "I", name: "The Fractured Gate", status: "CLEARED", icon: <Flame className="text-orange-500" />, lore: "Leo's cloak discovered" },
  { id: "II", name: "Whispering Woods", status: "CLEARED", icon: <Wind className="text-emerald-500" />, lore: "The Beastman's tracking" },
  { id: "III", name: "Shattered Whetstone", status: "CLEARED", icon: <ShieldAlert className="text-blue-400" />, lore: "Seraphim's endurance" },
  { id: "IV", name: "Skyreach Peak", status: "CLEARED", icon: <Mountain className="text-slate-400" />, lore: "The Archer's precision" },
  { id: "V", name: "The Sunken Crypt", status: "CLEARED", icon: <Anchor className="text-cyan-600" />, lore: "A test of the Shared Vow" },
  { id: "VI", name: "Obsidian Forge", status: "CLEARED", icon: <Sword className="text-red-500" />, lore: "The Samurai's blade" },
  { id: "VII", name: "The Singed Archive", status: "CLEARED", icon: <Skull className="text-purple-500" />, lore: "The Mage's discovery" },
  { id: "VIII", name: "The Eye of Storms", status: "CLEARED", icon: <Zap className="text-yellow-400" />, lore: "Collective Morale at 60%" },
  { id: "IX", name: "The Eternal Watch", status: "ACTIVE", icon: <Eye className="text-red-400" />, lore: "Closing in on Trial X" },
  { id: "X", name: "Malakor's Lair", status: "FINAL", icon: <Lock className="text-red-600" />, lore: "The Boss Struggle" }
];

export const TrialsSection = () => {
  const revealRef = useScrollReveal(0.3);

  return (
    <section id="trials" className="relative py-32 px-8 bg-[#080612] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,20,60,0.05),transparent_70%)]" />
      </div>

      <div ref={revealRef} className="reveal max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            The <span className="text-red-600">Ten Trials</span>
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-red-600/50" />
            <p className="text-xs font-mono tracking-[0.4em] text-[#00F5FF] uppercase">
              The Path to Lord Malakor
            </p>
            <div className="h-px w-12 bg-red-600/50" />
          </div>
        </div>

        {/* Tactical Map Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/10">
          {TRIALS.map((trial) => (
            <motion.div
              key={trial.id}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              className="relative p-8 flex flex-col items-center justify-center text-center min-h-[250px] group transition-colors"
            >
              {/* Background ID */}
              <span className="absolute top-4 left-4 text-xs font-mono text-white/10 group-hover:text-red-500/20 transition-colors">
                NODE_{trial.id}
              </span>

              {/* Icon & Status */}
              <div className="mb-6 relative">
                <div className={`p-4 rounded-full border transition-all duration-500 ${trial.status === 'FINAL' ? 'border-red-600 bg-red-600/10 shadow-[0_0_20px_rgba(220,20,60,0.4)]' : 'border-white/10 group-hover:border-[#FFD700]/40'}`}>
                  {trial.icon}
                </div>
                {trial.status === 'ACTIVE' && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                )}
              </div>

              {/* Text Info */}
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2 group-hover:text-[#FFD700] transition-colors">
                {trial.name}
              </h3>
              <p className="text-[10px] font-mono text-white/30 uppercase leading-relaxed max-w-[120px]">
                {trial.lore}
              </p>

              {/* Hover Divider Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Narrative Conclusion */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg text-white/60 italic leading-relaxed">
            "Lord Malakor created the trials to isolate the Vanguard, but they only served to remind the heroes of the Vow they once shared. Trial X awaits—the reunion begins here."
          </p>
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 9 ? 'bg-red-600' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};