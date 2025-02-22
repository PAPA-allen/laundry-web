"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-[999999999] flex items-center justify-center bg-lime-500"
    >
      <div className="relative flex items-center justify-center">
        {/* Bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-4 w-4 rounded-full bg-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              rotate: 360,
              x: Math.cos((i * Math.PI) / 4) * 40,
              y: Math.sin((i * Math.PI) / 4) * 40,
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Logo */}
        <motion.div
          className="relative flex items-center justify-center text-4xl font-bold text-white"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          LAUNDRY
        </motion.div>
      </div>
    </motion.div>
  )
}

