import { ArrowRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? 'bg-cream/85 backdrop-blur-md border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
            alt="CopConnect"
            className="h-12 sm:h-14 w-auto"
          />
        </Link>
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
        <Link
          to="/sessions"
          className="bg-brand hover:bg-[#d4541c] text-white font-semibold text-sm sm:text-base rounded-full px-5 py-2.5 sm:px-6 sm:py-3 inline-flex items-center gap-2 transition-all hover:scale-[1.03] whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
        >
          Portal Login
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  )
}
