import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  text: string
  className?: string
  showAsterisk?: boolean
  delayBase?: number
}

export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  delayBase = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <span
            key={i}
            className="overflow-hidden inline-block mr-[0.2em] last:mr-0 relative leading-[1] pb-[0.32em]"
          >
            <motion.span
              className="inline-block relative"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: delayBase + i * 0.08,
              }}
            >
              {word}
              {showAsterisk && isLast && (
                <span className="absolute top-[0.08em] -right-[0.05em] text-[0.32em] text-brand leading-none">
                  *
                </span>
              )}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}
