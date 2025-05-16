import { Button } from '@terros/ui';

import { useMobile } from '@/App';

interface HeroProps {
  title: string;
  subtitle: string;
  mobileTitle: string;
  mobileSubtitle: string;
}

export function Hero({ title, subtitle, mobileTitle, mobileSubtitle }: HeroProps) {
  const { isMobile } = useMobile();

  const containerStyles = `w-${isMobile ? 'full' : 'three-quarters'} mx-${isMobile ? 'auto' : '0'}`;
  const headingStyles = `
    text-4xl 
    ${isMobile ? 'text-center' : 'text-left'} 
    font-extrabold 
    text-gray-900 
    dark:text-white 
    my-6
  `;
  const subtitleStyles = `text-xl text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl ${isMobile ? 'text-center' : 'text-left'}`;
  const buttonsContainerStyles = `
    flex 
    ${isMobile ? 'justify-center' : 'justify-start'} 
    gap-4
  `;

  return (
    <div className={containerStyles}>
      <h1 className={headingStyles}>
        {isMobile ? mobileTitle : title}
        <span className="bg-clip-text "></span>
      </h1>
      <p className={subtitleStyles}>{isMobile ? mobileSubtitle : subtitle}</p>
      <div className={buttonsContainerStyles}>
        <Button variant="primary">Reserve Now</Button>
        <Button variant="ghost">Explore Features</Button>
      </div>
    </div>
  );
}
