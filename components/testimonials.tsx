"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "If you opted for pickup and delivery, our dedicated team will bring your laundry back to your doorstep at the scheduled time.",
      name: "Alex Michel",
      position: "Founder CEO",
      image: "/placeholder.svg",
    },
    {
      quote: "Amazing service! They take great care of my clothes, and their customer service is top-notch. Will definitely use again!",
      name: "Sarah Lee",
      position: "Marketing Director",
      image: "/placeholder.svg",
    },
    {
      quote: "The quality of the wash is unbeatable, and the staff is always friendly. I couldn't ask for a better laundry service!",
      name: "John Smith",
      position: "Designer",
      image: "/placeholder.svg",
    },
    {
      quote: "Quick, efficient, and affordable. I'm so impressed with the service, and my clothes always come back fresh and well taken care of.",
      name: "Olivia Brown",
      position: "Entrepreneur",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 text-center"
        >
          Our Clients' Feedback
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 * index }}
              viewport={{ once: true }}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                <Star className="h-5 w-5" />
              </div>
              <blockquote className="mt-4 text-gray-700">{testimonial.quote}</blockquote>
              <div className="mt-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
