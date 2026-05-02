import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { Quote, AlertTriangle, Search, ScrollText, Crosshair } from 'lucide-react';

export const StorySection = () => {
  const leftRef = useScrollReveal(0.2);
  const rightRef = useScrollReveal(0.4);

  return (
    <section 
      id="story" 
      className="relative py-32 px-8 bg-[#080612] min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] text-white/[0.01] font-black pointer-events-none select-none">
        VOW
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
        
        {/* Left: Interactive Narrative */}
        <motion.div 
          ref={leftRef} 
          className="reveal space-y-12"
          whileHover={{ x: -20 }} // THE HOVER SHIFT: Moves left on hover
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <ScrollText className="w-4 h-4 text-[#00F5FF]" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#00F5FF] uppercase">
              The Legend // Oathbound
            </span>
          </div>

          <div className="relative cursor-default group">
            <Quote className="absolute -top-10 -left-10 w-20 h-20 text-white/[0.03] group-hover:text-red-500/10 transition-colors duration-700 rotate-180" />
            <h2 
              className="text-4xl md:text-5xl leading-tight font-light italic text-white/90 transition-all duration-500 group-hover:text-white"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              "In the darkest hour, when all seems lost, remember: <span className="text-[#FFD700] italic font-black group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">Strength</span> is not found in solitude, but in the bonds we forge."
            </h2>
          </div>

          <div className="space-y-6 text-lg text-white/50 leading-relaxed max-w-xl transition-colors duration-500 hover:text-white/80">
            <p>
              Lord Malakor’s shadow has shattered the peace the Vanguard once protected. His <span className="text-red-600 font-bold uppercase">Ten Trials</span> were designed to break you.
            </p>
            <p>
              But he made a fatal error: he took <span className="text-blue-400 font-bold">Leo</span>. By taking the heart of the team, he gave the five heroes a reason to fulfill the <span className="text-[#FFD700]">Shared Vow</span> one last time.
            </p>
          </div>
        </motion.div>

        {/* Right: Tactical Mission Board */}
        <div ref={rightRef} className="reveal">
          <motion.div 
            className="p-8 border border-white/10 bg-black/40 backdrop-blur-2xl relative overflow-hidden group cursor-crosshair"
            whileHover={{ scale: 1.02, borderColor: "rgba(220, 20, 60, 0.3)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Animated Scanning Line */}
            <motion.div 
              className="absolute inset-x-0 h-[2px] bg-red-500/20 z-20 pointer-events-none"
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 space-y-10">
              {/* Target Tracker */}
              <div className="flex items-start gap-6 pb-8 border-b border-white/5">
                <div className="relative w-24 h-24 bg-blue-900/10 border border-blue-500/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                  <Crosshair className="w-10 h-10 text-blue-400 group-hover:rotate-90 transition-transform duration-700" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-500 animate-pulse">
                    <AlertTriangle className="w-3 h-3" />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest">Signal Locked: Missing Squire</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tighter" style={{ fontFamily: "'Cinzel', serif" }}>LEO</h3>
                  <p className="text-[10px] text-white/30 font-mono">
                    COORD: WHITEFIELD_OUTSKIRTS<br />
                    PRIORITY: MAXIMUM
                  </p>
                </div>
              </div>

              {/* Dynamic Morale Display */}
              <div className="group/morale">
                <div className="flex justify-between items-end mb-4 font-mono">
                  <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Collective Morale</span>
                  <span className="text-xs font-bold text-red-500 group-hover/morale:text-[#FFD700] transition-colors">60% // UNSTABLE</span>
                </div>
                <div className="flex gap-1.5 h-1.5">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      className="flex-1 bg-red-600" 
                      whileHover={{ backgroundColor: "#FFD700", boxShadow: "0 0 15px #FFD700" }}
                    />
                  ))}
                  {[1, 2].map((i) => (
                    <div key={i} className="flex-1 bg-white/5" />
                  ))}
                </div>
              </div>

              {/* Interaction: Hover Evidence Log */}
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Intel Recovered</span>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { item: "Torn Blue Cloak", trial: "Trial I", color: "text-blue-400" },
                    { item: "Shattered Whetstone", trial: "Trial III", color: "text-gray-400" },
                    { item: "Singed Magic Scroll", trial: "Trial VII", color: "text-orange-400" }
                  ].map((artifact, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex justify-between items-center p-3 bg-white/5 border border-transparent hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-1 h-1 rounded-full ${artifact.color} bg-current shadow-[0_0_8px_currentColor]`} />
                        <span className="text-xs font-bold text-white/80">{artifact.item}</span>
                      </div>
                      <span className="text-[8px] font-mono text-[#FFD700]">LOC: {artifact.trial}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corner Bracket Polish */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#FFD700]/10 group-hover:border-[#FFD700]/40 transition-colors" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#FFD700]/10 group-hover:border-[#FFD700]/40 transition-colors" />
          </motion.div>

          <div className="mt-8 flex justify-center gap-8 text-[9px] font-mono text-white/10 uppercase tracking-[0.4em]">
            <span>Active_Scan: True</span>
            <span>Uptime: 2026.05.02</span>
          </div>
          
        </div>
        
      </div>
      
    </section>
    
  );
};