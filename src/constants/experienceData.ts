
import softwaresLogo from '../assets/28.svg';

export interface WorkItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  initials: string;
  location: string;
  logo?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  bullets: string[];
  initials: string;
  location: string;
  logo?: string;
}

export const WORK: WorkItem[] = [
  {
    company: "28 Softwares Pvt. Ltd.",
    role: "Frontend Developer Intern",
    period: "Jan 2024 – Mar 2024",
    location: "Bhaktapur, Nepal",
    bullets: [
      "Built modern, responsive UI components for a rental-based web platform using React and TypeScript",
      "Integrated REST APIs using Hey API with automated route and type generation from OpenAPI schemas",
      "Developed a full-featured admin dashboard with dynamic data tables using TanStack Table and TanStack Router",
      "Collaborated on backend tasks including writing API endpoints using TypeORM and PostgreSQL",
      "Connected frontend and backend end-to-end, ensuring type-safe data flow across the application",
    ],
    initials: "28",
    logo: softwaresLogo,
  },
];

 export const EDUCATION: EducationItem[] = [
  {
    school: "Centennial College",
    degree: "Diploma — Computer Networking",
    period: "2022 – 2024",
    location: "Toronto, Canada",
    bullets: [
    "Studied network infrastructure, routing protocols, and switching — configured enterprise-grade LAN/WAN setups using Cisco equipment",
    "Completed coursework in cybersecurity fundamentals including firewalls, threat detection, and network hardening",
    "Developed Python scripts for network automation and administrative tasks",
    "Gained hands-on experience designing and deploying network topology for a simulated business environment",
    ],
    initials: "CC",
   
  },
  {
    school: "Southwestern College",
    degree: "+2 — Computer Science",
    period: "2019 – 2021",
    location: "Kathmandu, Nepal",
    bullets: [
      "Built strong programming foundations through in-depth study of C — covering memory management, pointers, and data structures",
    "Learned JavaScript as a scripting language, applying it to basic web interactions and logic building",
    "Studied core computer science concepts including operating systems, computer architecture, and database fundamentals",
    "Assisted faculty with classroom tasks and technical demonstrations, developing communication and teamwork skills early on",
  ],
    
    initials: "SW",
   
  },
];
