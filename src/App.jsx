import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import WhyUs           from './components/WhyUs';
import Products        from './components/Products';
import Brands          from './components/Brands';
import Vision          from './components/Vision';
import Quality         from './components/Quality';
import CTA             from './components/CTA';
import Footer          from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop     from './components/ScrollToTop';

function HomePage() {
  return (
    <main>
      <Hero />
      <Vision />
      <About />
      <Brands />
      <WhyUs />
      <Quality />
      <CTA />
    </main>
  );
}

function ProductsPage() {
  return (
    <main className="pt-20">
      <Products />
      <CTA />
    </main>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </Router>
    </LangProvider>
  );
}
