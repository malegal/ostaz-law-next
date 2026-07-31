import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { getAllNews } from '../lib/github';
import Icon from '../components/Icon';

export default function NewsArchive({ newsItems }) {
  return (
    <Layout>
      <Head>
        <title>أرشيف الأخبار والإنجازات | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا</title>
        <meta name="description" content="أرشيف أخبار وإنجازات مؤسسة الأستاذ محمود عبد الحميد – أحدث الأحكام، المشاركات المجتمعية، وتطورات المكتب القانوني." />
        <link rel="canonical" href="https://ostazlaw.vercel.app/news-archive.html" />
        <meta property="og:title" content="أرشيف الأخبار والإنجازات | الأستاذ محمود عبد الحميد" />
        <meta property="og:description" content="أرشيف أخبار وإنجازات مؤسسة الأستاذ محمود عبد الحميد – أحدث الأحكام والمشاركات المجتمعية." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ostazlaw.vercel.app/news-archive.html" />
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
                  "addressLocality": "القاهرة",
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
                "@type": "CollectionPage",
                "@id": "https://ostazlaw.vercel.app/news-archive.html#webpage",
                "url": "https://ostazlaw.vercel.app/news-archive.html",
                "name": "أرشيف الأخبار والإنجازات",
                "description": "أرشيف أخبار وإنجازات مؤسسة الأستاذ محمود عبد الحميد.",
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

      <section className="hero-blog" aria-label="أرشيف الأخبار والإنجازات">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-inner">
          <div className="hero-title-wrap reveal">
            <span className="en-tag">News Archive</span>
            <h1>أرشيف <span className="gold-text">الأخبار</span></h1>
            <p className="sub">جميع أخبار وإنجازات مؤسسة الأستاذ محمود عبد الحميد – أحكام، مشاركات، وتطورات.</p>
          </div>
        </div>
      </section>

      <section className="blog-section" aria-label="قائمة الأخبار">
        <div className="inner">
          <div className="experience-grid">
            {newsItems.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <Icon name="newspaper" style={{ fontSize: '3rem', opacity: '0.3', marginBottom: '1rem' }} />
                <p className="text-charcoal/50">لا توجد أخبار حالياً.</p>
              </div>
            ) : (
              newsItems.map((item) => {
                const badgeColors = {
                  'إنجاز قضائي': {
                    background: 'var(--matte-gold)',
                    color: '#000',
                  },
                  'فعالية': {
                    background: 'var(--deep-navy)',
                    color: '#fff',
                  },
                  'تطوير': {
                    background: 'var(--very-dark-navy)',
                    color: '#fff',
                  },
                };

                const badgeStyle =
                  badgeColors[item.category] || {
                    background: 'var(--matte-gold)',
                    color: '#000',
                  };

                return (
                  <div key={item.slug} className="sector-link">
                    <Link href={`/news/${item.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                      <div className="experience-card reveal" style={{ textAlign: 'right', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span
                            style={{
                              ...badgeStyle,
                              padding: '0.1rem 0.8rem',
                              borderRadius: '20px',
                              fontSize: '0.6rem',
                              fontWeight: '800',
                            }}
                          >
                            {item.category || 'خبر'}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                            {item.date ? new Date(item.date).toLocaleDateString('ar-EG') : ''}
                          </span>
                        </div>
                        <span className="icon"><Icon name="newspaper" style={{ fontSize: '1.5rem' }} /></span>
                        <h4>{item.title}</h4>
                        <p>{item.description || ''}</p>
                        <span style={{ color: 'var(--matte-gold)', fontWeight: '700', fontSize: '0.8rem', marginTop: '0.5rem', display: 'inline-block' }}>
                          اقرأ التفاصيل ←
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <style jsx>{/* تم حذف font-family المكررة، تعتمد على globals.css */}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const newsItems = await getAllNews();
  const processedNews = newsItems.map((n) => ({
    ...n,
    date: n.date ? new Date(n.date).toISOString() : null,
  }));
  return { props: { newsItems: processedNews }, revalidate: 60 };
}
