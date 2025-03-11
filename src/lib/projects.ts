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
  },
  {
    id: "project-1",
    title: "Minimalist E-Commerce Platform",
    shortDescription: "A clean, intuitive shopping experience focused on product presentation",
    description: "A comprehensive e-commerce solution designed with simplicity and usability in mind. This project features a minimalist design approach that puts the focus on product imagery and content, with subtle interactions enhancing the browsing experience. The platform includes a seamless checkout process, product filtering, and responsive layouts that adapt perfectly to any device.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627844718626-4c6c1a5b1c0f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    ],
    tags: ["E-Commerce", "Web Design", "UI/UX", "React"],
    category: "Web Development",
    date: "2023-10-15",
    client: "Boutique Retailers Inc.",
    url: "https://example.com/ecommerce",
    featured: false
  },
  {
    id: "project-2",
    title: "Financial Dashboard",
    shortDescription: "Data visualization platform for financial metrics and analytics",
    description: "A sophisticated dashboard designed for financial analysts and portfolio managers. The interface presents complex data sets through intuitive visualizations, enabling users to track market trends, monitor portfolio performance, and identify investment opportunities. Built with performance in mind, the dashboard handles large datasets while maintaining smooth interactions and real-time updates.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2000&auto=format&fit=crop"
    ],
    tags: ["Dashboard", "Data Visualization", "Finance", "TypeScript"],
    category: "Data Visualization",
    date: "2023-08-22",
    client: "Global Finance Partners",
    url: "https://example.com/financial-dashboard",
    featured: false
  },
  {
    id: "project-3",
    title: "Health & Fitness Mobile App",
    shortDescription: "Personalized workout and nutrition tracking application",
    description: "A comprehensive health and fitness application that combines workout tracking, nutrition planning, and progress analytics. The app features custom workout plans tailored to individual goals, detailed nutrition logging with visual breakdowns, and insightful progress metrics. The design emphasizes clarity and motivation, using subtle animations to celebrate achievements and encourage consistent usage.",
    thumbnail: "https://images.unsplash.com/photo-1598549562238-7570a9add5e4?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598549562238-7570a9add5e4?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=2000&auto=format&fit=crop"
    ],
    tags: ["Mobile App", "Health", "Fitness", "React Native"],
    category: "Mobile Development",
    date: "2023-05-10",
    client: "FitLife Technologies",
    url: "https://example.com/fitness-app",
    featured: false
  },
  {
    id: "project-4",
    title: "Creative Portfolio Website",
    shortDescription: "Showcase platform for a digital artist and illustrator",
    description: "A visually striking portfolio website designed for a digital artist to showcase their diverse body of work. The site features a gallery-style layout with smooth transitions and subtle animations that enhance the viewing experience without distracting from the artwork. The responsive design ensures optimal presentation across all devices, with careful attention to image quality and loading performance.",
    thumbnail: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2000&auto=format&fit=crop"
    ],
    tags: ["Portfolio", "Web Design", "Animation", "Gallery"],
    category: "Web Development",
    date: "2023-03-18",
    client: "Independent Artist",
    url: "https://example.com/creative-portfolio",
    featured: false
  },
  {
    id: "project-5",
    title: "Smart Home Control System",
    shortDescription: "IoT interface for managing connected home devices",
    description: "An intuitive control system for smart home devices, allowing users to monitor and manage their connected environment. The interface provides real-time status updates, automated routines, and energy usage analytics in a clean, accessible design. Special attention was paid to creating a consistent experience across mobile, tablet, and desktop views, with considerations for both touch and mouse interactions.",
    thumbnail: "https://images.unsplash.com/photo-1558002038-bb0d7e4e2afb?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558002038-bb0d7e4e2afb?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop"
    ],
    tags: ["IoT", "Smart Home", "UI/UX", "Vue.js"],
    category: "IoT Applications",
    date: "2023-01-30",
    client: "HomeConnect Solutions",
    url: "https://example.com/smart-home",
    featured: false
  },
  {
    id: "project-6",
    title: "Travel Planning Application",
    shortDescription: "All-in-one platform for trip planning and itinerary management",
    description: "A comprehensive travel planning application that simplifies the process of organizing trips and managing itineraries. The platform offers destination discovery, accommodation booking, activity scheduling, and collaborative planning features. The design emphasizes ease of use and inspiration, with rich imagery and intuitive information architecture guiding users from initial exploration to complete trip planning.",
    thumbnail: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=2000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop"
    ],
    tags: ["Travel", "Planning", "Maps", "React"],
    category: "Web Applications",
    date: "2022-11-12",
    client: "Wanderlust Ventures",
    url: "https://example.com/travel-planner",
    featured: false
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
