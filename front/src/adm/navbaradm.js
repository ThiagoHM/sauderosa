import React, { useState } from "react"; 
import ThemeToggle from "../both/Themetoggle";
import lightlogo from "../assets/logolight.png";
import darklogo from "../assets/logodark.png";
import { Link } from "react-router-dom";
import { useAuth } from "./authcontext";




const NavbarAdm = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  const { usuario, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
  };

  

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative">
        <div className="absolute right-10 top-5 ">
          {usuario && (
          <span className="text-sm font-medium text-gray-800 dark:text-white">
            Olá, {usuario.nome}! 
          </span>
        )}
        <span className="text-sm text-gray-800 dark:text-white">&nbsp;</span>
        <button
          onClick={handleLogout}
          className="text-sm text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
              Sair
        </button>
        </div>
      
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={lightlogo} className="block dark:hidden w-20 h-20" alt="logo" />
          <img src={darklogo} className="hidden dark:block w-20 h-20" alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Link to="/home">Saúde Rosa</Link>
          </span>
        </a>
        <button
          onClick={toggleMenu} 
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen ? "true" : "false"} 
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} 
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/home"
                className="block py-2 px-3 text-white bg-black rounded-sm md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-white md:dark:bg-transparent"
                aria-current="page"
              >
                Página Inicial
              </Link>
            </li>
            <li>
            <button
                onClick={toggleDropdown} 
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Informações{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`${isDropdownOpen ? "block" : "hidden"} z-10 absolute pt-1 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="/symptoms"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sintomas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/risks"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Riscos e Prevenções
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tratamento"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Tratamento
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/lista"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pessoas em  Risco
              </Link>
            </li>
            <li>
              <Link
                to="/forum"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Debate
              </Link>
            </li>
            <li>
              <Link
                to="/grafico"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Gráficos
              </Link>
            </li>
            <li>
              <Link
                to="/rating" 
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Nos Avalie
              </Link>
            </li>
            <ThemeToggle />
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdm;