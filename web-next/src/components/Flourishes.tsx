// Decorative SVG ribbons + glows that thread through the page sections.
// All purely presentational, hidden from screen readers.

export function HeroRibbon() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[57%] -z-10 h-[520px] -translate-y-1/2 overflow-hidden"
    >
      <img
        src="/images/gradient-ribbon-wave.png"
        alt=""
        className="absolute left-1/2 top-1/2 h-[360px] w-[135vw] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center opacity-75 mix-blend-multiply"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface/90"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent"
      />
    </div>
  )
}

/* -------------------------------------------------------- FOOTER RIBBON
 * Edge-to-edge double-strand wave behind the final CTA / footer area.
 * Vivid brand palette: blue → cyan → green → amber.
 */
export function FooterRibbon() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] w-full"
      viewBox="0 0 1600 420"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient
          id="footer-ribbon"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="210"
          x2="1600"
          y2="210"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="40%" stopColor="#22D3EE" />
          <stop offset="70%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <filter id="footer-blur" x="-5%" y="-30%" width="110%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* Background wash */}
      <path
        d="M -100 320
           C 320 200, 720 420, 1080 260
           S 1420 220, 1700 280"
        fill="none"
        stroke="url(#footer-ribbon)"
        strokeWidth="120"
        strokeLinecap="round"
        opacity="0.18"
        filter="url(#footer-blur)"
      />

      {/* Mid strand */}
      <path
        d="M -100 340
           C 320 220, 720 440, 1080 280
           S 1420 240, 1700 300"
        fill="none"
        stroke="url(#footer-ribbon)"
        strokeWidth="36"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Crisp accent line */}
      <path
        d="M -100 360
           C 320 240, 720 460, 1080 300
           S 1420 260, 1700 320"
        fill="none"
        stroke="url(#footer-ribbon)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

/* -------------------------------------------------------- INTER-SECTION RIBBON
 * Smaller decorative wave used at section seams.
 */
export function SectionRibbon({
  flip = false,
  className = '',
}: {
  flip?: boolean
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -z-10 h-40 w-full ${
        flip ? 'top-0 -scale-y-100' : 'bottom-0'
      } ${className}`}
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="section-ribbon" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FBBC05" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 80 C 360 20, 720 140, 1440 60"
        fill="none"
        stroke="url(#section-ribbon)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0 100 C 360 40, 720 160, 1440 80"
        fill="none"
        stroke="url(#section-ribbon)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

/* -------------------------------------------------------- WORKFLOW CONNECTOR
 * Bundle of three parallel thin lines connecting pipeline nodes.
 * Used inside PipelineFlow above each connector slot.
 */
export function WorkflowStrand({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-8 w-20 ${className}`}
      viewBox="0 0 80 32"
      fill="none"
    >
      <defs>
        <linearGradient id="strand-grad" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>
      <path
        d="M2 10 C 24 4, 56 4, 78 10"
        stroke="url(#strand-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M2 16 H 78"
        stroke="url(#strand-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M2 22 C 24 28, 56 28, 78 22"
        stroke="url(#strand-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* End cap glow */}
      <circle cx="78" cy="16" r="2.6" fill="#2DD4BF" opacity="0.7" />
    </svg>
  )
}

/* -------------------------------------------------------- GLOW
 * Reusable soft circular/elliptical blob.
 */
export function Glow({
  className = '',
  tone = 'brand',
}: {
  className?: string
  tone?: 'brand' | 'teal' | 'amber'
}) {
  const colors = {
    brand: 'from-brand/40 via-brand/20 to-transparent',
    teal: 'from-teal/40 via-teal/20 to-transparent',
    amber: 'from-amber/40 via-amber/20 to-transparent',
  }
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full bg-gradient-radial blur-3xl ${colors[tone]} ${className}`}
    />
  )
}
