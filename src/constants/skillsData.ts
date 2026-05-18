export interface SkillGroup {
  category: string;
  skills: string[];
  badge?: string;
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "TypeScript", "React",  "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "TypeORM"],
  },
  {
    category: "Libraries",
    skills: ["TanStack Query", "TanStack Table", "TanStack Router", "Hey API"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "Git", "GitHub Actions", "Linux", "CI/CD"],
    badge: "Currently Exploring",
  },
];
