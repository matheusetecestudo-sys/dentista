
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentiators from './components/Differentiators';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Experience from './components/Experience';
import CTA from './components/CTA';
import Location from './components/Location';
import Footer from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-medical-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Differentiators />
        <Team />
        <Testimonials />
        <Experience />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
