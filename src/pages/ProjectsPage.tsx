import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Navbar } from '../components/organisms/Navbar'
import { Footer } from '../components/organisms/Footer'
import { ProjectCard } from '../components/molecules/ProjectCard'
import { PROJECTS } from '../constants/projectsData'

export function ProjectsPage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f0] dark:bg-[#0d0d0d] text-[#1a1a1a] dark:text-[#e8e8e0] font-sans transition-colors duration-300">
      <Navbar />

      <main
        className={`max-w-[900px] mx-auto pt-8 sm:pt-10 px-4 sm:px-8 md:px-10 pb-20 transition-all duration-[500ms] ease-in-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium mb-8
            text-[#888] dark:text-[#666660]
            hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]
            transition-colors duration-150 group"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to home
        </Link>

        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-[2.2rem] font-bold tracking-[-0.02em] text-[#0d0d0d] dark:text-[#f0f0e8] mb-2">
            All Projects
          </h1>
          <p className="text-[0.92rem] text-[#888] dark:text-[#666660]">
            {PROJECTS.length} projects — things I've built, shipped, and explored.
          </p>
        </div>

        {/* Full project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="animate-in fade-in slide-in-from-bottom-2 h-full"
              style={{
                '--tw-animation-delay': `${i * 60}ms`,
                '--tw-animation-duration': '380ms',
              } as React.CSSProperties}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
