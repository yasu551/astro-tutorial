import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Astro学習者 | ブログ",
    description: "Astroを学ぶ旅",
    site: "https://astro-tutorial-20251227.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>ja-jp</language>`,
  });
}
