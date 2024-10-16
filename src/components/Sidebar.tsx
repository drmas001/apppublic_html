import React from 'react';
import { Link } from 'react-router-dom';
import { X, Users, FileText, PlusCircle } from 'lucide-react';

const specialties = [
  'Hematology',
  'Rheumatology',
  'Pulmonology',
  'Infectious Diseases',
  'General Internal Medicine',
  'Neurology',
  'Endocrinology'
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } fixed inset-0 z-40 md:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
        <div className="fixed inset-0 flex z-40">
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-primary-800">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <Users className="h-8 w-auto text-white" />
                <span className="ml-2 text-white text-lg font-semibold">Patient Management</span>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                <Link
                  to="/"
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-primary-700"
                >
                  <PlusCircle className="mr-4 h-6 w-6 text-primary-300" />
                  General Admission
                </Link>
                {specialties.map((specialty) => (
                  <Link
                    key={specialty}
                    to={`/specialty/${specialty.toLowerCase().replace(' ', '-')}`}
                    className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:bg-primary-700"
                  >
                    <Users className="mr-4 h-6 w-6 text-primary-300" />
                    {specialty}
                  </Link>
                ))}
                <Link
                  to="/reports"
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:bg-primary-700"
                >
                  <FileText className="mr-4 h-6 w-6 text-primary-300" />
                  Daily Reports
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-primary-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Users className="h-8 w-auto text-white" />
                <span className="ml-2 text-white text-lg font-semibold">Patient Management</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                <Link
                  to="/"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-primary-700"
                >
                  <PlusCircle className="mr-3 h-6 w-6 text-primary-300" />
                  General Admission
                </Link>
                {specialties.map((specialty) => (
                  <Link
                    key={specialty}
                    to={`/specialty/${specialty.toLowerCase().replace(' ', '-')}`}
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-primary-100 hover:bg-primary-700"
                  >
                    <Users className="mr-3 h-6 w-6 text-primary-300" />
                    {specialty}
                  </Link>
                ))}
                <Link
                  to="/reports"
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-primary-100 hover:bg-primary-700"
                >
                  <FileText className="mr-3 h-6 w-6 text-primary-300" />
                  Daily Reports
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;