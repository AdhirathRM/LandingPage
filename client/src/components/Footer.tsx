export const Footer = () => {
  return (
    <footer
      className="border-t py-16 px-8 flex items-center justify-between relative z-10"
      style={{
        borderColor: 'rgba(124,61,199,.2)',
        background: 'var(--void)',
      }}
    >
      <div
        className="text-lg opacity-50 tracking-widest"
        style={{
          color: 'var(--gold)',
          fontFamily: "'Cinzel Decorative', serif",
        }}
      >
        OATHBOUND
      </div>

      <div className="text-center">
        <div
          className="text-xs font-mono text-white/20 leading-loose tracking-widest"
        >
          <div>OATHBOUND: THE TEN TRIALS</div>
          <div>© 2026 EPIC GAMES STUDIO</div>
          <div>ALL RIGHTS RESERVED</div>
        </div>
      </div>

      <div
        className="px-5 py-2 border text-xs tracking-widest uppercase"
        style={{
          borderColor: 'rgba(124,61,199,.3)',
          color: 'var(--pglow)',
        }}
      >
        COMING SOON
      </div>
    </footer>
  );
};
