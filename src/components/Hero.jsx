import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

/* Animated Particle Canvas */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.1,
        color: Math.random() > 0.6 ? '#E31E24' : '#FFFFFF',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // Draw connecting lines
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" />;
}

/* Floating Blob */
function FloatingBlob({ className, color, size = 400, delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${className} blob pointer-events-none`}
      style={{
        width: size, height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.15,
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -50, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{ duration: 10, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

/* Stat Counter */
function StatCard({ value, label, isRTL }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl px-6 py-4 text-center flex flex-col items-center gap-1 hover:bg-white/15 transition-colors duration-300"
    >
      <span className="text-3xl md:text-4xl font-black text-white leading-none">{value}+</span>
      <span className="text-white/70 text-xs md:text-sm font-medium">{label}</span>
    </motion.div>
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Floating Blobs */}
      <FloatingBlob className="-top-20 -left-20" color="#E31E24" size={500} delay={0} />
      <FloatingBlob className="top-1/2 -right-32" color="#2A5298" size={600} delay={3} />
      <FloatingBlob className="-bottom-32 left-1/3" color="#E31E24" size={400} delay={6} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-navyDark/50 pointer-events-none" />

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
              <span className="block text-white/80 text-3xl md:text-4xl lg:text-5xl mt-2">{h.title3}</span>
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
                { value: '10', label: h.stat1 },
                { value: '50', label: h.stat2 },
                { value: '100K', label: h.stat3 },
                { value: '27', label: h.stat4 },
              ].map((s, i) => (
                <StatCard key={i} value={s.value} label={s.label} isRTL={isRTL} />
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Giant glowing orb */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #E31E24, #1B3A6B, #2A5298, #E31E24)',
                filter: 'blur(2px)',
                opacity: 0.3,
              }}
            />

            {/* Center Logo Display */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center p-6 border-4 border-white/20">
              <img
                src="/arasco-logo.png"
                alt="ARASCO Detergent Factory"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
                      <div class="w-full bg-[#1B3A6B] rounded-2xl py-6 flex items-center justify-center">
                        <span class="text-white font-black text-4xl tracking-widest">ARASCO</span>
                      </div>
                      <div class="w-full bg-[#E31E24] rounded-xl py-3 flex items-center justify-center">
                        <span class="text-white font-semibold text-lg tracking-wide">Detergent Factory</span>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute top-4 right-0 glass border border-white/20 rounded-2xl px-4 py-3 text-white"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-xs font-semibold opacity-70">{isRTL ? 'معتمد من' : 'Certified by'}</div>
              <div className="text-sm font-black">ISO 9001</div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-0 glass border border-white/20 rounded-2xl px-4 py-3 text-white"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇪🇬</span>
                <div>
                  <div className="text-xs font-semibold opacity-70">{isRTL ? 'صُنع في' : 'Made in'}</div>
                  <div className="text-sm font-black">{isRTL ? 'مصر' : 'Egypt'}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-32 right-4 glass border border-brand-red/40 bg-brand-red/10 rounded-2xl px-4 py-3 text-white"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="text-xs font-semibold opacity-70">{isRTL ? 'منتجات' : 'Products'}</div>
              <div className="text-2xl font-black text-brand-red">50+</div>
            </motion.div>
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
