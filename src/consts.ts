// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "TiiaAurora";
export const SITE_TITLE = "Cosmic Whispers";
export const SITE_DESCRIPTION = "Written at 3am, never meant to be published";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Cosmic Whispers - All Tags";
export const Tags_DESCRIPTION =
  "Cosmic Whispers - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in Cosmic Whispers`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Cosmic Whispers`,
    description: `Browse all articles under the ${category} category in Cosmic Whispers`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "H.P. Lovecraft" },
  { href: "/category/Two/1/", title: "Poems" },
  { href: "/category/Three/1/", title: "Short Stories" },
  { href: "/category/Three/1/", title: "Thoughts" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  /*   { href: "/posts/why-astro/", title: "Astro" },
  { href: "/posts/tailwind-typography/", title: "Tailwind" }, */
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://www.threads.net/@tiiaaurora/",
    icon: "tabler:brand-threads",
    label: "Threads",
  },
  {
    href: "https://bsky.app/profile/tiiaaurora.bsky.social",
    icon: "tabler:brand-bluesky",
    label: "BlueSky",
  },
  {
    href: "https://chaos.social/@TiiaAurora",
    icon: "tabler:brand-mastodon",
    label: "Mastodon",
  },
  {
    href: "https://www.instagram.com/tiiaaurora",
    icon: "tabler:brand-instagram",
    label: "Instagram",
  },
  {
    href: "https://discord.gg/tiiaaurora",
    icon: "tabler:brand-discord",
    label: "Discord",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
