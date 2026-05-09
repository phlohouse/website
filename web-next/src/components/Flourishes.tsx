// Decorative SVG ribbons + glows that thread through the page sections.
// All purely presentational, hidden from screen readers.

/* -------------------------------------------------------- HERO RIBBON
 * Watercolor flow inspired by the Phlo brand asset: bright translucent
 * strands of blue → cyan → green → amber sweeping across the viewport,
 * curling into a loop on the right.
 */
export function HeroRibbon() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[58%] -z-10 h-[560px] w-full -translate-y-1/2"
      viewBox="0 0 1600 640"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Bright vivid gradient matching the brand ribbon */}
        <linearGradient
          id="hero-ribbon"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="320"
          x2="1600"
          y2="320"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="35%" stopColor="#22D3EE" />
          <stop offset="60%" stopColor="#22C55E" />
          <stop offset="85%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <filter id="hero-blur" x="-5%" y="-30%" width="110%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="hero-blur-soft" x="-5%" y="-30%" width="110%" height="160%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Wide wash, softest and most blurred. Sets the airy backdrop. */}
      <path
        d="M -120 380
           C 280 240, 620 480, 940 360
           C 1120 300, 1240 240, 1340 260
           C 1410 275, 1460 320, 1430 360
           C 1400 400, 1340 400, 1320 360
           C 1300 320, 1340 295, 1390 315
           C 1450 340, 1520 360, 1640 340"
        fill="none"
        stroke="url(#hero-ribbon)"
        strokeWidth="120"
        strokeLinecap="round"
        opacity="0.08"
        filter="url(#hero-blur)"
      />

      {/* Mid strand, the dominant ribbon. */}
      <path
        d="M -120 400
           C 280 260, 620 500, 960 380
           C 1130 320, 1240 260, 1340 280
           C 1410 295, 1460 340, 1430 380
           C 1400 420, 1340 420, 1320 380
           C 1300 340, 1340 315, 1390 335
           C 1450 360, 1520 380, 1640 360"
        fill="none"
        stroke="url(#hero-ribbon)"
        strokeWidth="42"
        strokeLinecap="round"
        opacity="0.18"
        filter="url(#hero-blur-soft)"
      />

      {/* Crisp accent strand */}
      <path
        d="M -120 420
           C 300 280, 640 510, 980 400
           C 1140 340, 1240 280, 1340 300
           C 1410 315, 1460 360, 1430 400
           C 1400 440, 1340 440, 1320 400
           C 1300 360, 1340 335, 1390 355
           C 1450 380, 1520 400, 1640 380"
        fill="none"
        stroke="url(#hero-ribbon)"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.28"
      />

      {/* Hair-thin top highlight */}
      <path
        d="M -120 440
           C 320 300, 660 520, 1000 420
           C 1160 360, 1260 300, 1360 320"
        fill="none"
        stroke="url(#hero-ribbon)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.24"
      />

      {/* Lower secondary wash, very faint */}
      <path
        d="M -120 480
           C 360 380, 720 540, 1100 460
           C 1280 420, 1420 400, 1640 440"
        fill="none"
        stroke="url(#hero-ribbon)"
        strokeWidth="60"
        strokeLinecap="round"
        opacity="0.07"
        filter="url(#hero-blur)"
      />
    </svg>
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
