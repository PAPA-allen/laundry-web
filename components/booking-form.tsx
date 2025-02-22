"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function BookingForm() {
  const handleClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <section id="contact" className="max-w-2xl w-full py-10 px-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Book An Appointment
        </h2>
        <form className="grid gap-6">
          <Input
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-200 text-gray-800"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-200 text-gray-800"
          />

          {/* Service Select */}
          <Select>
            <SelectTrigger className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-200">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dry-cleaning">Dry Cleaning</SelectItem>
              <SelectItem value="wash-fold">Wash & Fold</SelectItem>
              <SelectItem value="ironing">Ironing/Pressing</SelectItem>
            </SelectContent>
          </Select>

          {/* Message Textarea */}
          <Textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-200 text-gray-800"
          />

          {/* Submit Button */}
          <Button
            size="lg"
            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 mt-4"
            onClick={handleClick}
          >
            Book Appointment Now
          </Button>
        </form>
      </section>
    </motion.div>
  )
}
