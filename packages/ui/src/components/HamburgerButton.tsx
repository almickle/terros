interface HamburgerButtonProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  onClick?: () => void;
  className?: string;
}

export function HamburgerButton({
  isOpen = false,
  onToggle,
  onClick,
  className = '',
}: HamburgerButtonProps) {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(!isOpen);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        p-2
        rounded-md
        text-gray-700
        dark:text-gray-300
        hover:text-gray-900
        dark:hover:text-white
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-gray-500
        dark:focus:ring-gray-400
        transition-colors
        duration-200
        ${className}
      `}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}

export default HamburgerButton;
