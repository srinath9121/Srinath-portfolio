export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location?: string;
  url?: string;
}

export const education: EducationItem[] = [
  {
    school: "Bhavan's Vivekananda College",
    degree: "B.Sc Honors in Data Science · CGPA: 7.87",
    period: "2023 – 2026",
    location: "Hyderabad",
    url: "https://bhavansvc.ac.in/",
  },
  {
    school: "Sri Chaitanya Junior Kalasala",
    degree: "Intermediate, MPC · Percentage: 81.2%",
    period: "2021 – 2023",
    location: "Hyderabad",
  },
  {
    school: "TVR Model High School",
    degree: "SSC · CGPA: 10",
    period: "2020 – 2021",
    location: "Hyderabad",
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "SQL", "R"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "PyTorch",
      "Scikit-Learn",
      "FastAPI",
      "React 18",
      "XGBoost",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Web & Frontend",
    items: ["HTML5", "CSS3", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Docker",
      "Jupyter Notebook",
      "Tableau",
      "Excel",
      "SPSS",
      "MATLAB",
    ],
  },
  {
    category: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "DBMS", "OOP", "Linux", "Windows"],
  },
];

export const certifications = [
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
  },
  {
    title: "Introduction to ML",
    issuer: "NPTEL",
  },
];

export const skills = [
  "Python",
  "PyTorch",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Physics-Informed Modeling",
  "Time Series Analysis",
  "FastAPI",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Git",
];

