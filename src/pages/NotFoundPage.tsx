import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] dark:bg-[#0d0d0d] flex flex-col items-center justify-center px-6 text-center font-sans">

      {/* Big 404 */}
      <p className="text-[clamp(6rem,20vw,10rem)] font-bold leading-none tracking-tighter
        text-[#e8e8e0] dark:text-[#1e1e1c] select-none">
        404
      </p>

      {/* Message */}
      <h1 className="text-[1.4rem] sm:text-[1.7rem] font-bold tracking-[-0.02em]
        text-[#0d0d0d] dark:text-[#f0f0e8] mt-2 mb-3">
        Looks like this page took a day off.
      </h1>

      <p className="text-[0.9rem] text-[#888] dark:text-[#666660] max-w-[340px] leading-[1.7] mb-8">
        Even great developers get lost sometimes. The page you're looking for
        doesn't exist — but my portfolio definitely does.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px]
            text-[0.85rem] font-semibold transition-colors duration-150
            bg-[#1a1a1a] dark:bg-[#e8e8e0]
            text-white dark:text-[#0d0d0d]
            hover:bg-[#333] dark:hover:bg-white"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          Back to home
        </Link>

        <a
          href="https://github.com/ishankarPoudel"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px]
            text-[0.85rem] font-medium border transition-colors duration-150
            border-[#e0e0d8] dark:border-[#2a2a28]
            text-[#555] dark:text-[#888880]
            hover:border-[#bbb] dark:hover:border-[#444]
            hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]"
        >
          View GitHub instead
        </a>
      </div>

      {/* Subtle credit */}
      <p className="mt-16 text-[0.7rem] text-[#ccc] dark:text-[#2a2a28]">
        shankarpoudel.com
      </p>
    </div>
  )
}
