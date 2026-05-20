
import softwaresLogo from '../assets/28.svg';

export interface WorkProject {
  name: string;
  tech: string[];
  bullets: string[];
}

export interface WorkItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  projects?: WorkProject[];
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
    bullets: [],
    projects: [
      {
        name: "Rental Management Platform",
        tech: ["React", "TypeScript", "TanStack Router", "TanStack Table", "Hey API"],
        bullets: [
          "Built modern, responsive UI components for a rental-based web platform using React and TypeScript",
          "Integrated REST APIs using Hey API with automated route and type generation from OpenAPI schemas",
          "Developed a full-featured admin dashboard with dynamic data tables using TanStack Table and TanStack Router",
          "Connected frontend and backend end-to-end, ensuring type-safe data flow across the application",
        ],
      },
      {
        name: "School CMS",
        tech: ["TSOA", "TypeORM", "PostgreSQL", "Node.js"],
        bullets: [
          "Implemented JWT-based authentication and session management, including token refresh flows and secure cookie handling",
          "Built authorization middleware with role-based access control to protect routes across the API",
          "Applied rate limiting on authentication endpoints to mitigate brute-force and abuse vectors",
          "Developed paginated API endpoints with configurable page size and cursor-based navigation for large datasets",
        ],
      },
    ],
    initials: "28",
    logo: softwaresLogo,  
  },
];

export const ACADEMIC_PROJECTS: EducationItem[] = [
  {
    school: "Enterprise LAN/WAN Network Design",
    degree: "Capstone Project · Centennial College",
    period: "2024",
    location: "Toronto, Canada",
    initials: "NW",
    bullets: [
      "Designed a multi-site enterprise network topology simulating a real business environment — segmented into departments (HR, Finance, IT) using VLANs on Cisco Layer 3 switches",
      "Configured inter-VLAN routing, dynamic routing protocols (OSPF), and redundant WAN links to ensure fault-tolerant connectivity between branch offices",
      "Applied ACLs and firewall rules to enforce security policies, restricting unauthorized cross-segment traffic",
      "Built the full IP addressing scheme using VLSM subnetting",
      "Presented the solution to faculty with a full network diagram, traffic flow analysis, and security justification",
    ],
  },
  {
    school: "College Management System",
    degree: "Academic Project · Southwestern College",
    period: "2021",
    location: "Kathmandu, Nepal",
    initials: "CM",
    bullets: [
      "Built a fully functional college management system in C — covering student records, course enrollment, grade tracking, and fee management using file I/O and linked lists",
      "Implemented core data structures  and file persistence to manage student and faculty data without a database",
      "Translated the C application into a web-based interface using HTML, CSS, and JavaScript — redesigning the UI with a clean, responsive layout",
      "Built interactive dashboard views for student records, attendance, and results using vanilla JS and DOM manipulation",
      "Demonstrated the full arc from low-level systems programming in C to a polished frontend web presentation",
    ],
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
