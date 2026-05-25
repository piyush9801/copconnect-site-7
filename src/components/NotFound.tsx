import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="bg-cream px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">404</div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] mb-6">
          Page not found.
        </h1>
        <p className="text-ink-mid text-lg leading-relaxed mb-8">
          The page you're looking for doesn't exist — but we've still got a culture of cyber safety to build. Head back home.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base rounded-full px-6 py-3.5 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
        >
          Back to Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
