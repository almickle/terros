import { useState } from 'react';

import { HamburgerButton } from '@terros/ui';
import { Link } from 'react-router-dom';

import { useMobile } from '@/App';
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
  const { isMobile } = useMobile();
  // TODO: Replace with actual auth state
  const isAuthenticated = false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    console.log('Login clicked');
    setIsMenuOpen(false);
    // TODO: Implement login logic
  };

  const handleSignup = () => {
    console.log('Sign up clicked');
    setIsMenuOpen(false);
    // TODO: Implement signup logic
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    setIsMenuOpen(false);
    // TODO: Implement logout logic
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
    setIsMenuOpen(false);
    // TODO: Navigate to profile
  };

  return (
    <header className={`header ${className}`}>
      <div className="header-container mx-4">
        <Logo />
        {!isMobile && <Navigation />}
        <div className="d-flex items-center">
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
          {isMobile && (
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 md:hidden"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
