import { motion } from 'framer-motion'
import { ShieldCheck, Users, BookOpen, Bell, Home, Phone, Lock, MessageSquare, type LucideIcon } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const PILLS: { Ico: LucideIcon; label: string }[] = [
  { Ico: ShieldCheck, label: 'Incident Reporting' },
  { Ico: Users, label: 'CCIO Directory' },
  { Ico: BookOpen, label: 'Resource Hub' },
  { Ico: Bell, label: 'Community Alerts' },
  { Ico: Home, label: 'Family Safety Mode' },
  { Ico: Phone, label: 'LEA Connect' },
  { Ico: Lock, label: 'Verified Auth' },
  { Ico: MessageSquare, label: 'CCIO Chat' },
]

function MockDevice() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative max-w-3xl mx-auto"
    >
      <div className="bg-[#1F1610] rounded-3xl border border-white/10 p-4 sm:p-5 shadow-[0_40px_90px_-30px_rgba(232,101,42,0.4)] relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 bg-black/40 rounded-md mx-3 px-3 py-1 text-[10px] text-white/40">
            copconnect.in / dashboard
          </div>
        </div>
        <div className="bg-[#0E0905] rounded-xl p-5 sm:p-6 min-h-[280px] sm:min-h-[320px] relative overflow-hidden">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-white/50 text-[10px] uppercase tracking-wider mb-1">Dashboard</div>
              <div className="text-white font-serif text-xl">My Case Activity</div>
            </div>
            <div className="text-brand-mid text-xs font-semibold">LIVE</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { l: 'Active Reports', n: '12' },
              { l: 'Resolved', n: '847' },
              { l: 'CCIOs Nearby', n: '04' },
            ].map((s) => (
              <div key={s.l} className="bg-white/[0.04] border border-white/10 rounded-lg p-3">
                <div className="text-[10px] text-white/40 uppercase tracking-wider">{s.l}</div>
                <div className="text-white font-serif text-2xl mt-1">{s.n}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2">
            {[
              { l: 'Phishing report from Bengaluru', t: '2 min ago' },
              { l: 'New CCIO matched in Pune', t: '14 min ago' },
              { l: 'UPI scam alert published', t: '1 hr ago' },
            ].map((r) => (
              <div key={r.l} className="bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2.5 flex items-center justify-between">
                <span className="text-white/80 text-xs">{r.l}</span>
                <span className="text-white/40 text-[10px]">{r.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Platform() {
  return (
    <section id="platform" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(232,101,42,0.22)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto text-center">
        <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-5">
          Digital Platform
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15]">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'One Platform.', className: 'text-white' },
              { text: 'Every Community.', className: 'text-brand-mid italic' },
            ]}
          />
        </h2>
        <p className="text-white/65 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
          The Scroll Control Platform connects citizens, CCIOs, and law enforcement in real time — making reporting easy, help fast, and safety accessible to all.
        </p>

        <div className="mt-14">
          <MockDevice />
        </div>

        <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mt-16 mb-6">
          Features
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {PILLS.map(({ Ico, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.06] border border-white/12 hover:bg-white/[0.1] hover:border-brand-mid/50 transition-colors rounded-full pl-3 pr-5 py-2 inline-flex items-center gap-2"
            >
              <Ico className="w-4 h-4 text-brand-mid" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-white/90">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
