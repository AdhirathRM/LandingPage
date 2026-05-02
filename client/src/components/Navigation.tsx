import { useEffect, useState } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Story', 'Heroes', 'Villain', 'Trials', 'Mechanics'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-[60px] py-5 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080612]/85 backdrop-blur-lg border-b py-3.5'
          : 'bg-transparent py-5'
      }`}
      style={{ borderColor: isScrolled ? 'rgba(124,61,199,.2)' : 'transparent' }}
    >
      <div
        className="tracking-widest"
        style={{ 
          color: 'var(--gold)', 
          textShadow: '0 0 30px rgba(255,215,0,.5)',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '11px'
        }}
      >
        OATHBOUND
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-semibold tracking-[3px] uppercase text-white/60 no-underline transition-colors duration-200 relative group hover:text-[#FFD700]"
            >
              {link}
              <span
                className="absolute bottom-[-4px] left-0 right-0 h-[1px] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
                style={{ background: 'var(--gold)' }}
              />
            </a>
          </li>
        ))}
      </ul>

      <button
        className="hidden md:block px-6 py-3 border transition-all duration-200 tracking-widest cursor-none"
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '7px',
          color: 'var(--gold)',
          borderColor: 'var(--gold)',
          backgroundColor: 'transparent'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--gold)';
          e.currentTarget.style.color = 'var(--void)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--gold)';
        }}
      >
        BEGIN REUNION
      </button>
    </nav>
  );
};