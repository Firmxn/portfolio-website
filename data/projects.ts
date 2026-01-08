import type { Project } from "@/types";

/**
 * Data proyek portfolio - Real Projects
 */
export const projects: Project[] = [
  {
    id: "arceffee",
    title: "ARCeffee: Coffee Shop Web App",
    description: "A modern coffee shop web ecosystem built with Headless API First architecture. Features deep menu customization (sugar, ice, size, toppings), smooth checkout flow, real-time order tracking, and barista dashboard with instant notifications.",
    image: "/projects/arceffe.png",
    tags: ["Next.js", "TypeScript", "Supabase", "TailwindCSS", "Zustand", "TanStack Query", "Shadcn UI"],
    features: [
      "Deep menu customization engine (sugar level, ice, size, toppings)",
      "Smooth checkout flow from menu selection to payment",
      "Real-time order tracking for customers",
      "Real-time barista dashboard with instant notifications",
      "Product & category management via Supabase",
      "Order status updates (Pending, Brewing, Ready, Completed)"
    ],
    github: "https://github.com/Firmxn/coffeshop",
    link: "https://arceffee.vercel.app", // Sesuaikan dengan deployment URL
  },
  {
    id: "archeus-booking",
    title: "Archeus Booking System",
    description: "A comprehensive WordPress booking plugin with intelligent form builder, multi-step booking flows, service management, and calendar integration. Features automated database migrations, multi-language support, email notifications with 30+ dynamic tags, and advanced booking history with export capabilities.",
    tags: ["WordPress", "PHP", "JavaScript", "MySQL", "Composer"],
    features: [
      "Intelligent form builder with dynamic field types and auto-detection",
      "Multi-step booking flows with conditional logic and session persistence",
      "Advanced booking history & archive system with Excel/CSV export",
      "Automated database migration system for seamless updates",
      "Multi-language smart field detection (English & Indonesian)",
      "Comprehensive service & time slot management",
      "Interactive calendar with color-coded availability",
      "Email notification system with 30+ dynamic tags",
      "Powerful admin dashboard with status tracking"
    ],
    github: "https://github.com/Firmxn/wp_archeus_booking",
    // link: "https://...", // Plugin download atau demo site
  },
  {
    id: "nutrimpasi",
    title: "NutriMPASI: Baby Food Recommendation",
    description: "A fullstack mobile application using Flutter for baby food recommendation. Features include forum discussions, user profiles with photo upload, post creation with rich text and images, real-time posting activity, and smooth navigation.",
    image: "/projects/nutrimpasi.png",
    tags: ["Flutter", "Dart", "Laravel", "PHP"],
    features: [
      "Forum discussions with rich text and image support",
      "User profile management with photo upload",
      "Real-time post creation and activity tracking",
      "Interactive UI with smooth navigation"
    ],
    github: "https://github.com/rian1504/NutriMPASI-Mobile",
    link: "https://...", // Tambahkan URL demo (APK release, video demo, etc)
  },
  {
    id: "guideme",
    title: "GuideMe: Travel Guide Mobile App",
    description: "A fullstack mobile travel guide application built with Flutter. Responsible for end-to-end development including Firebase Authentication, Supabase Storage integration, Midtrans payment gateway, admin-side recommendations & events, and CRUD operations.",
    tags: ["Flutter", "Firebase", "Supabase", "Midtrans"],
    features: [
      "Firebase Authentication for secure login",
      "Supabase Storage for image management",
      "Midtrans payment gateway integration",
      "Admin panel for recommendations and events",
      "Complete CRUD operations"
    ],
    github: "https://github.com/Firmxn/GuideMe",
    link: "https://...", // Tambahkan URL demo (APK release, video demo, etc)
  },
  {
    id: "coetreemine",
    title: "CoETreemine: PCB Online Store",
    description: "A frontend responsive and interactive user interface built with TailwindCSS and Laravel Blade. Features product listing with HTML, CSS, and JavaScript using Vite as build tool, and integrated with Laravel backend logic.",
    tags: ["TailwindCSS", "Laravel Blade", "JavaScript", "Vite", "HTML/CSS"],
    features: [
      "Responsive product listing interface",
      "Interactive UI with smooth animations",
      "Integration with Laravel backend",
      "Optimized build with Vite"
    ],
    github: "https://github.com/rian1504/CoETreemine",
    link: "https://...", // Tambahkan URL demo (APK release, video demo, etc)
  },
  {
    id: "preloved-clothing",
    title: "Preloved Clothing Sales Platform",
    description: "Developed the frontend of a Preloved Clothing E-Commerce website using CSS as a Mini PBL in first semester of college. Applied wireframes and layouts with TailwindCSS, ensuring visual consistency and optimal performance.",
    tags: ["CSS", "HTML", "JavaScript", "PHP"],
    features: [
      "Clean and modern UI design",
      "Responsive layout across devices",
      "Optimized performance",
      "Consistent visual design system"
    ],
    github: "https://github.com/Firmxn/preloved-clothing-store",
    link: "https://...", // Tambahkan URL demo (APK release, video demo, etc)
  },
  {
    id: "auction-online",
    title: "Auction Online Website",
    description: "A fullstack Online Auction system built with PHP as a Certification project during vocational high school internship. Features include installation configuration, content management, database management using PostgreSQL as relational database management system.",
    tags: ["PHP", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    features: [
      "User authentication and authorization",
      "Real-time bidding system",
      "Admin content management",
      "PostgreSQL database integration"
    ],
  },
  {
    id: "member-management",
    title: "Member Management Website",
    description: "A fullstack Member Management system built with Laravel during vocational high school internship. Developed the frontend, managed the fundamentals of Laravel framework for backend web development, and practiced the concepts and use of PostgreSQL as relational database management system.",
    tags: ["Laravel", "PHP", "PostgreSQL", "Bootstrap", "Blade"],
    features: [
      "Member CRUD operations",
      "Role-based access control",
      "Database relationship management",
      "Responsive admin interface"
    ],
  },
];
