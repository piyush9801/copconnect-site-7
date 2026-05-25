type Props = { className?: string }

export default function ShieldOutline({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      style={{ filter: 'drop-shadow(0 0 24px rgba(232, 101, 42, 0.55)) drop-shadow(0 0 4px rgba(255, 200, 150, 0.7))' }}
    >
      <path
        d="M50 4 L92 18 L92 60 Q92 92 50 116 Q8 92 8 60 L8 18 Z"
        fill="none"
        stroke="#F0A075"
        strokeWidth="0.8"
        strokeDasharray="2.5 2"
        strokeLinecap="round"
      />
      <path
        d="M50 4 L92 18 L92 60 Q92 92 50 116 Q8 92 8 60 L8 18 Z"
        fill="none"
        stroke="#FFE4D0"
        strokeWidth="0.35"
        strokeDasharray="2.5 2"
        strokeLinecap="round"
      />
    </svg>
  )
}
