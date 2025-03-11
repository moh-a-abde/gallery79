export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  category: string;
  date: string;
  client?: string;
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "process-manager",
    title: "THE Process Manager",
    shortDescription: "Rust-based TUI application that monitors and displays detailed process metrics",
    description: "A Rust-based Terminal User Interface (TUI) application that monitors and displays detailed process metrics. This tool retrieves CPU and memory usage data for processes running on the system. Features include retrieving and displaying process data, CPU and memory usage calculations, sorting capabilities, and detailed process information based on PID.",
    thumbnail: "/gallery79/demos/THE-Process-Manager/v1.png",
    images: [
      "/gallery79/demos/THE-Process-Manager/v1.png"
    ],
    tags: ["Rust", "TUI", "System Monitoring", "Process Management", "Linux"],
    category: "System Tools",
    date: "2024-03-01",
    client: "Personal Project",
    url: "https://github.com/moh-a-abde/THE-Process-Manager",
    featured: true
  },
  {
    id: "wardrobeai",
    title: "wardrobe.ai - AI Wardrobe Assistant",
    shortDescription: "Intelligent, personalized outfit recommendation system for managing your wardrobe",
    description: "An intelligent, personalized outfit recommendation system that helps you manage your wardrobe, style preferences, and daily fashion choices. This application leverages machine learning and external data (like weather and fashion trends) to suggest the perfect look for any occasion. Features include wardrobe management, AI-driven recommendations, style preferences & profiles, event & calendar integration, shopping insights, and fashion tips & trends.",
    thumbnail: "/gallery79/demos/WardrobeAI/thumbnail.png",
    images: [
      "/gallery79/demos/WardrobeAI/LandingScreen.png",
      "/gallery79/demos/WardrobeAI/RecommendationSystem.png",
      "/gallery79/demos/WardrobeAI/WardrobeShowcase.png",
      "/gallery79/demos/WardrobeAI/Trends.png",
      "/gallery79/demos/WardrobeAI/Settings.png",
      "/gallery79/demos/WardrobeAI/Outfit Calendar.png"
    ],
    tags: ["React Native", "Machine Learning", "AI", "Fashion", "Mobile App"],
    category: "Mobile Applications",
    date: "2024-02-17",
    client: "Personal Project",
    url: "https://wardrobe-ai.vercel.app",
    featured: true
  },
  {
    id: "triviaai",
    title: "Trivia.AI - Interactive Sports Trivia Platform",
    shortDescription: "Advanced, interactive sports trivia application with personalized quiz experiences",
    description: "Trivia.AI is an advanced, interactive sports trivia application designed to provide users with an engaging and personalized quiz experience focused on basketball and soccer. The platform combines rich trivia content with modern web technologies to create an immersive learning environment for sports enthusiasts. Features include sport-specific content, personalized recommendations, adaptive difficulty, achievement systems, streak mechanics, user authentication, and responsive design across all devices.",
    thumbnail: "/gallery79/demos/TriviaAI/home_soccer_dark.png",
    images: [
      "/gallery79/demos/TriviaAI/home_soccer_light.png",
      "/gallery79/demos/TriviaAI/home_soccer_dark.png",
      "/gallery79/demos/TriviaAI/signin.png",
      "/gallery79/demos/TriviaAI/signup.png",
      "/gallery79/demos/TriviaAI/loading.png",
      "/gallery79/demos/TriviaAI/correct_answer.png",
      "/gallery79/demos/TriviaAI/leadboard.png",
      "/gallery79/demos/TriviaAI/incorrect.png",
      "/gallery79/demos/TriviaAI/soccer_hint_light.png",
      "/gallery79/demos/TriviaAI/hint.png",
      "/gallery79/demos/TriviaAI/streak.png",
      "/gallery79/demos/TriviaAI/signed_out_qiuz.png"
    ],
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
    category: "Web Applications",
    date: "2024-01-25",
    client: "Personal Project",
    url: "https://trivia-ai.vercel.app",
    featured: true
  },
  {
    id: "portfolio",
    title: "Mohamed Abdel Hamid - Portfolio Website",
    shortDescription: "Personal portfolio website showcasing skills, projects, and experience",
    description: "A modern, responsive personal portfolio website built to showcase my skills, projects, and professional experience. Features include a responsive design for all devices, interactive UI with animations, contact form with PHP backend, project showcase with modal details, and comprehensive skills and experience sections. The site demonstrates my technical abilities and design sensibilities in a clean, professional format.",
    thumbnail: "/gallery79/demos/Portfolio/landing.png",
    images: [
      "/gallery79/demos/Portfolio/landing.png",
      "/gallery79/demos/Portfolio/aboutme.png",
      "/gallery79/demos/Portfolio/techstack.png",
      "/gallery79/demos/Portfolio/preview.png",
      "/gallery79/demos/Portfolio/banner.png"
    ],
    tags: ["React", "TypeScript", "TailwindCSS", "PHP", "Responsive Design"],
    category: "Web Development",
    date: "2023-11-20",
    client: "Personal Project",
    url: "https://moh-a-abde.github.io/",
    featured: true
  },
  {
    id: "flowboard",
    title: "FlowBoard - Task Management Application",
    shortDescription: "A sleek and intuitive task management application designed for efficient workflow management",
    description: "A sleek and intuitive task management application designed for efficient workflow management. FlowBoard features user authentication, a Kanban board with drag-and-drop functionality, comprehensive task management, prioritization capabilities, responsive design, and local storage persistence. Built with Vue 3 (Composition API), Vue Router, Pinia, TailwindCSS, and Vite.",
    thumbnail: "/gallery79/demos/FlowBoard/thumbnail.png",
    images: [
      "/gallery79/demos/FlowBoard/light_dash.png",
      "/gallery79/demos/FlowBoard/light_board.png",
      "/gallery79/demos/FlowBoard/dark_dash.png",
      "/gallery79/demos/FlowBoard/dark_board.png",
      "/gallery79/demos/FlowBoard/filter.png",
      "/gallery79/demos/FlowBoard/add_task.png",
      "/gallery79/demos/FlowBoard/task_preview.png"
    ],
    tags: ["Vue 3", "TailwindCSS", "Task Management", "Kanban", "Responsive Design"],
    category: "Web Applications",
    date: "2023-12-15",
    client: "Personal Project",
    url: "https://moh-a-abde.github.io/FlowBoard/",
    featured: true
  }
];

export const categories = Array.from(
  new Set(projects.map((project) => project.category))
);

export const tags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getRelatedProjects = (id: string, limit = 3): Project[] => {
  const currentProject = getProjectById(id);
  if (!currentProject) return [];
  
  return projects
    .filter((project) => project.id !== id)
    .filter((project) => 
      project.category === currentProject.category || 
      project.tags.some((tag) => currentProject.tags.includes(tag))
    )
    .slice(0, limit);
};
