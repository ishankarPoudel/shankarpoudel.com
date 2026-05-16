import { Link } from 'react-router-dom'
import { FEATURED_PROJECTS } from '../../constants/projectsData'
import { ProjectCard } from '../molecules/ProjectCard'

export function ProjectsSection() {
  return (
    <div id="projects" className="mt-14">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#aaa] dark:text-[#555550]">
          Projects
        </span>
        <div className="flex-1 h-px bg-[#e0e0d8] dark:bg-[#2a2a28]" />
      </div>

      {/* 3-column project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURED_PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="animate-in fade-in slide-in-from-bottom-2 h-full"
            style={{
              '--tw-animation-delay': `${i * 80}ms`,
              '--tw-animation-duration': '400ms',
            } as React.CSSProperties}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* View all link */}
      <div className="flex justify-end mt-5">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium
            text-[#666] dark:text-[#888880]
            hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]
            transition-colors duration-150 group"
        >
          View all projects
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
