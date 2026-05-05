import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

const fadeUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function About() {
  const { t, isRTL } = useLang();
  const a = t.about;

  return (
    <section id="about" className="section-padding bg-brand-offWhite relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-navy/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="inline-block bg-brand-navy/10 text-brand-navy text-sm font-bold px-5 py-2 rounded-full mb-4">
            {a.badge}
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-text mb-4 heading-underline">
            {a.title}
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? '' : ''}`}>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <motion.p variants={fadeUp} className="text-brand-muted text-lg leading-relaxed mb-6">
              {a.p1}
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-muted text-lg leading-relaxed mb-6">
              {a.p2}
            </motion.p>
            <motion.p variants={fadeUp} className="text-brand-muted text-lg leading-relaxed mb-10">
              {a.p3}
            </motion.p>

            {/* Feature Cards */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { ...a.card1, icon: '🏭', color: 'from-blue-50 to-blue-100', border: 'border-blue-200', iconBg: 'bg-blue-100' },
                { ...a.card2, icon: '⭐', color: 'from-amber-50 to-amber-100', border: 'border-amber-200', iconBg: 'bg-amber-100' },
                { ...a.card3, icon: '🔬', color: 'from-green-50 to-green-100', border: 'border-green-200', iconBg: 'bg-green-100' },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${card.color} border ${card.border} rounded-2xl p-5 text-center product-card`}
                >
                  <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center text-2xl mx-auto mb-3`}>
                    {card.icon}
                  </div>
                  <h3 className="font-black text-brand-text text-sm mb-2">{card.title}</h3>
                  <p className="text-brand-muted text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main visual card */}
            <div className="relative bg-gradient-to-br from-brand-navy to-brand-navyLight rounded-3xl p-8 text-white overflow-hidden shadow-navy">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-white"
                    style={{
                      width: `${(i % 5 + 1) * 40}px`,
                      height: `${(i % 5 + 1) * 40}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="text-6xl mb-6">🏆</div>
                <h3 className="text-2xl font-black mb-4">
                  {isRTL ? 'جودة لا تضاهى' : 'Unmatched Quality'}
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  {isRTL
                    ? 'منظومة إنتاج متكاملة تضم أحدث خطوط الإنتاج والمختبرات المتخصصة لضمان أعلى مستويات الجودة'
                    : 'An integrated production system with state-of-the-art lines and specialized laboratories ensuring the highest quality'
                  }
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: isRTL ? 'مساحات تشغيلية' : 'Spacious', label: isRTL ? 'واسعة ومجهزة' : 'Operations', icon: '📐' },
                    { title: isRTL ? 'كوادر محترفة' : 'Professional', label: isRTL ? 'وخبراء صناعة' : 'Team', icon: '👷' },
                    { title: isRTL ? 'أقوى الاختبارات' : 'Rigorous', label: isRTL ? 'لضمان الجودة' : 'Tests', icon: '🔬' },
                    { title: isRTL ? 'رقابة مستمرة' : 'Continuous', label: isRTL ? 'على مدار الساعة' : 'Control', icon: '⚙️' },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="glass border border-white/20 rounded-2xl p-4 text-center"
                    >
                      <div className="text-2xl mb-1">{s.icon}</div>
                      <div className="text-sm md:text-base font-black text-white">{s.title}</div>
                      <div className="text-white/70 text-xs">{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 right-6 bg-brand-red text-white rounded-2xl px-5 py-3 shadow-red font-bold"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-sm opacity-80">{isRTL ? 'خبرة' : 'Long'}</div>
              <div className="text-xl font-black">{isRTL ? 'طويلة' : 'Experience'}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
