import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PRODUCTS = [
  { title: 'Cyber Defender — Classic', sub: 'Black tee · Green code-style print.', price: '₹799', img: 'https://copconnect-new-site.vercel.app/merch/tee-classic.jpg' },
  { title: 'Cyber Defender — Cap', sub: 'Black snapback · Embroidered shield logo.', price: '₹599', img: 'https://copconnect-new-site.vercel.app/merch/tee-circuit.jpg' },
  { title: 'Cyber Defender — Bottle', sub: 'Insulated steel · 750ml · Shield print.', price: '₹699', img: 'https://copconnect-new-site.vercel.app/merch/tee-badge.jpg' },
  { title: 'Cyber Defender — Starter Kit', sub: 'Backpack · Bottle · Mug · Notebook · Pen.', price: '₹2,499', img: 'https://copconnect-new-site.vercel.app/merch/tee-anime.jpg' },
  { title: 'Every Click Counts — Folk', sub: 'White tee · Indian folk art × cyber print.', price: '₹849', img: 'https://copconnect-new-site.vercel.app/merch/tee-green.jpg' },
  { title: 'Oriental Experience — Anime', sub: 'Black tee · Anime × cyber print.', price: '₹849', img: 'https://copconnect-new-site.vercel.app/merch/tee-red.jpg' },
  { title: "Oriental Experience — Women's", sub: 'Black tee · Anime × cyber print.', price: '₹849', img: 'https://copconnect-new-site.vercel.app/merch/tee-multi.jpg' },
  { title: 'Cyber Defender — Tech Bundle', sub: 'Sleeve · Headphones · AirPods · USB · Kit.', price: '₹4,999', img: 'https://copconnect-new-site.vercel.app/merch/tee-folk.jpg' },
]

function Product({ p, i }: { p: typeof PRODUCTS[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-border rounded-2xl overflow-hidden group hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] transition-all"
    >
      <div className="aspect-square bg-cream-dark overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://placehold.co/400x400/EDE4D6/7A6A5A?text=${encodeURIComponent(p.title.split(' — ')[1] ?? 'CopConnect')}` }}
        />
      </div>
      <div className="p-5">
        <h4 className="text-base font-bold text-ink mb-1">{p.title}</h4>
        <div className="text-xs text-muted leading-snug mb-4">{p.sub}</div>
        <div className="flex items-center justify-between">
          <span className="font-serif font-bold text-lg text-ink">{p.price}</span>
          <button className="bg-brand hover:bg-[#d4541c] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors">
            Add to Bag
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Merch() {
  return (
    <section id="merch" className="bg-white px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">Merch Store</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Wear Cyber Safety. <span className="text-brand italic">Spread the Culture.</span>
          </h2>
          <p className="text-ink-mid text-base sm:text-lg leading-relaxed mt-5">
            Every purchase funds a free cyber awareness session for an underserved community. Merchandise with a mission — bridging the gap, one product at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14">
          {PRODUCTS.map((p, i) => <Product key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
