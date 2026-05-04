import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

export default function CTA() {
  const { t, isRTL } = useLang();
  const c = t.cta;

  return (
    <section id="cta" className="section-padding relative overflow-hidden bg-brand-offWhite">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(27,58,107,0.05)_0%,transparent_70%)] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-brand-navy via-brand-navyLight to-brand-navy rounded-[2.5rem] p-10 md:p-16 overflow-hidden text-center"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/20 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-8 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2" />

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-brand-red/10 rounded-full pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block glass border border-white/20 text-white/80 text-sm font-bold px-5 py-2 rounded-full mb-6"
            >
              {c.badge}
            </motion.span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              {c.title}
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-12">
              {c.subtitle}
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              {/* Catalog request — opens WhatsApp with pre-filled message */}
              <motion.a
                href={`https://wa.me/201097577908?text=${encodeURIComponent(c.catalogMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="btn-pulse w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red text-white font-bold px-8 py-4 rounded-2xl shadow-red hover:bg-brand-redDark transition-all duration-300 text-base"
              >
                {c.btn1}
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={c.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-8 py-4 rounded-2xl hover:bg-[#1da851] transition-all duration-300 text-base shadow-lg"
              >
                {c.btn2}
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${c.phone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 glass border border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 text-base"
              >
                {c.btn3}
              </motion.a>
            </div>

            {/* Phone display */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 text-white/50 text-sm"
            >
              <span className="font-medium">{isRTL ? 'أو اتصل مباشرة:' : 'Or call directly:'}</span>
              <a
                href={`tel:${c.phone.replace(/\s/g, '')}`}
                className="text-white font-bold hover:text-brand-red transition-colors duration-300 ms-2"
              >
                {c.phone}
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Info cards below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            { icon: '⏰', title: isRTL ? 'أوقات العمل' : 'Working Hours',   desc: isRTL ? 'السبت – الخميس: ٩ص – ٥م' : 'Sat – Thu: 9AM – 5PM' },
            { icon: '📍', title: isRTL ? 'موقعنا'       : 'Our Location',    desc: isRTL ? 'بني سويف — الواسطي — كوم أبو راضي — المنطقة الصناعية' : 'Beni Suef — Al-Wastani — Kom Abi Radi — Industrial Zone' },
            { icon: '📧', title: isRTL ? 'البريد الإلكتروني' : 'Email',      desc: 'info@arascocompany.com' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-card border border-gray-100 product-card"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-black text-brand-text text-sm mb-1">{item.title}</h4>
              <p className="text-brand-muted text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
