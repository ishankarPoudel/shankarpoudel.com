import { useState } from "react";
import { Card } from "../../ui/shadcn/ui/card";
import { BulletItem } from "../atoms/BulletItem";
import type { WorkItem, EducationItem, WorkProject } from "../../constants/experienceData";

type Item = WorkItem | EducationItem;

interface ExperienceCardProps {
  item: Item;
}

function LogoAvatar({ logo, initials }: { logo?: string; initials: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showLogo = logo && !imgFailed;

  return (
    <div className="w-10 h-10 rounded-[8px] bg-[#f0f0ea] dark:bg-[#1c1c1a] border border-[#e0e0d8] dark:border-[#2a2a28] flex items-center justify-center shrink-0 overflow-hidden">
      {showLogo ? (
        <img
          src={logo}
          alt=""
          className="w-full h-full object-contain p-1"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="text-xs font-semibold text-[#185fa5] dark:text-[#a0b4ff]">
          {initials}
        </span>
      )}
    </div>
  );
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  const title = "company" in item ? item.company : item.school;
  const subtitle = "role" in item ? item.role : item.degree;

  return (
    <Card className="bg-white dark:bg-[#111110] ring-0 border border-[#e0e0d8] dark:border-[#222220] rounded-[12px] gap-0 py-5 px-6">
      <div className="flex items-start gap-3 mb-3">
        <LogoAvatar logo={item.logo} initials={item.initials} />
        <div className="flex-1">
          <div className="flex justify-between items-baseline flex-wrap gap-1">
            <span className="font-semibold text-[0.95rem] text-[#1a1a1a] dark:text-[#e0e0d8]">
              {title}
            </span>
            <span className="text-[0.8rem] text-[#aaa] dark:text-[#555550]">
              {item.period}
            </span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-1 mt-0.5">
            <span className="text-[0.85rem] text-[#666] dark:text-[#888880]">
              {subtitle}
            </span>
            <span className="flex items-center gap-1 text-[0.78rem] text-[#aaa] dark:text-[#555550]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              {item.location}
            </span>
          </div>
        </div>
      </div>
      {"projects" in item && item.projects && item.projects.length > 0 ? (
        <div className="flex flex-col gap-4">
          {item.projects.map((project: WorkProject, pi) => (
            <div key={pi}>
              {pi > 0 && <div className="h-px bg-[#f0f0ea] dark:bg-[#1e1e1c] mb-4" />}
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-[0.75rem] font-semibold text-[#444] dark:text-[#aaa8a0]">
                  {project.name}
                </span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-[2px] rounded-[4px] text-[0.62rem] font-medium
                        bg-[#f4f4ef] dark:bg-[#1c1c1a]
                        text-[#888] dark:text-[#666660]
                        border border-[#e8e8e0] dark:border-[#2a2a28]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="m-0 pl-5">
                {project.bullets.map((b, j) => (
                  <BulletItem key={j} text={b} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="m-0 pl-5">
          {item.bullets.map((b, j) => (
            <BulletItem key={j} text={b} />
          ))}
        </ul>
      )}
    </Card>
  );
}
