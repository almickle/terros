import { Card } from '@terros/ui';

type SensorData = {
  temperature: number;
  humidity: number;
  moisture: number;
  light: number;
};

type Plant = {
  id: string;
  name: string;
  type: string;
  lastWatered: string;
  health: 'excellent' | 'good' | 'needsAttention';
};

export function DashboardPage() {
  // Mock data - in a real app, this would come from an API
  const sensorData: SensorData = {
    temperature: 22.5,
    humidity: 65,
    moisture: 42,
    light: 75,
  };

  const plants: Plant[] = [
    {
      id: '1',
      name: 'Monstera Deliciosa',
      type: 'Tropical',
      lastWatered: '2 days ago',
      health: 'excellent',
    },
    {
      id: '2',
      name: 'Snake Plant',
      type: 'Succulent',
      lastWatered: '5 days ago',
      health: 'good',
    },
    {
      id: '3',
      name: 'Pothos',
      type: 'Vine',
      lastWatered: '1 day ago',
      health: 'needsAttention',
    },
  ];

  const healthColors = {
    excellent: 'text-emerald-500',
    good: 'text-amber-500',
    needsAttention: 'text-red-500',
  };

  const healthLabels = {
    excellent: 'Excellent',
    good: 'Good',
    needsAttention: 'Needs Attention',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Add Plant
          </button>
          <button className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
              <p className="text-2xl font-semibold">{sensorData.temperature}°C</p>
            </div>
            <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <svg
                className="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-9-4h.01M12 12h.01M16 12h.01M12 8h.01M8 8h.01"
                />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-2xl font-semibold">{sensorData.humidity}%</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-4m-8-8v4m0 0V7m0 0H9m3 0h3m-3 4a4 4 0 01-4-4V5a4 4 0 114 4v6z"
                />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Soil Moisture</p>
              <p className="text-2xl font-semibold">{sensorData.moisture}%</p>
            </div>
            <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900/30">
              <svg
                className="w-6 h-6 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Light Level</p>
              <p className="text-2xl font-semibold">{sensorData.light}%</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="p-6 h-full">
            <h2 className="text-xl font-semibold mb-6">Plant Health</h2>
            <div className="space-y-4">
              {plants.map((plant) => (
                <div
                  key={plant.id}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4">
                    <span className="text-emerald-600 text-xl">🌱</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{plant.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{plant.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Last watered: {plant.lastWatered}
                    </p>
                    <span className={`text-sm font-medium ${healthColors[plant.health]}`}>
                      {healthLabels[plant.health]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 h-full">
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <span>Water Plants</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <span>Adjust Lighting</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                <span>Add Nutrients</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <span>Take Photo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <button className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {[
            { id: 1, action: 'Watered all plants', time: '2 hours ago', icon: '💧' },
            { id: 2, action: 'Adjusted temperature to 22.5°C', time: '5 hours ago', icon: '🌡️' },
            { id: 3, action: 'Added nutrients to water', time: '1 day ago', icon: '🌱' },
            { id: 4, action: 'Took a photo of Monstera', time: '2 days ago', icon: '📸' },
            { id: 5, action: 'System update completed', time: '3 days ago', icon: '🔄' },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <span className="text-2xl mr-4">{item.icon}</span>
              <div className="flex-1">
                <p className="font-medium">{item.action}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default DashboardPage;
