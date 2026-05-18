import { SkillBadge } from '../atoms/SkillBadge'

interface SkillGroupProps {
  category: string
  skills: string[]
  startIndex?: number
  badge?: string
}

export function SkillGroup({ category, skills, startIndex = 0, badge }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-[#e6e6de] dark:border-[#202020] bg-white dark:bg-[#141412] p-5 space-y-4">
      {/* Category label + optional badge */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#999] dark:text-[#484840]">
          {category}
        </span>
        {badge && (
          <span className="flex items-center gap-1 px-2 py-[3px] rounded-full text-[0.62rem] font-medium
            bg-amber-50 dark:bg-amber-950/40
            text-amber-600 dark:text-amber-400
            border border-amber-200 dark:border-amber-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500 animate-pulse" />
            {badge}
          </span>
        )}
      </div>

      {/* Skill cards */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div
            key={skill}
            className="animate-in fade-in slide-in-from-bottom-1"
            style={{
              '--tw-animation-delay': `${(startIndex + i) * 45}ms`,
              '--tw-animation-duration': '350ms',
            } as React.CSSProperties}
          >
            <SkillBadge label={skill} />
          </div>
        ))}
      </div>
    </div>
  )
}
