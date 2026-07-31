import Link from 'next/link';
import Icon from './Icon';

export default function ArticleCard({ article }) {
  return (
    <div className="blog-card">
      <div className="card-body">
        <span className="badge">📘 دراسة قانونية</span>
        <h3>{article.title}</h3>
        <div className="meta">
          <span><Icon name="clock" /> {Math.ceil(article.title.length / 40) || 1} دقائق قراءة</span>
          {article.date && <span><Icon name="calendar-alt" /> {new Date(article.date).toLocaleDateString('ar-EG')}</span>}
        </div>
        <Link href={`/article/${article.slug}`} className="btn-read">
          استعراض الدراسة <Icon name="arrow-left" />
        </Link>
      </div>
    </div>
  );
}
