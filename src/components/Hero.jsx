import { useEffect, useRef, useState } from 'react';
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

/* Interactive 3D Card */
function InteractiveCard() {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-15 to 15 degrees)
    const rotX = ((y - centerY) / centerY) * -15;
    const rotY = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ perspective: 1000 }}
      className="relative z-10 w-72 h-80 md:w-96 md:h-[400px] cursor-pointer"
    >
      <div 
        className="w-full h-full rounded-[2.5rem] p-8 border-4 border-white/20 shadow-2xl flex flex-col items-center justify-center gap-6 overflow-hidden relative"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-brand-navy/20 mix-blend-overlay"></div>
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-7xl drop-shadow-2xl z-10"
        >
          ✨
        </motion.div>
        <h3 className="text-3xl font-black text-white text-center z-10 drop-shadow-md tracking-wider">
          ARASCO
        </h3>
        <p className="text-white/80 text-center font-medium z-10">
          Premium Quality <br/> Since Day One
        </p>
      </div>
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
            <InteractiveCard />
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
