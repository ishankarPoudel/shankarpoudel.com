import { SocialIconLink } from "../atoms/SocialIconLink";
import { SOCIAL_LINKS } from "../../constants/socialLinks";

export function ActionButtons() {
  return (
    <div className="flex gap-3 mt-7 flex-wrap items-center">
      <a
        href="/resume.pdf"
        className="inline-flex items-center gap-2 px-[18px] py-2 border border-[#bbb] dark:border-[#444] rounded-[8px] text-sm font-medium text-[#1a1a1a] dark:text-[#e0e0d8] no-underline bg-transparent transition-colors duration-200 cursor-pointer hover:border-[#888] dark:hover:border-[#888] hover:bg-[#eeeee8] dark:hover:bg-[#1a1a1a]"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
        Resume
      </a>
      {SOCIAL_LINKS.map((s) => (
        <SocialIconLink key={s.label} href={s.href} label={s.label} icon={s.icon} />
      ))}
    </div>
  );
}
