import { Card } from '@terros/ui';

export function ProductPage() {
  const features = [
    {
      name: 'Smart Monitoring',
      description:
        'Real-time monitoring of temperature, humidity, and light levels to ensure optimal plant growth conditions.',
    },
    {
      name: 'Automated Watering',
      description:
        'Automated watering system with customizable schedules to keep your plants perfectly hydrated.',
    },
    {
      name: 'App Control',
      description:
        'Control and monitor your terrarium from anywhere using our intuitive mobile app.',
    },
    {
      name: 'LED Grow Lights',
      description:
        'Full-spectrum LED lighting system that promotes healthy plant growth in any environment.',
    },
    {
      name: 'Modular Design',
      description: 'Easily expandable system that grows with your plant collection.',
    },
    {
      name: 'Eco-Friendly',
      description: 'Made from sustainable materials with energy-efficient components.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Smart Terrarium Pro</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The ultimate smart gardening solution for plant lovers who want to grow beautiful plants
          with minimal effort.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Product Features</h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-emerald-500 mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">{feature.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Specifications</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-600 dark:text-gray-300">Dimensions</span>
              <span className="font-medium">12&quot; x 12&quot; x 18&quot;</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-600 dark:text-gray-300">Weight</span>
              <span className="font-medium">8.8 lbs (4 kg)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-600 dark:text-gray-300">Material</span>
              <span className="font-medium">Tempered Glass, Aluminum</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-600 dark:text-gray-300">Power</span>
              <span className="font-medium">12V DC, 2A</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-600 dark:text-gray-300">Connectivity</span>
              <span className="font-medium">Wi-Fi, Bluetooth</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-600 dark:text-gray-300">Compatibility</span>
              <span className="font-medium">iOS 13+, Android 8+</span>
            </div>
          </div>
        </div>
      </div>

      <Card className="p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your plant care?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of plant enthusiasts who have already upgraded to the Smart Terrarium
            Pro.
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-sky-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity">
            Order Now
          </button>
        </div>
      </Card>
    </div>
  );
}

export default ProductPage;
