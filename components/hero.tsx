"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      {/* Video Background with opacity */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60" // Added opacity here
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay to enhance visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

      {/* Content over video */}
      <div className="container relative flex h-full flex-col justify-center gap-4 text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium text-lime-400"
        >
          WE CLEAN, YOU SHINE
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-5xl font-bold tracking-tight sm:text-6xl"
        >
          Quality Laundry Every Thread
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[600px] text-lg text-gray-200"
        >
          The best slogan for your laundry service will depend on your specific brand, target audience, and the unique
          qualities of your service.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4"
        >
          <Button size="lg" className="bg-lime-500 hover:bg-lime-600">
            DISCOVER MORE
          </Button>
          <Button size="lg" variant="outline" className="text-black hover:text-lime-500">
            CONTACT US
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
