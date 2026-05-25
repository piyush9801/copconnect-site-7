import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useRef } from 'react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const TIERS = [
  {
    kicker: 'Entry Level',
    title: 'CCIO Associate',
    desc: 'For anyone who wants to protect their community. No tech background needed.',
    perks: ['16-hour certification', 'Digital CCIO badge', 'Community resource kit', 'Monthly webinars'],
    hot: false,
  },
  {
    kicker: 'Most Popular',
    title: 'CCIO Professional',
    desc: 'For educators, NGO workers, trainers and RWA leaders who want to drive real impact.',
    perks: ['40-hour curriculum', 'Scroll Control access', 'Session facilitation kit', 'ISAC mentorship', 'Impact dashboard', 'LEA coordination'],
    hot: true,
  },
  {
    kicker: 'NCC / Youth',
    title: 'CCIO Cadet',
    desc: 'A special track for NCC cadets joining the 293+ NCC CCIOs serving as cyber safety ambassadors.',
    perks: ['NCC-integrated curriculum', 'Campus ambassador role', 'Annual CCIO Meetup invite', 'Service credit recognition'],
    hot: false,
  },
]

const IMPACT = [
  { n: '1,000+', l: 'CCIOs Trained' },
  { n: '293', l: 'NCC Cadets' },
  { n: '222+', l: 'Awareness Sessions' },
  { n: '1,446+', l: 'Total Interventions' },
  { n: '2 Lakh+', l: 'Indirect Beneficiaries' },
  { n: '25,455+', l: 'Direct Beneficiaries' },
]

function Tier({ t, i }: { t: typeof TIERS[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-3xl p-8 transition-all hover:-translate-y-1.5 ${
        t.hot
          ? 'bg-gradient-to-br from-[#2A1A0F] to-[#1A1209] border-2 border-brand shadow-[0_30px_60px_-30px_rgba(232,101,42,0.6)]'
          : 'bg-white/[0.04] border border-white/15'
      }`}
    >
      {t.hot && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <div className="text-brand-mid text-xs font-bold uppercase tracking-wider">{t.kicker}</div>
      <h3 className="font-serif text-2xl text-white mt-1.5 mb-3">{t.title}</h3>
      <p className="text-sm text-white/60 leading-relaxed mb-6">{t.desc}</p>
      <ul className="space-y-2.5">
        {t.perks.map(p => (
          <li key={p} className="flex items-start gap-2">
            <span className="w-4 h-4 rounded-full bg-brand-mid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-2.5 h-2.5 text-brand-mid" strokeWidth={3} />
            </span>
            <span className="text-sm text-white/80">{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function CCIO() {
  return (
    <section id="ccio" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_30%,rgba(232,101,42,0.28)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-5">
            Cinematic Leadership
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02]">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Become a', className: 'text-white' },
                { text: 'Cyber Community', className: 'text-white' },
                { text: 'Intelligence Officer', className: 'text-brand-mid italic' },
              ]}
            />
          </h2>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed mt-6">
            CCIOs are community champions — trained people who bridge the gap between citizens and law enforcement at the grassroots level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {TIERS.map((t, i) => <Tier key={t.title} t={t} i={i} />)}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-7 py-3.5 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
          >
            Apply to Become a CCIO
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-14"
        >
          {IMPACT.map(s => (
            <div key={s.l} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 text-center">
              <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-mid leading-none">{s.n}</div>
              <div className="text-[11px] text-white/45 mt-2 font-medium">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
