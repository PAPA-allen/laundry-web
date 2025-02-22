"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center container mx-auto">
      
          {/* Left section: Logo and Company Name */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Laundry Services</span>
          </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>&copy; 2025 YourCompany. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
