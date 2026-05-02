import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export const CTASection = () => {
  const containerRef = useScrollReveal(0.2);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger the Sonner toast notification
    toast.success('Welcome to the Vanguard!', {
      description: 'Your vow has been recorded. Keep an eye on your inbox.',
      duration: 5000,
    });
  };

  return (
    <section className="relative py-32 px-8 overflow-hidden" style={{ background: 'var(--void)' }}>
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: 'var(--pglow)' }}
      />

      <div ref={containerRef} className="reveal relative z-10 max-w-3xl mx-auto text-center border p-12 md:p-20"
        style={{ 
          background: 'rgba(13,10,30,.8)', 
          borderColor: 'rgba(255,215,0,.3)',
          boxShadow: '0 0 40px rgba(255,215,0,.05)'
        }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif" }}>
          The Reunion Nears
        </h2>
        <p className="text-lg text-white/70 mb-10 leading-relaxed">
          The Ten Trials await. Join the Vanguard to receive exclusive development logs, beta access, and be the first to know when the gates open.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email address..." 
            required
            className="h-14 bg-black/50 text-white border-purple-500/30 focus-visible:ring-yellow-400/50 focus-visible:border-yellow-400 placeholder:text-white/30"
          />
          <Button 
            type="submit"
            className="h-14 px-8 font-mono text-xs tracking-widest uppercase hover:scale-105 transition-transform"
            style={{ 
              background: 'var(--gold)', 
              color: 'var(--void)',
            }}
          >
            Join Waitlist
          </Button>
        </form>
        
        <p className="text-xs text-white/30 font-mono mt-6">
          NO SPAM. JUST PURE PIXEL-ART GLORY.
        </p>
      </div>
    </section>
  );
};