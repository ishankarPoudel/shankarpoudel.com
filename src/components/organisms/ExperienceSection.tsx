import { useState } from "react";
import { TabSwitcher } from "../molecules/TabSwitcher";
import { ExperienceCard } from "../molecules/ExperienceCard";
import { WORK, EDUCATION, ACADEMIC_PROJECTS, type WorkItem, type EducationItem } from "../../constants/experienceData";

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const items: (WorkItem | EducationItem)[] =
    activeTab === "experience" ? [...WORK, ...ACADEMIC_PROJECTS] : EDUCATION;

  return (
    <div id="experience" className="mt-4">
      <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
