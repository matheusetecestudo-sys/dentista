
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ClinicGallery from './components/ClinicGallery';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-medical-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Differentiators />
        <BeforeAfter />
        <Testimonials />
        <About />
        <ClinicGallery />
        <CTA />
        <FAQ />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
