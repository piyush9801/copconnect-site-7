type Props = { className?: string }

// Stylized India outline — recognizable not pixel-perfect
export default function IndiaMap({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M27 14 Q22 10 30 11 L42 8 Q52 8 60 12 L70 18 Q78 24 80 32 L82 42 Q83 50 78 56 L80 64 Q82 72 76 78 L70 86 Q60 96 50 100 L46 110 Q42 116 38 110 L35 100 Q32 94 30 86 L25 76 Q20 66 22 58 L18 48 Q15 38 20 30 L22 22 Q24 16 27 14 Z" />
      {/* Sri Lanka */}
      <ellipse cx="50" cy="112" rx="3" ry="4" />
      {/* Faint dotted territory accent */}
      <circle cx="50" cy="55" r="1" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  )
}
