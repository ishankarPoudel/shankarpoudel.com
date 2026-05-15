import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "../atoms/NavLink";
import { IconButton } from "../atoms/IconButton";
import { NAV_LINKS } from "../../constants/navLinks";

export function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <nav className="flex items-center justify-between py-6 px-10 max-w-[900px] mx-auto">
      <div className="flex gap-8">
        {NAV_LINKS.map((link) => (
          <NavLink key={link} label={link} href={`#${link}`} />
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <IconButton ariaLabel="Toggle resume">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="5" y="2" width="14" height="20" rx="2"/>
            <line x1="9" y1="7" x2="15" y2="7"/>
            <line x1="9" y1="11" x2="15" y2="11"/>
            <line x1="9" y1="15" x2="13" y2="15"/>
          </svg>
        </IconButton>
        <IconButton onClick={toggleDarkMode} ariaLabel="Toggle theme">
          {darkMode ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </IconButton>
      </div>
    </nav>
  );
}
