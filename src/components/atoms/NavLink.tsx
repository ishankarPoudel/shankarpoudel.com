import { Link } from '@tanstack/react-router'

interface NavLinkProps {
  label: string
  to: string
}

export function NavLink({ label, to }: NavLinkProps) {
  return (
    <Link
      to={to}
      className="text-[0.9rem] text-[#666] dark:text-[#a0a090] no-underline tracking-[0.01em] transition-colors duration-200 hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]"
    >
      {label}
    </Link>
  )
}
