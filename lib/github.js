import matter from 'gray-matter';

const REPO_OWNER = process.env.GITHUB_OWNER || 'malegal';
const REPO_NAME = process.env.GITHUB_REPO || 'ostazlaw';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function encodePathSegments(path) {
  return path.split('/').map((segment) => encodeURIComponent(segment)).join('/');
}

async function fetchFileContent(path) {
  const decodedPath = decodeURIComponent(path);
  const safePath = encodePathSegments(decodedPath);
  const url = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${safePath}`;
  const headers = {};
  if (GITHUB_TOKEN) { headers['Authorization'] = `token ${GITHUB_TOKEN}`; }
  const res = await fetch(url, { headers });
  if (!res.ok) {
    console.error(`❌ فشل جلب الملف: ${path} (HTTP ${res.status})`);
    throw new Error(`فشل جلب الملف: ${path}`);
  }
  return res.text();
}

async function getFilesInFolder(folder) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${folder}?ref=${BRANCH}`;
  const headers = { Accept: 'application/vnd.github.v3+json' };
  if (GITHUB_TOKEN) headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  const res = await fetch(url, { headers });
  if (!res.ok) return [];
  const files = await res.json();
  if (!Array.isArray(files)) return [];
  return files.filter((f) => f.name.endsWith('.md'));
}

function safeDate(date) {
  if (!date) return null;
  if (date instanceof Date) return date.toISOString();
  try { const d = new Date(date); if (!isNaN(d.getTime())) return d.toISOString(); } catch {}
  return String(date);
}

export async function getAllArticles() {
  try {
    const files = await getFilesInFolder('blog/articles');
    const articles = await Promise.all(files.map(async (file) => {
      try {
        const content = await fetchFileContent(file.path);
        const { data } = matter(content);
        const cleanSlug = decodeURIComponent(file.name).replace(/\.md$/, '');
        return { slug: cleanSlug, title: data.title || 'بدون عنوان', date: safeDate(data.date), author: data.author || '', description: data.description || '', seoKeyword: data.seoKeyword || '', tags: data.tags || '', image: data.image || '', content: content };
      } catch (err) { console.warn(`⚠️ فشل قراءة الملف: ${file.name}`); return null; }
    }));
    return articles.filter(Boolean).sort((a, b) => { if (a.date && b.date) return new Date(b.date) - new Date(a.date); return 0; });
  } catch (error) { console.error('❌ خطأ في جلب المقالات:', error); return []; }
}

export async function getArticleBySlug(slug) {
  try {
    const decodedSlug = decodeURIComponent(slug).trim().replace(/\.md$/, '');
    const filePath = `blog/articles/${decodedSlug}.md`;
    const content = await fetchFileContent(filePath);
    const { data, content: markdown } = matter(content);
    return { slug: decodedSlug, title: data.title || 'بدون عنوان', date: safeDate(data.date), author: data.author || '', description: data.description || '', seoKeyword: data.seoKeyword || '', tags: data.tags || '', image: data.image || '', content: markdown };
  } catch (err) { console.error(`❌ فشل جلب المقال: ${slug}`, err.message); return null; }
}

export async function getAllNews() {
  try {
    const files = await getFilesInFolder('blog/news');
    const newsItems = await Promise.all(files.map(async (file) => {
      try {
        const content = await fetchFileContent(file.path);
        const { data } = matter(content);
        const cleanSlug = decodeURIComponent(file.name).replace(/\.md$/, '');
        return { slug: cleanSlug, title: data.title || 'بدون عنوان', date: safeDate(data.date), description: data.description || '', category: data.category || 'خبر', icon: data.icon || 'fa-newspaper', tags: data.tags || '', image: data.image || '', content: content };
      } catch (err) { console.warn(`⚠️ فشل قراءة ملف الخبر: ${file.name}`); return null; }
    }));
    return newsItems.filter(Boolean).sort((a, b) => { if (a.date && b.date) return new Date(b.date) - new Date(a.date); return 0; });
  } catch (error) { console.error('❌ خطأ في جلب الأخبار:', error); return []; }
}

export async function getNewsBySlug(slug) {
  try {
    const decodedSlug = decodeURIComponent(slug).trim().replace(/\.md$/, '');
    const filePath = `blog/news/${decodedSlug}.md`;
    const content = await fetchFileContent(filePath);
    const { data, content: markdown } = matter(content);
    return { slug: decodedSlug, title: data.title || 'بدون عنوان', date: safeDate(data.date), description: data.description || '', category: data.category || 'خبر', icon: data.icon || 'fa-newspaper', tags: data.tags || '', image: data.image || '', content: markdown };
  } catch (err) { console.error(`❌ فشل جلب الخبر: ${slug}`, err.message); return null; }
}
