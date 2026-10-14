/**
 * Original EAK International School crest: a navy shield with a gold
 * open book, rising sun and the EAK monogram.
 */
export default function Logo({ className = 'h-12 w-12', withWordmark = true, light = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 64 64" className={className} role="img" aria-label="EAK International School crest">
        <path d="M32 3 57 12v18c0 15.5-10.6 26.4-25 31C17.6 56.4 7 45.5 7 30V12L32 3z" fill="#0a1a33" />
        <path d="M32 7.5 53 14.5V30c0 13.2-9 22.6-21 26.9C20 52.6 11 43.2 11 30V14.5L32 7.5z" fill="none" stroke="#c9a227" strokeWidth="2" />
        {/* rising sun */}
        <circle cx="32" cy="20" r="4" fill="#ddb84e" />
        <g stroke="#ddb84e" strokeWidth="1.4" strokeLinecap="round">
          <path d="M32 12.5v-2.4M24.5 14.5l-1.7-1.7M39.5 14.5l1.7-1.7" />
        </g>
        {/* open book */}
        <path d="M20 28c4-2.4 8-2.4 12 0 4-2.4 8-2.4 12 0v9.5c-4-2.4-8-2.4-12 0-4-2.4-8-2.4-12 0V28z" fill="#f7ecd2" />
        <path d="M32 25.8v12" stroke="#0a1a33" strokeWidth="1.4" />
        {/* EAK monogram */}
        <text x="32" y="50.5" textAnchor="middle" fill="#c9a227" fontSize="8.5" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="1.5">
          EAK
        </text>
      </svg>

      {withWordmark &&
        (<span className="leading-tight">
          <span className={`block font-display text-xl font-bold tracking-wide ${light ? 'text-white' : 'text-navy-900'}`}>
            EAK International
          </span>
          
          <span className={`block text-[0.65rem] font-semibold uppercase tracking-[0.32em] ${light ? 'text-gold-400' : 'text-gold-600'}`}>
            School · Est. 1998
          </span>
        </span>)
      }
    </span>
  );
}
