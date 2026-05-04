import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

export default function Quality() {
  const { t, isRTL } = useLang();
  const q = t.quality;

  return (
    <section id="quality" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F2347 0%, #1B3A6B 60%, #0F2347 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[radial-gradient(circle,rgba(227,30,36,0.1)_0%,transparent_70%)] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[radial-gradient(circle,rgba(96,165,250,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />

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
            {q.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            {q.title}
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            {q.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {q.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group glass border border-white/10 rounded-3xl p-6 relative overflow-hidden product-card"
            >
              {/* Step glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl" />

              {/* Step number */}
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/20 border border-brand-red/30 rounded-2xl flex items-center justify-center">
                  <span className="text-brand-red font-black text-sm">{step.num}</span>
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h3 className="text-white font-black text-base mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* BG watermark */}
              <div className="absolute bottom-2 right-4 text-white/5 font-black text-6xl pointer-events-none select-none">
                {step.num}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass border border-white/10 rounded-3xl p-8"
        >
          <h3 className={`text-white text-xl font-black mb-8 text-center`}>
            {q.certTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {q.certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 glass border border-white/15 rounded-2xl px-6 py-4 cursor-default"
              >
                <span className="text-brand-red font-black text-xl">✓</span>
                <span className="text-white font-bold text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>

          {/* Quality promise */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <div className="text-4xl mb-3">🏆</div>
            <p className="text-white/70 text-base max-w-lg mx-auto">
              {isRTL
                ? '"التزامنا بالجودة ليس مجرد شعار — هو وعد نجدده مع كل دفعة إنتاج"'
                : '"Our commitment to quality is not just a slogan — it\'s a promise we renew with every production batch"'
              }
            </p>
            <p className="text-brand-red font-bold mt-3 text-sm">
              — {isRTL ? 'إدارة اراسكو' : 'ARASCO Management'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
