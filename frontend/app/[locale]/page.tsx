'use client'

import ButtonContact from "@/components/ButtonContact";
import LoadScreen from "@/components/LoadingScreen";
import About from "@/containers/About";
import CTA from "@/containers/CTA";
import Contact from "@/containers/Contact";
import Customers from "@/containers/Customers";
import Footer from "@/containers/Footer";
import Hero from "@/containers/Hero";
import Navbar from "@/containers/Navbar";
import Services from "@/containers/Services";
import Technologies from "@/containers/Technologies";
import Works from "@/containers/Works";

export default function Home() {
  return (
    <>
      {/* <LoadScreen/> */}
      <Navbar />
      <ButtonContact />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Technologies />
        <Customers />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
