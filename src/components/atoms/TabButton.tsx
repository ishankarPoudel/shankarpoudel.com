import { cn } from "../../ui/lib/utils";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-8 py-2 rounded-[8px] border-none cursor-pointer text-sm capitalize transition-colors duration-200",
        isActive
          ? "font-semibold bg-white dark:bg-[#262624] text-[#1a1a1a] dark:text-[#e8e8e0] "
          : "font-normal bg-transparent text-[#888] dark:text-[#666660]"
      )}
    >
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </button>
  );
}
