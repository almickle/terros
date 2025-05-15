import { ReactNode } from 'react';

interface DemoProps {
  children: ReactNode;
  image: string;
  imageAlt: string;
  className?: string;
}

export function Demo({ children, image, imageAlt, className = '' }: DemoProps) {
  return (
    <div className={`relative w-full overflow-hidden${className ? ` ${className}` : ''}`}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative z-10 max-w-2xl">{children}</div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 lg:w-1/3 xl:w-1/2 h-full -mr-8 md:-mr-16 lg:-mr-24 xl:-mr-32">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center rounded-l-3xl shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Demo;
