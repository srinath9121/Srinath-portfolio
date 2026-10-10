export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  image?: string;
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}
