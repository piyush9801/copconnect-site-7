import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle, Lock, Phone, type LucideIcon } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

type Warning = {
  title: string
  position: string
  delay: number
  float: 'float-1' | 'float-2' | 'float-3'
  Ico: LucideIcon
}

const WARNINGS: Warning[] = [
  { title: 'PHISHING POPUP', position: 'top-[12%] -left-3 sm:-left-6 lg:-left-10', delay: 0.6, float: 'float-1', Ico: AlertTriangle },
  { title: 'OTP SCAM', position: 'top-[28%] right-2 sm:right-4 lg:-right-4', delay: 0.8, float: 'float-2', Ico: Lock },
  { title: 'FAKE SUPPORT CALL', position: 'bottom-[18%] -left-2 sm:-left-4', delay: 1.0, float: 'float-3', Ico: Phone },
]

const STATS = [
  { n: '1,446+', l: 'Interventions' },
  { n: '25K+', l: 'Lives Protected' },
  { n: '1,000+', l: 'CCIOs Trained' },
  { n: '2L+', l: 'Indirect Reach' },
]

export default function Hero() {
  return (
    <section id="home" className="bg-cream relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT: family image with shield aura + 3 floating warning labels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square rounded-3xl overflow-hidden"
          >
            <img
              src="https://copconnect-new-site.vercel.app/images/hero.png"
              alt="A family using a tablet — cyber safety starts at home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Warm glow vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />
            {/* Orange shield aura */}
            <div className="absolute inset-[12%] rounded-full shield-pulse pointer-events-none" />

            {WARNINGS.map((w) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: w.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${w.position} z-10 pointer-events-none`}
              >
                <div className={`${w.float} bg-white/95 backdrop-blur-sm border border-white/70 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.22)] pl-2 pr-4 py-1.5 inline-flex items-center gap-2`}>
                  <span className="w-6 h-6 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0">
                    <w.Ico className="w-3.5 h-3.5 text-brand" strokeWidth={2} />
                  </span>
                  <span className="font-bold text-[10px] sm:text-[11px] text-ink uppercase tracking-wider whitespace-nowrap">{w.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: badge + headline + subtitle + CTAs + 2x2 stats */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3.5 py-2 self-start mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-ink-mid">
                Active across India · Powered by ISAC Foundation
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.03em] text-ink">
              <WordsPullUp text="Real People." />
              <br />
              <WordsPullUp text="Real Safety." delayBase={0.1} />
              <br />
              <span className="text-brand">
                <WordsPullUp text="Real Change." delayBase={0.2} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-ink-mid leading-relaxed mt-6 max-w-lg"
            >
              CopConnect bridges the gap between cyber victims and{' '}
              <span className="font-semibold text-ink">law enforcement</span> — building a culture where every family, school, and community feels safe online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mt-7"
            >
              <Link
                to="/platform"
                className="group bg-brand hover:bg-[#d4541c] text-white font-semibold text-base rounded-full px-6 py-3.5 inline-flex items-center gap-3 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
              >
                Access the Portal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/sessions"
                className="group bg-white hover:bg-cream-dark text-ink font-semibold text-base rounded-full px-6 py-3.5 inline-flex items-center gap-3 border border-border transition-all hover:scale-[1.03]"
              >
                Book a Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-3 mt-10 max-w-md"
            >
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="bg-white border border-border rounded-2xl p-5 hover:border-brand-lt transition-colors"
                >
                  <div className="font-serif font-bold text-3xl text-ink leading-none">{s.n}</div>
                  <div className="text-xs text-muted mt-1.5 font-medium">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
