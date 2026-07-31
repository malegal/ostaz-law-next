import '../styles/globals.css';
import { Amiri, Tajawal, Playfair_Display, Montserrat, IBM_Plex_Sans_Arabic } from 'next/font/google';

// خط النصوص العربية الثانوية والوصفية (الجديد)
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-body-ar',
  display: 'swap',
  preload: false,
});

// خط النصوص العربية السابق - تم إلغاء استخدامه لصالح IBM Plex Sans Arabic
// لكن نحتفظ به للأغراض الاحتياطية
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-ar-fallback',
  display: 'swap',
  preload: false,
});

// خط الـHero والعناوين الرئيسية (يُحمّل بأولوية عالية)
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
});

// خط الشعار النصي "OSTAZ"
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
  preload: false,
});

// خط النصوص الإنجليزية الثانوية
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-eng',
  display: 'swap',
  preload: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${ibmPlexSansArabic.variable} ${tajawal.variable} ${amiri.variable} ${playfair.variable} ${montserrat.variable}`}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
