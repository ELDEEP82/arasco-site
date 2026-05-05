import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { Link } from 'react-router-dom';

export default function Brands() {
  const { t, isRTL } = useLang();
  const p = t.products;

  return (
    <section id="products" className="section-padding bg-brand-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(27,58,107,0.03)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-navy/10 text-brand-navy text-sm font-bold px-5 py-2 rounded-full mb-4">
            {p.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-text mb-4 heading-underline">
            {isRTL ? 'علاماتنا التجارية' : 'Our Brands'}
          </h2>
          <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto mt-6">
            {p.subtitle}
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {p.categories.filter(cat => cat.id !== 'gazelle-rose').map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center justify-between gap-4 bg-white p-8 rounded-3xl shadow-card hover:shadow-hover border border-gray-100 transition-all duration-300 w-64"
            >
              <div className="w-32 h-32 flex items-center justify-center p-2">
                {cat.logo ? (
                  <img src={cat.logo} alt={cat.name} className="w-full h-full object-contain drop-shadow-md" />
                ) : (
                  <span className="text-6xl">{cat.icon}</span>
                )}
              </div>
              <h3 className="text-xl font-black text-brand-navy text-center">{cat.name}</h3>
              {cat.brandLink && (
                <a 
                  href={cat.brandLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center px-6 py-2 rounded-full bg-brand-navy/5 text-brand-navy font-bold text-sm hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-sm"
                >
                  {isRTL ? 'زيارة صفحة البراند' : 'Visit Brand Page'}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-10 py-4 rounded-2xl shadow-navy hover:bg-brand-navyDark transition-all duration-300 text-lg hover:-translate-y-1"
          >
            {isRTL ? 'تصفح جميع المنتجات' : 'View All Products'}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
