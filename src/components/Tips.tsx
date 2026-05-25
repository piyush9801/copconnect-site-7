import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const TIPS = [
  { who: 'For Kids & Teens', title: 'Your Digital Footprint Never Disappears', body: 'Everything you post, share, or send leaves a trace. Ask yourself: would I be okay if Mum, Dad, or my teacher saw this?', quote: "Once it's online, it's online forever. Think before you type!" },
  { who: 'For Families Together', title: 'Parents & Kids: One Safety Team', body: 'Families that talk openly about online experiences are far better protected. Set a weekly "digital check-in" at home.', quote: 'When families stay connected, scammers stay out!' },
  { who: 'For Parents', title: "Know Your Child's Digital World", body: "You wouldn't let a stranger walk into your home. Don't let them into your child's phone. Learn the apps they use.", quote: 'Awareness, not surveillance. Trust is your best parental control.' },
  { who: 'Password Safety', title: 'Passwords: Your First Line of Defence', body: 'Use a different password for every account. Enable two-factor authentication everywhere. Use a password manager.', quote: '123456 is not a password. Neither is your birthday!' },
  { who: 'UPI & Finance', title: 'Never Share Your OTP — Ever', body: 'No bank, no UPI app, and no police officer will ever ask for your OTP or PIN on a call. If they do — hang up immediately.', quote: "Real cops never ask for your OTP. That's how you spot fraud." },
  { who: 'Reporting Cyber Crime', title: 'Know How to Report — Act Fast', body: 'Been a victim? Call Cyber Crime Helpline 1930 or visit cybercrime.gov.in. The sooner you report, the better.', quote: 'You are not alone. CopConnect walks with you every step.' },
]

function Tip({ t, i }: { t: typeof TIPS[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-border rounded-2xl p-7 hover:-translate-y-1.5 hover:border-brand-lt hover:shadow-[0_20px_44px_-22px_rgba(232,101,42,0.25)] transition-all"
    >
      <div className="text-brand text-[10px] font-bold uppercase tracking-[0.07em] mb-2.5">{t.who}</div>
      <h3 className="font-serif text-lg text-ink leading-snug mb-2.5">{t.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{t.body}</p>
      <div className="mt-4 border-l-[3px] border-brand bg-brand-pale px-3.5 py-2.5 rounded-r-xl italic text-sm text-ink-mid font-medium">
        "{t.quote}"
      </div>
    </motion.div>
  )
}

export default function Tips() {
  return (
    <section id="tips" className="bg-cream px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">CopBot's Safety Guide</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.15]">
            Cyber Safety Tips <span className="text-brand italic">for Everyone</span>
          </h2>
          <p className="text-ink-mid text-base sm:text-lg leading-relaxed mt-5">
            Your friendly neighbourhood CopBot shares what every family needs to know to stay safe online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-14">
          {TIPS.map((t, i) => <Tip key={t.title} t={t} i={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="bg-ink rounded-[2rem] p-10 sm:p-14 md:p-20 mt-12 grid grid-cols-1 md:grid-cols-[1.5fr_auto] gap-10 items-center relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[radial-gradient(circle_at_right,rgba(232,101,42,0.18)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.15em] mb-3">Family Safety Mode</div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
              Parents & Kids on the <span className="text-brand-mid italic">Same Platform</span>
            </h3>
            <p className="text-white/65 text-base mt-4 leading-relaxed max-w-2xl">
              CopConnect's Family Safety Mode brings parents and children onto a unified cyber safety dashboard. Learn together, set digital boundaries together, and build a home that's truly cyber-safe — because the internet doesn't end at the front door.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#platform" className="inline-flex items-center gap-2 bg-white text-brand font-semibold text-sm rounded-full px-5 py-2.5 hover:scale-[1.03] transition-transform">
                Set Up Family Mode
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#learning" className="text-white/85 hover:text-white font-semibold text-sm px-2 py-2.5 inline-flex items-center gap-1">
                Learn Together ›
              </a>
            </div>
          </div>
          <div className="relative hidden md:block text-center">
            <img
              src="https://copconnect-new-site.vercel.app/images/copbot-full.png"
              alt="Family CopBot"
              className="w-36 h-36 rounded-full object-cover border-4 border-white/15 mx-auto"
            />
            <div className="text-white/40 text-xs mt-3 font-semibold">Family CopBot</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
