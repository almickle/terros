import { useState } from 'react';

import { Button } from '@terros/ui';
import { RiUser3Line } from 'react-icons/ri';

interface UserProfileProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onLogin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
  onProfileClick?: () => void;
}

export function UserProfile({
  isAuthenticated = false,
  user,
  onLogin,
  onSignup,
  onLogout,
  onProfileClick,
}: UserProfileProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
    onProfileClick?.();
  };

  if (!isAuthenticated) {
    return (
      <div className="d-flex flex-row items-center gap-1">
        <Button variant="ghost" size="sm" onClick={onLogin} className="d-flex items-center">
          <span>Log in</span>
        </Button>
        <Button variant="primary" size="sm" onClick={onSignup} className="d-flex items-center">
          <span>Sign up</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="profile-dropdown">
      <Button
        variant="ghost"
        size="lg"
        className="profile-button"
        onClick={handleProfileClick}
        aria-label="User menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {user?.avatar ? (
          <img className="profile-image" src={user.avatar} alt={user.name || 'User profile'} />
        ) : (
          <div className="profile-image flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <RiUser3Line className="text-gray-600 dark:text-gray-300" />
          </div>
        )}
      </Button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {user?.name || 'User'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user?.email || ''}</p>
          </div>
          <div className="py-1">
            <button
              className="dropdown-item"
              onClick={() => {
                onLogout?.();
                setIsOpen(false);
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
