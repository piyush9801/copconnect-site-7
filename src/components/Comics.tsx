import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Comics() {
  return (
    <section id="comics" className="bg-white px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">Cyber Safety Comics</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Stories That <span className="text-brand italic">Save Lives</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden shadow-[0_30px_60px_-24px_rgba(0,0,0,0.4)] aspect-[3/4] bg-cream-dark"
          >
            <img
              src="https://copconnect-new-site.vercel.app/images/comic-omg-cover.jpg"
              alt='"OMG! Like Literally Blackmailed" comic cover'
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-3">
              Sextortion Awareness · Teen Edition
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
              "OMG! Like Literally <span className="text-brand italic">Blackmailed</span>"
            </h3>
            <p className="text-muted leading-relaxed mt-4 text-base">
              A high-school girl chases social-media fame and ends up trapped in a sextortion plot. A real story — told the way teens actually read.
            </p>
            <div className="flex flex-col gap-2.5 my-7 text-sm text-ink-mid">
              <div><b className="text-ink">Made for</b> — Teens 13+ & parents</div>
              <div><b className="text-ink">Format</b> — Full-colour graphic novel</div>
              <div><b className="text-ink">Themes</b> — Sexting · Online blackmail · Chat-trap patterns</div>
            </div>
            <a
              href="https://pages.razorpay.com/pl_O9vewWwWlOlmWC/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base rounded-full px-6 py-3 transition-all hover:scale-[1.03]"
            >
              Book Your Copy
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
