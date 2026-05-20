import { GitHubCalendar } from 'react-github-calendar'
import { useTheme } from '../../context/useTheme'


const THEME= {
  light: ['#eeeeea', '#c6efce', '#93d1a0', '#59b36e', '#2d7a46'],
  dark:  ['#1a1a18', '#1c3d27', '#26573a', '#2f7a50', '#3dab60'],
}

export function GitHubSection() {
  const { darkMode } = useTheme()

  return (
    <div id="github" className="mt-14">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#aaa] dark:text-[#555550]">
          GitHub Activity
        </span>
        <div className="flex-1 h-px bg-[#e0e0d8] dark:bg-[#2a2a28]" />
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-[#e6e6de] dark:border-[#202020] bg-white dark:bg-[#141412] px-5 pt-5 pb-4 space-y-4">

        {/* Card header */}
        <div className="flex items-center justify-between">
          <a
            href="https://github.com/ishankarPoudel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium
              text-[#555] dark:text-[#888880]
              hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]
              transition-colors duration-150"
          >
            <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] shrink-0" fill="currentColor" aria-hidden>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            ishankarPoudel
          </a>

          <a
            href="https://github.com/ishankarPoudel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[0.72rem] font-medium
              text-[#aaa] dark:text-[#444440]
              hover:text-[#555] dark:hover:text-[#888880]
              transition-colors duration-150"
          >
            View profile
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Calendar — overflow-x-auto keeps it scrollable on mobile */}
        <div className="overflow-x-auto">
          <GitHubCalendar
            username="ishankarPoudel"
            colorScheme={darkMode ? 'dark' : 'light'}
            theme={THEME}
            blockSize={11}
            blockMargin={3}
            blockRadius={2}
            fontSize={11}
            showWeekdayLabels
          />
        </div>
      </div>
    </div>
  )
}
