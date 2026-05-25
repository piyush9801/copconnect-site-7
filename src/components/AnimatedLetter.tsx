import { motion, MotionValue, useTransform } from 'framer-motion'

type Props = {
  char: string
  scrollProgress: MotionValue<number>
  index: number
  totalChars: number
}

export default function AnimatedLetter({ char, scrollProgress, index, totalChars }: Props) {
  const charProgress = index / totalChars
  const opacity = useTransform(
    scrollProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  )
  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? ' ' : char}
    </motion.span>
  )
}
