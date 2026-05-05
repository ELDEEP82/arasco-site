import { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext();

export const translations = {
  ar: {
    dir: 'rtl',
    lang: 'ar',

    // NAV
    nav: {
      home: 'الرئيسية',
      about: 'About ARASCO',
      products: 'منتجاتنا',
      whyUs: 'لماذا نحن',
      quality: 'الجودة',
      contact: 'تواصل معنا',
      langBtn: 'EN',
    },

    // HERO
    hero: {
      badge: '🏆 جودة عالمية المستوى',
      title1: 'نظافة',
      title2: 'بلا حدود',
      title3: '',
      subtitle: 'ARASCO — حيث تلتقي الجودة الأصيلة بأرقى معايير التصنيع العالمية. منظفات وعناية شخصية ومستحضرات تجميل تثق بها الملايين.',
      cta1: '📋 اطلب أسعار الجملة',
      cta2: 'استكشف المنتجات',
      stat1: 'خبرة طويلة',
      stat2: 'منتج متميز',
      stat3: 'ثقة الملايين',
      stat4: 'انتشار عالمي',
    },

    // ABOUT
    about: {
      badge: 'قصتنا',
      title: 'من قلب مصر إلى كل العالم',
      p1: 'ARASCO ليست مجرد شركة — هي قصة نجاح ملهمة. بدأنا بحلم بسيط: توفير منتجات نظافة وعناية عالية الجودة بأسعار تناسب الجميع.',
      p2: 'اليوم، نفخر بامتلاك خطوط إنتاج متطورة تعمل وفق أحدث المعايير الدولية، فريق من الكيميائيين والمهندسين المتخصصين، وشبكة توزيع تغطي كافة الأنحاء.',
      p3: 'كل قطرة من منتجاتنا تحمل معها التزامنا بالجودة والشفافية والابتكار المستمر لخدمة الجميع.',
      card1: { title: 'تصنيع عالي الجودة', desc: 'كل منتج يُصنع بأيادٍ محترفة وبأعلى معايير الدقة' },
      card2: { title: 'مواد خام فائقة الجودة', desc: 'نختار أجود المواد الخام المستوردة والمحلية' },
      card3: { title: 'رقابة جودة صارمة', desc: 'كل دفعة إنتاج تخضع لـ ١٨+ اختبار جودة' },
    },

    // WHY US
    whyUs: {
      badge: 'مميزاتنا',
      title: 'لماذا تختار ARASCO؟',
      subtitle: 'لأننا نقدم أكثر من مجرد منتج — نقدم تجربة ثقة كاملة',
      features: [
        { icon: '💰', title: 'أسعار تنافسية', desc: 'أفضل جودة بأسعار تناسب تجار الجملة والتجزئة' },
        { icon: '🏭', title: 'تصنيع مصري', desc: 'مصنع متكامل بأحدث التقنيات على أرض مصر' },
        { icon: '🔬', title: 'بحث وتطوير', desc: 'فريق علمي متخصص يطور الفورمولا باستمرار' },
        { icon: '🚀', title: 'توصيل محلي ودولي', desc: 'توصيل سريع داخل جميع محافظات مصر، وشحن دولي لجميع عملائنا ومستوردينا' },
        { icon: '♻️', title: 'صديق للبيئة', desc: 'تركيبات آمنة ومستدامة لحماية كوكبنا' },
        { icon: '🏆', title: 'ضمان الجودة', desc: 'كل منتج مضمون أو يُستبدل فوراً بدون شروط' },
        { icon: '📞', title: 'دعم مستمر', desc: 'فريق خدمة عملاء متاح ٦ أيام في الأسبوع' },
        { icon: '📦', title: 'تغليف احترافي', desc: 'تغليف جذاب يعزز مبيعاتك ويجذب المستهلك' },
      ],
    },

    // PRODUCTS
    products: {
      badge: 'معرض المنتجات',
      title: 'منتجاتنا',
      subtitle: 'نقدم لك تشكيلة واسعة من المنتجات التي تلبي كافة احتياجاتك اليومية بأعلى معايير الجودة',
      categories: [
        {
          id: 'foameen',
          name: 'علامة فومين (FOAMEEN)',
          icon: '✨',
          logo: '/foameen-logo.jpg',
          desc: 'نظافة عالمية بمعايير احترافية — منتج مصري جديد لأول مرة',
          brandLink: 'https://www.facebook.com/share/1EfHoYsgnY/',
          products: [
            { 
              name: 'مسحوق فومين للغسالات الأوتوماتيك', 
              desc: 'نظافة عالمية بمعايير احترافية — قوة التنظيف المطلقة! إزالة البقع العنيدة، انتعاش يدوم طويلاً.', 
              tag: 'إطلاق جديد!',
              image: '/foameen-1.jpg'
            },
            { 
              name: 'اكتشف العرض! جردل فومين ١٠ كجم', 
              desc: 'قوة إضافية في حجم عائلي! تنظيف عميق، رائحة تدوم، وفر أكتر.', 
              tag: 'حصري',
              image: '/foameen-offer.jpg'
            },
            { 
              name: 'مسحوق فومين بتركيبة متطورة', 
              desc: 'أداء فائق بسعر يليق بك. يحافظ على الألوان ويحمي الأقمشة.', 
              tag: 'اختيار البيوت الذكية',
              image: '/foameen-2.jpg'
            },
          ],
        },
        {
          id: 'gazelle',
          name: 'علامة غزال (Gazelle)',
          icon: '💅',
          logo: '/gazelle-logo.jpg',
          desc: 'عناية فائقة وتجميل راقي — مزيل طلاء أظافر يجمع بين الفعالية والنعومة',
          brandLink: 'https://www.facebook.com/share/1XywePk1Eo/',
          products: [
            { 
              name: 'مزيل طلاء أظافر غزال (٨٠ مللي)', 
              desc: 'إزالة سريعة وآمنة بدون جفاف! تركيبة تحافظ على قوة الأظافر ولمعانها.', 
              tag: 'فاخر',
              image: '/gazelle-1.jpg'
            },
            { 
              name: 'غزال ٨٠ مللي — عرض الجملة', 
              desc: 'أسعار تنافسية خاصة جداً للكميات! لو أنت تاجر، موزع، أو ماركت، ده اختيارك المربح.', 
              tag: 'فرصة للتجار',
              image: '/gazelle-4.jpg'
            },
            { 
              name: 'عناية وترطيب متكامل', 
              desc: 'حجم ٨٠ مللي مثالي للاستخدام اليومي، مريح وسهل الاستخدام في كل مكان.', 
              tag: 'الأكثر طلباً',
              image: '/gazelle-2.jpg'
            },
          ],
        },
        {
          id: 'gazelle-rose',
          name: 'ماء ورد غزال (Gazelle)',
          icon: '🌸',
          logo: '/gazelle-logo.jpg',
          desc: 'أسرار الجمال الطبيعي بين يديك — قطرات نقية من الطبيعة',
          brandLink: 'https://www.facebook.com/share/1XywePk1Eo/',
          products: [
            { 
              name: 'ماء ورد غزال النقي (٢٤٠ مللي)', 
              desc: 'ترطيب عميق، تهدئة للبشرة، ونضارة فورية تدوم طوال اليوم.', 
              tag: 'طبيعي',
              image: '/gazelle-rose-1.jpg'
            },
            { 
              name: 'ماء ورد ٢٤٠ مللي — عرض الجملة', 
              desc: 'أسعار تنافسية ممتازة للكميات! الخيار المثالي للتجار والموزعين.', 
              tag: 'فرصة للتجار',
              image: '/gazelle-rose-4.jpg'
            },
            { 
              name: 'عناية فائقة ونضارة', 
              desc: 'حجم عائلي ٢٤٠ مللي، مستخلص من أفضل الورود لصفاء ونقاء بشرتك.', 
              tag: 'فاخر',
              image: '/gazelle-rose-2.jpg'
            },
          ],
        },
      ],
      requestPrice: 'اطلب عرض سعر',
      viewAll: 'عرض جميع المنتجات',
    },

    // VISION
    vision: {
      badge: 'رؤيتنا',
      visionTitle: 'رؤيتنا',
      visionText: 'أن تكون ARASCO الاختيار الأول للجميع في منتجات النظافة والعناية، ونقدم فخر الصناعة والجودة للعالم أجمع.',
      missionTitle: 'رسالتنا',
      missionText: 'تقديم منتجات نظافة وعناية شخصية عالية الجودة بأسعار عادلة، مع الالتزام بأعلى معايير السلامة والاستدامة البيئية والمسؤولية الاجتماعية.',
      valuesTitle: 'قيمنا',
      values: [
        { icon: '🎯', text: 'الجودة أولاً' },
        { icon: '🤝', text: 'الثقة والشفافية' },
        { icon: '💡', text: 'الابتكار المستمر' },
        { icon: '🌱', text: 'الاستدامة' },
        { icon: '❤️', text: 'خدمة المجتمع' },
      ],
    },

    // QUALITY
    quality: {
      badge: 'معايير الجودة',
      title: 'جودة لا تقبل التنازل',
      subtitle: 'كل منتج يمر بمراحل فحص ومراقبة دقيقة قبل أن يصل إليك',
      steps: [
        { num: '01', title: 'اختيار المواد الخام', desc: 'فحص دقيق لكل المواد قبل الدخول للخط الإنتاجي' },
        { num: '02', title: 'تطوير الفورمولا', desc: 'فريق بحثي متخصص يطور التركيبات في مختبراتنا' },
        { num: '03', title: 'الإنتاج الرقابي', desc: 'خطوط إنتاج تعمل بأعلى معايير الصحة والسلامة' },
        { num: '04', title: 'فحص الجودة', desc: 'اختبارات جودة صارمة لكل دفعة إنتاج قبل التعبئة' },
        { num: '05', title: 'الموافقة النهائية', desc: 'تحليل مستقل بمختبرات معتمدة قبل الشحن' },
        { num: '06', title: 'التسليم الآمن', desc: 'تغليف محكم وتخزين مثالي حتى وصول المنتج لك' },
      ],
      certTitle: 'شهاداتنا ومعتمداتنا',
      certs: ['ISO 9001:2015', 'HACCP', 'هيئة الدواء المصرية', 'الهيئة المصرية للمواصفات والجودة'],
    },

    // CTA
    cta: {
      badge: '🤝 وصّلك مستعد تكبّر أعمالك؟',
      title: 'مستعد تكبّر أعمالك؟',
      subtitle: 'سواء كنت تاجر جملة، صاحب متجر، موزع، أو مستورد — ARASCO شريكك الأمين في النجاح',
      btn1: '📋 اطلب كتالوج الأسعار',
      btn2: '💬 تواصل على واتساب',
      btn3: '📞 اتصل بينا دلوقتي',
      phone: '+20 109 757 7908',
      whatsapp: 'https://wa.me/201097577908',
      catalogMsg: 'مرحباً ARASCO، أنا مهتم بكتالوج الأسعار وأود التعاون معكم 📋',
    },

    // FOOTER
    footer: {
      desc: 'شركة ARASCO — جودة مصرية تفخر بها منذ أكثر من عقد. نصنع لأجلك، نبتكر لمستقبلك.',
      linksTitle: 'روابط سريعة',
      productsTitle: 'منتجاتنا',
      contactTitle: 'تواصل معنا',
      rights: '© 2026 ARASCO. جميع الحقوق محفوظة.',
      madeIn: '🇪🇬 صُنع في مصر بفخر',
      links: ['الرئيسية', 'عن الشركة', 'المنتجات', 'لماذا نحن', 'الجودة', 'تواصل معنا'],
      productLinks: ['منظفات المنزل', 'عناية بالبشرة', 'مستحضرات التجميل'],
      address: 'بني سويف — الواسطي — كوم أبو راضي — المنطقة الصناعية',
      email: 'info@arascocompany.com',
      phone: '+20 109 757 7908',
    },
  },

  en: {
    dir: 'ltr',
    lang: 'en',

    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      whyUs: 'Why Us',
      quality: 'Quality',
      contact: 'Contact',
      langBtn: 'عربي',
    },

    hero: {
      badge: '🏆 World-Class Quality',
      title1: 'Cleanliness',
      title2: 'Beyond Compare',
      title3: '',
      subtitle: 'ARASCO — Where authentic quality meets world-class manufacturing standards. Detergents, personal care & cosmetics trusted by millions.',
      cta1: '📋 Request Wholesale Price',
      cta2: 'Explore Products',
      stat1: 'Long Experience',
      stat2: 'Premium Products',
      stat3: 'Trusted by Millions',
      stat4: 'Global Reach',
    },

    about: {
      badge: 'Our Story',
      title: 'From the Heart of Egypt to the World',
      p1: 'ARASCO is not just a company — it\'s an inspiring success story. We started with a simple dream: providing high-quality cleaning and personal care products at prices that suit everyone.',
      p2: 'Today, we\'re proud to operate advanced production lines meeting the latest international standards, with a team of specialized chemists and engineers, and a distribution network covering all regions.',
      p3: 'Every drop of our products carries our commitment to quality, transparency, and continuous innovation in service of everyone.',
      card1: { title: 'High-Quality Manufacturing', desc: 'Every product is made by professionals with highest precision' },
      card2: { title: 'Premium Raw Materials', desc: 'We select the finest imported and local raw materials' },
      card3: { title: 'Strict Quality Control', desc: 'Every production batch undergoes 18+ quality tests' },
    },

    whyUs: {
      badge: 'Our Advantages',
      title: 'Why Choose ARASCO?',
      subtitle: 'Because we deliver more than just a product — we deliver complete trust',
      features: [
        { icon: '💰', title: 'Competitive Pricing', desc: 'Best quality at prices that suit wholesalers and retailers' },
        { icon: '🏭', title: 'Egyptian Manufacturing', desc: 'Fully integrated factory with latest technologies in Egypt' },
        { icon: '🔬', title: 'R&D Excellence', desc: 'Specialized scientific team continuously improving formulas' },
        { icon: '🚀', title: 'Local & Global Delivery', desc: 'Fast delivery across all Egyptian governorates, and international shipping for our global clients and importers' },
        { icon: '♻️', title: 'Eco-Friendly', desc: 'Safe and sustainable formulations to protect our planet' },
        { icon: '🏆', title: 'Quality Guarantee', desc: 'Every product guaranteed or replaced immediately, no conditions' },
        { icon: '📞', title: 'Continuous Support', desc: 'Customer service team available 6 days a week' },
        { icon: '📦', title: 'Professional Packaging', desc: 'Attractive packaging that boosts your sales and attracts consumers' },
      ],
    },

    products: {
      badge: 'Product Gallery',
      title: 'Our Products',
      subtitle: 'We offer a wide range of products that meet all your daily needs with the highest quality standards',
      categories: [
        {
          id: 'foameen',
          name: 'FOAMEEN Brand',
          icon: '✨',
          logo: '/foameen-logo.jpg',
          desc: 'World-class cleanliness with professional standards — A new Egyptian product for the first time',
          brandLink: 'https://www.facebook.com/share/1EfHoYsgnY/',
          products: [
            { 
              name: 'FOAMEEN Automatic Washing Powder', 
              desc: 'World-class cleanliness with professional standards — Absolute cleaning power! Removes stubborn stains.', 
              tag: 'New Launch!',
              image: '/foameen-1.jpg'
            },
            { 
              name: 'Discover the Offer! FOAMEEN 10 KG Bucket', 
              desc: 'Extra power in a family size! Deep cleaning, lasting scent, save more.', 
              tag: 'Exclusive',
              image: '/foameen-offer.jpg'
            },
            { 
              name: 'FOAMEEN Advanced Formula', 
              desc: 'Superior performance at a price that suits you. Preserves colors and protects fabrics.', 
              tag: 'Smart Choice',
              image: '/foameen-2.jpg'
            },
          ],
        },
        {
          id: 'gazelle',
          name: 'Gazelle Brand',
          icon: '💅',
          logo: '/gazelle-logo.jpg',
          desc: 'Superior care and elegant beauty — Nail polish remover combining efficacy and softness',
          brandLink: 'https://www.facebook.com/share/1XywePk1Eo/',
          products: [
            { 
              name: 'Gazelle Nail Polish Remover (80 ML)', 
              desc: 'Fast and safe removal without drying! A formula that maintains nail strength and shine.', 
              tag: 'Premium',
              image: '/gazelle-1.jpg'
            },
            { 
              name: 'Gazelle 80 ML — Wholesale Offer', 
              desc: 'Highly competitive prices for quantities! If you are a trader, distributor, or market, this is your profitable choice.', 
              tag: 'Traders Deal',
              image: '/gazelle-4.jpg'
            },
            { 
              name: 'Complete Care & Hydration', 
              desc: '80 ML size ideal for daily use, convenient and easy to use anywhere.', 
              tag: 'Most Requested',
              image: '/gazelle-2.jpg'
            },
          ],
        },
        {
          id: 'gazelle-rose',
          name: 'Gazelle Rose Water',
          icon: '🌸',
          logo: '/gazelle-logo.jpg',
          desc: 'Secrets of natural beauty in your hands — pure drops of nature',
          brandLink: 'https://www.facebook.com/share/1XywePk1Eo/',
          products: [
            { 
              name: 'Gazelle Pure Rose Water (240 ML)', 
              desc: 'Deep hydration, skin soothing, and instant freshness that lasts all day.', 
              tag: 'Natural',
              image: '/gazelle-rose-1.jpg'
            },
            { 
              name: 'Rose Water 240 ML — Wholesale Offer', 
              desc: 'Excellent competitive prices for quantities! The ideal choice for traders and distributors.', 
              tag: 'Traders Deal',
              image: '/gazelle-rose-4.jpg'
            },
            { 
              name: 'Complete Care & Freshness', 
              desc: '240 ML family size, extracted from the finest roses for your skin\'s purity.', 
              tag: 'Premium',
              image: '/gazelle-rose-2.jpg'
            },
          ],
        },
      ],
      requestPrice: 'Request Quote',
      viewAll: 'View All Products',
    },

    vision: {
      badge: 'Our Vision',
      visionTitle: 'Our Vision',
      visionText: 'To be everyone\'s first choice in cleaning and personal care products, exporting the pride of industry and quality to the whole world.',
      missionTitle: 'Our Mission',
      missionText: 'Providing high-quality cleaning and personal care products at fair prices, while adhering to the highest standards of safety, environmental sustainability and social responsibility.',
      valuesTitle: 'Our Values',
      values: [
        { icon: '🎯', text: 'Quality First' },
        { icon: '🤝', text: 'Trust & Transparency' },
        { icon: '💡', text: 'Continuous Innovation' },
        { icon: '🌱', text: 'Sustainability' },
        { icon: '❤️', text: 'Community Service' },
      ],
    },

    quality: {
      badge: 'Quality Standards',
      title: 'Quality That Never Compromises',
      subtitle: 'Every product passes through rigorous inspection and control stages before reaching you',
      steps: [
        { num: '01', title: 'Raw Material Selection', desc: 'Precise inspection of all materials before entering the production line' },
        { num: '02', title: 'Formula Development', desc: 'Specialized research team develops formulations in our laboratories' },
        { num: '03', title: 'Controlled Production', desc: 'Production lines operating at the highest health and safety standards' },
        { num: '04', title: 'Quality Inspection', desc: 'Rigorous quality tests for every production batch before packaging' },
        { num: '05', title: 'Final Approval', desc: 'Independent analysis by accredited laboratories before shipping' },
        { num: '06', title: 'Safe Delivery', desc: 'Tight packaging and optimal storage until the product reaches you' },
      ],
      certTitle: 'Our Certificates & Accreditations',
      certs: ['ISO 9001:2015', 'HACCP', 'Egyptian Drug Authority', 'Egyptian Standards & Quality Authority'],
    },

    cta: {
      badge: '🤝 Ready to Grow Your Business?',
      title: 'Ready to Grow Your Business?',
      subtitle: 'Whether you\'re a wholesaler, retailer, distributor, or international importer — ARASCO is your trusted partner in success',
      btn1: '📋 Request Price Catalog',
      btn2: '💬 WhatsApp Us',
      btn3: '📞 Call Us Now',
      phone: '+20 109 757 7908',
      whatsapp: 'https://wa.me/201097577908',
      catalogMsg: 'Hello ARASCO, I am interested in your price catalog and would like to discuss a partnership 📋',
    },

    footer: {
      desc: 'ARASCO Company — Egyptian quality you\'re proud of for over a decade. We manufacture for you, we innovate for your future.',
      linksTitle: 'Quick Links',
      productsTitle: 'Our Products',
      contactTitle: 'Contact Us',
      rights: '© 2026 ARASCO. All Rights Reserved.',
      madeIn: '🇪🇬 Proudly Made in Egypt',
      links: ['Home', 'About', 'Products', 'Why Us', 'Quality', 'Contact'],
      productLinks: ['Home Cleaners', 'Skin Care', 'Beauty Products'],
      address: 'Beni Suef — Al-Wasta — Kom Abou Radi — Industrial Zone',
      email: 'info@arascocompany.com',
      phone: '+20 109 757 7908',
    },
  },
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('arasco-lang') || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('arasco-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, isRTL: lang === 'ar' }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
