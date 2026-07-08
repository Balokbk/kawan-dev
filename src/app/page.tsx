'use client';

import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  );
}