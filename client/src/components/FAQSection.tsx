import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection = () => {
  const headerRef = useScrollReveal(0.3);
  const contentRef = useScrollReveal(0.4);

  const faqs = [
    {
      question: "What exactly is the 'Shared Vow'?",
      answer: "The Shared Vow is a core gameplay mechanic. Our five heroes share a collective morale and health pool. If the Knight takes a devastating hit, the whole party feels it. You must hot-swap between characters strategically to protect your most vulnerable members and utilize their unique strengths."
    },
    {
      question: "Is Trial 10 really a massive difficulty spike?",
      answer: "Yes. While Trials I through IX test your platforming and puzzle-solving across the realm, Trial X is a relentless, Hollow Knight-style boss fight against Lord Malakor. You will need to master every dash, spell, and melee combo you've learned to survive his two-phase onslaught."
    },
    {
      question: "Who is Leo, and why was he taken?",
      answer: "Leo is the party's Squire—a young, determined kid in an oversized blue gambeson who carried their gear and kept their spirits high. Lord Malakor didn't take him for ransom; he took him to break the heroes' unbreakable bond. Finding his torn blue cloak is where your journey begins."
    },
    {
      question: "When and where is Oathbound releasing?",
      answer: "We are currently deep in development. Oathbound: The Ten Trials will be launching first on PC (Steam), with console releases planned shortly after. Join the Vanguard below to get development updates and beta access."
    }
  ];

  return (
    <section id="archives" className="relative py-32 px-8" style={{ background: 'var(--deep)' }}>
      <div ref={headerRef} className="reveal max-w-3xl mx-auto mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--pglow)' }}>
            // THE ARCHIVES
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif" }}>
          Frequently Asked Questions
        </h2>
      </div>

      <div ref={contentRef} className="reveal max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b"
              style={{ borderColor: 'rgba(124,61,199,.3)' }}
            >
              <AccordionTrigger 
                className="text-left text-lg font-semibold tracking-wide hover:text-yellow-400 transition-colors"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-white/70 leading-relaxed pb-6 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="px-divider mt-32 max-w-7xl mx-auto" />
    </section>
  );
};