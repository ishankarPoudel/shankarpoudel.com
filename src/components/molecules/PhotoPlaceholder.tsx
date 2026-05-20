import { useState } from 'react';
import profilePicture from '../../assets/profilePicture.png';
import profilePictureII from '../../assets/profilePictureII.jpeg';

export function PhotoPlaceholder() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-[180px] h-[220px] flex-shrink-0 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo 2 — peeks behind by default, comes forward on hover */}
      <img
        src={profilePictureII}
        alt="Shankar Poudel"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        style={{
          transform: hovered
            ? 'rotate(-2deg) translateX(0px) translateY(0px)'
            : 'rotate(4deg) translateX(14px) translateY(10px)',
          opacity: 1,
          zIndex: 1,
          transition: 'transform 450ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Photo 1 — on top by default, fades back on hover */}
      <img
        src={profilePicture}
        alt="Shankar Poudel"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        style={{
          transform: hovered
            ? 'rotate(4deg) translateX(14px) translateY(10px)'
            : 'rotate(-2deg) translateX(0px) translateY(0px)',
          opacity: hovered ? 0 : 1,
          zIndex: 2,
          transition: 'transform 450ms cubic-bezier(0.4, 0, 0.2, 1), opacity 350ms ease-in-out',
        }}
      />
    </div>
  );
}
