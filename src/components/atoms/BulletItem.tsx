interface BulletItemProps {
  text: string;
}

export function BulletItem({ text }: BulletItemProps) {
  return (
    <li className="text-sm text-[#555] dark:text-[#777770] leading-[1.7] mb-1">
      {text}
    </li>
  );
}
