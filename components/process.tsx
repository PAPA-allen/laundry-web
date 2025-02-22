"use client"

import { motion } from "framer-motion"
import { Truck, WashingMachine } from "lucide-react"

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Schedule Your Service",
      description: "Begin by scheduling your laundry service. You can choose from our convenient options",
      icon: WashingMachine,
    },
    {
      step: "02",
      title: "Expert Cleaning Process",
      description: "Once we receive your laundry, our skilled team takes over. Your cloth are sorted based.",
      icon: WashingMachine,
    },
    {
      step: "03",
      title: "Packaging and Delivery",
      description: "We take pride in using eco-friendly packaging materials. If you've opted for our pickup.",
      icon: Truck,
    },
  ]

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-lime-500"
          >
            WORK PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl font-bold tracking-tight"
          >
            How We Work It!
          </motion.h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lime-500 text-white">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="relative z-10">
                <span className="text-sm text-lime-500">STEP - {step.step}</span>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-lime-200 md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

