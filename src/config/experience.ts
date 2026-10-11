export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  details?: string[];
  tech?: string[];
  image?: string;
  href?: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "UNP Education",
    role: "Data Science & Machine Learning Intern",
    periodShort: "June–October 2025",
    periodLong: "June–October 2025",
    locationShort: "India",
    locationLong: "India",
    details: [
      "Completed the Data Science & Machine Learning Internship Program, with project work involving exploratory data analysis, data preprocessing, machine learning model development, and evaluation.",
    ],
    tech: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Feature Engineering",
      "Predictive Modeling",
    ],
    image: "/assets/experience/unp-education.png",
    href: "#",
  },
];
