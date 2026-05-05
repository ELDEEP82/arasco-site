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
  const stats = [
    { num: '٣+',  label: 'علامات تجارية', en: '3+ Brands' },
    { num: '١٨+', label: 'اختبار جودة',   en: '18+ QC Tests' },
    { num: '6',   label: 'أيام دعم',       en: '6-Day Support' },
  ];

  return (
    <div className="relative w-[420px] h-[500px] md:w-[520px] md:h-[560px] flex items-center justify-center select-none">

      {/* ── Ambient glow ── */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(42,82,152,0.45)_0%,transparent_70%)] pointer-events-none"
      />

      {/* ── Slow spinning ring ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[390px] h-[390px] rounded-full border border-white/8 border-dashed pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-brand-red rounded-full shadow-[0_0_14px_#E31E24]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/40 rounded-full" />
      </motion.div>

      {/* ── Central logo card ── */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 w-52 h-52 rounded-[2.5rem] bg-gradient-to-br from-brand-navyLight to-brand-navyDark border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center gap-3 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <img
          src="/arasco-logo.png"
          alt="ARASCO"
          className="w-24 h-24 object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.25)] relative z-10"
          onError={e => { e.target.style.display='none'; e.target.parentElement.insertAdjacentHTML('beforeend','<div class="text-7xl">🛡️</div>'); }}
        />
        <span className="text-white font-black text-lg tracking-[0.18em] relative z-10">ARASCO</span>
        <span className="text-brand-red text-[10px] font-bold tracking-widest uppercase relative z-10">Quality · Care · Trust</span>
      </motion.div>

      {/* ── Floating card: FOAMEEN ── */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-0 z-30 flex items-center gap-2 glass border border-white/15 rounded-2xl px-3 py-2.5 shadow-lg"
      >
        <img src="/foameen-logo.jpg" alt="FOAMEEN" className="w-9 h-9 rounded-xl object-contain bg-white p-0.5 flex-shrink-0" />
        <div>
          <p className="text-white font-black text-xs leading-none">FOAMEEN</p>
          <p className="text-white/50 text-[10px] mt-0.5">مسحوق غسيل</p>
        </div>
      </motion.div>

      {/* ── Floating card: Gazelle ── */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 right-0 z-30 flex items-center gap-2 glass border border-white/15 rounded-2xl px-3 py-2.5 shadow-lg"
      >
        <img src="/gazelle-logo.jpg" alt="Gazelle" className="w-9 h-9 rounded-xl object-contain bg-white p-0.5 flex-shrink-0" />
        <div>
          <p className="text-white font-black text-xs leading-none">Gazelle</p>
          <p className="text-white/50 text-[10px] mt-0.5">عناية وتجميل</p>
        </div>
      </motion.div>

      {/* ── Floating badge: ISO ── */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-8 right-4 z-30 glass border border-white/15 rounded-2xl px-3 py-2 text-center shadow-lg"
      >
        <p className="text-brand-red font-black text-sm leading-none">ISO</p>
        <p className="text-white/60 text-[10px] mt-0.5">9001:2015</p>
      </motion.div>

      {/* ── Stats row ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15 }}
            className="glass border border-white/15 rounded-2xl px-3 py-2 text-center shadow-md"
          >
            <p className="text-white font-black text-base leading-none">{s.num}</p>
            <p className="text-white/55 text-[10px] mt-0.5 whitespace-nowrap">{s.label}</p>
          </motion.div>
        ))}
      </div>

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
