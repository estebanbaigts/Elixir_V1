import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  return (
    <AnimatePresence>
      <div className="relative min-h-screen text-white">
        <AnimatedBackground />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative z-10"
        >
          <Navbar />
          <Hero />
          <Features />
          <Services />
          <Portfolio />
          <Contact />
          {/* <CTA /> */}
          <Footer />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default App;