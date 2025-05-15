import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-white dark:bg-gray-800 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Terros</h1>
        </div>
      </header>

      <main className='flex-grow'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='text-center'>
            <h2 className='text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Welcome to Terros
            </h2>
            <p className='mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300'>
              A modern React application with TypeScript, Tailwind CSS, and Vite
            </p>

            <div className='mt-8'>
              <div className='inline-flex rounded-md shadow'>
                <button onClick={() => setCount((count) => count + 1)} className='btn btn-primary'>
                  Count is {count}
                </button>
              </div>
              <p className='mt-3 text-sm text-gray-500 dark:text-gray-400'>
                Edit <code className='font-mono font-medium'>src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className='bg-white dark:bg-gray-800 mt-auto'>
        <div className='max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8'>
          <p className='text-center text-base text-gray-500 dark:text-gray-400'>
            &copy; {new Date().getFullYear()} Terros. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
