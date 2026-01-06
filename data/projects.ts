import type { Project } from "@/types";

/**
 * Data proyek portfolio
 * Ganti dengan proyek-proyek Anda yang sebenarnya
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Features include product search, cart management, and order tracking.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    link: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/username/ecommerce-platform",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and analytics dashboard. Built with modern tech stack for optimal performance.",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    link: "https://taskmanager-demo.vercel.app",
    github: "https://github.com/username/task-manager",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI API. Features include blog post generation, image creation, and content optimization with SEO suggestions.",
    image: "/projects/ai-content.jpg",
    tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel AI SDK"],
    link: "https://ai-content-demo.vercel.app",
    github: "https://github.com/username/ai-content-generator",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with real-time data, forecasts, and interactive maps. Includes location-based weather alerts and historical data visualization.",
    image: "/projects/weather.jpg",
    tags: ["React", "TypeScript", "Chart.js", "Weather API", "Leaflet"],
    link: "https://weather-dashboard-demo.vercel.app",
    github: "https://github.com/username/weather-dashboard",
  },
  {
    id: "5",
    title: "Social Media Analytics",
    description: "Comprehensive social media analytics platform with data visualization, engagement tracking, and automated reporting. Supports multiple social platforms.",
    image: "/projects/analytics.jpg",
    tags: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "D3.js"],
    link: "https://analytics-demo.vercel.app",
    github: "https://github.com/username/social-analytics",
  },
  {
    id: "6",
    title: "Personal Finance Tracker",
    description: "A comprehensive finance tracking application to manage income, expenses, and savings goals. Features interactive charts, budget planning, and category-wise expense analysis.",
    image: "/projects/finance.jpg",
    tags: ["Next.js", "Supabase", "TailwindCSS", "Recharts", "TypeScript"],
    link: "https://finance-tracker-demo.vercel.app",
    github: "https://github.com/username/finance-tracker",
  },
];
