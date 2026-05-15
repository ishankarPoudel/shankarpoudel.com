import type { ReactNode } from "react";

interface IconButtonProps {
  onClick?: () => void;
  ariaLabel: string;
  children: ReactNode;
}

export function IconButton({ onClick, ariaLabel, children }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="bg-transparent border border-[#ccc] dark:border-[#333] rounded-[6px] px-2 py-1.5 cursor-pointer text-[#666] dark:text-[#a0a090] transition-colors duration-200 hover:border-[#999] dark:hover:border-[#666] hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]"
    >
      {children}
    </button>
  );
}
