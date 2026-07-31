import '../styles/globals.css';
import { Amiri, Tajawal, Playfair_Display, Montserrat } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-ar',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-eng',
  display: 'swap',
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
