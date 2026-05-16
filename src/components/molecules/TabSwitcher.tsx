import { TabButton } from "../atoms/TabButton";

interface TabSwitcherProps {
  activeTab: "experience" | "education";
  onTabChange: (tab: "experience" | "education") => void;
}

export function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="flex justify-evenly bg-[#e8e8e0] dark:bg-[#161614] rounded-[10px] p-1 mb-6 w-full">
      {(["experience", "education"] as const).map((tab) => (
        <TabButton
          key={tab}
          label={tab}
          isActive={activeTab === tab}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  );
}
