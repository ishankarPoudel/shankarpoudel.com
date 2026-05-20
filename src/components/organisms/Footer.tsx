import { Link } from '@tanstack/react-router'
import { SOCIAL_LINKS } from '../../constants/socialLinks'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="mt-20 border-t border-[#e0e0d8] dark:border-[#2a2a28]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 md:px-10 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">

        {/* Left — name + copy */}
        <div className="space-y-0.5">
          <p className="text-[0.88rem] font-semibold text-[#1a1a1a] dark:text-[#e8e8e0]">
            Shankar Poudel
          </p>
          <p className="text-[0.72rem] text-[#aaa] dark:text-[#555550]">
            © {new Date().getFullYear()} · Shankar Poudel
          </p>
        </div>

        {/* Right — social icons + nav links + back to top */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-[#bbb] dark:text-[#3a3a38] hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0] transition-colors duration-150"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-[#e0e0d8] dark:bg-[#2a2a28]" />

          {/* Quick nav */}
          <div className="flex items-center gap-4">
            <Link
              to="/projects"
              className="text-[0.72rem] font-medium text-[#aaa] dark:text-[#555550]
                hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0] transition-colors duration-150"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-[0.72rem] font-medium text-[#aaa] dark:text-[#555550]
                hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0] transition-colors duration-150"
            >
              Contact
            </Link>
          </div>

          <div className="w-px h-4 bg-[#e0e0d8] dark:bg-[#2a2a28]" />

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1 text-[0.72rem] font-medium
              text-[#aaa] dark:text-[#555550]
              hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]
              transition-colors duration-150"
          >
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            Top
          </button>
        </div>

      </div>
    </footer>
  )
}
