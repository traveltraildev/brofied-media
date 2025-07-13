import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Brofied Media | Cinematic Production</title>
        <meta name="description" content="Premium video production and media services" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Team />
        <Testimonial />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}