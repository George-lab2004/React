import { useState } from 'react';

export default function Parent({ activeLink, handleLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed w-[100vw] max-w-full">
      <div className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8 sm:text-2xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start sm:text-2xl">
            <div>
              <span className='text-white font-bold text-4xl uppercase sm:text-2xl'>Start Framework</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <a
                href="#About"
                className={`rounded-md px-3 py-3 text-sm font-bold text-white uppercase ${activeLink === 'About' ? 'bg-customGreen' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                aria-current={activeLink === 'About' ? 'page' : undefined}
                onClick={() => handleLinkClick('About')}
              >
                About
              </a>
              <a
                href="#Portfolio"
                className={`rounded-md px-3 py-3 text-sm font-bold uppercase ${activeLink === 'Portfolio' ? 'bg-customGreen text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                onClick={() => handleLinkClick('Portfolio')}
              >
                Portfolio
              </a>
              <a
                href="#Contact"
                className={`rounded-md px-3 py-3 text-sm font-bold uppercase ${activeLink === 'Contact' ? 'bg-customGreen text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                onClick={() => handleLinkClick('Contact')}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#About"
            className={`block rounded-md px-3 py-2 text-base font-medium uppercase ${activeLink === 'About' ? 'bg-customGreen text-white' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
            aria-current={activeLink === 'About' ? 'page' : undefined}
            onClick={() => handleLinkClick('About')}
          >
            About
          </a>
          <a
            href="#Portfolio"
            className={`block rounded-md px-3 py-2 text-base font-medium uppercase ${activeLink === 'Portfolio' ? 'bg-customGreen text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            onClick={() => handleLinkClick('Portfolio')}
          >
            Portfolio
          </a>
          <a
            href="#Contact"
            className={`block rounded-md px-3 py-2 text-base font-medium uppercase ${activeLink === 'Contact' ? 'bg-customGreen text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
