import Layout from '../components/Layout';
import Head from 'next/head';
import { useState } from 'react';
import { getCaseData } from '../lib/supabase-config';
import Icon from '../components/Icon';

export default function ClientInquiry() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) {
      alert('يرجى الموافقة على التنبيه القانوني قبل الاستعلام.');
      return;
    }
    setLoading(true);
    try {
      const fullPhone = '20' + phone.replace(/^20/, '');
      const fullCode = 'MA-' + code.toUpperCase().replace(/^MA-/, '');
      const { data, error } = await getCaseData(fullPhone, fullCode);
      if (error || !data || !data.case) {
        throw new Error('بيانات الدخول غير صحيحة');
      }
      sessionStorage.setItem('caseData', JSON.stringify(data));
      window.location.href = '/client-inquiry-result';
    } catch (err) {
      alert('بيانات الدخول غير صحيحة. يرجى التأكد من الكود ورقم الهاتف.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>استعلام القضايا | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا</title>
        <meta name="description" content="نظام استعلام القضايا الإلكتروني – متابعة مستجدات قضيتك لدى مؤسسة الأستاذ محمود عبد الحميد للمحاماة." />
        <link rel="canonical" href="https://ostazlaw.vercel.app/client-inquiry.html" />
        <meta property="og:title" content="استعلام القضايا | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا" />
        <meta property="og:description" content="نظام استعلام القضايا الإلكتروني – متابعة مستجدات قضيتك لدى مؤسسة الأستاذ محمود عبد الحميد للمحاماة." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ostazlaw.vercel.app/client-inquiry.html" />
        <meta property="og:image" content="https://ostazlaw.vercel.app/mahmoud-abdel-hamid-lawyer-portrait.webp" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ostazlaw.vercel.app/mahmoud-abdel-hamid-lawyer-portrait.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LegalService",
                "@id": "https://ostazlaw.vercel.app/#organization",
                "name": "مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية",
                "alternateName": "OSTAZ LAW",
                "description": "مؤسسة قانونية مصرية تقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات.",
                "url": "https://ostazlaw.vercel.app/",
                "logo": "https://ostazlaw.vercel.app/logo.png",
                "email": "ma.law.firm@outlook.com",
                "telephone": "+201101076000",
                "foundingDate": "2005",
                "areaServed": { "@type": "Country", "name": "مصر" },
                "availableLanguage": ["Arabic", "English"],
                "sameAs": [
                  "https://www.facebook.com/malegal",
                  "https://x.com/mahmoud_a_hamyd",
                  "https://www.linkedin.com/in/mahmoud-abdel-hamid-0a4664374"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "القاهرة",
                  "addressCountry": "مصر"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://ostazlaw.vercel.app/client-inquiry.html#webpage",
                "url": "https://ostazlaw.vercel.app/client-inquiry.html",
                "name": "استعلام القضايا",
                "description": "نظام استعلام القضايا الإلكتروني – متابعة مستجدات قضيتك.",
                "isPartOf": { "@id": "https://ostazlaw.vercel.app/#website" },
                "about": { "@id": "https://ostazlaw.vercel.app/#organization" }
              },
              {
                "@type": "WebSite",
                "@id": "https://ostazlaw.vercel.app/#website",
                "name": "مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية",
                "url": "https://ostazlaw.vercel.app/",
                "description": "مؤسسة قانونية مصرية تقدم خدمات المحاماة والاستشارات القانونية."
              }
            ]
          })
        }} />
      </Head>

      <section className="hero" aria-label="استعلام القضايا">
        <div className="hero-bg"><div className="glow"></div><div className="glow-2"></div></div>
        <div className="hero-content">
          <div className="hero-brand-signature">استعلام القضايا</div>
          <h1 className="hero-title">تابع <span className="gold-text">قضيتك</span></h1>
          <p className="hero-subtitle">نظام الاستعلام الإلكتروني</p>
          <p className="hero-value">أدخل بيانات القضية للاطلاع على آخر المستجدات.<br />الخدمة متاحة لعملائنا المسجلين فقط.</p>
        </div>
      </section>

      <section className="trust-bar" aria-label="شريط الثقة">
        <div className="trust-bar-inner">
          <div className="trust-item"><Icon name="gavel" /><span>محامون بالنقض والدستورية العليا</span></div>
          <div className="trust-item"><Icon name="briefcase" /><span>حلول قانونية للشركات والأفراد</span></div>
          <div className="trust-item"><Icon name="scale-balanced" /><span>تمثيل واستشارات في مختلف مراحل التقاضي</span></div>
        </div>
      </section>

      <section className="section section-light" aria-label="نموذج استعلام القضايا">
        <div className="section-inner">
          <div className="section-head reveal">
            <span className="eyebrow">● الاستعلام</span>
            <h2>أدخل بيانات القضية</h2>
            <p>للاطلاع على آخر المستجدات، يرجى إدخال رقم الهاتف وكود القضية.</p>
          </div>

          <div className="search-card">
            <div className="icon-header"><Icon name="search" /></div>
            <h2>استعلام القضايا</h2>
            <p className="sub">أدخل بيانات القضية للاطلاع على آخر المستجدات</p>

            <div className="legal-disclaimer">
              <div className="disclaimer-title"><Icon name="shield-alt" /> تنبيه قانوني هام</div>
              <div className="disclaimer-text">نظام الاستعلام الإلكتروني مخصص حصراً للعملاء المسجلين بمكتبنا للاطلاع على قضاياهم الشخصية. <strong>لا يجوز</strong> استخدام النظام للاستعلام عن قضايا الآخرين دون تفويض رسمي. المكتب غير مسؤول عن أي استخدام غير مصرح به للمعلومات.</div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group-custom">
                <input type="tel" className="form-control-custom" placeholder="رقم الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <span className="fixed-prefix">20</span>
              </div>
              <div className="input-group-custom">
                <input type="text" className="form-control-custom" placeholder="كود القضية" value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} required style={{ textTransform: 'uppercase' }} />
                <span className="fixed-prefix">MA-</span>
              </div>
              <div className="consent-wrapper">
                <input type="checkbox" id="consentCheck" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
                <label htmlFor="consentCheck" className="consent-label">أقر بأنني <strong>صاحب القضية</strong> أو <strong>مفوض قانونياً</strong> بالاستعلام عنها، وأتحمل كامل المسؤولية القانونية عن أي استخدام غير مصرح به.</label>
              </div>
              <button type="submit" className="btn-gold btn-search" disabled={!consent || loading}>
                {loading ? 'جاري التحقق...' : <><Icon name="search" style={{ marginLeft: '0.5rem' }} /> الاطلاع</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{/* تم حذف font-family المكررة، تعتمد على globals.css */}</style>
    </Layout>
  );
}
