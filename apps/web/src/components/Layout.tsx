import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

export function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
