"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { achievements, type Achievement } from "@/config/achievements";
import { experience, type ExperienceItem } from "@/config/experience";

type FeaturedItem =
  | {
      type: "experience";
      title: string;
      subtitle: string;
      period: string;
      location: string;
      image: string;
      details: string[];
      tech: string[];
      href: string;
    }
  | {
      type: "achievement";
      title: string;
      subtitle: string;
      period: string;
      location: string;
      image: string;
      details: string[];
      tech: string[];
      href: string;
    };

const achievementTech: Record<string, string[]> = {
  "sih-2025": ["Python", "React", "TypeScript", "Machine Learning"],
  "sih-2024": ["Next.js", "React", "TypeScript", "PostgreSQL"],
};

function experienceToFeatured(item: ExperienceItem): FeaturedItem {
  return {
    type: "experience",
    title: item.company,
    subtitle: item.role,
    period: item.periodLong,
    location: item.locationLong.trim(),
    image: item.image || "/assets/experience/unp-education.png",
    details: item.details ?? [],
    tech: item.tech ?? [],
    href: item.href || "#",
  };
}

function achievementToFeatured(item: Achievement): FeaturedItem {
  return {
    type: "achievement",
    title: item.organization,
    subtitle: item.title,
    period: item.periodLong,
    location: "Achievement",
    image: item.image ?? "/assets/og-image.jpg",
    details: item.details ?? [],
    tech: achievementTech[item.slug] ?? [],
    href: `/achievements/${item.slug}`,
  };
}

function FeaturedExperienceItem({
  item,
  delay,
}: {
  item: FeaturedItem;
  delay: number;
}) {
  return (
    <article
      className="animate-in-up-on-view rounded-2xl border border-border/80 bg-card/40 p-6 sm:p-7 shadow-xs"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-white p-2 shadow-xs dark:bg-white">
            <Image
              src={item.image}
              alt="UNP Education logo"
              fill
              sizes="112px"
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-secondary sm:text-base">
              {item.subtitle}
            </p>
          </div>
        </div>

        <div className="text-left font-mono text-xs text-secondary sm:min-w-[160px] sm:text-right sm:text-sm">
          <p className="font-semibold text-foreground">{item.period}</p>
          <p className="mt-0.5 text-muted-foreground">{item.location}</p>
        </div>
      </div>

      {item.details.length > 0 && (
        <div className="mt-5 space-y-2 text-sm leading-relaxed text-secondary sm:text-[14.5px]">
          {item.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      )}

      {item.tech.length > 0 && (
        <div className="mt-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Technologies
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-xs text-foreground shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export function FeaturedExperienceSection() {
  const featuredItems = [
    ...experience.map(experienceToFeatured),
    ...achievements.filter((item) => item.featured).map(achievementToFeatured),
  ].slice(0, 2);

  if (featuredItems.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="featured-experience-heading" className="w-full">
      <Container>
        <div className="mb-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary/80">
            Career & Research
          </p>
          <h2
            id="featured-experience-heading"
            className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Featured Experience
          </h2>
        </div>

        <div className="space-y-6">
          {featuredItems.map((item, index) => {
            const itemId = `${item.type}-${item.title}`;

            return (
              <FeaturedExperienceItem
                key={itemId}
                item={item}
                delay={0.08 + index * 0.08}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
