import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <div className="flex-shrink-0">
                <a className="flex items-center">
                    <img src="../logo.png" className="mr-3 h-6 sm:h-9" alt="LECO logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Leandro Correia</span>
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link to="/about" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                    Sobre
                  </Link>
                  <Link to="/projects" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                    Projetos
                  </Link>
                  <Link to="/contact" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-50 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-gray-50"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                  Sobre
                </Link>
                <Link to="/projects" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                  Projetos
                </Link>
                <Link to="/contact" className="text-blue-500 hover:bg-blue-50 text-black hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium">
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;