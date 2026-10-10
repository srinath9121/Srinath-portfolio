export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  href?: string;
  website?: string;
  demoUrl?: string;
  demoLabel?: string;
  featured?: boolean;
  cover?: string;
  gradient: string;
  status?: string;
  modules?: string[];
};

export const projects: Project[] = [
  {
    slug: "indian-macro-terminal",
    title: "Indian Macro Terminal",
    date: "2026",
    status: "Under Development",
    description:
      "An institutional-style macroeconomic and market intelligence workstation focused on India, connecting macroeconomic developments, global risk, commodities, market anomalies, transmission pathways, and potential market exposure.",
    tech: ["FastAPI", "React", "SQLite"],
    modules: [
      "Market Intelligence",
      "Macro & RBI",
      "Global Risk",
      "Commodities",
      "Transmission Analysis",
      "Anomaly Detection",
      "AI Investigator",
    ],
    featured: false,
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
  },
  {
    slug: "solar-pv-ramp-detection",
    title: "Solar PV Ramp Detection",
    date: "2026",
    description:
      "Multimodal deep learning for early warning of severe solar power ramp events using fisheye sky-camera images and photovoltaic (PV) time series.",
    tech: [
      "Python",
      "PyTorch",
      "torchvision / ResNet-18",
      "LSTM",
      "scikit-learn",
      "Gradio",
    ],
    href: "https://github.com/srinath9121/solar-pv-ramp-detection",
    website: "https://huggingface.co/spaces/srinath44/solar-ramp-detector",
    demoUrl: "https://huggingface.co/spaces/srinath44/solar-ramp-detector",
    demoLabel: "Live Demo on Hugging Face",
    featured: true,
    gradient: "from-amber-500/25 via-orange-500/15 to-yellow-500/25",
  },
];
