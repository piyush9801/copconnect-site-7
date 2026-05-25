import { motion } from 'framer-motion'
import { GraduationCap, Building2, Home, Siren, Users, type LucideIcon } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

type Pillar = { Ico: LucideIcon; label: string; angle: number }

const PILLARS: Pillar[] = [
  { Ico: GraduationCap, label: 'Schools', angle: -90 },
  { Ico: Building2, label: 'Corporates', angle: -30 },
  { Ico: Users, label: 'Families', angle: 30 },
  { Ico: Home, label: 'RWAs', angle: 150 },
  { Ico: Siren, label: 'Law Enforcement', angle: 210 },
]

function CommunityWheel() {
  const radius = 46
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto">
      <div className="absolute inset-[5%] rounded-full border-2 border-dashed border-brand-lt/60" />
      <div className="absolute inset-[18%] rounded-full bg-brand-pale" />
      <div className="absolute inset-[24%] rounded-full overflow-hidden shadow-[0_24px_60px_-24px_rgba(232,101,42,0.45)] border-4 border-white">
        <img
          src="https://copconnect-new-site.vercel.app/images/hero.png"
          alt="Family at the heart of the community"
          className="w-full h-full object-cover"
        />
      </div>
      {PILLARS.map(({ Ico, label, angle }, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 50 + radius * Math.cos(rad)
        const y = 50 + radius * Math.sin(rad)
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="bg-white border border-border rounded-full shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] pl-2 pr-4 py-1.5 inline-flex items-center gap-2 whitespace-nowrap">
              <span className="w-7 h-7 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0">
                <Ico className="w-4 h-4 text-brand" strokeWidth={1.7} />
              </span>
              <span className="font-bold text-xs sm:text-sm text-ink">{label}</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-cream px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -bottom-12 -left-12 w-[500px] h-[300px] opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="dot" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.4" fill="#1A1209" />
            </pattern>
          </defs>
          <ellipse cx="180" cy="180" rx="120" ry="80" fill="url(#dot)" />
          <ellipse cx="380" cy="160" rx="80" ry="60" fill="url(#dot)" />
          <ellipse cx="500" cy="200" rx="90" ry="70" fill="url(#dot)" />
          <ellipse cx="650" cy="230" rx="70" ry="55" fill="url(#dot)" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-5">
              40/60 Editorial Split
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.02]">
              <WordsPullUpMultiStyle
                align="left"
                segments={[
                  { text: 'Cyber Safety', className: 'text-ink' },
                  { text: "Isn't a Tech Problem.", className: 'text-ink' },
                  { text: "It's a Human Problem.", className: 'italic text-brand' },
                ]}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-ink-mid text-base sm:text-lg leading-relaxed mt-7 max-w-lg"
            >
              CopConnect is India's most human-centred cyber safety movement. We believe cyber safety isn't a technology problem — it's a people problem. And people solve people problems together.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-muted text-sm sm:text-base leading-relaxed mt-4 max-w-lg"
            >
              Backed by ISAC Foundation and a national network of Cyber Crime Intervention Officers, every session we run and every CCIO we train points to one goal: a safer India.
            </motion.p>
          </div>
          <CommunityWheel />
        </div>
      </div>
    </section>
  )
}
