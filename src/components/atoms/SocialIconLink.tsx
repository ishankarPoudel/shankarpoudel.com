import type { ReactNode } from "react";

interface SocialIconLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}

export function SocialIconLink({ href, label, icon }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center w-9 h-9 border border-[#ccc] dark:border-[#333] rounded-[8px] text-[#666] dark:text-[#a0a090] no-underline transition-colors duration-200 hover:border-[#999] dark:hover:border-[#666] hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]"
    >
      {icon}
    </a>
  );
}
