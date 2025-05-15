import * as React from 'react';

type SpinnerProps = {
  /**
   * The size of the spinner (in pixels or any valid CSS size)
   * @default '1em'
   */
  size?: string | number;
  /**
   * The color of the spinner
   * @default 'currentColor'
   */
  color?: string;
  /**
   * The thickness of the spinner track
   * @default 4
   */
  thickness?: number;
  /**
   * The speed of the spinner animation
   * @default '0.8s'
   */
  speed?: string;
  /**
   * Additional class name for custom styling
   */
  className?: string;
  /**
   * Additional styles
   */
  style?: React.CSSProperties;
};

/**
 * A customizable loading spinner component
 */
const Spinner = ({
  size = '1em',
  color = 'currentColor',
  thickness = 4,
  speed = '1.8s',
  className,
  style,
  ...props
}: SpinnerProps) => {
  const spinnerStyle: React.CSSProperties = {
    display: 'inline-block',
    width: size,
    height: size,
    animation: `spin ${speed} linear infinite`,
    ...style,
  };

  const trackStyle: React.CSSProperties = {
    opacity: 0.25,
  };

  const indicatorStyle: React.CSSProperties = {
    opacity: 0.75,
    transformOrigin: 'center',
    animation: `spin ${parseFloat(speed)}s linear infinite`,
  };

  return (
    <span role="status" aria-label="Loading" className={className} style={spinnerStyle} {...props}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      >
        <circle
          cx="12"
          cy="12"
          r={12 - thickness / 2}
          stroke={color}
          strokeWidth={thickness}
          style={trackStyle}
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          style={indicatorStyle}
        />
      </svg>
    </span>
  );
};

export { Spinner };

// Add global styles for the spinner animation
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleElement);
}
