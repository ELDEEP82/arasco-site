import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function WhyUs() {
  const { t, isRTL } = useLang();
  const w = t.whyUs;

  return (
    <section
      id="why-us"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F2347 0%, #1B3A6B 50%, #0F2347 100%)' }}
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(227,30,36,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(42,82,152,0.3)_0%,transparent_70%)] rounded-full pointer-events-none" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block glass border border-white/20 text-white/80 text-sm font-bold px-5 py-2 rounded-full mb-4">
            {w.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {w.title}
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            {w.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {w.features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glass border border-white/10 rounded-3xl p-6 text-center cursor-default product-card overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              {/* Icon */}
              <motion.div
                className="w-16 h-16 glass border border-white/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-white font-bold text-base mb-2 relative z-10">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">
                {feature.desc}
              </p>

              {/* Number badge */}
              <div className="absolute top-4 right-4 text-white/10 font-black text-4xl pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass border border-white/15 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-white text-xl font-black mb-1">
              {isRTL ? 'مستعد تبدأ معنا؟' : 'Ready to get started?'}
            </h3>
            <p className="text-white/60 text-sm">
              {isRTL ? 'تواصل معنا الآن واحصل على عرض سعر مجاني' : 'Contact us now and get a free price quote'}
            </p>
          </div>
          <motion.a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-pulse flex-shrink-0 bg-brand-red text-white font-bold px-8 py-4 rounded-2xl shadow-red hover:bg-brand-redDark transition-colors duration-300"
          >
            {isRTL ? '📋 اطلب عرض سعر مجاني' : '📋 Get Free Quote'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
