import { ArrowRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Platform', to: '/platform' },
  { label: 'Learning', to: '/learning' },
  { label: 'CCIO', to: '/ccio' },
  { label: 'Safety Tips', to: '/tips' },
  { label: 'Comics', to: '/comics' },
  { label: 'Merch', to: '/merch' },
  { label: 'Sessions', to: '/sessions' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll while mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`sticky top-0 z-40 transition-all ${
        scrolled || open ? 'bg-cream/95 backdrop-blur-md border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
            alt="CopConnect"
            className="h-10 sm:h-12 lg:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {NAV.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'text-brand' : 'text-ink-mid hover:text-brand'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Portal Login: full label on sm+, icon-only on xs */}
          <Link
            to="/sessions"
            className="bg-brand hover:bg-[#d4541c] text-white font-semibold text-xs sm:text-sm md:text-base rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 inline-flex items-center gap-1.5 sm:gap-2 transition-all hover:scale-[1.03] whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
          >
            <span className="hidden xs:inline">Portal Login</span>
            <span className="xs:hidden">Portal</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>

          {/* Hamburger (mobile/tablet only) */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border bg-white flex items-center justify-center text-ink hover:text-brand hover:border-brand-lt transition-colors"
          >
            {open ? <X className="w-5 h-5" strokeWidth={2} /> : <Menu className="w-5 h-5" strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute left-0 right-0 top-full bg-cream/98 backdrop-blur-md border-b border-border/60 shadow-[0_24px_40px_-20px_rgba(0,0,0,0.18)]"
          >
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col">
              {NAV.map(({ label, to }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between text-base font-medium py-3.5 border-b border-border/40 last:border-0 transition-colors ${
                        isActive ? 'text-brand' : 'text-ink hover:text-brand'
                      }`
                    }
                  >
                    {label}
                    <ArrowRight className="w-4 h-4 opacity-50" strokeWidth={2} />
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
