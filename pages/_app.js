import '../styles/globals.css';
import { Amiri, Tajawal, Playfair_Display, Montserrat } from 'next/font/google';

// خط النصوص العربية (يستخدم في معظم المحتوى، لكن ليس في الـHero)
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'], // فقط الأوزان المستخدمة فعلياً
  variable: '--font-ar',
  display: 'swap',
  preload: false, // ليس ضرورياً للـHero، نؤجل تحميله
});

// خط الـHero والعناوين الرئيسية (LCP element)
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['700', '900'], // 900 يُستخدم في .hero-title، 700 في عناصر أخرى
  variable: '--font-serif',
  display: 'swap',
  preload: true, // الأولوية القصوى لأن هذا الخط يظهر في الـHero
});

// خط الشعار النصي "OSTAZ" (يظهر في الهيدر، ليس جزءاً من LCP)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['900'], // فقط الوزن المستخدم في .brand-primary
  variable: '--font-display',
  display: 'swap',
  preload: false,
});

// خط النصوص الإنجليزية الثانوية (مثل .brand-secondary)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'], // فقط الوزن المستخدم
  variable: '--font-eng',
  display: 'swap',
  preload: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${tajawal.variable} ${amiri.variable} ${playfair.variable} ${montserrat.variable}`}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
