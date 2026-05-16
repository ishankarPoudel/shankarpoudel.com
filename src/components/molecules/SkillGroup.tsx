import { SkillBadge } from '../atoms/SkillBadge'

interface SkillGroupProps {
  category: string
  skills: string[]
  startIndex?: number
}

export function SkillGroup({ category, skills, startIndex = 0 }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-[#e6e6de] dark:border-[#202020] bg-white dark:bg-[#141412] p-5 space-y-4">
      {/* Category label */}
      <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#999] dark:text-[#484840]">
        {category}
      </span>

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
