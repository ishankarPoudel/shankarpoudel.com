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

        <div className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 rounded-full
          bg-emerald-50 dark:bg-emerald-950/40
          border border-emerald-200 dark:border-emerald-800/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[0.72rem] font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide">
            Open to work
          </span>
        </div>

        <ActionButtons />
      </div>
      <PhotoPlaceholder />
    </div>
  );
}
