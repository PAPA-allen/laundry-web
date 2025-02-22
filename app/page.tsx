"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Process from "@/components/process"
import FAQ from "@/components/faq"
import Testimonials from "@/components/testimonials"
import BookingForm from "@/components/booking-form"
import Preloader from "@/components/preloader"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <FAQ />
            <Testimonials />
            <BookingForm />
        </main>
        <Footer/>
      </div>
    </>
  )
}

