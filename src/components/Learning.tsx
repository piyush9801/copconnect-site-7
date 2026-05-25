import { motion, useInView } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useRef } from 'react'

const VIDEOS = [
  { tag: 'Basics', title: 'What is a Strong Password?', dur: '3:24', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=480&h=270&fit=crop&auto=format&q=75' },
  { tag: 'Phishing', title: "Spot the Scam — Don't Get Hooked", dur: '4:15', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=480&h=270&fit=crop&auto=format&q=75' },
  { tag: 'Privacy', title: 'Think Before You Post', dur: '5:02', img: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=480&h=270&fit=crop&auto=format&q=75' },
  { tag: 'For Kids', title: 'Stranger Danger Goes Online Too', dur: '6:18', img: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?w=480&h=270&fit=crop&auto=format&q=75' },
  { tag: 'For Parents', title: 'Parental Controls Made Easy', dur: '4:44', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=480&h=270&fit=crop&auto=format&q=75' },
  { tag: 'Finance', title: 'UPI & OTP Fraud — Protect Your Money', dur: '3:55', img: 'https://images.unsplash.com/photo-1606166187734-a4cb74079037?w=480&h=270&fit=crop&auto=format&q=75' },
  { tag: 'Bullying', title: 'Cyberbullying — Recognize & Report', dur: '5:30', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=480&h=270&fit=crop&auto=format&q=75' },
  { tag: 'Advanced', title: '2FA & Account Security', dur: '7:00', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=480&h=270&fit=crop&auto=format&q=75' },
]

function VideoCard({ v, i }: { v: typeof VIDEOS[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-border rounded-2xl overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] transition-all cursor-pointer"
    >
      <div className="aspect-video relative overflow-hidden bg-cream-dark">
        <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-4 h-4 text-brand fill-brand ml-0.5" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black/65 text-white text-[10px] font-medium px-2 py-0.5 rounded">{v.dur}</span>
      </div>
      <div className="p-4">
        <span className="inline-block bg-brand-pale text-brand text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded mb-2">{v.tag}</span>
        <h4 className="text-sm font-bold text-ink leading-snug">{v.title}</h4>
      </div>
    </motion.div>
  )
}

export default function Learning() {
  return (
    <section id="learning" className="bg-white px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">Junior Certification</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.15]">
            Micro <span className="text-brand italic">Video Learning Hub</span>
          </h2>
          <p className="text-ink-mid text-base sm:text-lg leading-relaxed mt-5">
            3–7 minute lessons that make cyber safety click — for every age, every background, every family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14">
          {VIDEOS.map((v, i) => <VideoCard key={v.title} v={v} i={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="bg-ink rounded-[2rem] p-10 sm:p-14 mt-10 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_0%_50%,rgba(232,101,42,0.2)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight">
                Junior Cyber Safety <span className="text-brand-mid italic">Certification</span>
              </h3>
              <p className="text-white/70 text-base mt-3 max-w-2xl leading-relaxed">
                Complete 12 micro-modules, pass the assessment, and earn your certificate — recognised by CopConnect and partner schools across India. Made for students aged 8–18.
              </p>
            </div>
            <a
              href="#learning"
              className="inline-flex items-center gap-2 bg-white text-brand font-semibold text-base rounded-full px-6 py-3 hover:scale-[1.03] transition-transform whitespace-nowrap self-start"
            >
              Start Learning Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
