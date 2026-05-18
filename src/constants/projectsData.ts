export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce',
    title: 'Avisekh Bag Pashal',
    description:
      'Full-stack e-commerce platform with JWT auth, Google OAuth, OTP verification, an AI shopping assistant powered by Gemini RAG, and eSewa & Stripe payment integrations.',
    tech: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'TypeORM', 'TanStack Query', 'Gemini AI'],
    githubUrl: 'https://github.com/ishankarPoudel/ecommerce-frontend',
    liveUrl: '',
    image: '',
    featured: true,
  },
  {
    id: 'devhub',
    title: 'DevHub',
    description:
      'Developer-focused social platform. Sign in with GitHub to auto-populate your profile, share posts, join discussions, and chat live with other developers via Socket.IO.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'Express'],
    githubUrl: 'https://github.com/ishankarPoudel/DevHub',
    liveUrl: '',
    image: '',
    featured: true,
  },
  {
    id: 'open-source-28',
    title: 'Open Source – 28 Softwares',
    description:
      'Contributed to a production codebase at 28 Softwares, taking ownership of UI/UX improvements and maintaining component consistency across a collaborative multi-developer project.',
    tech: ['React', 'TypeScript', 'shadcn/ui'],
    liveUrl: '',
    image: '',
    featured: true,
  },
  {
    id: 'rental-platform',
    title: 'Rental Management Platform',
    description:
      'Built during an internship alongside senior mentors — a web application for managing rental listings, bookings, and tenant interactions end-to-end.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TypeORM', 'TanStack Query', 'shadcn/ui'],
    liveUrl: '',
    image: '',
    featured: false,
  },
  {
    id: 'mini-projects',
    title: 'Mini Projects',
    description:
      'A collection of small apps built while learning full-stack development — Weather App, Currency Converter, Quote App, and Confession Note. All source code available on GitHub.',
    tech: ['React', 'TypeScript', 'REST API'],
    image: '',
    featured: false,
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
