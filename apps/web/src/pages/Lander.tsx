import { Demo } from '@/components/Demo';

export function Lander() {
  return (
    <div className="relative min-h-screen overflow-y-auto bg-gradient-to-b from-emerald-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <Demo image="terrarium.png" imageAlt="Smart Terrarium">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              Smart Terrarium
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-600">
                {' '}
                Monitoring
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Maintain the perfect environment for your plants and reptiles with our intelligent
              monitoring system. Track temperature, humidity, and lighting in real-time.
            </p>
            <div className="space-y-4">
              {[
                'Real-time environmental monitoring',
                'Automated climate control',
                'Mobile alerts and notifications',
              ].map((feature, index) => (
                <div key={index} className="flex items-center group">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></div>
                  <span className="text-lg text-gray-700 dark:text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </Demo>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Advanced Features for Your Terrarium
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to create the perfect habitat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Climate Control',
                description: 'Automatically adjust temperature and humidity levels',
                icon: '🌡️',
              },
              {
                title: 'Mobile App',
                description: 'Monitor and control from anywhere with our mobile app',
                icon: '📱',
              },
              {
                title: 'Smart Alerts',
                description: 'Get notified about important changes in your terrarium',
                icon: '🔔',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 dark:from-emerald-500/5 dark:to-sky-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to transform your terrarium experience?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of happy reptile and plant enthusiasts who trust our smart monitoring
            solutions.
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Lander;
