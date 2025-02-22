import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google";
import "./globals.css"
import { cn } from "@/lib/utils"

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  
});


export const metadata: Metadata = {
  title: "Laundry - Laundry Service",
  description: "Professional laundry and dry cleaning services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(jetbrainsMono.className, "min-h-screen bg-background antialiased")}>{children}</body>
    </html>
  )
}

