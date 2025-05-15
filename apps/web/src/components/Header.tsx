import { Link } from 'react-router-dom';

import { Navigation } from '@/components/Navigation';
import { UserProfile } from '@/components/UserProfile';

// Logo component with inline layout
const Logo = () => (
  <div className="d-flex items-center gap-2">
    <Link to="/">
      <img src="/logo.svg" alt="Logo" className="h-8 w-8 flex-shrink-0" />
    </Link>
    <span className="text-xl font-semibold text-gray-800 dark:text-white">Terros Digital</span>
  </div>
);

interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  // TODO: Replace with actual auth state
  const isAuthenticated = false;

  const handleLogin = () => {
    console.log('Login clicked');
    // TODO: Implement login logic
  };

  const handleSignup = () => {
    console.log('Sign up clicked');
    // TODO: Implement signup logic
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // TODO: Implement logout logic
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    // TODO: Navigate to profile
  };

  return (
    <header className={`header ${className}`}>
      <div className="header-container">
        <div className="header-content flex items-center justify-between">
          <Logo />
          <Navigation />
          <div className="flex items-center">
            <UserProfile
              isAuthenticated={isAuthenticated}
              user={{
                name: 'John Doe',
                email: 'john@example.com',
                avatar:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              }}
              onLogin={handleLogin}
              onSignup={handleSignup}
              onLogout={handleLogout}
              onProfileClick={handleProfileClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
