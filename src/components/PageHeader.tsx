import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

type Props = {
  eyebrow: string
  segments: { text: string; className?: string }[]
  subtitle?: string
}

export default function PageHeader({ eyebrow, segments, subtitle }: Props) {
  return (
    <div className="bg-cream pt-10 sm:pt-14 pb-8 sm:pb-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-xs text-muted mb-6"
        >
          <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink-mid font-medium">{eyebrow}</span>
        </motion.nav>

        <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">
          {eyebrow}
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.15] max-w-4xl">
          <WordsPullUpMultiStyle segments={segments} />
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-ink-mid text-base sm:text-lg lg:text-xl leading-relaxed mt-6 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}
