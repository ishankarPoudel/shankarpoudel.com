import { SKILLS } from '../../constants/skillsData'
import { SkillGroup } from '../molecules/SkillGroup'

const SKILLS_INDEXED = (() => {
  let i = 0
  return SKILLS.map((group) => {
    const start = i
    i += group.skills.length
    return { ...group, start }
  })
})()

export function SkillsSection() {
  return (
    <div id="skills" className="mt-14">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#aaa] dark:text-[#555550]">
          Skills
        </span>
        <div className="flex-1 h-px bg-[#e0e0d8] dark:bg-[#2a2a28]" />
      </div>

      {/* 2-column bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SKILLS_INDEXED.map((group) => (
          <SkillGroup
            key={group.category}
            category={group.category}
            skills={group.skills}
            startIndex={group.start}
            badge={group.badge}
          />
        ))}
      </div>
    </div>
  )
}
