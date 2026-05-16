import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import type { Project } from '../../constants/projectsData'

const GRADIENTS_LIGHT = [
  ['#e0e7ff', '#c7d2fe'],
  ['#fce7f3', '#fbcfe8'],
  ['#d1fae5', '#a7f3d0'],
  ['#e0f2fe', '#bae6fd'],
  ['#fff7ed', '#fed7aa'],
  ['#f3e8ff', '#e9d5ff'],
]
const GRADIENTS_DARK = [
  ['#1e1b4b', '#312e81'],
  ['#4a044e', '#701a75'],
  ['#052e16', '#14532d'],
  ['#082f49', '#0c4a6e'],
  ['#431407', '#7c2d12'],
  ['#2e1065', '#4c1d95'],
]

function seedIndex(id: string): number {
  let h = 0
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) & 0xffff
  return h % GRADIENTS_LIGHT.length
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { darkMode } = useTheme()
  const [hovered, setHovered] = useState(false)

  const idx = seedIndex(project.id)
  const [gradFrom, gradTo] = darkMode ? GRADIENTS_DARK[idx] : GRADIENTS_LIGHT[idx]
  const initials = project.title.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

  return (
    // h-full so the card fills its grid cell — enables equal row heights
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-full flex flex-col rounded-[14px] border overflow-hidden cursor-default"
      style={{
        borderColor: darkMode ? '#222220' : '#e0e0d8',
        backgroundColor: darkMode ? '#111110' : '#ffffff',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered
          ? darkMode ? '0 8px 28px rgba(0,0,0,0.5)' : '0 8px 28px rgba(0,0,0,0.1)'
          : darkMode ? '0 1px 3px rgba(0,0,0,0.4)' : '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
      }}
    >
      {/* ── Image / placeholder — fixed height, never shrinks ── */}
      <div
        className="relative shrink-0 h-[148px] overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <span
              className="relative text-3xl font-bold tracking-tight select-none"
              style={{ color: darkMode ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.14)' }}
            >
              {initials}
            </span>
          </>
        )}
      </div>

      {/* ── Body — flex-1 so it fills remaining card height ── */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3
          className="font-semibold text-[0.95rem] leading-snug"
          style={{ color: darkMode ? '#e0e0d8' : '#1a1a1a' }}
        >
          {project.title}
        </h3>

        {/* flex-1 on description pushes everything below it to the bottom */}
        <p
          className="flex-1 text-[0.82rem] leading-[1.65]"
          style={{ color: darkMode ? '#777770' : '#777770' }}
        >
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-[3px] rounded-[6px] text-[0.68rem] font-medium border"
              style={{
                borderColor: darkMode ? '#2a2a28' : '#e0e0d8',
                backgroundColor: darkMode ? '#181816' : '#f4f4ef',
                color: darkMode ? '#8a8a82' : '#666660',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* ── Action buttons — always pinned to bottom of card ── */}
        {(project.githubUrl || project.liveUrl) && (
          <div
            className="flex gap-2 pt-3 mt-1 border-t"
            style={{ borderColor: darkMode ? '#1e1e1c' : '#eeeeea' }}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View source on GitHub"
                className="inline-flex items-center gap-1.5 px-3 py-[7px] rounded-[8px]
                  text-[0.75rem] font-semibold transition-colors duration-150"
                style={{
                  backgroundColor: darkMode ? '#e8e8e0' : '#1a1a1a',
                  color: darkMode ? '#0d0d0d' : '#ffffff',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? '#ffffff' : '#333333'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode ? '#e8e8e0' : '#1a1a1a'
                }}
              >
                <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] shrink-0" fill="currentColor" aria-hidden>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Source
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View live demo"
                className="flex items-center justify-center gap-1.5 px-3 py-[7px] rounded-[8px]
                  text-[0.75rem] font-medium border transition-all duration-150"
                style={{
                  borderColor: darkMode ? '#2a2a28' : '#e0e0d8',
                  color: darkMode ? '#888880' : '#666660',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = darkMode ? '#444440' : '#bbb'
                  e.currentTarget.style.color = darkMode ? '#e8e8e0' : '#1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = darkMode ? '#2a2a28' : '#e0e0d8'
                  e.currentTarget.style.color = darkMode ? '#888880' : '#666660'
                }}
              >
                <svg viewBox="0 0 24 24" className="w-[12px] h-[12px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
