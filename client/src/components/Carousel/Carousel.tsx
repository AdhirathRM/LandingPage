import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Sword, Sparkles, Target, PawPrint, Shield, User } from 'lucide-react';
import './Carousel.css';

const HERO_ITEMS = [
  {
    id: 1,
    title: 'Seraphim',
    role: 'THE CRIMSON COMMANDER',
    image: '/knight.png',
    description: 'Strikingly handsome with blood-red hair. Wears burnished steel plate armor with a gold lion crest. His navy cape billows as he lands.',
    attack: 'ZWEIHÄNDER — High knockback melee slashes',
    stats: [
      { label: 'STR', value: 90, color: '#DC143C' },
      { label: 'SPD', value: 40, color: '#B0C4DE' },
      { label: 'DEF', value: 85, color: '#DC143C' },
    ],
    icon: <Sword className="carousel-icon-svg text-[#DC143C]" />,
  },
  {
    id: 2,
    title: 'The Mage',
    role: 'THE ELEMENTALIST',
    image: '/mage.png',
    description: 'Regal and calm with emerald-green hair. Wears flowing white and violet robes. Hovers slightly, leaving a trail of shimmering sapphire dust.',
    attack: 'ETHEREAL BLAST — Long-range homing projectiles',
    stats: [
      { label: 'STR', value: 20, color: '#00C957' },
      { label: 'SPD', value: 50, color: '#BF40BF' },
      { label: 'RNG', value: 95, color: '#00F5FF' },
    ],
    icon: <Sparkles className="carousel-icon-svg text-[#00F5FF]" />,
  },
  {
    id: 3,
    title: 'The Archer',
    role: 'THE SHARPSHOOTER',
    image: '/archer.png',
    description: 'Lean and agile with pointed ears. Wears forest green leathers. His bow is crafted from white weirwood.',
    attack: 'PRECISION SHOT — High velocity arrow streaks',
    stats: [
      { label: 'SPD', value: 85, color: '#FFD700' },
      { label: 'RNG', value: 100, color: '#FFD700' },
      { label: 'ACC', value: 90, color: '#228B22' },
    ],
    icon: <Target className="carousel-icon-svg text-[#FFD700]" />,
  },
  {
    id: 4,
    title: 'The Beastman',
    role: 'THE UNCHAINED',
    image: '/beastman.png',
    description: 'A hulking black-furred wolf. Wears iron shackles from Malakor’s prison. Attacks with glowing cyan claws.',
    attack: 'FERAL FRENZY — Rapid melee hits with bleed effect',
    stats: [
      { label: 'STR', value: 100, color: '#4F4F4F' },
      { label: 'SPD', value: 75, color: '#00F5FF' },
      { label: 'DEF', value: 60, color: '#00F5FF' },
    ],
    icon: <PawPrint className="carousel-icon-svg text-[#00F5FF]" />,
  },
  {
    id: 5,
    title: 'The Samurai',
    role: 'THE SHADOW BLADE',
    image: '/samurai.png',
    description: 'Enigmatic figure in dark lacquered O-yoroi armor. Moves with absolute precision and white-hot motion lines.',
    attack: 'ICHIMONJI — Blink-and-you-miss-it precision slash',
    stats: [
      { label: 'STR', value: 75, color: '#1C1C1C' },
      { label: 'SPD', value: 95, color: '#8B0000' },
      { label: 'DEF', value: 65, color: '#8B0000' },
    ],
    icon: <Shield className="carousel-icon-svg text-[#8B0000]" />,
  },
  {
    id: 6,
    title: 'Leo',
    role: 'THE CAPTIVE SQUIRE',
    image: '/leo.png',
    description: 'A young kid in an oversized blue padded gambeson. He is the heart of the Vanguard and the mission objective.',
    attack: 'OBJECTIVE — Rescue from Trial X',
    stats: [
      { label: 'COURAGE', value: 100, color: '#4169E1' },
      { label: 'LORE', value: 90, color: '#4169E1' },
      { label: 'DEF', value: 10, color: '#4169E1' },
    ],
    icon: <User className="carousel-icon-svg text-[#4169E1]" />,
  },
];

const SPRING_CONFIG = { stiffness: 300, damping: 35, mass: 1 };

function CarouselItem({ item, itemWidth }: { item: any, itemWidth: number }) {
  return (
    <div className="carousel-item" style={{ width: itemWidth }}>
      <div className="p-16 h-full flex flex-row gap-16 select-none pointer-events-none">
        <div className="w-[400px] flex flex-col items-center justify-center border-r border-white/5 pr-12">
          <div className="sprite-display-box-large">
            <div className="sprite-animate-horizontal" style={{ backgroundImage: `url(${item.image})` }} />
          </div>
          <div className="mt-12 text-center">
            <span className="carousel-icon-container-large mx-auto mb-6">{item.icon}</span>
            <p className="text-xs font-mono text-[#FFD700] uppercase tracking-[0.4em]">Status: Active</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between py-6">
          <div>
            <h3 className="carousel-item-title-large">{item.title}</h3>
            <p className="text-sm font-mono text-[#00F5FF] tracking-[0.6em] uppercase mb-12">{item.role}</p>
            <p className="text-xl text-white/50 italic mb-12 border-l-2 border-white/10 pl-8 leading-relaxed">"{item.description}"</p>
            <div className="space-y-8">
              {item.stats.map((s: any) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs font-mono text-white/40 mb-3 uppercase tracking-[0.2em]">
                    <span>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${s.value}%` }} className="h-full" style={{ backgroundColor: s.color, boxShadow: `0 0 20px ${s.color}` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-10 border-t border-white/5"><p className="text-lg font-bold text-white uppercase tracking-[0.2em]">{item.attack}</p></div>
        </div>
      </div>
    </div>
  );
}

export default function Carousel({ baseWidth = 1400, autoplay = true, autoplayDelay = 5000 }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const springX = useSpring(x, SPRING_CONFIG);

  useEffect(() => {
    x.set(-index * baseWidth);
  }, [index, baseWidth, x]);

  useEffect(() => {
    if (!autoplay || isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered]);

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    const velocityThreshold = 500;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      if (index < HERO_ITEMS.length - 1) setIndex(index + 1);
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      if (index > 0) setIndex(index - 1);
    }
    x.set(-index * baseWidth);
  };

  return (
    <div className="carousel-container" style={{ width: `${baseWidth}px` }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div
        className="carousel-track"
        drag="x"
        dragMomentum={false}
        dragConstraints={{ left: -(HERO_ITEMS.length - 1) * baseWidth, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        style={{ x: springX }}
      >
        {HERO_ITEMS.map((item) => (
          <CarouselItem key={item.id} item={item} itemWidth={baseWidth} />
        ))}
      </motion.div>
      <div className="carousel-indicators-container">
        <div className="carousel-indicators">
          {HERO_ITEMS.map((_, i) => (
            <div key={i} className={`carousel-indicator ${index === i ? 'active' : 'inactive'}`} onClick={() => setIndex(i)} style={{ width: index === i ? '80px' : '16px' }} />
          ))}
        </div>
      </div>
    </div>
  );
}