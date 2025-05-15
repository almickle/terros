interface HeroProps {
  title: string;
  subtitle: string;
  features: string[];
}

export function Hero({ title, subtitle, features }: HeroProps) {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
        {title}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-600">
          {' '}
          Monitoring
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        {subtitle}
      </p>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center group">
            <div className="w-3 h-3 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></div>
            <span className="text-lg text-gray-700 dark:text-gray-200">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
