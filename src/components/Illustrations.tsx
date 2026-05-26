import React from 'react';

// Common kawaii face
export const KawaiiFace = ({ cx = 12, cy = 12, scale = 1, blush = true }) => (
  <g transform={`translate(${cx - 12 * scale}, ${cy - 12 * scale}) scale(${scale})`}>
    <circle cx="8" cy="10" r="1.5" fill="var(--color-warm-brown)" />
    <circle cx="16" cy="10" r="1.5" fill="var(--color-warm-brown)" />
    <path d="M 9 14 Q 12 17 15 14" stroke="var(--color-warm-brown)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {blush && (
      <>
        <ellipse cx="5" cy="12" rx="2" ry="1.5" fill="var(--color-peachy)" opacity="0.6" />
        <ellipse cx="19" cy="12" rx="2" ry="1.5" fill="var(--color-peachy)" opacity="0.6" />
      </>
    )}
  </g>
);

export const CuteMilkBottle = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 35 30 L 65 30 C 70 30 75 35 75 40 L 75 75 C 75 85 65 90 50 90 C 35 90 25 85 25 75 L 25 40 C 25 35 30 30 35 30 Z" fill="#FFF8F3" stroke="#FFB6A3" strokeWidth="4" />
    <path d="M 40 15 L 60 15 C 65 15 65 30 65 30 L 35 30 C 35 30 35 15 40 15 Z" fill="#A8D8C8" />
    <circle cx="50" cy="10" r="6" fill="#FFB6A3" />
    <line x1="30" y1="50" x2="40" y2="50" stroke="#FFB6A3" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="65" x2="40" y2="65" stroke="#FFB6A3" strokeWidth="3" strokeLinecap="round" />
    <KawaiiFace cx="50" cy="60" scale={1.2} />
  </svg>
);

export const DropIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M 50 15 C 50 15 20 45 20 70 C 20 85 30 95 50 95 C 70 95 80 85 80 70 C 80 45 50 15 50 15 Z" fill="#FFF8F3" stroke="#A8D8C8" strokeWidth="4" />
    <KawaiiFace cx="50" cy="65" scale={1.5} />
  </svg>
);

export const StarIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M 50 10 L 61 35 L 88 35 L 66 52 L 75 78 L 50 62 L 25 78 L 34 52 L 12 35 L 39 35 Z" fill="#FFE2A8" stroke="#FFB6A3" strokeWidth="4" strokeLinejoin="round" />
    <KawaiiFace cx="50" cy="55" scale={1.3} />
  </svg>
);

export const CycleIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="40" fill="#A8D8C8" opacity="0.3" />
    <path d="M 20 50 A 30 30 0 0 1 80 50" fill="none" stroke="#FFB6A3" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 15" />
    <path d="M 80 50 A 30 30 0 0 1 20 50" fill="none" stroke="#5C4A3D" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 15" opacity="0.5" />
    <g transform="translate(30, 25) scale(0.4)"><CuteMilkBottle /></g>
    <g transform="translate(30, 50) scale(0.4)"><DropIcon /></g>
  </svg>
);

export const MotherBabyIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="45" fill="#FFE2A8" opacity="0.5" />
    <path d="M 30 90 C 30 60 70 60 70 90" fill="#FFB6A3" />
    <circle cx="50" cy="45" r="20" fill="#FFF8F3" stroke="#5C4A3D" strokeWidth="2" />
    <KawaiiFace cx="50" cy="48" scale={1} />
    <circle cx="65" cy="65" r="12" fill="#FFF8F3" stroke="#5C4A3D" strokeWidth="2" />
    <KawaiiFace cx="65" cy="65" scale={0.6} />
  </svg>
);

