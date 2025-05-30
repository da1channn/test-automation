import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            AI Test Automation
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/dashboard" className="hover:text-secondary transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/reports" className="hover:text-secondary transition-colors">
                Reports
              </Link>
            </li>
            <li>
              <Link href="/settings" className="hover:text-secondary transition-colors">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;