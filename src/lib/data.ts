import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const TECH_STACK = [
  "react",
  "vite",
  "nodejs",
  "mongodb",
  "supabase",
  "php",
  "html5",
  "css3",
  "javascript",
  "typescript",
  "tailwind",
  "vercel",
  "cloudflare",
] as const;

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vite", level: 88 },
      { name: "HTML / CSS / JS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "PHP", level: 78 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", level: 88 },
      { name: "Cloudflare", level: 80 },
      { name: "Hostinger", level: 75 },
    ],
  },
];

export const SERVICES = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Modern, responsive websites built with React, TypeScript and Tailwind CSS — optimized for speed, SEO and conversions.",
  },
  {
    icon: "layers",
    title: "Full Stack Development",
    description:
      "End-to-end web applications covering frontend, backend APIs, authentication and database from idea to deployment.",
  },
  {
    icon: "database",
    title: "Database Design",
    description:
      "Scalable schemas for MySQL, MongoDB and Supabase with clean relations, indexing and migration-friendly structures.",
  },
  {
    icon: "wrench",
    title: "Website Maintenance",
    description:
      "Bug fixes, dependency upgrades, performance audits and continuous improvements to keep your site fast and secure.",
  },
  {
    icon: "plug",
    title: "API Development",
    description:
      "RESTful APIs with proper validation, error handling and documentation ready for mobile, web and third-party clients.",
  },
];

export type Project = {
  slug: string;
  title: string;
  image: string;
  tagline: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  stack: { frontend: string; backend: string; database: string };
  future: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "barangay-service-request-system",
    title: "Barangay Service Request System",
    image: project1,
    tagline: "Digitizing barangay document requests for faster, more transparent local governance",
    tech: [ "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Twilio",
    "AWS S3"],
    liveUrl: "https://oniee-port.vercel.app/",
    repoUrl: "https://github.com/JonYang0108",
    overview:
      "A comprehensive analytics dashboard that surfaces product KPIs in real time with rich charting and export options.",
    problem:
      "Small teams struggle to consolidate data across services into a single, readable view.",
    solution:
      "A modular dashboard with reusable chart components, scheduled aggregations, and CSV/PDF export pipelines.",
    features: [
      "Real-time data streaming",
      "Interactive charts (line, bar, donut)",
      "Filterable date ranges",
      "Role-based access control",
      "CSV and PDF exports",
    ],
    stack: {
      frontend: "React + TypeScript + Tailwind",
      backend: "Node.js + Express",
      database: "MongoDB",
    },
    future: "Add anomaly detection, custom alert rules and a public API for embedded widgets.",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    image: project2,
    tagline: "Headless storefront with cart, checkout and admin tools.",
    tech: ["React", "Vite", "Tailwind", "Supabase", "Stripe"],
    liveUrl: "#",
    repoUrl: "https://github.com/JonYang0108",
    overview:
      "A modern storefront with full cart, checkout, order tracking and an admin panel for inventory.",
    problem: "Local merchants needed a fast, affordable way to launch online with secure payments.",
    solution: "A Supabase-backed storefront with Stripe checkout, RLS-secured admin and image CDN.",
    features: [
      "Product catalog with search",
      "Cart and secure checkout",
      "Order history and tracking",
      "Admin product management",
      "Responsive mobile-first UI",
    ],
    stack: {
      frontend: "React + Vite + Tailwind",
      backend: "Supabase Edge Functions",
      database: "Postgres (Supabase)",
    },
    future: "Wishlist, recommendations engine, multi-currency and shipping integrations.",
  },
  {
    slug: "task-manager",
    title: "Task Management App",
    image: project3,
    tagline: "Kanban-style task board with drag, filters and team sync.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "MySQL"],
    liveUrl: "#",
    repoUrl: "https://github.com/JonYang0108",
    overview:
      "A collaborative kanban board where teams can plan sprints, drag tasks across columns and chat in-line.",
    problem: "Students and small teams lacked a lightweight, free alternative to bloated PM tools.",
    solution:
      "A focused board app with real-time updates, keyboard shortcuts and email notifications.",
    features: [
      "Drag and drop columns",
      "Tags, due dates and priorities",
      "Activity log per card",
      "Email reminders",
      "Dark mode by default",
    ],
    stack: { frontend: "React + TypeScript", backend: "Node.js + Express", database: "MySQL" },
    future: "Calendar view, Gantt charts and mobile app via React Native.",
  },
  {
    slug: "real-estate-portal",
    title: "Real Estate Portal",
    image: project4,
    tagline: "Property listings with map search and saved favorites.",
    tech: ["React", "Tailwind", "PHP", "MySQL"],
    liveUrl: "#",
    repoUrl: "https://github.com/JonYang0108",
    overview:
      "A property search portal with map view, advanced filters and an inquiry workflow for agents.",
    problem: "Buyers wasted time scrolling through outdated listings without a clear map view.",
    solution:
      "A PHP/MySQL backend serving a React frontend with Leaflet maps and inquiry routing to agents.",
    features: [
      "Map-based property search",
      "Advanced filters (price, beds, area)",
      "Save favorites",
      "Agent inquiry form",
      "Image gallery and virtual tour stub",
    ],
    stack: { frontend: "React + Tailwind", backend: "PHP (Laravel-style)", database: "MySQL" },
    future: "Mortgage calculator, agent dashboard and 3D tour integrations.",
  },
];

