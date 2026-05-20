import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="relative antialiased selection:bg-brand-indigo/10 selection:text-brand-indigo dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-teal z-[100] origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        <main>
          <Hero />
          
          {/* About & Skills Section (Combined) */}
          <About />

          {/* Selected Work Section */}
          <Portfolio />

          {/* Experience & Timeline Section */}
          <Experience />

          {/* Contact Form Section */}
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

