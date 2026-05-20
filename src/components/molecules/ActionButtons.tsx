import { useState, useRef, useEffect } from "react";
import { SocialIconLink } from "../atoms/SocialIconLink";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { useTheme } from "../../context/useTheme";

export function ActionButtons() {
  const { darkMode } = useTheme();
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPopover) return;
    function handleClick(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setShowPopover(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showPopover]);

  return (
    <div className="flex gap-3 mt-7 flex-wrap items-center">

      {/* Resume button with funny popover */}
      <div className="relative" ref={popoverRef}>
        <button
          onClick={() => setShowPopover((v) => !v)}
          className="inline-flex items-center gap-2 px-[18px] py-2 border border-[#bbb] dark:border-[#444] rounded-[8px] text-sm font-medium text-[#1a1a1a] dark:text-[#e0e0d8] bg-transparent transition-colors duration-200 cursor-pointer hover:border-[#888] dark:hover:border-[#888] hover:bg-[#eeeee8] dark:hover:bg-[#1a1a1a]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Resume
        </button>

        {showPopover && (
          <div
            className="absolute left-0 top-11 z-50 w-[250px] rounded-[12px] border p-4 shadow-lg"
            style={{
              backgroundColor: darkMode ? '#1a1a18' : '#ffffff',
              borderColor: darkMode ? '#2a2a28' : '#e0e0d8',
            }}
          >
            <p className="text-[0.78rem] leading-[1.6] text-[#555] dark:text-[#888880] mb-3">
              Looks like Shankar forgot to upload his resume 😅 His GitHub probably tells a better story anyway — check it out while I remind him.
            </p>
            <a
              href="https://github.com/ishankarPoudel"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold
                text-[#1a1a1a] dark:text-[#e8e8e0]
                hover:opacity-70 transition-opacity duration-150"
            >
              View GitHub
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        )}
      </div>

      {SOCIAL_LINKS.map((s) => (
        <SocialIconLink key={s.label} href={s.href} label={s.label} icon={s.icon} />
      ))}
    </div>
  );
}
