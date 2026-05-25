import { motion } from 'framer-motion'

export default function FloatBot() {
  return (
    <motion.a
      href="#about"
      aria-label="Talk to CopBot"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay: 1.2 },
        scale: { duration: 0.6, delay: 1.2 },
        y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
      }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand flex items-center justify-center shadow-[0_10px_30px_rgba(232,101,42,0.5)] border-[3px] border-white/40 cursor-pointer"
    >
      <img
        src="https://copconnect-new-site.vercel.app/images/copbot-full.png"
        alt=""
        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover"
      />
    </motion.a>
  )
}
