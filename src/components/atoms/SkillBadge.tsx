import { useState } from 'react'
import { useTheme } from '../../context/useTheme'
import { SKILL_ICONS, getFallbackColor } from '../../constants/skillIcons'

interface SkillBadgeProps {
  label: string
}

function luminance(hex: string): number {
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

export function SkillBadge({ label }: SkillBadgeProps) {
  const [hovered, setHovered] = useState(false)
  const { darkMode } = useTheme()

  const iconData = SKILL_ICONS[label]
  const rawHex = iconData?.hex ?? getFallbackColor(label)

  // Ensure very-dark icons are still visible in dark mode
  const displayHex =
    luminance(rawHex) < 0.12 && darkMode ? 'b0b0a8' : rawHex

  const brand = `#${displayHex}`

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-[7px] w-[76px] px-2 py-3 rounded-xl
        cursor-default select-none border"
      style={{
        borderColor: hovered ? `${brand}38` : 'transparent',
        backgroundColor: hovered
          ? `${brand}${darkMode ? '14' : '0b'}`
          : darkMode ? '#111110' : '#f3f3ef',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 8px 24px ${brand}30, 0 2px 6px rgba(0,0,0,0.08)`
          : darkMode
            ? '0 1px 2px rgba(0,0,0,0.3)'
            : '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'transform 200ms ease-out, box-shadow 200ms ease-out, border-color 200ms ease-out, background-color 200ms ease-out',
      }}
    >
      {/* Icon */}
      <div className="w-[26px] h-[26px] flex items-center justify-center">
        {iconData ? (
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full"
            aria-hidden
            style={{
              fill: hovered ? brand : darkMode ? '#7a7a72' : '#6e6e64',
              transition: 'fill 180ms ease-out',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <path d={iconData.path} />
          </svg>
        ) : (
          <div
            className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center
              text-[0.6rem] font-bold tracking-tight"
            style={{
              backgroundColor: hovered
                ? `${brand}28`
                : darkMode ? '#1e1e1c' : '#e6e6e2',
              color: hovered ? brand : darkMode ? '#7a7a72' : '#666660',
              transition: 'all 180ms ease-out',
            }}
          >
            {label.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {/* Label */}
      <span
        className="text-[0.64rem] leading-snug text-center w-full font-medium"
        style={{
          color: hovered
            ? darkMode ? '#e8e8e0' : '#1a1a1a'
            : darkMode ? '#8a8a82' : '#555550',
          transition: 'color 200ms ease-out',
        }}
      >
        {label}
      </span>
    </div>
  )
}
