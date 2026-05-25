import { Twitter, Linkedin, Facebook, Instagram, Youtube, ShieldCheck, Phone, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const COLS = [
  {
    h: 'Platform',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Platform', to: '/platform' },
      { label: 'CCIO Directory', to: '/ccio' },
      { label: 'Resource Hub', to: '/tips' },
      { label: 'Family Safety Mode', to: '/platform' },
    ],
  },
  {
    h: 'Programs',
    links: [
      { label: 'Become a CCIO', to: '/ccio' },
      { label: 'Micro Learning', to: '/learning' },
      { label: 'Junior Certification', to: '/learning' },
      { label: 'Cyber Safety Comics', to: '/comics' },
      { label: 'Book a Session', to: '/sessions' },
      { label: 'Merchandise', to: '/merch' },
    ],
  },
  {
    h: 'About',
    links: [
      { label: 'Our Mission', to: '/about' },
      { label: 'Impact Numbers', to: '/ccio' },
      { label: 'ISAC Foundation', to: '/about' },
      { label: 'CCIO Meetup 2026', to: '/sessions' },
      { label: 'Privacy Policy', to: '/' },
    ],
  },
  {
    h: 'Contact',
    links: [
      { label: 'Book a Session', to: '/sessions' },
      { label: 'Email Inquiries', to: '/sessions' },
      { label: 'Safety Helpline', to: '/sessions' },
      { label: 'Cyber Crime: 1930', to: '/sessions' },
    ],
  },
]

const SOCIAL: { Ico: LucideIcon; label: string }[] = [
  { Ico: Twitter, label: 'Twitter' },
  { Ico: Linkedin, label: 'LinkedIn' },
  { Ico: Facebook, label: 'Facebook' },
  { Ico: Instagram, label: 'Instagram' },
  { Ico: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white px-4 sm:px-6 lg:px-8 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(232,101,42,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-white/10">
          <div className="max-w-md">
            <img
              src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
              alt="CopConnect"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/55 text-sm leading-relaxed mt-5">
              Bridging the gap between cyber victims and law enforcement. Building a culture of cyber safety, one community at a time.
            </p>
            <div className="flex gap-2.5 mt-5">
              {SOCIAL.map(({ Ico, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.07] rounded-lg flex items-center justify-center text-white/55 hover:bg-brand hover:text-white transition-all"
                >
                  <Ico className="w-4 h-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand/15 to-transparent border border-brand/30 rounded-2xl p-5 sm:p-6 max-w-sm">
            <div className="flex items-center gap-2 text-brand-mid text-xs font-bold uppercase tracking-wider mb-2">
              <Phone className="w-3.5 h-3.5" strokeWidth={2} />
              Safety Helpline
            </div>
            <div className="font-serif font-bold text-3xl sm:text-4xl text-white leading-none">
              Cyber Crime
            </div>
            <div className="font-serif font-bold text-4xl sm:text-5xl text-brand-mid leading-none mt-1">
              Helpline: 1930
            </div>
            <p className="text-white/55 text-xs leading-relaxed mt-3">
              Powered by ISAC Foundation · Available 24×7 across India
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {COLS.map(c => (
            <div key={c.h}>
              <h4 className="font-bold text-sm mb-4">{c.h}</h4>
              <div className="flex flex-col gap-2.5">
                {c.links.map(l => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-white/45 hover:text-brand-mid text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-wrap justify-between gap-3">
          <p className="text-white/30 text-xs">© 2026 CopConnect / ISAC Foundation. All rights reserved.</p>
          <p className="text-white/30 text-xs inline-flex items-center gap-1.5">
            Resilience begins with awareness.
            <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.8} />
          </p>
        </div>
      </div>
    </footer>
  )
}
