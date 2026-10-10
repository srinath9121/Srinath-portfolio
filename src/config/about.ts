import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["Data Science student", "building AI/ML systems."],
  intro:
    "I'm M Srinath Swamy — a **Data Science student** focused on **AI/ML engineering**, research, and practical technical systems. I care about turning data and models into robust, reliable tools that solve real problems.",
  quote:
    "Focused on building disciplined, transparent, and practical technical systems.",
  traits: ["Analytical", "Builder", "Researcher", "Persistent"] as const,
  traitStyles: {
    Analytical:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Builder:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Researcher:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Persistent:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },
  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Status", value: "Open to opportunities" },
    { label: "Focus", value: "AI/ML · Research · Systems" },
  ],
  story: {
    title: "Background & Focus",
    paragraphs: [
      "My work centers on the intersection of **data science**, **machine learning**, and **practical systems engineering**. I explore applied problems ranging from market intelligence to physics-informed predictive models.",
      "Rather than treating machine learning as a black box, I emphasize **methodological rigor**, clear evaluation, and understanding the physical or domain mechanisms underlying data.",
      "From time-series forecasting to specialized analytical terminals, my goal is to build software and models that remain dependable when deployed on real-world data.",
    ],
  },
  principles: {
    title: "How I work",
    items: [
      {
        title: "Rigorous investigation",
        description:
          "Ground models in domain fundamentals and verified principles before optimizing complexity.",
      },
      {
        title: "Practical execution",
        description:
          "Prioritize functional, working systems that deliver clear utility and reliable output.",
      },
      {
        title: "Transparent evaluation",
        description:
          "Evaluate models and data pipelines honestly against real constraints and error modes.",
      },
      {
        title: "Continuous learning",
        description:
          "Stay current with advancing AI/ML research while honing core mathematical and software fundamentals.",
      },
    ],
  },
  beyond: {
    title: "Beyond the code",
    paragraphs: [
      "Outside of core coursework and modeling, I spend time exploring quantitative analysis, academic literature, and systems engineering architectures.",
      "I value clarity of thought, technical depth, and building tools that make complex data actionable.",
    ],
  },
  connectLinks: [
    {
      name: "Email",
      href: "mailto:msrinath9700@gmail.com",
      icon: "mail" as const,
    },
    {
      name: "GitHub",
      href: "https://github.com/srinath9121",
      icon: "github" as const,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/srinath-swamy-b41a9b267",
      icon: "linkedin" as const,
    },
    {
      name: "X",
      href: "https://x.com/swamy_srin65891",
      icon: "x" as const,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/srinathhh_____/",
      icon: "instagram" as const,
    },
  ],
};
