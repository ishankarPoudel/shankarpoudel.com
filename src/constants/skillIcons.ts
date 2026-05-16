import {
  siTypescript, siReact, siAngular, siTailwindcss, siHtml5, siCss,
  siNodedotjs, siExpress, siMongodb, siPostgresql,
  siDocker, siGit, siGithubactions, siLinux,
} from 'simple-icons'

export interface SkillIconData {
  path: string
  hex: string
}

export const SKILL_ICONS: Record<string, SkillIconData> = {
  'TypeScript':       { path: siTypescript.path,    hex: siTypescript.hex },
  'React':            { path: siReact.path,          hex: siReact.hex },
  // Angular's official hex is near-black; use brand red instead
  'Angular':          { path: siAngular.path,        hex: 'C3002F' },
  'Tailwind CSS':     { path: siTailwindcss.path,    hex: siTailwindcss.hex },
  'HTML':             { path: siHtml5.path,          hex: siHtml5.hex },
  'CSS':              { path: siCss.path,            hex: siCss.hex },
  'Node.js':          { path: siNodedotjs.path,      hex: siNodedotjs.hex },
  // Express official hex is #000; use a visible dark-gray
  'Express.js':       { path: siExpress.path,        hex: '555555' },
  'MongoDB':          { path: siMongodb.path,        hex: siMongodb.hex },
  'PostgreSQL':       { path: siPostgresql.path,     hex: siPostgresql.hex },
  'Docker':           { path: siDocker.path,         hex: siDocker.hex },
  'Git':              { path: siGit.path,            hex: siGit.hex },
  'GitHub Actions':   { path: siGithubactions.path,  hex: siGithubactions.hex },
  'Linux':            { path: siLinux.path,          hex: siLinux.hex },
}

// Fallback brand colors for skills without a simple-icon
const FALLBACK: Record<string, string> = {
  'shadcn/ui':        '18181B',
  'TypeORM':          'E8352C',
  'TanStack Query':   'FF4154',
  'TanStack Table':   'FF4154',
  'TanStack Router':  'FF4154',
  'Hey API':          '6366F1',
  'CI/CD':            '22C55E',
}

const FALLBACK_PALETTE = ['6366F1', '8B5CF6', 'EC4899', 'F59E0B', '10B981', '3B82F6']

export function getFallbackColor(name: string): string {
  if (FALLBACK[name]) return FALLBACK[name]
  let hash = 0
  for (const c of name) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff
  return FALLBACK_PALETTE[hash % FALLBACK_PALETTE.length]
}