export const DiaperIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M 20 30 L 80 30 C 90 60 70 80 50 90 C 30 80 10 60 20 30 Z" fill="#FFF8F3" stroke="#A8D8C8" strokeWidth="4" strokeLinejoin="round" />
    <path d="M 40 55 L 48 65 L 65 45" fill="none" stroke="#FFB6A3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HeartCareIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M 50 85 C 50 85 15 55 15 35 C 15 20 25 10 40 10 C 46 10 50 15 50 15 C 50 15 54 10 60 10 C 75 10 85 20 85 35 C 85 55 50 85 50 85 Z" fill="#FFB6A3" />
    <path d="M 80 35 C 80 50 55 75 50 80 C 45 75 20 50 20 35 C 20 23 28 15 40 15 C 45 15 50 20 50 20 C 50 20 55 15 60 15 C 72 15 80 23 80 35 Z" fill="#FFF8F3" />
    <KawaiiFace cx="50" cy="40" scale={1.2} />
  </svg>
);

export const PumpIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M 35 40 L 65 40 L 70 80 C 70 85 65 90 50 90 C 35 90 30 85 30 80 Z" fill="#FFF8F3" stroke="#A8D8C8" strokeWidth="4" />
    <path d="M 50 40 L 50 20 C 50 15 55 15 60 20 L 75 40 Z" fill="#FFF8F3" stroke="#FFB6A3" strokeWidth="4" strokeLinejoin="round" />
    <path d="M 25 40 L 50 40 L 40 20 C 35 15 30 15 25 20 Z" fill="#FFF8F3" stroke="#FFB6A3" strokeWidth="4" strokeLinejoin="round" />
    <KawaiiFace cx="50" cy="65" scale={1.2} />
  </svg>
);

export const FoodIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="45" cy="55" r="35" fill="#FFF8F3" stroke="#A8D8C8" strokeWidth="4" />
    <circle cx="35" cy="45" r="10" fill="#FFB6A3" />
    <circle cx="55" cy="65" r="12" fill="#FFE2A8" />
    <path d="M 30 70 A 15 15 0 0 1 60 40" fill="none" stroke="#A8D8C8" strokeWidth="6" strokeLinecap="round" />
    <KawaiiFace cx="45" cy="55" scale={1.2} />
    <rect x="75" y="20" width="15" height="40" rx="5" fill="#A8D8C8" opacity="0.6" />
  </svg>
);

export const ReassureIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M 10 50 Q 50 20 90 50 Q 50 80 10 50" fill="#FFE2A8" opacity="0.5" />
    <circle cx="40" cy="50" r="18" fill="#FFF8F3" stroke="#FFB6A3" strokeWidth="3" />
    <KawaiiFace cx="40" cy="50" scale={0.9} />
    <circle cx="65" cy="50" r="14" fill="#FFF8F3" stroke="#FFB6A3" strokeWidth="3" />
    <KawaiiFace cx="65" cy="50" scale={0.7} />
  </svg>
);

export const ToddlerIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="45" fill="#FFB6A3" opacity="0.3" />
    <path d="M 25 95 C 25 50 75 50 75 95" fill="#FFF8F3" stroke="#5C4A3D" strokeWidth="2" />
    <circle cx="50" cy="40" r="22" fill="#FFF8F3" stroke="#5C4A3D" strokeWidth="2" />
    <KawaiiFace cx="50" cy="45" scale={1.2} />
    <circle cx="50" cy="75" r="18" fill="#FFF8F3" stroke="#A8D8C8" strokeWidth="2" />
    <KawaiiFace cx="50" cy="75" scale={0.8} />
  </svg>
);

