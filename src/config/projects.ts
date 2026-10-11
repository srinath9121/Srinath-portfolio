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
  datasetUrl?: string;
  datasetLabel?: string;
  featured?: boolean;
  cover?: string;
  gradient: string;
  status?: string;
  modules?: string[];
  methodology?: string[];
};

export const projects: Project[] = [
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
    datasetUrl: "https://huggingface.co/datasets/srikanthswamym/skippd",
    datasetLabel: "Hugging Face — SKIPPD Dataset",
    href: "https://github.com/srinath9121/solar-pv-ramp-detection",
    website: "https://huggingface.co/spaces/srinath44/solar-ramp-detector",
    demoUrl: "https://huggingface.co/spaces/srinath44/solar-ramp-detector",
    demoLabel: "Live Demo on Hugging Face",
    methodology: [
      "Fisheye sky-camera image feature extraction using ResNet-18 CNN",
      "Historical photovoltaic time-series sequence modeling using LSTM",
      "Multimodal feature fusion layer for joint spatial and temporal representation",
      "Dual-head architecture: continuous generation forecasting and ramp severity classification",
      "Chronological train/val/test data splitting to avoid temporal data leakage",
    ],
    featured: true,
    gradient: "from-amber-500/25 via-orange-500/15 to-yellow-500/25",
  },
  {
    slug: "student-performance-prediction",
    title: "Student Performance Prediction",
    date: "2025",
    description:
      "An end-to-end machine learning project that predicts students' final grades using demographic, academic, family, and social factors.",
    tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy"],
    datasetUrl:
      "https://archive.ics.uci.edu/dataset/320/student+performance",
    datasetLabel: "UCI Machine Learning Repository — Student Performance",
    href: "https://github.com/srinath9121/Analysis-on-Student-grade-Prediction-using-ML",
    methodology: [
      "Exploratory data analysis and visualization",
      "Missing-value handling",
      "Categorical encoding and numerical feature scaling",
      "Comparison of Linear Regression, Ridge, Lasso, SVR, Random Forest, Gradient Boosting, XGBoost, and an artificial neural network",
      "Model evaluation and analysis of influential features",
    ],
    featured: true,
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/25",
  },
  {
    slug: "airline-passenger-satisfaction-prediction",
    title: "Airline Passenger Satisfaction Prediction",
    date: "2025",
    description:
      "An end-to-end machine learning project that predicts airline passenger satisfaction using demographic information, travel details, service ratings, and flight delay data.",
    tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy"],
    datasetUrl:
      "https://www.kaggle.com/datasets/mysarahmadbhat/airline-passenger-satisfaction",
    datasetLabel: "Kaggle — Airline Passenger Satisfaction",
    href: "https://github.com/srinath9121/Analysis-on-Airline-Passenger-Satisfaction-Prediction-using-ML",
    methodology: [
      "Exploratory data analysis and visualization",
      "Missing-value handling and categorical encoding",
      "Numerical feature scaling",
      "Class-imbalance handling using SMOTE",
      "Comparison of Logistic Regression, Random Forest, Gradient Boosting, XGBoost, SVM, and KNN",
      "Model evaluation and feature-importance analysis",
    ],
    featured: false,
    gradient: "from-sky-500/25 via-blue-500/15 to-indigo-500/25",
  },
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
];
