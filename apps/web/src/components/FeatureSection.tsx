interface FeatureSectionProps {
  gradientType?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'background';
  gradientDirection?: 'right' | 'left' | 'top' | 'bottom' | 'tr' | 'tl' | 'br' | 'bl';
  className?: string;
}

export function FeatureSection({
  gradientType = 'primary',
  gradientDirection = 'bottom',
  className = '',
}: FeatureSectionProps) {
  const gradientClass = `gradient-${gradientType}`;
  const directionClass = `gradient-to-${gradientDirection}`;

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient ${gradientClass} ${directionClass} ${className}`}
    >
      <div className="container">
        <div>
          <h2>Feature Section</h2>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
