'use client'
import { Footer, Navbar } from '@/components'
import React from 'react'

const About = () => {
  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active='About Us' isDetail={false} />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default About