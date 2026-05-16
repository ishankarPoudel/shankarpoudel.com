export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string   // relative path from /src/assets or a URL
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Project Title One',
    description: 'A short description of what this project does and the problem it solves. Keep it to 1–2 sentences.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/shankar',
    liveUrl: '',
    image: '',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Project Title Two',
    description: 'Another project description. What makes it interesting, what challenge it tackles.',
    tech: ['Next.js', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com/shankar',
    liveUrl: '',
    image: '',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Project Title Three',
    description: 'Brief description of the third project, its purpose and the stack it uses.',
    tech: ['Python', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/shankar',
    liveUrl: '',
    image: '',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Project Title Four',
    description: 'Description of the fourth project. Add more projects as you grow.',
    tech: ['Angular', 'Express.js', 'TypeORM'],
    githubUrl: 'https://github.com/shankar',
    liveUrl: '',
    image: '',
  },
]

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured)
