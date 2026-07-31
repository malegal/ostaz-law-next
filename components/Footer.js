import Link from 'next/link';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>مؤسسة الأستاذ محمود عبد الحميد</h3>
          <p>للمحاماة والاستشارات القانونية</p>
          <div className="social">
            <a href="https://www.facebook.com/malegal" target="_blank" rel="noopener noreferrer"><Icon name="facebook-f" /></a>
            <a href="https://x.com/mahmoud_a_hamyd" target="_blank" rel="noopener noreferrer"><Icon name="twitter" /></a>
            <a href="https://t.me/mahmoud_a_hamyd" target="_blank" rel="noopener noreferrer"><Icon name="telegram-plane" /></a>
            <a href="https://www.linkedin.com/in/mahmoud-abdel-hamid-0a4664374" target="_blank" rel="noopener noreferrer"><Icon name="linkedin-in" /></a>
            <a href="mailto:ma.law.firm@outlook.com"><Icon name="envelope" /></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>روابط</h4>
          <Link href="/">الرئيسية</Link>
          <Link href="/about">عن المؤسسة</Link>
          <Link href="/specialties">التخصصات</Link>
          <Link href="/sectors">قطاعات نخدمها</Link>
          <Link href="/news-archive">الأخبار</Link>
          <Link href="/blog">المكتبة</Link>
          <Link href="/client-inquiry">تابع قضيتك</Link>
          <Link href="/contact">اتصل بنا</Link>
        </div>
        <div className="footer-col">
          <h4>خدمات</h4>
          <Link href="/contact?tab=consult">استشارة قانونية</Link>
          <Link href="/contact?tab=appointment">حجز موعد</Link>
          <Link href="/contact?tab=representation">تمثيل قانوني</Link>
          <Link href="/client-inquiry">متابعة قضية</Link>
        </div>
        <div className="footer-col">
          <h4>اتصال</h4>
          <a href="tel:+201101076000"><Icon name="phone" /> +20 110 107 6000</a>
          <a href="mailto:ma.law.firm@outlook.com"><Icon name="envelope" /> ma.law.firm@outlook.com</a>
          <a href="https://maps.app.goo.gl/inYTfr9Js78JwXqx5" target="_blank" rel="noopener noreferrer"><Icon name="map-marker-alt" /> الموقع الجغرافي</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} – مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية</p>
        <p>OSTAZ LAW – هوية مؤسسية فاخرة</p>
      </div>
    </footer>
  );
}
