import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Icon from '../components/Icon';

export default function About() {
  const leadershipImageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (leadershipImageRef.current) {
        leadershipImageRef.current.classList.add('colorized');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Head>
        <title>عن المؤسسة | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا</title>
        <meta name="description" content="مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية – تأسست عام 2005، تقدم خدمات قانونية واستشارات متكاملة للأفراد والشركات." />
        <link rel="canonical" href="https://ostazlaw.vercel.app/about.html" />
        <meta property="og:title" content="عن المؤسسة | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا" />
        <meta property="og:description" content="مؤسسة قانونية مصرية تقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ostazlaw.vercel.app/about.html" />
        <meta property="og:image" content="/mahmoud-abdel-hamid-lawyer-portrait.webp" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="800" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/mahmoud-abdel-hamid-lawyer-portrait.webp" />
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
                "logo": "/logo.png",
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
                "url": "/about",
                "image": {
                  "@type": "ImageObject",
                  "url": "/mahmoud-abdel-hamid-lawyer-portrait.webp",
                  "caption": "الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا"
                }
              },
              {
                "@type": "AboutPage",
                "@id": "https://ostazlaw.vercel.app/about.html#webpage",
                "url": "https://ostazlaw.vercel.app/about.html",
                "name": "عن المؤسسة",
                "isPartOf": { "@id": "https://ostazlaw.vercel.app/#website" },
                "about": { "@id": "https://ostazlaw.vercel.app/#organization" },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "/mahmoud-abdel-hamid-lawyer-portrait.webp",
                  "caption": "الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا"
                }
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

      <section className="hero-about" aria-label="عن المؤسسة">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-inner">
          <div className="hero-title-wrap reveal">
            <span className="en-tag">About Our Firm</span>
            <h1>مؤسسة الأستاذ<br /><span className="gold-text">محمود عبد الحميد</span></h1>
            <p className="sub">للمحاماة والاستشارات القانونية</p>
            <p className="sub sub-gold">نبني الثقة بالخبرة، ونحمي المصالح باستراتيجية قانونية مدروسة.</p>
          </div>
          <div className="hero-grid">
            <div className="hero-image reveal">
              <Image 
                src="/about.webp" 
                alt="مقر المؤسسة" 
                width={800} 
                height={600} 
                className="hero-image-inner"
              />
            </div>
            <div className="hero-text reveal" style={{ transitionDelay: '0.15s' }}>
              <p><strong>مؤسسة قانونية تؤمن بأن العمل القانوني المتميز يبدأ بالفهم العميق، ويُبنى على التخطيط، ويُقاس بحماية مصالح العميل.</strong></p>
              <p>تُعد مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية <strong>(OSTAZ LAW)</strong> مؤسسة قانونية تقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات، مستندة إلى منهج مهني يقوم على التحليل الدقيق، والتخطيط القانوني، والتمثيل الاحترافي أمام جهات القضاء.</p>
              <p>نؤمن بأن القضايا لا تُدار بردود الأفعال، بل بفهمٍ عميق للوقائع، وتحليلٍ صحيح للمراكز القانونية، ثم بناء استراتيجية تحقق أفضل حماية ممكنة لمصالح عملائنا.</p>
              <div className="cta-wrap">
                <Link href="/specialties" className="btn-gold">تعرف على مجالات الممارسة</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-definition" aria-label="من نحن">
        <div className="inner">
          <div className="def-grid">
            <div className="def-text reveal">
              <span className="eyebrow">● من نحن</span>
              <h2>مؤسسة قانونية<br /><span className="gold-text">تُبنى على الفهم والتخطيط</span></h2>
              <p>تأسست مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية عام <strong>2005</strong>، لتقديم خدمات قانونية واستشارات متخصصة للأفراد والشركات، بخبرة قضائية راسخة أمام محكمة النقض والمحكمة الدستورية العليا.</p>
              <p>نؤمن بأن العمل القانوني المتميز يبدأ بفهم عميق للوقائع، ويُبنى على تخطيط دقيق، ويُقاس بحماية مصالح العميل. ولذلك نتعامل مع كل قضية كمسؤولية مستقلة، ندرسها من جميع جوانبها القانونية والواقعية.</p>
              <p>نخدم الشركات والأفراد على حد سواء، مع التزامنا بالشفافية، والسرية، والدقة، باعتبارها المبادئ التي تقوم عليها علاقتنا مع عملائنا في جمهورية مصر العربية.</p>
              <div className="def-cards">
                <div className="def-card gold-underline-card"><span className="icon"><Icon name="scale-balanced" /></span><h4>مؤسسة قانونية</h4></div>
                <div className="def-card gold-underline-card"><span className="icon"><Icon name="building" /></span><h4>خدمات للشركات والأفراد</h4></div>
                <div className="def-card gold-underline-card"><span className="icon"><Icon name="shield-alt" /></span><h4>حلول قانونية متخصصة</h4></div>
                <div className="def-card gold-underline-card"><span className="icon"><Icon name="map-marker-alt" /></span><h4>جمهورية مصر العربية</h4></div>
              </div>
            </div>
            <div className="def-image reveal" style={{ transitionDelay: '0.15s' }}>
              <Image 
                src="/about.webp" 
                alt="مقر المؤسسة" 
                width={800} 
                height={600} 
                className="def-image-inner"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray" aria-label="فلسفتنا">
        <div className="section-inner">
          <div className="section-head reveal">
            <span className="eyebrow">● كيف نفكر؟</span>
            <h2>فلسفتنا في العمل القانوني</h2>
            <p>مبادئ توجه منهجنا في التعامل مع كل قضية واستشارة.</p>
          </div>
          <div className="philosophy-grid">
            <div className="philosophy-card gold-underline-card reveal reveal-d1">
              <span className="icon"><Icon name="search" /></span>
              <h4>نفهم أولاً</h4>
              <p>لا نقدم رأيًا قانونيًا قبل دراسة الوقائع وتحليلها بعمق.</p>
            </div>
            <div className="philosophy-card gold-underline-card reveal reveal-d2">
              <span className="icon"><Icon name="microscope" /></span>
              <h4>نحلل بدقة</h4>
              <p>كل ملف قانوني يخضع لتحليل مستقل وشامل.</p>
            </div>
            <div className="philosophy-card gold-underline-card reveal reveal-d3">
              <span className="icon"><Icon name="map" /></span>
              <h4>نخطط باستراتيجية</h4>
              <p>لكل قضية مسار قانوني يناسب طبيعتها وأهدافها.</p>
            </div>
            <div className="philosophy-card gold-underline-card reveal reveal-d4">
              <span className="icon"><Icon name="gavel" /></span>
              <h4>ننفذ باحتراف</h4>
              <p>نمثل عملاءنا بأعلى درجات الالتزام والمسؤولية.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-label="قيم المؤسسة">
        <div className="section-inner">
          <div className="section-head reveal">
            <span className="eyebrow">● قيمنا</span>
            <h2>القيم التي نرتكز عليها</h2>
            <p>مبادئ راسخة توجه تعاملنا مع العملاء والقضايا.</p>
          </div>
          <div className="values-grid">
            <div className="value-card gold-underline-card reveal reveal-d1">
              <span className="icon"><Icon name="scale-balanced" /></span>
              <h4>النزاهة</h4>
              <p>الأمانة والوضوح في كل رأي وإجراء.</p>
            </div>
            <div className="value-card gold-underline-card reveal reveal-d2">
              <span className="icon"><Icon name="lock" /></span>
              <h4>السرية</h4>
              <p>حماية خصوصية معلومات ووثائق العملاء.</p>
            </div>
            <div className="value-card gold-underline-card reveal reveal-d3">
              <span className="icon"><Icon name="briefcase" /></span>
              <h4>الاحتراف</h4>
              <p>أعلى معايير المهنة في كل خدمة نقدمها.</p>
            </div>
            <div className="value-card gold-underline-card reveal reveal-d1">
              <span className="icon"><Icon name="crosshairs" /></span>
              <h4>الدقة</h4>
              <p>التحليل والصياغة والمتابعة بدقة متناهية.</p>
            </div>
            <div className="value-card gold-underline-card reveal reveal-d2">
              <span className="icon"><Icon name="handshake" /></span>
              <h4>المسؤولية</h4>
              <p>الالتزام تجاه عملائنا وقضاياهم.</p>
            </div>
            <div className="value-card gold-underline-card reveal reveal-d3">
              <span className="icon"><Icon name="book" /></span>
              <h4>التعلم المستمر</h4>
              <p>تحديث معرفتنا القانونية باستمرار.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray" aria-label="القيادة">
        <div className="section-inner">
          <div className="section-head reveal">
            <span className="eyebrow">● القيادة</span>
            <h2>قيادة المؤسسة</h2>
            <p>خبرة قضائية راسخة تقود رؤيتنا القانونية.</p>
          </div>
          <div className="leadership-grid">
            <div className="leadership-image reveal" id="leadershipImage" ref={leadershipImageRef}>
              <Image 
                src="/mahmoud-abdel-hamid-lawyer-portrait.webp" 
                alt="الأستاذ محمود عبد الحميد" 
                width={400} 
                height={533} 
                className="leadership-image-inner"
                priority
              />
            </div>
            <div className="leadership-content reveal" style={{ transitionDelay: '0.15s' }}>
              <h3>الأستاذ محمود عبد الحميد</h3>
              <div className="title">محام بالنقض</div>
              <div className="en-title">Founder &amp; Managing Attorney</div>
              <p>يقود المؤسسة الأستاذ محمود عبد الحميد، المحامي بالنقض، مستندًا إلى رؤية تؤمن بأن النجاح في العمل القانوني يبدأ قبل قاعة المحكمة؛ من خلال الفهم العميق للوقائع، والتحليل القانوني الدقيق، وبناء استراتيجية مدروسة لكل قضية.</p>
              <p>ويشرف على أعمال المؤسسة لضمان الالتزام بأعلى المعايير المهنية، وتقديم خدمات قانونية تتسم بالدقة والشفافية والاحتراف، مع الحرص على بناء علاقة قائمة على الثقة مع كل عميل.</p>
              <div className="leadership-quote">"نؤمن بأن القرار القانوني الصحيح يبدأ بفهم صحيح للوقائع، وأن أفضل المرافعات هي التي يسبقها أفضل إعداد."</div>
            </div>
            <div className="leadership-side reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="side-label">الصفة</div>
              <div className="side-value">محام بالنقض</div>
              <div className="side-label">مجالات التركيز</div>
              <div className="side-tags">
                <span>القانون المدني</span>
                <span>الشركات</span>
                <span>العقود</span>
                <span>التعويضات</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" aria-label="منهج العمل">
        <div className="section-inner">
          <div className="section-head reveal">
            <span className="eyebrow">● منهج العمل</span>
            <h2>كيف نعمل؟</h2>
            <p>خمس مراحل تبدأ بالفهم وتنتهي بالمتابعة.</p>
          </div>
          <div className="process-timeline">
            <div className="process-step gold-underline-card reveal reveal-d1">
              <span className="num">١</span>
              <div className="step-content"><h4>الاستماع</h4><p>نستمع إلى عميلنا لفهم الوقائع والأهداف والتحديات.</p></div>
            </div>
            <div className="process-step gold-underline-card reveal reveal-d2">
              <span className="num">٢</span>
              <div className="step-content"><h4>التحليل</h4><p>ندرس الموقف القانوني بعمق، ونحلل الأدلة والمستندات.</p></div>
            </div>
            <div className="process-step gold-underline-card reveal reveal-d3">
              <span className="num">٣</span>
              <div className="step-content"><h4>الاستراتيجية</h4><p>نضع خطة قانونية واضحة تتناسب مع طبيعة القضية.</p></div>
            </div>
            <div className="process-step gold-underline-card reveal reveal-d4">
              <span className="num">٤</span>
              <div className="step-content"><h4>التمثيل</h4><p>نمثل عملاءنا أمام المحاكم باحترافية ومتابعة دقيقة.</p></div>
            </div>
            <div className="process-step gold-underline-card reveal reveal-d1">
              <span className="num">٥</span>
              <div className="step-content"><h4>المتابعة</h4><p>نواصل متابعة القضية حتى الحكم النهائي، ونقدم الاستشارة اللازمة.</p></div>
            </div>
          </div>
          <div className="process-footer">لكل قضية ظروفها الخاصة، لذلك لا نعتمد حلولًا جاهزة، بل نبني استراتيجية تتناسب مع طبيعة كل ملف قانوني.</div>
        </div>
      </section>

      <section className="section section-gray" aria-label="لماذا يثق بنا عملاؤنا">
        <div className="section-inner">
          <div className="section-head reveal">
            <span className="eyebrow">● الثقة</span>
            <h2>لماذا يثق بنا عملاؤنا؟</h2>
            <p>مزايا تجعل مؤسستنا الخيار القانوني الموثوق.</p>
          </div>
          <div className="trust-grid">
            <div className="trust-card gold-underline-card reveal reveal-d1"><span className="icon"><Icon name="check-circle" /></span><h4>دراسة دقيقة</h4></div>
            <div className="trust-card gold-underline-card reveal reveal-d2"><span className="icon"><Icon name="check-circle" /></span><h4>شفافية</h4></div>
            <div className="trust-card gold-underline-card reveal reveal-d3"><span className="icon"><Icon name="check-circle" /></span><h4>تواصل مستمر</h4></div>
            <div className="trust-card gold-underline-card reveal reveal-d1"><span className="icon"><Icon name="check-circle" /></span><h4>سرية</h4></div>
            <div className="trust-card gold-underline-card reveal reveal-d2"><span className="icon"><Icon name="check-circle" /></span><h4>تمثيل احترافي</h4></div>
            <div className="trust-card gold-underline-card reveal reveal-d3"><span className="icon"><Icon name="check-circle" /></span><h4>حلول عملية</h4></div>
          </div>
        </div>
      </section>

      <section className="section section-light" aria-label="داخل المؤسسة">
        <div className="section-inner">
          <div className="section-head reveal">
            <span className="eyebrow">● داخل المؤسسة</span>
            <h2>معرض الصور</h2>
            <p>لمحة عن بيئة العمل التي تعكس منهجنا المهني.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gold-underline-card reveal reveal-d1" style={{ background: '#e8e4dd', color: 'rgba(34,34,34,0.2)', fontSize: '0.8rem' }}><span>المكتب</span></div>
            <div className="gallery-item gold-underline-card reveal reveal-d2" style={{ background: '#ddd8cf', color: 'rgba(34,34,34,0.2)', fontSize: '0.8rem' }}><span>غرفة الاجتماعات</span></div>
            <div className="gallery-item gold-underline-card reveal reveal-d3" style={{ background: '#d5d0c7', color: 'rgba(34,34,34,0.2)', fontSize: '0.8rem' }}><span>المكتبة القانونية</span></div>
            <div className="gallery-item gold-underline-card reveal reveal-d1" style={{ background: '#e0dbd2', color: 'rgba(34,34,34,0.2)', fontSize: '0.8rem' }}><span>استقبال العملاء</span></div>
            <div className="gallery-item gold-underline-card reveal reveal-d2" style={{ background: '#d8d3ca', color: 'rgba(34,34,34,0.2)', fontSize: '0.8rem' }}><span>بيئة العمل</span></div>
            <div className="gallery-item gold-underline-card reveal reveal-d3" style={{ background: '#e5e0d7', color: 'rgba(34,34,34,0.2)', fontSize: '0.8rem' }}><span>تفاصيل معمارية</span></div>
          </div>
        </div>
      </section>

      <section className="founder-message" aria-label="كلمة المؤسس">
        <div className="inner reveal">
          <span className="quote-icon">"</span>
          <blockquote>نؤمن بأن المحاماة ليست مجرد مهنة للدفاع عن الحقوق، بل مسؤولية تقتضي الفهم، والأمانة، والالتزام. ولذلك نسعى في كل قضية إلى تقديم عمل قانوني يليق بثقة عملائنا ويعكس قيم مؤسستنا.</blockquote>
          <div className="signature">Mahmoud Abdel Hamid</div>
          <div className="signature-sub">Founder</div>
        </div>
      </section>

      <section className="cta-final" aria-label="دعوة للتواصل">
        <div className="section-inner reveal">
          <h2>هل تبحث عن شريك قانوني يمكنك الاعتماد عليه؟</h2>
          <p>يسعدنا مناقشة احتياجاتك القانونية وتقديم المشورة المناسبة بما يتوافق مع ظروف كل حالة وأهدافها.</p>
          <div className="cta-actions">
            <Link href="/contact?tab=consult" className="btn-gold">طلب استشارة</Link>
            <Link href="/contact" className="btn-outline-white">تواصل معنا</Link>
          </div>
        </div>
      </section>

      <style jsx>{/* تم حذف font-family المكررة، تعتمد على globals.css */}</style>
    </Layout>
  );
}
