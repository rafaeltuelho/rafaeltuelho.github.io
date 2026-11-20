import { getCollection } from 'astro:content';

// Every public surface uses the same publication rules, including routes and RSS.
export async function getPublishedPosts() {
  const now = new Date();
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.pubDate <= now);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}
