"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export default function About() {
  const features = [
    "Pickup and Delivery Service",
    "Energy-Efficient Machines",
    "Same-Day or Express Service",
    "Folding Preferences",
    "Hanging or Bagging Options",
    "Satisfaction Guarantee",
  ]

  return (
    <section id="about-us" className="py-16 md:py-24">
      <div className="container grid gap-12 lg:grid-cols-2 xl:grid-cols-2">
        <div className="relative flex justify-center items-center">
          <div className="absolute -left-6 top-6 flex h-20 w-20 items-center justify-center rounded-full bg-lime-500 text-white shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold">24+</div>
              <div className="text-sm">Years</div>
            </div>
          </div>
          <Image
            src="/assets/laundry2.png"
            alt="About Us"
            width={600}
            height={450}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-lime-500"
          >
            ABOUT US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
          >
            Experience The Pinnacle Of Laundry Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            Our laundry services include wash and fold, dry cleaning, ironing, stain removal, and specialized treatments
            for delicate fabrics. We ensure top-quality care for all your laundry needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-500 shadow-md">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white shadow-lg transition-all duration-200">
              MORE ABOUT US
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
