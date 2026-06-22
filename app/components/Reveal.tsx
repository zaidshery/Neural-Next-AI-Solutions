"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
}

export default function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const offsets = {
    up: { x: 0, y: 40 },
    left: { x: -44, y: 0 },
    right: { x: 44, y: 0 },
    none: { x: 0, y: 0 },
  }

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
