"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Mail, Menu, Phone, Search, X } from "lucide-react" // Add X icon for close
import { useState } from "react"

export default function Header() {
  // State to handle the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar for contact and details */}
      <div className="container flex h-10 items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-4 w-full justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Phone:</span>
              <a href="tel:+000-000-000" className="hover:text-foreground">
                +000-000-0000
              </a>
            </span>
            <span className="hidden md:flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Email:</span>
              <a href="mailto:info@laun.com" className="hover:text-foreground">
                info@laun.com
              </a>
            </span>
            <span className="hidden lg:flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Opening Hours:</span>
              <span>Monday to Saturday(9:00 AM - 8:00 PM)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Home link */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <span>Laundry</span>
        </Link>
        {/* Main navigation links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary">
            HOME
          </Link>
          <Link href="#about-us" className="text-sm font-medium hover:text-primary">
            ABOUT US
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary">
            SERVICE
          </Link>
          <Link href="#process" className="text-sm font-medium hover:text-primary">
            PROCESS
          </Link>
          <Link href="#FAQ" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            CONTACT
          </Link>
        </nav>

        {/* Buttons for search and schedule */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-4 w-4" />
          </Button>
          <Button className="hidden md:inline-flex">SCHEDULE A PICKUP</Button>
        </div>
      </div>

      {/* Mobile menu (Dropdown) */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
        onClick={toggleMenu}
      />
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transition-all ${isMenuOpen ? 'transform-none' : 'transform -translate-x-full'}`}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col items-center justify-between h-full py-4 relative">
          {/* Close button at the top */}
          <div className="w-full flex justify-end p-4 absolute top-0">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" /> {/* Close icon */}
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4 justify-center pt-9">
            <Link href="#home" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              HOME
            </Link>
            <Link href="#about-us" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              ABOUT US
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              SERVICE
            </Link>
            <Link href="#process" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              PROCESS
            </Link>
            <Link href="#FAQ" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
              CONTACT
            </Link>

            <Button onClick={toggleMenu}>
              SCHEDULE A PICKUP
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
