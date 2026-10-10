import { heroConfig, socialLinks } from "@/config/hero";
import { siteConfig } from "@/config/meta";

const profileLinks = socialLinks
  .filter((link) => link.href.startsWith("http"))
  .map((link) => link.href);

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: heroConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${heroConfig.avatar}`,
    jobTitle: "Data Science Student & AI/ML Engineer",
    description: siteConfig.description,
    email: heroConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: heroConfig.location,
      addressCountry: "IN",
    },
    sameAs: profileLinks,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
