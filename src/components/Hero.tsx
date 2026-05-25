import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Users,
  AlertTriangle,
  Lock,
  Gift,
  HelpCircle,
  AlertCircle,
  Phone,
  X,
  MapPin,
  Map,
  type LucideIcon,
} from 'lucide-react'
import WordsPullUp from './WordsPullUp'
import IndiaMap from './IndiaMap'

type Notif = {
  title: string
  body: string
  position: string
  delay: number
  float: 'float-1' | 'float-2' | 'float-3'
  Ico: LucideIcon
  dismissable?: boolean
}

const NOTIFS: Notif[] = [
  { title: 'Unknown Sender', body: 'Click here to verify your account', position: 'top-[6%] left-[2%] sm:left-[3%]', delay: 0.6, float: 'float-1', Ico: AlertTriangle },
  { title: 'OTP Alert', body: 'Do not share this code · 123456', position: 'top-[8%] right-[6%] lg:right-[18%]', delay: 0.8, float: 'float-2', Ico: Lock },
  { title: 'WIN iPHONE 15', body: 'Claim your prize now! bit.ly/free-gift', position: 'top-[42%] left-[1%] sm:left-[2%]', delay: 1.0, float: 'float-3', Ico: Gift },
  { title: 'Fake Support', body: 'We need more info to unblock your ID', position: 'top-[38%] right-[3%] lg:right-[12%]', delay: 1.2, float: 'float-1', Ico: HelpCircle },
  { title: 'Suspicious Login', body: 'New device detected from unknown location', position: 'bottom-[10%] left-[2%]', delay: 1.4, float: 'float-2', Ico: AlertCircle },
  { title: 'Scam Call', body: '+91 98765 43210 · Incoming call…', position: 'bottom-[22%] right-[4%] lg:right-[14%]', delay: 1.6, float: 'float-3', Ico: Phone, dismissable: true },
]

const MINI: { Ico: LucideIcon; label: string; desc: string }[] = [
  { Ico: ShieldCheck, label: 'Report', desc: 'Cyber incidents\nwith confidence' },
  { Ico: BookOpen, label: 'Learn', desc: 'Understand risks\nand stay safe' },
  { Ico: Users, label: 'Connect', desc: 'Get expert guidance\nand support' },
]

const STATS: { Ico: LucideIcon; n: string; l: string }[] = [
  { Ico: Users, n: '1,446+', l: 'Communities\nReached' },
  { Ico: BookOpen, n: '25K+', l: 'Safety Sessions\nConducted' },
  { Ico: ShieldCheck, n: '1,000+', l: 'Reports\nSupported' },
  { Ico: Map, n: '21+', l: 'States\nImpacted' },
]

function NotifCard({ n }: { n: Notif }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: n.delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${n.position} z-20`}
    >
      <div className={`${n.float} bg-black/65 backdrop-blur-md border border-white/15 rounded-2xl shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] px-3.5 py-2.5 max-w-[230px] w-max`}>
        <div className="flex items-start gap-2.5">
          <span className="w-6 h-6 rounded-md bg-brand flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_12px_rgba(232,101,42,0.6)]">
            <n.Ico className="w-3.5 h-3.5 text-white" strokeWidth={2.2} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-white text-[11px] sm:text-xs font-bold leading-tight">{n.title}</div>
            <div className="text-white/65 text-[10px] sm:text-[11px] leading-snug mt-0.5">{n.body}</div>
          </div>
          {n.dismissable && (
            <button
              type="button"
              className="w-5 h-5 rounded-full bg-red-500/90 flex items-center justify-center flex-shrink-0 mt-0.5 pointer-events-none"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3 text-white" strokeWidth={3} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="bg-cream relative overflow-hidden">
      {/* Hero: 2-col split — image LEFT, cream content RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] min-h-[640px] lg:min-h-[760px]">
        {/* LEFT: full-bleed image with 6 dark notification cards */}
        <div className="relative bg-[#0E0905] min-h-[480px] lg:min-h-[760px] overflow-hidden">
          <motion.img
            src="/hero-family.png"
            alt="Mother and son using a tablet — cyber safety begins at home"
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 14, ease: 'linear' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient fade to cream on right edge to blend into right column */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-cream pointer-events-none" />
          {/* Bottom vignette for stats-band readability */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream/40 to-transparent lg:hidden pointer-events-none" />

          {NOTIFS.map((n) => <NotifCard key={n.title} n={n} />)}
        </div>

        {/* RIGHT: cream content */}
        <div className="bg-cream px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-16 xl:py-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white border border-border rounded-full pl-3 pr-4 py-2 self-start mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
          >
            <span className="w-5 h-5 rounded-full bg-brand-pale flex items-center justify-center">
              <ShieldCheck className="w-3 h-3 text-brand" strokeWidth={2.2} />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-ink-mid">
              Trusted by Schools · Families · ISAC Foundation
            </span>
          </motion.div>

          <h1 className="font-serif font-medium text-[15vw] sm:text-[11vw] lg:text-[6.5vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[0.95] tracking-[-0.035em] text-ink">
            <div><WordsPullUp text="Protecting" /></div>
            <div className="text-brand"><WordsPullUp text="Families" delayBase={0.1} /></div>
            <div><WordsPullUp text="Online." delayBase={0.2} /></div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-ink-mid leading-[1.55] mt-6 max-w-xl"
          >
            CopConnect helps families, schools, and communities respond to cyber threats with{' '}
            <span className="text-brand font-semibold">real guidance</span>, verified support, and{' '}
            <span className="text-brand font-semibold">human connection</span>.
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
              Book a Safety Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 max-w-2xl"
          >
            {MINI.map(({ Ico, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0">
                  <Ico className="w-5 h-5 sm:w-6 sm:h-6 text-brand" strokeWidth={1.7} />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm sm:text-base text-ink leading-tight">{label}</div>
                  <div className="text-[11px] sm:text-xs text-muted leading-snug mt-1 whitespace-pre-line">{desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom stats band — overlapping white card */}
      <div className="bg-cream px-4 sm:px-6 lg:px-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1440px] mx-auto bg-white border border-border rounded-3xl shadow-[0_24px_60px_-25px_rgba(0,0,0,0.15)] -mt-12 relative z-20 p-6 sm:p-7 lg:p-9 grid grid-cols-1 md:grid-cols-[1.2fr_repeat(4,1fr)_1.2fr] gap-6 lg:gap-8 items-center"
        >
          <div>
            <div className="font-serif text-lg sm:text-xl text-ink leading-tight">
              Making the internet<br />safer for everyone
            </div>
            <div className="mt-3 h-0.5 w-10 bg-brand rounded-full" />
          </div>
          {STATS.map(({ Ico, n, l }) => (
            <div key={l} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                <Ico className="w-5 h-5 text-ink-mid" strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <div className="font-serif font-bold text-xl sm:text-2xl text-ink leading-none">{n}</div>
                <div className="text-[10px] sm:text-[11px] text-muted leading-tight mt-1 whitespace-pre-line">{l}</div>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 md:justify-end md:border-l md:border-border md:pl-6">
            <div className="min-w-0">
              <div className="font-bold text-sm text-ink leading-tight">Active across India</div>
              <div className="text-[11px] text-muted leading-snug flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Powered by ISAC Foundation
              </div>
            </div>
            <IndiaMap className="w-9 h-12 text-muted/40 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