export const HeroMotherIllustration = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <circle cx="100" cy="100" r="90" fill="#FFE2A8" opacity="0.4" />
    <circle cx="120" cy="80" r="70" fill="#A8D8C8" opacity="0.3" />
    
    {/* Mother body */}
    <path d="M 40 200 C 40 100 160 100 160 200" fill="#FFB6A3" />
    {/* Mother head */}
    <circle cx="100" cy="80" r="40" fill="#FFF8F3" stroke="#5C4A3D" strokeWidth="3" />
    {/* Hair (simple shape) */}
    <path d="M 50 80 C 50 20 150 20 150 80 C 150 50 50 50 50 80 Z" fill="#5C4A3D" />
    <path d="M 50 80 C 50 120 70 140 70 140 Q 60 110 50 80" fill="#5C4A3D" />
    <path d="M 150 80 C 150 120 130 140 130 140 Q 140 110 150 80" fill="#5C4A3D" />
    
    <KawaiiFace cx="100" cy="85" scale={2} />
    
    {/* Baby body */}
    <path d="M 70 170 C 70 140 130 140 130 170 C 130 190 70 190 70 170 Z" fill="#FFF8F3" stroke="#A8D8C8" strokeWidth="3" />
    {/* Baby head */}
    <circle cx="100" cy="140" r="25" fill="#FFF8F3" stroke="#5C4A3D" strokeWidth="2" />
    <KawaiiFace cx="100" cy="142" scale={1.2} />
    
    {/* Mother arms hugging */}
    <path d="M 50 130 C 70 170 130 170 150 130" fill="none" stroke="#FFB6A3" strokeWidth="15" strokeLinecap="round" />
  </svg>
);

export const FloatingElements = () => (
  <>
    <svg className="absolute w-12 h-12" style={{ top: '10%', left: '15%' }} viewBox="0 0 50 50">
      <path d="M 10 25 C 10 10 25 10 25 25 C 25 10 40 10 40 25 C 40 40 25 45 25 45 C 25 45 10 40 10 25 Z" fill="#FFB6A3" opacity="0.6" />
    </svg>
    <svg className="absolute w-8 h-8 animate-pulse" style={{ top: '60%', left: '8%' }} viewBox="0 0 50 50">
      <path d="M 25 5 L 30 20 L 45 25 L 30 30 L 25 45 L 20 30 L 5 25 L 20 20 Z" fill="#FFE2A8" />
    </svg>
    <svg className="absolute w-16 h-16" style={{ top: '20%', right: '10%' }} viewBox="0 0 100 50">
      <path d="M 20 30 C 20 15 40 15 45 25 C 55 10 75 10 80 25 C 90 25 90 40 80 40 L 20 40 C 10 40 10 30 20 30 Z" fill="#FFF8F3" opacity="0.8" />
      <KawaiiFace cx="50" cy="30" scale={0.7} />
    </svg>
    <svg className="absolute w-6 h-6 animate-bounce" style={{ top: '70%', right: '20%' }} viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="15" fill="#A8D8C8" opacity="0.5" />
    </svg>
  </>
);

export const CloudSeparator = ({ className = "w-full h-16" }) => (
  <svg preserveAspectRatio="none" viewBox="0 0 1440 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0,50 C120,0 240,100 360,50 C480,0 600,100 720,50 C840,0 960,100 1080,50 C1200,0 1320,100 1440,50 L1440,100 L0,100 Z" fill="var(--color-cream)" />
  </svg>
);

export const AboutHeroIcon = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 200 100" className={className}>
    <circle cx="100" cy="50" r="40" fill="#FFE2A8" opacity="0.4" />
    <circle cx="60" cy="50" r="30" fill="#FFB6A3" opacity="0.3" />
    <circle cx="140" cy="50" r="30" fill="#A8D8C8" opacity="0.3" />
    <circle cx="100" cy="50" r="25" fill="#FFF8F3" stroke="#FFB6A3" strokeWidth="3" />
    <KawaiiFace cx="100" cy="50" scale={1.2} />
    <circle cx="50" cy="60" r="20" fill="#FFF8F3" stroke="#A8D8C8" strokeWidth="2" />
    <KawaiiFace cx="50" cy="62" scale={0.9} />
    <circle cx="150" cy="60" r="20" fill="#FFF8F3" stroke="#FFE2A8" strokeWidth="2" />
    <KawaiiFace cx="150" cy="62" scale={0.9} />
  </svg>
);

export const ArticleIconsMap: Record<number, React.FC<{className?: string}>> = {
  1: DropIcon,
  2: StarIcon,
  3: CycleIcon,
  4: MotherBabyIcon,
  5: DiaperIcon,
  6: HeartCareIcon,
  7: PumpIcon,
  8: FoodIcon,
  9: ReassureIcon,
  10: ToddlerIcon,
};
