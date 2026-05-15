import { ActionButtons } from "../molecules/ActionButtons";
import { PhotoPlaceholder } from "../molecules/PhotoPlaceholder";

export function HeroIntro() {
  return (
    <div className="flex items-start justify-between gap-12 mb-10">
      <div className="flex-1">
        <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-[1.1] mb-4 tracking-[-0.02em] text-[#0d0d0d] dark:text-[#f0f0e8]">
          hi shankar here. 👋
        </h1>
        <p className="text-base font-semibold text-[#444] dark:text-[#c0c0b0] mb-4 tracking-[0.01em]">
        MERN Stack Developer from Halifax, Canada 🇨🇦
        </p>
        <p className="text-[0.95rem] text-[#666] dark:text-[#888880] leading-[1.7] max-w-[440px] mb-4">
          Full-stack by trade, DevOps & AI by curiosity. I build clean, scalable
          web apps with a growing interest in cloud infrastructure and applied AI.
        </p>
        <p className="text-[0.9rem] text-[#888] dark:text-[#666660] leading-[1.6] max-w-[440px]">
          Currently exploring containerisation, CI/CD pipelines, and{" "}
          <span className="text-[#185fa5] dark:text-[#a0c4ff]">
            building AI-powered tools
          </span>
          .
        </p>
        <ActionButtons />
      </div>
      <PhotoPlaceholder />
    </div>
  );
}
