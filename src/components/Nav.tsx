import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

type Dropdown = {
  label: string
  to: string
  items?: { label: string; to: string }[]
}

const NAV: Dropdown[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Features',
    to: '/platform',
    items: [
      { label: 'Platform', to: '/platform' },
      { label: 'Safety Tips', to: '/tips' },
      { label: 'Comics', to: '/comics' },
      { label: 'Merch', to: '/merch' },
    ],
  },
  {
    label: 'Programs',
    to: '/ccio',
    items: [
      { label: 'CCIO Program', to: '/ccio' },
      { label: 'Micro Learning', to: '/learning' },
      { label: 'Book a Session', to: '/sessions' },
    ],
  },
  { label: 'About', to: '/about' },
  { label: 'Contacts', to: '/sessions' },
]

function NavItem({ item }: { item: Dropdown }) {
  const [open, setOpen] = useState(false)
  const timer = useRef<number | null>(null)
  const handleEnter = () => { if (timer.current) window.clearTimeout(timer.current); setOpen(true) }
  const handleLeave = () => { timer.current = window.setTimeout(() => setOpen(false), 120) }

  if (!item.items) {
    return (
      <NavLink
        to={item.to}
        end={item.to === '/'}
        className={({ isActive }) =>
          `text-sm font-medium transition-colors px-3 py-2 rounded-full ${
            isActive ? 'text-brand' : 'text-ink-mid hover:text-brand'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `text-sm font-medium transition-colors px-3 py-2 rounded-full inline-flex items-center gap-1 ${
            isActive ? 'text-brand' : 'text-ink-mid hover:text-brand'
          }`
        }
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </NavLink>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-border rounded-2xl shadow-[0_24px_50px_-20px_rgba(0,0,0,0.18)] py-2 min-w-[200px] z-50">
          {item.items.map((sub) => (
            <Link
              key={sub.label}
              to={sub.to}
              className="block px-4 py-2.5 text-sm text-ink-mid hover:text-brand hover:bg-brand-pale transition-colors"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const { pathname } = useLocation()
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
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
            alt="CopConnect"
            className="h-11 sm:h-12 w-auto"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => <NavItem key={item.label} item={item} />)}
          <NavLink
            to="/sessions"
            className="text-sm font-medium text-ink-mid hover:text-brand transition-colors px-3 py-2"
          >
            Pricing
          </NavLink>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/sessions"
            className="hidden sm:inline-flex text-sm font-semibold text-ink-mid hover:text-brand transition-colors px-3 py-2"
          >
            Log In
          </Link>
          <Link
            to={pathname === '/sessions' ? '/' : '/sessions'}
            className="bg-brand hover:bg-[#d4541c] text-white font-semibold text-sm sm:text-base rounded-full px-5 py-2.5 sm:px-6 sm:py-3 inline-flex items-center gap-2 transition-all hover:scale-[1.03] whitespace-nowrap"
          >
            Access Portal
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
