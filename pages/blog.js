import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { getAllArticles } from '../lib/github';
import Icon from '../components/Icon';

export default function Blog({ articles }) {
  return (
    <Layout>
      <Head>
        <title>المكتبة القانونية | الأستاذ محمود عبد الحميد – المحامي بالنقض والدستورية العليا</title>
        <meta name="description" content="المكتبة القانونية لمؤسسة الأستاذ محمود عبد الحميد – مقالات وتحليلات قانونية متخصصة في مختلف مجالات القانون المصري." />
        <link rel="canonical" href="https://ostazlaw.vercel.app/blog.html" />
        <meta property="og:title" content="المكتبة القانونية | الأستاذ محمود عبد الحميد" />
        <meta property="og:description" content="مقالات وتحليلات قانونية متخصصة في مختلف مجالات القانون المصري." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ostazlaw.vercel.app/blog.html" />
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
                "@id": "https://ostazlaw.vercel.app/blog.html#webpage",
                "url": "https://ostazlaw.vercel.app/blog.html",
                "name": "المكتبة القانونية",
                "description": "مقالات وتحليلات قانونية متخصصة في مختلف مجالات القانون المصري.",
                "isPartOf": { "@id": "https://ostazlaw.vercel.app/#website" },
                "about": { "@id": "https://ostazlaw.vercel.app/#organization" }
              },
              {
                "@type": "WebSite",
                "@id": "https://ostazlaw.vercel.app/#website",
                "name": "مؤسسة الأستاذ محمود عبد الحميد للمحاماة والاستشارات القانونية",
                "url": "https://ostazlaw.vercel.app/",
                "description": "مؤسسة قانونية مصرية تقدم خدمات المحاماة والاستشارات القانونية للأفراد والشركات."
              }
            ]
          })
        }} />
      </Head>

      <section className="hero-blog" aria-label="المكتبة القانونية">
        <div className="hero-pattern"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-inner">
          <div className="hero-title-wrap reveal">
            <span className="en-tag">Legal Library</span>
            <h1>المكتبة <span className="gold-text">القانونية</span></h1>
            <p className="sub">مقالات وتحليلات قانونية متخصصة، كتبها الأستاذ محمود عبد الحميد المحامي بالنقض والدستورية العليا.</p>
          </div>
        </div>
      </section>

      <section className="blog-section" aria-label="قائمة المقالات">
        <div className="inner">
          <div className="blog-grid">
            {articles.length === 0 ? (
              <div className="col-span-full text-center py-16">
                <Icon name="book-open" style={{ fontSize: '3rem', opacity: '0.3', marginBottom: '1rem' }} />
                <p className="text-charcoal/50">لا توجد مقالات قانونية حالياً</p>
                <p className="text-charcoal/30 text-sm mt-2">سيتم نشر محتوى جديد قريباً</p>
              </div>
            ) : (
              articles.map((article) => (
                <div key={article.slug} className="blog-card reveal">
                  <div className="card-body">
                    <span className="badge">📘 دراسة قانونية</span>
                    <h3>{article.title}</h3>
                    <div className="meta">
                      <span><Icon name="clock" style={{ marginLeft: '4px' }} /> {Math.ceil(article.title.length / 40) || 1} دقائق قراءة</span>
                      {article.date && <span><Icon name="calendar-alt" style={{ marginLeft: '4px' }} /> {new Date(article.date).toLocaleDateString('ar-EG')}</span>}
                    </div>
                    <Link href={`/article/${article.slug}`} className="btn-read">
                      استعراض الدراسة <Icon name="arrow-left" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <style jsx>{/* تم حذف font-family المكررة، تعتمد على globals.css */}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const articles = await getAllArticles();
  const processedArticles = articles.map((a) => ({ ...a, date: a.date ? new Date(a.date).toISOString() : null }));
  return { props: { articles: processedArticles }, revalidate: 60 };
}
