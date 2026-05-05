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

/* Premium Hero Visual */
function PremiumHeroVisual() {
  return (
    <div className="relative w-80 h-96 md:w-[500px] md:h-[500px] flex items-center justify-center">
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-full h-full bg-[radial-gradient(circle,rgba(44,82,130,0.3)_0%,transparent_70%)] pointer-events-none"
      />

      {/* Rotating Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] md:w-[420px] md:h-[420px] border border-white/5 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-red rounded-full shadow-[0_0_15px_#E31E24]" />
      </motion.div>

      {/* Second Counter-Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] md:w-[360px] md:h-[360px] border border-white/10 border-dashed rounded-full"
      />

      {/* Main Glass Shield */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotateY: [-8, 8, -8],
          rotateX: [5, -5, 5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
        className="relative z-10 w-72 h-[420px] md:w-80 md:h-[480px] rounded-[3.5rem] p-[2px] bg-gradient-to-br from-white/20 via-transparent to-white/5 shadow-2xl overflow-hidden group"
      >
        {/* Inner Content Container */}
        <div className="w-full h-full rounded-[3.4rem] bg-[#0A192F]/40 backdrop-blur-2xl flex flex-col items-center justify-center p-10 relative overflow-hidden border border-white/10">
          
          {/* Scanning Shimmer Effect */}
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-white/5 to-transparent -skew-y-12"
          />

          {/* Glowing Center Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-navyLight/20 rounded-full blur-[60px] pointer-events-none" />

          {/* Logo Showcase */}
          <div className="w-36 h-36 md:w-44 md:h-44 mb-10 relative">
             <motion.div 
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute inset-0 bg-white/5 rounded-full blur-xl"
             />
             <img 
               src="/arasco-logo.png" 
               alt="ARASCO" 
               className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
               onError={(e) => {
                 e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-8xl drop-shadow-lg">🛡️</div>`;
               }}
             />
          </div>

          {/* Text Labels */}
          <motion.div className="relative z-10 text-center">
            <h3 className="text-4xl font-black text-white mb-2 tracking-[0.2em] uppercase drop-shadow-md">ARASCO</h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="h-1 bg-brand-red rounded-full mx-auto mb-6"
            />
            <p className="text-white/70 text-center text-xs md:text-sm font-bold leading-relaxed tracking-wider uppercase">
              Global Standards <br/>
              <span className="text-brand-red">Excellence & Trust</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Micro-Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, (i % 2 === 0 ? -60 : 60), 0],
            x: [0, (i % 3 === 0 ? 30 : -30), 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-2 h-2 bg-white rounded-full blur-[2px]"
          style={{ 
            top: `${10 + i * 20}%`, 
            left: `${(i * 25) % 100}%`,
          }}
        />
      ))}
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
