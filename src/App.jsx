import { LangProvider } from './context/LangContext';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import WhyUs           from './components/WhyUs';
import Products        from './components/Products';
import Vision          from './components/Vision';
import Quality         from './components/Quality';
import CTA             from './components/CTA';
import Footer          from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <LangProvider>
      {/* Navbar — fixed on top */}
      <Navbar />

      <main>
        {/* 1. Hero: animated particles + blobs */}
        <Hero />

        {/* 2. About: factory story + stats */}
        <About />

        {/* 3. Products: interactive sliders per category */}
        <Products />

        {/* 4. Why Us: feature grid on dark bg */}
        <WhyUs />

        {/* 5. Vision & Mission */}
        <Vision />

        {/* 6. Quality: 6-step process + certs */}
        <Quality />

        {/* 7. CTA: wholesale / WhatsApp / phone */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp + scroll-to-top */}
      <FloatingButtons />
    </LangProvider>
  );
}
