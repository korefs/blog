import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

export type Article = {
  id: string;
  tags: string[];
  title: string;
  date: string;
};

const ARTICLES_DIR = path.join(process.cwd(), "src/articles");

export function getAllTags() {
  let tags = new Set();
  const files = fs.readdirSync(ARTICLES_DIR);

  for (const file of files) {
    const fullPath = path.join(ARTICLES_DIR, file);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    const tagsInFile = matterResult.data.tags || [];
    for (const tag of tagsInFile) {
      if (tags.has(tag)) {
        continue;
      }
      tags.add(tag);
    }
  }

  return Array.from(tags);
}

export function getArticles() {
  const files = fs.readdirSync(ARTICLES_DIR);

  // Filter out Portuguese versions (.pt.md) to avoid duplicates in listing
  const originalFiles = files.filter(file => file.endsWith('.md') && !file.endsWith('.pt.md'));

  const allArticlesData = originalFiles.map((file) => {
    const id = file.replace(/\.md$/, "");
    const fullPath = path.join(ARTICLES_DIR, file);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      tags: matterResult.data.tags,
      date: moment(matterResult.data.date).format("YYYY-MM-DD"),
    };
  });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getArticleData(id: string, lang: 'en' | 'pt' = 'en') {
  const fileName = lang === 'pt' ? `${id}.pt.md` : `${id}.md`;
  const fullPath = path.join(ARTICLES_DIR, fileName);
  
  // Check if translated version exists, fallback to original if not
  let actualPath = fullPath;
  if (lang === 'pt' && !fs.existsSync(fullPath)) {
    actualPath = path.join(ARTICLES_DIR, `${id}.md`);
  }
  
  const fileContents = fs.readFileSync(actualPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Check if Portuguese version exists for the language toggle
  const hasPtVersion = fs.existsSync(path.join(ARTICLES_DIR, `${id}.pt.md`));

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    tags: matterResult.data.tags || [],
    location: matterResult.data.location || "",
    date: moment(matterResult.data.date, "YYYY-MM-DD").format("MMMM  Do, YYYY"),
    currentLang: lang,
    hasPtVersion,
    isUsingFallback: lang === 'pt' && !fs.existsSync(fullPath)
  };
}
