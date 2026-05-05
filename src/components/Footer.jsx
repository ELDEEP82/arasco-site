import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const { t, isRTL } = useLang();
  const f = t.footer;
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = [
    {
      name: 'ARASCO',
      label: 'ARASCO',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/share/1Cqjds8iq4/',
      color: 'hover:bg-[#1877F2]',
    },
    {
      name: 'FOAMEEN',
      label: 'FOAMEEN',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/share/1EfHoYsgnY/',
      color: 'hover:bg-[#1877F2]',
    },
    {
      name: 'Gazelle',
      label: 'Gazelle',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: 'https://www.facebook.com/share/1XywePk1Eo/',
      color: 'hover:bg-[#1877F2]',
    },
    {
      name: 'WhatsApp',
      label: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: 'https://wa.me/201097577908',
      color: 'hover:bg-[#25D366]',
    },
  ];

  return (
    <footer className="footer-gradient text-white">
      {/* Top wave */}
      <div className="relative">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16 -mb-1">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,0 L0,0 Z" fill="#F8FAFB" />
        </svg>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Logo */}
            <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0">
                <img
                  src="/arasco-logo.png"
                  alt="ARASCO"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#1B3A6B] to-[#2A5298] flex items-center justify-center rounded-xl"><span class="text-white font-black text-xs">ARA</span></div>`;
                  }}
                />
              </div>
              <div>
                <div className="text-white font-black text-xl leading-none">ARASCO</div>
                <div className="text-brand-red text-xs font-semibold">
                  {isRTL ? 'شركة المنظفات والعناية' : 'Cleaning & Care Company'}
                </div>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {f.desc}
            </p>

            {/* Social Links */}
            <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className={`group flex items-center gap-1.5 px-3 py-2 glass border border-white/15 rounded-xl text-white/70 hover:text-white ${s.color} transition-all duration-300`}
                >
                  {s.icon}
                  <span className="text-xs font-bold hidden sm:block">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h4 className="text-white font-black text-base mb-5 relative inline-block">
              {f.linksTitle}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
            </h4>
            <ul className="space-y-3">
              {f.links.map((link, i) => {
                const ids = ['hero', 'about', 'products', 'why-us', 'quality', 'cta'];
                return (
                  <li key={i}>
                    <button
                      onClick={() => {
                        if (ids[i] === 'products') {
                          navigate('/products');
                          return;
                        }
                        if (location.pathname !== '/') {
                          navigate(`/#${ids[i]}`);
                          return;
                        }
                        document.getElementById(ids[i])?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h4 className="text-white font-black text-base mb-5 relative inline-block">
              {f.productsTitle}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
            </h4>
            <ul className="space-y-3">
              {f.productLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => navigate('/products')}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            {/* Egypt Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-8 inline-flex items-center gap-3 glass border border-white/15 rounded-2xl px-4 py-3 cursor-default"
            >
              <span className="text-2xl">🇪🇬</span>
              <div>
                <div className="text-white font-black text-xs">{f.madeIn}</div>
                <div className="text-white/50 text-xs mt-0.5">
                  {isRTL ? 'بكل فخر واعتزاز' : 'With Pride & Excellence'}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h4 className="text-white font-black text-base mb-5 relative inline-block">
              {f.contactTitle}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-lg mt-0.5 flex-shrink-0">📍</span>
                <span className="text-white/60 text-sm leading-relaxed">{f.address}</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-lg flex-shrink-0">📞</span>
                <a
                  href={`tel:${f.phone.replace(/\s/g, '')}`}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 font-medium"
                >
                  {f.phone}
                </a>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span className="text-lg flex-shrink-0">📧</span>
                <a
                  href={`mailto:${f.email}`}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  {f.email}
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/201097577908"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-[#1da851] transition-colors duration-300 shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {isRTL ? 'واتساب الآن' : 'WhatsApp Now'}
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <p className="text-white/40 text-xs text-center sm:text-start">
              {f.rights}
            </p>
            <p className="text-white/30 text-xs">
              {isRTL
                ? 'تصميم وتطوير بكل إتقان ❤️'
                : 'Designed & Built with ❤️'
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
