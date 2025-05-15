import { Button } from '@terros/ui';

interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white my-6 w-half">
        {title}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-600"></span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
        {subtitle}
      </p>
      <Button variant="primary">Reserve Now</Button>
      <Button variant="ghost">Explore Features</Button>
    </div>
  );
}
