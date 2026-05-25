import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useRef } from 'react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

type Item = {
  num: string
  title: string
  bullets: string[]
}

const ITEMS: Item[] = [
  {
    num: '01',
    title: 'Incident Reporting',
    bullets: [
      'Report cyber crimes in under 60 seconds.',
      'Track your case with real-time updates.',
      'Direct routing to verified law enforcement.',
      'Multilingual support across 12 Indian languages.',
    ],
  },
  {
    num: '02',
    title: 'CCIO Directory',
    bullets: [
      '1,000+ trained CCIOs across India.',
      'Find your nearest officer by pincode.',
      'In-person guidance for victims and families.',
    ],
  },
  {
    num: '03',
    title: 'Family Safety Mode',
    bullets: [
      'Unified dashboard for parents and kids.',
      'Set boundaries together, not in secret.',
      'Weekly digital check-ins built into the app.',
    ],
  },
]

function HeroCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl overflow-hidden flex flex-col justify-end min-h-[340px] lg:min-h-0 bg-ink"
    >
      <img
        src="https://copconnect-new-site.vercel.app/images/hero.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-85"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
      <div className="relative p-7">
        <div className="text-brand-mid text-xs uppercase tracking-[0.15em] font-bold mb-2">
          The mission
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
          One platform.
          <br />
          <span className="italic text-brand-mid">Every community.</span>
        </h3>
        <p className="text-white/70 text-sm mt-3 leading-relaxed max-w-[280px]">
          The Scroll Control Platform connects citizens, CCIOs, and law enforcement in real time.
        </p>
      </div>
    </motion.div>
  )
}

function FeatureCard({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-border rounded-3xl p-7 flex flex-col min-h-[340px] lg:min-h-0 hover:shadow-[0_24px_50px_-24px_rgba(232,101,42,0.28)] hover:-translate-y-1.5 transition-all"
    >
      <div className="font-serif text-4xl font-bold text-brand-lt leading-none mb-3">{item.num}</div>
      <h3 className="font-serif text-xl sm:text-2xl text-ink leading-tight mb-4">{item.title}</h3>
      <ul className="space-y-2.5 flex-1">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-brand" strokeWidth={3} />
            </span>
            <span className="text-muted text-sm leading-snug">{b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-brand font-semibold text-sm mt-6 inline-flex items-center gap-2 group"
      >
        Learn more
        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
      </a>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="bg-cream px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">
            Digital Platform
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05]">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Grassroots workflows', className: 'text-ink' },
                { text: 'for visionary citizens.', className: 'text-brand italic' },
              ]}
            />
          </h2>
          <p className="text-ink-mid text-base sm:text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
            Built for pure safety. Powered by people. Every workflow we ship is shaped by victims, CCIOs, and the officers who answer the call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-fr">
          <HeroCard index={0} />
          {ITEMS.map((item, i) => (
            <FeatureCard key={item.num} item={item} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
