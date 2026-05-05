import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext';

/* ─── Product Slider ─── */
function ProductSlider({ products, isRTL }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + products.length) % products.length);
  const next = () => setCurrent(i => (i + 1) % products.length);

  const tagColors = {
    'الأكثر مبيعاً': 'bg-brand-red text-white',
    'Best Seller':   'bg-brand-red text-white',
    'جديد':          'bg-green-500 text-white',
    'New':           'bg-green-500 text-white',
    'مميز':          'bg-amber-500 text-white',
    'Featured':      'bg-amber-500 text-white',
    'الأفضل':        'bg-purple-500 text-white',
    'Best':          'bg-purple-500 text-white',
    'طبيعي':         'bg-emerald-500 text-white',
    'Natural':       'bg-emerald-500 text-white',
    'فاخر':          'bg-amber-600 text-white',
    'Premium':       'bg-amber-600 text-white',
    'الأكثر طلباً':  'bg-blue-500 text-white',
    'Most Requested':'bg-blue-500 text-white',
    'إطلاق جديد!':   'bg-brand-red text-white',
    'New Launch!':   'bg-brand-red text-white',
    'حصري':          'bg-purple-600 text-white',
    'Exclusive':     'bg-purple-600 text-white',
    'اختيار البيوت الذكية': 'bg-amber-500 text-white',
    'Smart Choice':  'bg-amber-500 text-white',
    'فرصة للتجار':   'bg-emerald-600 text-white',
    'Traders Deal':  'bg-emerald-600 text-white',
  };

  return (
    <div className="relative">
      {/* Slide */}
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-white rounded-2xl p-6 min-h-[160px] flex flex-col justify-between shadow-card border border-gray-100"
          >
            <div className={isRTL ? 'text-right' : 'text-left'}>
              {/* Product Image */}
              {products[current].image && (
                <div className="relative w-full h-[340px] sm:h-[420px] md:h-[380px] lg:h-[400px] mb-6 rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100/80 flex items-center justify-center overflow-hidden group/img">
                  {/* Decorative ambient glow behind the product */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white rounded-full blur-3xl opacity-80 group-hover/img:opacity-100 transition-all duration-700" />
                  
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1.2 }}
                    whileHover={{ scale: 1.4, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    src={products[current].image} 
                    alt={products[current].name} 
                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl relative z-10"
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 -translate-x-full group-hover/img:translate-x-full ease-in-out z-20" />
                </div>
              )}

              <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''} mb-3`}>
                <h4 className="font-black text-brand-text text-base flex-1 leading-tight">
                  {products[current].name}
                </h4>
                {products[current].tag && (
                  <span className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[products[current].tag] || 'bg-gray-100 text-gray-600'}`}>
                    {products[current].tag}
                  </span>
                )}
              </div>
              <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">
                {products[current].desc}
              </p>
            </div>

            {/* Counter */}
            <div className={`flex items-center ${isRTL ? 'justify-end' : 'justify-start'} gap-2 mt-4`}>
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 bg-brand-navy' : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} justify-between mt-3 gap-2`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={isRTL ? next : prev}
          className="w-10 h-10 rounded-xl bg-brand-navy/10 hover:bg-brand-navy text-brand-navy hover:text-white transition-all duration-300 flex items-center justify-center font-bold"
        >
          {isRTL ? '→' : '←'}
        </motion.button>
        <span className="text-brand-muted text-sm font-medium self-center">
          {current + 1} / {products.length}
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={isRTL ? prev : next}
          className="w-10 h-10 rounded-xl bg-brand-navy/10 hover:bg-brand-navy text-brand-navy hover:text-white transition-all duration-300 flex items-center justify-center font-bold"
        >
          {isRTL ? '←' : '→'}
        </motion.button>
      </div>
    </div>
  );
}

/* ─── Category Card ─── */
function CategoryCard({ category, index, isRTL, labels }) {
  const [hovered, setHovered] = useState(false);

  const gradients = [
    'from-blue-600 to-brand-navyLight',
    'from-emerald-600 to-teal-500',
    'from-purple-600 to-pink-500',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-500 border border-gray-100"
    >
      {/* Category Header */}
      <div className="relative bg-gradient-to-br from-[#0a2351] to-[#1e448a] p-6 overflow-hidden">
        {/* BG pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-[#1877F2]/20 translate-y-1/2 -translate-x-1/2 blur-xl" />

        <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''} relative z-10`}>
          <motion.div
            animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shrink-0 p-1"
          >
            {category.logo ? (
              <img src={category.logo} alt={category.name} className="w-full h-full object-contain rounded-xl" />
            ) : (
              <span className="text-3xl">{category.icon}</span>
            )}
          </motion.div>
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-black text-xl leading-tight mb-1">{category.name}</h3>
            <p className="text-white/80 text-sm leading-snug">{category.desc}</p>
          </div>
        </div>
        
        {/* Brand Link (if available) */}
        {category.brandLink && (
          <a 
            href={category.brandLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 mt-4 inline-flex items-center gap-2 text-white/90 text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm transition-colors border border-white/20 ${isRTL ? 'float-left flex-row-reverse' : 'float-right'}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {isRTL ? 'صفحة البراند' : 'Brand Page'}
          </a>
        )}
      </div>

      {/* Slider */}
      <div className="p-5">
        <div className={`text-brand-muted text-xs font-bold uppercase tracking-widest mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
          {isRTL ? 'أبرز المنتجات' : 'Featured Products'}
        </div>
        <ProductSlider products={category.products} isRTL={isRTL} />

        <motion.a
          href={category.brandLink || "https://www.facebook.com/share/1EfHoYsgnY/"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 py-3 flex justify-center items-center gap-2 rounded-xl bg-gradient-to-br from-[#0a2351] to-[#1e448a] text-white font-bold text-sm hover:shadow-lg transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          {isRTL ? 'اطلب الآن من الصفحة' : 'Order Now from Page'}
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ─── Main Products Section ─── */
export default function Products() {
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
            {p.title}
          </h2>
          <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto mt-6">
            {p.subtitle}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {p.categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              isRTL={isRTL}
              labels={p}
            />
          ))}
        </div>

        {/* Brand Promises / Features below the product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-brand-navy/5 text-center shadow-sm">
            <div className="text-3xl mb-3">🚚</div>
            <h4 className="font-bold text-brand-navy mb-1">{isRTL ? 'توصيل لجميع المحافظات' : 'Nationwide Delivery'}</h4>
            <p className="text-brand-muted text-sm">{isRTL ? 'يوصلك لحد بيتك أو متجرك خلال ٧٢ ساعة' : 'Delivered to your home or store within 72 hours'}</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-brand-navy/5 text-center shadow-sm">
            <div className="text-3xl mb-3">📦</div>
            <h4 className="font-bold text-brand-navy mb-1">{isRTL ? 'تغليف آمن ومحكم' : 'Secure Packaging'}</h4>
            <p className="text-brand-muted text-sm">{isRTL ? 'نضمن وصول المنتجات بأفضل حالة' : 'We ensure products arrive in perfect condition'}</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-brand-navy/5 text-center shadow-sm">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="font-bold text-brand-navy mb-1">{isRTL ? 'للأفراد والتجار' : 'For Individuals & Traders'}</h4>
            <p className="text-brand-muted text-sm">{isRTL ? 'متوفر بأسعار تنافسية تناسب الجميع' : 'Available at competitive prices for everyone'}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
