import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clinic from './components/Clinic';
import FAQ from './components/FAQ';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CTA from './components/CTA';
import Location from './components/Location';
import Footer from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Barra de Progresso de Rolagem Premium no Topo */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-blue-500 origin-left z-[100] shadow-sm"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Clinic />
        <Team />
        <Testimonials />
        <FAQ />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
