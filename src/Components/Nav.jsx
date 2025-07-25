const Nav = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/16316/16316505.png"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 ">
              Abdo Ghonim
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#home"
                  className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white md:hover:bg-transparent md:hover:text-gray-900 hover:underline underline-offset-4"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white md:hover:bg-transparent md:hover:text-gray-900 hover:underline underline-offset-4"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white md:hover:bg-transparent md:hover:text-gray-900 hover:underline underline-offset-4"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-black hover:text-white md:hover:bg-transparent md:hover:text-gray-900 hover:underline underline-offset-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
