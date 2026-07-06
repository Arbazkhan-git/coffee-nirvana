type CoffeeBranchIconProps = {
  className?: string;
};

export default function CoffeeBranchIcon({ className = "" }: CoffeeBranchIconProps) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 14C18 14 28 8 42 10C56 12 68 6 82 8C96 10 106 6 118 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M28 10C26 6 24 4 22 6C20 8 22 10 24 11"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M48 8C46 4 44 2 42 4C40 6 42 8 44 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M68 6C66 2 64 0 62 2C60 4 62 6 64 7"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M88 8C86 4 84 2 82 4C80 6 82 8 84 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="24" cy="11" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="44" cy="9" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="64" cy="7" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="84" cy="9" r="2.5" fill="currentColor" opacity="0.7" />
      <circle cx="104" cy="7" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