export const EXPERIENCE = [
  {
    company: "Freelance",
    role: "Full Stack Web Developer",
    duration: "2024 — Present",
    responsibilities: [
      "Build responsive websites for small businesses and creators",
      "Translate client requirements into clean, maintainable code",
      "Deliver and deploy projects on Vercel, Hostinger and Cloudflare",
    ],
    achievements: ["Shipped 10+ client websites with positive feedback"],
  },
  {
    company: "Academic Projects",
    role: "Student Developer",
    duration: "2023 — Present",
    responsibilities: [
      "Lead frontend development across multiple capstone projects",
      "Design and normalize MySQL databases for school systems",
      "Mentor classmates on Git workflows and modern JS",
    ],
    achievements: ["Recognized for Best Capstone Demo (school internal)"],
  },
  {
    company: "Open Source",
    role: "Contributor",
    duration: "2024 — Present",
    responsibilities: [
      "Submit bug fixes and small features to React and Tailwind ecosystems",
      "Maintain personal libraries on GitHub",
    ],
    achievements: ["Several merged PRs across community repositories"],
  },
];

export const EDUCATION = [
  {
    school: "University / College",
    degree: "Bachelor of Science in Information Technology",
    year: "2022 — Present",
    achievements: ["Consistent Dean's Lister", "Capstone team lead"],
  },
];

export const CERTIFICATIONS = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "2024", link: "#" },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    link: "#",
  },
  { name: "React — The Complete Guide", issuer: "Udemy", date: "2025", link: "#" },
];

export const TESTIMONIALS = [
  {
    name: "Project Client",
    feedback:
      "Jonie delivered our website ahead of schedule and the design exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Capstone Mentor",
    feedback: "Strong technical foundation and great communication throughout the project.",
    rating: 5,
  },
  {
    name: "Freelance Client",
    feedback: "Reliable, communicative and writes clean code. Will hire again for our next phase.",
    rating: 5,
  },
];

export const PROCESS = [
  { step: 1, title: "Requirement Analysis", desc: "Understand goals, audience and constraints." },
  { step: 2, title: "Planning", desc: "Scope, timeline, milestones and risk mapping." },
  { step: 3, title: "UI/UX Design", desc: "Wireframes, design system and prototypes." },
  { step: 4, title: "Frontend Development", desc: "Componentized, responsive, accessible UI." },
  { step: 5, title: "Backend Development", desc: "APIs, business logic and integrations." },
  { step: 6, title: "Database Design", desc: "Schema, relations, indexing and migrations." },
  { step: 7, title: "Testing", desc: "Manual QA, edge cases and performance audits." },
  { step: 8, title: "Deployment", desc: "CI/CD, environment configuration and monitoring." },
  { step: 9, title: "Maintenance", desc: "Bug fixes, upgrades and continuous improvement." },
];

export const SOCIALS = {
  github: "https://github.com/JonYang0108",
  facebook: "https://www.facebook.com/jonie.quirino.73",
  linkedin: "",
  instagram: "",
};

export const CONTACT = {
  email: "joniequirino@gmail.com",
  phone: "09814766600",
  location: "Antipolo City, Rizal, Philippines",
};
