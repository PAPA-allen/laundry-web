"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "Dry Cleaning",
      description:
        "Dry cleaning is a method of cleaning clothing and textiles that uses a solvent other than water to remove dirt, stains.",
      image:
        "/assets/laundry1.png",
    },
    {
      title: "Wash & Fold",
      description:
        "Wash and fold (also known as drop-off laundry or fluff and fold) is a laundry service offered by many laundromats.",
      image:
        "/assets/laundry1.png",
    },
    {
      title: "Ironing/Pressing",
      description:
        "Ironing or pressing is the process of using a heated iron or press to smooth out wrinkles, creases, and remove fabric",
      image:
        "/assets/laundry2.png",
    },
  ]

  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-lime-500"
          >
            OUR BEST SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl font-bold tracking-tight"
          >
            Our Best Laundry Services For You!
          </motion.h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="group/card transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Card className="border border-transparent rounded-xl overflow-hidden shadow-lg group-hover/card:shadow-2xl transition-all">
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-all group-hover/card:scale-105"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-lg font-bold">{service.title}</CardTitle>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="group-hover/card:bg-lime-500 transition-all duration-300">
                    READ MORE
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
