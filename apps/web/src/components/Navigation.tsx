import { Link } from 'react-router-dom';

type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: 'Product', href: '/product' },
  { name: 'Company', href: '/company' },
  { name: 'Dashboard', href: '/dashboard' },
];

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
