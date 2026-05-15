interface NavLinkProps {
  label: string;
  href: string;
}

export function NavLink({ label, href }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-[0.9rem] text-[#666] dark:text-[#a0a090] no-underline tracking-[0.01em] transition-colors duration-200 hover:text-[#1a1a1a] dark:hover:text-[#e8e8e0]"
    >
      {label}
    </a>
  );
}
