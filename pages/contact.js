import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Icon from '../components/Icon';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('consult');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab && ['consult', 'visit', 'representation'].includes(tab)) {
      setActiveTab(tab);
      const specialty = params.get('specialty');
      if (specialty && tab === 'consult') {
        const msgEl = document.getElementById('consultMessage');
        if (msgEl) msgEl.value = `أرغب في الحصول على استشارة قانونية بخصوص: ${specialty}`;
      }
    }
  }, []);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('input[type="text"], input[placeholder*="الاسم"]')?.value || '';
    const phone = form.querySelector('input[type="tel"]')?.value || '';
    const message = form.querySelector('textarea')?.value || '';
    const msg = `*طلب ${type === 'consult' ? 'استشارة قانونية' : type === 'visit' ? 'حجز موعد' : 'تمثيل قانوني'}*%0Aالاسم: ${name}%0Aالهاتف: ${phone}%0Aالتفاصيل: ${message}`;
    window.open(`https://wa.me/201101076000?text=${msg}`, '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>تواصل معنا | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا</title>
        <meta name="description" content="تواصل مع مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية. المكتب الرئيسي في أسوان، وفروع في القاهرة والإسكندرية. احجز موعداً، اطلب استشارة، أو قدم طلب تمثيل قانوني." />
        <link rel="canonical" href="https://ostazlaw.vercel.app/contact.html" />
        <meta property="og:title" content="تواصل معنا | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا" />
        <meta property="og:description" content="تواصل مع مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية. المكتب الرئيسي في أسوان، وفروع في القاهرة والإسكندرية." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ostazlaw.vercel.app/contact.html" />
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
                "description": "مؤسسة قانونية مصرية تقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات. المكتب الرئيسي في أسوان، وفروع في القاهرة والإسكندرية.",
                "url": "https://ostazlaw.vercel.app/",
                "logo": "https://ostazlaw.vercel.app/logo.png",
                "email": "ma.law.firm@outlook.com",
                "telephone": "+201101076000",
                "foundingDate": "2005",
                "areaServed": [
                  { "@type": "City", "name": "أسوان" },
                  { "@type": "City", "name": "القاهرة" },
                  { "@type": "City", "name": "الإسكندرية" }
                ],
                "availableLanguage": ["Arabic", "English"],
                "sameAs": [
                  "https://www.facebook.com/malegal",
                  "https://x.com/mahmoud_a_hamyd",
                  "https://www.linkedin.com/in/mahmoud-abdel-hamid-0a4664374"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "أسوان",
                  "addressCountry": "مصر"
                }
              },
              {
                "@type": "Person",
                "@id": "https://ostazlaw.vercel.app/#founder",
                "name": "محمود عبد الحميد",
                "jobTitle": "المحامي بالنقض والدستورية العليا",
                "worksFor": { "@id": "https://ostazlaw.vercel.app/#organization" },
                "url": "https://ostazlaw.vercel.app/about.html",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://ostazlaw.vercel.app/mahmoud-abdel-hamid-lawyer-portrait.webp",
                  "caption": "الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا"
                }
              },
              {
                "@type": "ContactPage",
                "@id": "https://ostazlaw.vercel.app/contact.html#webpage",
                "url": "https://ostazlaw.vercel.app/contact.html",
                "name": "تواصل معنا",
                "description": "تواصل مع مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية.",
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

      <section className="hero-contact" aria-label="تواصل معنا">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-inner">
          <div className="hero-title-wrap reveal">
            <span className="en-tag">Contact Us</span>
            <h1>تواصل <span className="gold-text">معنا</span></h1>
            <p className="sub">نحن هنا للاستماع إليك والدفاع عن حقوقك. اختر الطريقة الأنسب للتواصل معنا.</p>
          </div>
        </div>
      </section>

      <section className="section-content" aria-label="معلومات التواصل">
        <div className="inner">
          <div className="reveal text-center mb-8">
            <span className="eyebrow" style={{ display: 'block', fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--matte-gold)', opacity: '0.5', marginBottom: '0.3rem' }}>● مواقعنا</span>
            <h2 className="text-2xl md:text-3xl font-bold serif gold-text">المكتب الرئيسي والفروع</h2>
            <p className="text-sm max-w-2xl mx-auto" style={{ color: 'var(--charcoal)', fontWeight: '700' }}>نخدم عملاءنا في مختلف أنحاء مصر. المكتب الرئيسي في أسوان، مع مكاتب وفروع في القاهرة والإسكندرية لتلبية احتياجاتكم القانونية.</p>
          </div>

          <div className="branches-grid mb-8">
            <div className="branch-card reveal">
              <div className="branch-icon"><Icon name="flag" /></div>
              <h4>أسوان <span className="badge-main">المقر الرئيسي</span></h4>
              <p>شارع كسر الحجر، المتفرع من شارع كورنيش النيل، أمام مجمع المحاكم، أسوان</p>
            </div>
            <div className="branch-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="branch-icon"><Icon name="building" /></div>
              <h4>القاهرة <span className="badge-main" style={{ background: 'rgba(176,141,87,0.15)', color: 'var(--matte-gold)' }}>فرع</span></h4>
              <p>منطقة وسط البلد، شارع القصر العيني (خدمة الاستشارات والتمثيل القضائي)</p>
            </div>
            <div className="branch-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="branch-icon"><Icon name="city" /></div>
              <h4>الإسكندرية <span className="badge-main" style={{ background: 'rgba(176,141,87,0.15)', color: 'var(--matte-gold)' }}>فرع</span></h4>
              <p>منطقة محطة الرمل، شارع سعد زغلول (خدمة الاستشارات والمتابعة القضائية)</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-6">
              <div className="reveal">
                <h2 className="text-2xl font-bold serif gold-text mb-1">بيانات التواصل</h2>
                <p className="text-sm" style={{ color: 'var(--charcoal)', fontWeight: '700' }}>تفضل بزيارة مقرنا الرئيسي في أسوان، أو اتصل بنا في فروعنا</p>
              </div>
              <div className="space-y-3">
                <div className="contact-card reveal">
                  <div className="icon-wrap"><Icon name="map-marker-alt" /></div>
                  <div className="info">
                    <h4>المقر الرئيسي (أسوان)</h4>
                    <p>شارع كسر الحجر، أمام مجمع المحاكم، أسوان</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--charcoal)', fontWeight: '700' }}>فروع القاهرة والإسكندرية حسب المواعيد المسبقة</p>
                  </div>
                </div>
                <div className="contact-card reveal" style={{ transitionDelay: '0.08s' }}>
                  <div className="icon-wrap"><Icon name="phone-alt" /></div>
                  <div className="info">
                    <h4>الهاتف والواتساب</h4>
                    <p dir="ltr">+20 110 107 6000</p>
                  </div>
                </div>
                <div className="contact-card reveal" style={{ transitionDelay: '0.16s' }}>
                  <div className="icon-wrap"><Icon name="envelope" /></div>
                  <div className="info">
                    <h4>البريد الإلكتروني</h4>
                    <p dir="ltr">ma.law.firm@outlook.com</p>
                  </div>
                </div>
                <div className="contact-card reveal" style={{ transitionDelay: '0.24s' }}>
                  <div className="icon-wrap"><Icon name="clock" /></div>
                  <div className="info">
                    <h4>ساعات العمل</h4>
                    <p>السبت - الخميس: ٩:٠٠ ص - ١٠:٠٠ م</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--charcoal)', fontWeight: '700' }}>الجمعة: مغلق</p>
                  </div>
                </div>
              </div>

              <div className="map-container reveal">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.4!2d32.9!3d24.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA1JzMxLjIiTiAzMsKwNTMnNDkuMiJF!5e0!3m2!1sen!2seg!4v1600000000000!5m2!1sen!2seg"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="map-overlay">
                  <span><Icon name="map-pin" style={{ marginRight: '0.5rem' }} /> المقر الرئيسي في أسوان</span>
                </div>
              </div>

              <div className="reveal text-center pt-2">
                <p className="text-sm font-bold" style={{ color: 'var(--charcoal)', marginBottom: '0.75rem' }}>تابعنا على المنصات:</p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <a href="https://www.facebook.com/malegal" target="_blank" rel="noopener noreferrer" className="social-icon-circle"><Icon name="facebook-f" /></a>
                  <a href="https://x.com/mahmoud_a_hamyd" target="_blank" rel="noopener noreferrer" className="social-icon-circle"><Icon name="twitter" /></a>
                  <a href="https://www.linkedin.com/in/mahmoud-abdel-hamid-0a4664374" target="_blank" rel="noopener noreferrer" className="social-icon-circle"><Icon name="linkedin-in" /></a>
                  <a href="https://t.me/mahmoud_a_hamyd" target="_blank" rel="noopener noreferrer" className="social-icon-circle"><Icon name="telegram-plane" /></a>
                  <a href="https://wa.me/201101076000" target="_blank" rel="noopener noreferrer" className="social-icon-circle"><Icon name="whatsapp" /></a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="tab-container">
                <div className="tab-buttons">
                  <button onClick={() => setActiveTab('consult')} className={`tab-btn ${activeTab === 'consult' ? 'active' : ''}`}>
                    <Icon name="comment-dots" /> استشارة سريعة
                  </button>
                  <button onClick={() => setActiveTab('visit')} className={`tab-btn ${activeTab === 'visit' ? 'active' : ''}`}>
                    <Icon name="calendar-check" /> حجز موعد
                  </button>
                  <button onClick={() => setActiveTab('representation')} className={`tab-btn ${activeTab === 'representation' ? 'active' : ''}`}>
                    <Icon name="gavel" /> طلب تمثيل
                  </button>
                </div>

                <div className={`tab-pane ${activeTab === 'consult' ? '' : 'hidden'}`}>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--charcoal)' }}>طلب استشارة قانونية</h3>
                    <p className="text-sm" style={{ color: 'var(--charcoal)', fontWeight: '700' }}>املأ النموذج وسيتم تحويلك مباشرة للواتساب للرد الفوري</p>
                  </div>
                  <form id="consultForm" onSubmit={(e) => handleSubmit(e, 'consult')} className="space-y-4">
                    <div className="form-group">
                      <label htmlFor="consultName">الاسم بالكامل</label>
                      <input type="text" id="consultName" placeholder="الاسم ثلاثي..." required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="consultPhone">رقم الهاتف / الواتساب</label>
                      <input type="tel" id="consultPhone" placeholder="01xxxxxxxxx" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="consultMessage">تفاصيل الاستشارة</label>
                      <textarea id="consultMessage" rows="4" placeholder="يرجى كتابة ملخص للقضية أو الاستفسار..." required></textarea>
                    </div>
                    <button type="submit" className="btn-gold w-full py-3 rounded-lg flex items-center justify-center gap-3">
                      <span>إرسال الاستشارة</span>
                      <Icon name="whatsapp" style={{ fontSize: '1.5rem' }} />
                    </button>
                  </form>
                </div>

                <div className={`tab-pane ${activeTab === 'visit' ? '' : 'hidden'}`}>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--charcoal)' }}>حجز موعد في المكتب</h3>
                    <p className="text-sm" style={{ color: 'var(--charcoal)', fontWeight: '700' }}>ناقش قضيتك وجهاً لوجه مع الأستاذ محمود عبد الحميد</p>
                  </div>
                  <form id="visitForm" onSubmit={(e) => handleSubmit(e, 'visit')} className="space-y-4">
                    <div className="form-group">
                      <label htmlFor="visitName">الاسم بالكامل</label>
                      <input type="text" id="visitName" placeholder="الاسم ثلاثي..." required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="visitPhone">رقم الهاتف</label>
                        <input type="tel" id="visitPhone" placeholder="01xxxxxxxxx" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="visitDate">تاريخ المقابلة المفضل</label>
                        <input type="date" id="visitDate" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="visitLocation">موقع المقابلة المفضل</label>
                      <select id="visitLocation">
                        <option value="أسوان">المقر الرئيسي - أسوان</option>
                        <option value="القاهرة">فرع القاهرة</option>
                        <option value="الإسكندرية">فرع الإسكندرية</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="visitReason">سبب الزيارة</label>
                      <textarea id="visitReason" rows="3" placeholder="استشارة بخصوص قضية..." required></textarea>
                    </div>
                    <button type="submit" className="btn-gold w-full py-3 rounded-lg flex items-center justify-center gap-3">
                      <span>تأكيد طلب الحجز</span>
                      <Icon name="calendar-check" />
                    </button>
                  </form>
                </div>

                <div className={`tab-pane ${activeTab === 'representation' ? '' : 'hidden'}`}>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--charcoal)' }}>طلب تمثيل قانوني</h3>
                    <p className="text-sm" style={{ color: 'var(--charcoal)', fontWeight: '700' }}>قدم طلباً لتولي قضيتك بالكامل من قبل الأستاذ محمود عبد الحميد</p>
                  </div>
                  <form id="representationForm" onSubmit={(e) => handleSubmit(e, 'representation')} className="space-y-4">
                    <div className="form-group">
                      <label htmlFor="repName">الاسم بالكامل</label>
                      <input type="text" id="repName" placeholder="الاسم ثلاثي..." required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="repPhone">رقم الهاتف / الواتساب</label>
                        <input type="tel" id="repPhone" placeholder="01xxxxxxxxx" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="repEmail">البريد الإلكتروني</label>
                        <input type="email" id="repEmail" placeholder="example@mail.com" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="repCaseType">نوع القضية</label>
                        <select id="repCaseType" required>
                          <option value="">اختر نوع القضية</option>
                          <option value="مدني">مدني</option>
                          <option value="تجاري">تجاري</option>
                          <option value="أسرة">أسرة / أحوال شخصية</option>
                          <option value="جنائي">جنائي</option>
                          <option value="إداري">إداري</option>
                          <option value="عقاري">عقاري</option>
                          <option value="عمالي">عمالي</option>
                          <option value="دستوري">دستوري</option>
                          <option value="تحكيم">تحكيم</option>
                          <option value="أخرى">أخرى</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="repStage">المرحلة القضائية</label>
                        <select id="repStage" required>
                          <option value="">اختر المرحلة</option>
                          <option value="ابتدائي">ابتدائي</option>
                          <option value="استئناف">استئناف</option>
                          <option value="نقض">نقض</option>
                          <option value="تنفيذ">تنفيذ</option>
                          <option value="دستورية">دستورية</option>
                          <option value="إدارية عليا">إدارية عليا</option>
                          <option value="أخرى">أخرى</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="repCourt">الجهة القضائية (المحكمة)</label>
                      <input type="text" id="repCourt" placeholder="مثال: محكمة النقض، المحكمة الإدارية العليا، محكمة استئناف القاهرة..." required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="repCaseNumber">رقم القضية (إن وجد)</label>
                      <input type="text" id="repCaseNumber" placeholder="رقم القضية والسنة" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="repDescription">وصف القضية</label>
                      <textarea id="repDescription" rows="5" placeholder="يرجى كتابة وصف تفصيلي للقضية، والجهات المعنية، وأي معلومات أخرى تراها مهمة..." required></textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="repContract">إرفاق عقد الخدمة (PDF) <span style={{ color: 'var(--charcoal)', fontWeight: '400' }}>(اختياري)</span></label>
                      <input type="file" id="repContract" accept=".pdf" />
                      <p style={{ fontSize: '0.65rem', color: 'var(--charcoal)', fontWeight: '700', marginTop: '0.2rem' }}>يمكنك إرفاق عقد الخدمة الموقع بصيغة PDF</p>
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '400', color: 'var(--charcoal)', fontSize: '0.85rem' }}>
                        <input type="checkbox" id="repSendDocs" defaultChecked />
                        <span>سأقوم بإرسال صور المستندات عبر <strong>واتساب</strong> أو <strong>البريد الإلكتروني</strong> بعد إرسال الطلب</span>
                      </label>
                      <p style={{ fontSize: '0.65rem', color: 'var(--charcoal)', fontWeight: '700', marginTop: '0.2rem' }}>سيتم توفير رابط لإرسال المستندات بعد إرسال الطلب</p>
                    </div>
                    <button type="submit" className="btn-gold w-full py-3 rounded-lg flex items-center justify-center gap-3">
                      <span>إرسال طلب التمثيل</span>
                      <Icon name="gavel" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{/* تم حذف font-family المكررة، تعتمد على globals.css */}</style>
    </Layout>
  );
}
