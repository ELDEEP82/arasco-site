import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t, lang, toggleLang, isRTL } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();

  const sections = ['home', 'about', 'products', 'whyUs', 'quality', 'contact'];
  const sectionIds = { home: 'hero', about: 'about', products: 'products-page', whyUs: 'why-us', quality: 'quality', contact: 'cta' };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    
    if (id === 'products-page') {
      navigate('/products');
      return;
    }
    
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark shadow-navy border-b border-white/10"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollTo('hero')}
          >
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/arasco-logo.png" alt="ARASCO" className="w-full h-full object-contain p-1" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#1B3A6B] to-[#2A5298] flex items-center justify-center"><span class="text-white font-black text-xs tracking-tight">ARA</span></div>`;
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-red rounded-full border-2 border-white animate-pulse-slow"></div>
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="text-white font-black text-lg md:text-xl leading-none tracking-wide">ARASCO</div>
              <div className="text-brand-red text-xs font-semibold tracking-wider opacity-90">
                {isRTL ? 'شركة المنظفات والعناية' : 'Cleaning & Care Company'}
              </div>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => scrollTo(sectionIds[sec])}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === sec
                    ? 'text-brand-red bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {t.nav[sec]}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Lang Toggle */}
            <motion.button
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm font-bold hover:bg-white/25 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-base">🌐</span>
              <span>{t.nav.langBtn}</span>
            </motion.button>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              onClick={() => scrollTo('cta')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red text-white text-sm font-bold shadow-red hover:bg-brand-redDark transition-all duration-300"
            >
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {[0,1,2].map(i => (
                <span
                  key={i}
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    i === 0 && mobileOpen ? 'w-6 rotate-45 translate-y-2' :
                    i === 1 && mobileOpen ? 'w-0 opacity-0' :
                    i === 2 && mobileOpen ? 'w-6 -rotate-45 -translate-y-2' :
                    i === 1 ? 'w-4' : 'w-6'
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-white/10"
          >
            <div className="container-custom py-4 flex flex-col gap-2">
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollTo(sectionIds[sec])}
                  className={`text-${isRTL ? 'right' : 'left'} px-4 py-3 rounded-xl text-white/90 font-semibold hover:bg-white/10 hover:text-white transition-all duration-200`}
                >
                  {t.nav[sec]}
                </button>
              ))}
              <div className="flex gap-3 mt-2 pt-3 border-t border-white/10">
                <button
                  onClick={toggleLang}
                  className="flex-1 py-2.5 rounded-full bg-white/15 border border-white/20 text-white text-sm font-bold"
                >
                  🌐 {t.nav.langBtn}
                </button>
                <button
                  onClick={() => scrollTo('cta')}
                  className="flex-1 py-2.5 rounded-full bg-brand-red text-white text-sm font-bold"
                >
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
