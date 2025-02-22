"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import Image from "next/image"

export default function FAQ() {
  const faqs = [
    {
      question: "What Services Do You Offer?",
      answer:
        "We value your feedback! Let us know about your experience and if there's anything else we can do to make your laundry service even better. We're always here to assist you.",
    },
    {
      question: "Do You Have Certified Technicians?",
      answer: "Yes, all our technicians are certified and trained in the latest laundry and dry cleaning techniques.",
    },
    {
      question: "Can You Provide a Customized Service Plan?",
      answer: "We offer customized service plans tailored to your specific needs and preferences.",
    },
    {
      question: "What is Your Pricing Structure?",
      answer: "Our pricing is transparent and competitive, based on the type and volume of items.",
    },
  ]

  return (
    <section id="FAQ" className="bg-gray-50 py-16 md:py-24">
      <div className="container p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-lime-500"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Here are some common questions we receive. If you need more information, feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg shadow-sm border-b-2 border-gray-100 mb-4"
              >
                <AccordionTrigger className="bg-lime-500 text-white text-lg font-semibold p-4 rounded-t-lg transition-all duration-300 ease-in-out hover:bg-lime-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-white rounded-b-lg text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
