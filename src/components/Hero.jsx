import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

/* Stat Feature */
function StatFeature({ label, isRTL, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl px-4 py-4 text-center flex flex-col items-center justify-center gap-2 hover:bg-white/15 transition-colors duration-300"
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-white font-bold text-sm leading-tight">{label}</span>
    </motion.div>
  );
}

/* Premium Hero Visual */
function PremiumHeroVisual() {

  return (
    <div className="relative w-[420px] h-[500px] md:w-[480px] md:h-[520px] flex items-center justify-center select-none">

      {/* ── Ambient glow behind product ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(42,82,152,0.5)_0%,transparent_70%)] pointer-events-none"
      />

      {/* ── Slow spinning decorative ring ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[400px] h-[400px] rounded-full border border-white/10 border-dashed pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-red rounded-full shadow-[0_0_16px_#E31E24]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/30 rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-red/50 rounded-full" />
      </motion.div>

      {/* ── Second counter-rotating ring ── */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] h-[340px] rounded-full border border-white/5 pointer-events-none"
      />

      {/* ── Floating product image ── */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-72 h-80 md:w-80 md:h-96 drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
      >
        {/* Soft glow under product */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <img
          src="/foameen-offer.jpg"
          alt="FOAMEEN Products"
          className="w-full h-full object-contain relative z-10"
        />
      </motion.div>

    </div>
  );
}

export default function Hero() {
  const { t, isRTL } = useLang();
  const h = t.hero;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-brand-navy">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={isRTL ? 'text-right' : 'text-left'}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className={`flex ${isRTL ? 'justify-end' : 'justify-start'} mb-6`}>
              <span className="glass border border-white/20 text-white/90 text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-2">
                {h.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              <span className="block">{h.title1}</span>
              <span className="block gradient-text-red">{h.title2}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              {h.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className={`flex flex-wrap ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'} gap-4 mb-12`}>
              <motion.a
                href="#cta"
                onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-pulse inline-flex items-center gap-2 bg-brand-red text-white font-bold px-8 py-4 rounded-2xl shadow-red hover:bg-brand-redDark transition-all duration-300 text-sm md:text-base"
              >
                {h.cta1}
              </motion.a>
              <motion.a
                href="#products"
                onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 glass border border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
              >
                {h.cta2}
                <span className={isRTL ? '←' : '→'}>{isRTL ? '←' : '→'}</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: '⭐', label: h.stat1 },
                { icon: '✨', label: h.stat2 },
                { icon: '🤝', label: h.stat3 },
                { icon: '🌍', label: h.stat4 },
              ].map((s, i) => (
                <StatFeature key={i} icon={s.icon} label={s.label} isRTL={isRTL} />
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative hidden lg:flex items-center justify-center perspective-1000"
          >
            <PremiumHeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="#F8FAFB" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">{isRTL ? 'مرر للأسفل' : 'Scroll'}</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
