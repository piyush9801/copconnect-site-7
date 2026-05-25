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

type NotifWithVis = Notif & { hideOnMobile?: boolean }

// Mobile shows just 3 (Unknown Sender top-left, OTP Alert top-right, Scam Call bottom-right)
// Tablet+ (md:) shows all 6
const NOTIFS: NotifWithVis[] = [
  { title: 'Unknown Sender', body: 'Click here to verify your account', position: 'top-[4%] left-[3%] sm:top-[6%] sm:left-[7%]', delay: 0.6, float: 'float-1', Ico: AlertTriangle },
  { title: 'OTP Alert', body: 'Do not share this code · 123456', position: 'top-[26%] right-[3%] sm:top-[10%] sm:right-[26%]', delay: 0.8, float: 'float-2', Ico: Lock },
  { title: 'WIN iPHONE 15', body: 'Claim your prize now! bit.ly/free-gift', position: 'top-[40%] left-[5%]', delay: 1.0, float: 'float-3', Ico: Gift, hideOnMobile: true },
  { title: 'Fake Support', body: 'We need more info to unblock your ID', position: 'top-[42%] right-[22%]', delay: 1.2, float: 'float-1', Ico: HelpCircle, hideOnMobile: true },
  { title: 'Suspicious Login', body: 'New device detected from unknown location', position: 'bottom-[10%] left-[7%]', delay: 1.4, float: 'float-2', Ico: AlertCircle, hideOnMobile: true },
  { title: 'Scam Call', body: '+91 98765 43210 · Incoming call…', position: 'bottom-[4%] right-[3%] sm:bottom-[22%] sm:right-[24%]', delay: 1.6, float: 'float-3', Ico: Phone, dismissable: true },
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

function NotifCard({ n }: { n: NotifWithVis }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: n.delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute ${n.position} z-20 ${n.hideOnMobile ? 'hidden md:block' : ''}`}
    >
      <div className={`${n.float} bg-black/70 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] px-2 sm:px-3.5 py-1.5 sm:py-2.5 max-w-[150px] sm:max-w-[230px] w-max`}>
        <div className="flex items-start gap-2 sm:gap-2.5">
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-brand flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_12px_rgba(232,101,42,0.6)]">
            <n.Ico className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" strokeWidth={2.2} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-white text-[10px] sm:text-xs font-bold leading-tight">{n.title}</div>
            <div className="text-white/65 text-[9px] sm:text-[11px] leading-snug mt-0.5">{n.body}</div>
          </div>
          {n.dismissable && (
            <button
              type="button"
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500/90 flex items-center justify-center flex-shrink-0 mt-0.5 pointer-events-none"
              aria-label="Dismiss"
            >
              <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" strokeWidth={3} />
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
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-[640px] lg:min-h-[760px]">
        {/* LEFT: full-bleed image with 6 dark notification cards */}
        <div className="relative bg-[#0E0905] min-h-[520px] lg:min-h-[760px] overflow-hidden">
          <motion.img
            src="/hero-family.png"
            alt="Mother and son using a tablet — cyber safety begins at home"
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 14, ease: 'linear' }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'left center' }}
          />
          {/* Subtle cream fade at the right edge so the cropped image blends into the cream content column */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-cream pointer-events-none z-10" />
          {/* Bottom vignette on mobile for stats-band readability */}
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

          <h1 className="font-serif font-medium text-[15vw] sm:text-[11vw] lg:text-[6.5vw] xl:text-[6vw] 2xl:text-[5.5vw] leading-[1.05] tracking-[-0.035em] text-ink">
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
            className="grid grid-cols-1 xs:grid-cols-3 gap-4 xs:gap-3 sm:gap-6 mt-10 max-w-2xl"
          >
            {MINI.map(({ Ico, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0">
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

      {/* Bottom stats band — overlapping white card on desktop, normal flow on mobile */}
      <div className="bg-cream px-4 sm:px-6 lg:px-10 pt-16 lg:pt-0 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1440px] mx-auto bg-white border border-border rounded-3xl shadow-[0_24px_60px_-25px_rgba(0,0,0,0.15)] lg:-mt-12 relative z-30 p-5 sm:p-7 lg:p-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_repeat(4,1fr)_1.2fr] gap-5 sm:gap-6 lg:gap-8 items-center"
        >
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
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
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex items-center gap-3 lg:justify-end lg:border-l lg:border-border lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-border/60">
            <div className="min-w-0 flex-1 lg:flex-initial">
              <div className="font-bold text-sm text-ink leading-tight">Active across India</div>
              <div className="text-[11px] text-muted leading-snug flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Powered by ISAC Foundation
              </div>
            </div>
            <IndiaMap className="hidden sm:block w-8 h-11 text-muted/40 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
