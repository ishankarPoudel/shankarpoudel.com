import profilePicture from '../../assets/profilePicture.png';

export function PhotoPlaceholder() {
  return (
    <div className="relative w-[180px] h-[220px] flex-shrink-0">
      {/* Back photo */}
      <img
        src={profilePicture}
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-2xl rotate-3 translate-x-6 translate-y-3"
      />
      {/* Front photo */}
      <img
        src={profilePicture}
        alt="Shankar Poudel"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl -rotate-2"
      />
    </div>
  );
}