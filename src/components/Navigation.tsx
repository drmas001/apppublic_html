import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const specialties = [
  'Hematology',
  'Rheumatology',
  'Pulmonology',
  'Infectious Diseases',
  'General Internal Medicine',
  'Neurology',
  'Endocrinology'
];

interface NavigationProps {
  setSidebarOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Patient Management System</h1>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <div className="relative">
            <button
              type="button"
              className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="sr-only">Open specialties menu</span>
              <span className="mr-2">Specialties</span>
              <ChevronDown className="h-5 w-5" aria-hidden="true" />
            </button>
            {dropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                {specialties.map((specialty) => (
                  <Link
                    key={specialty}
                    to={`/specialty/${specialty.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabIndex={-1}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {specialty}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;