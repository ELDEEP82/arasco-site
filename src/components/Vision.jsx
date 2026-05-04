import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

export default function Vision() {
  const { t, isRTL } = useLang();
  const v = t.vision;

  return (
    <section className="section-padding bg-brand-offWhite relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-navy/5 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-red/5 blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-navy/10 text-brand-navy text-sm font-bold px-5 py-2 rounded-full">
            {v.badge}
          </span>
        </motion.div>

        {/* Vision / Mission cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-brand-navy to-brand-navyLight rounded-3xl p-8 text-white overflow-hidden group"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🔭
              </div>
              <h3 className={`text-2xl font-black mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {v.visionTitle}
              </h3>
              <p className={`text-white/80 leading-relaxed text-base ${isRTL ? 'text-right' : 'text-left'}`}>
                {v.visionText}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-brand-red to-brand-redLight rounded-3xl p-8 text-white overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🚀
              </div>
              <h3 className={`text-2xl font-black mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {v.missionTitle}
              </h3>
              <p className={`text-white/80 leading-relaxed text-base ${isRTL ? 'text-right' : 'text-left'}`}>
                {v.missionText}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
        >
          <h3 className={`text-2xl font-black text-brand-text mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
            {v.valuesTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {v.values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-brand-gray rounded-2xl px-6 py-4 cursor-default"
              >
                <span className="text-2xl">{val.icon}</span>
                <span className="font-bold text-brand-text">{val.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
