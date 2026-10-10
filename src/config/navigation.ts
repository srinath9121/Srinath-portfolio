export const headerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
] as const;

export const moreNav = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Achievements", href: "/achievements" },
  { label: "Books", href: "/books" },
  { label: "Favourites", href: "/favourites" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Achievements", href: "/achievements" },
  { label: "Books", href: "/books" },
  { label: "Favourites", href: "/favourites" },
] as const;

export const commandItems = [
  ...footerNav.map((item) => ({ label: item.label, href: item.href })),
  { label: "GitHub", href: "https://github.com/srinath9121", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/srinath-swamy-b41a9b267", external: true },
  { label: "X", href: "https://x.com/swamy_srin65891", external: true },
  { label: "Instagram", href: "https://www.instagram.com/srinathhh_____/", external: true },
  { label: "Email", href: "mailto:msrinath9700@gmail.com", external: true },
];
