import React, { useState, useRef, useEffect } from "react";

const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  //   const [isDarkMode, setIsDarkMode] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      hamburgerRef.current &&
      navMenuRef.current &&
      !hamburgerRef.current.contains(event.target as Node) &&
      !navMenuRef.current.contains(event.target as Node)
    ) {
      setIsNavVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //   const toggleDarkMode = () => {
  //     const newDarkMode = !isDarkMode;
  //     setIsDarkMode(newDarkMode);
  //     localStorage.setItem("darkMode", JSON.stringify(newDarkMode));

  //     if (newDarkMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   };

  //   useEffect(() => {
  //     const savedMode = localStorage.getItem("darkMode") === "true";
  //     setIsDarkMode(savedMode);

  //     if (savedMode) {
  //       document.documentElement.classList.add("dark");
  //     }
  //   }, []);

  return (
    <header className="sticky top-0 left-0 w-full flex items-center z-10 transition-colors bg-black">
      <div className="w-full">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-3xl block py-6 px-4 text-white"
            >
              SijaArc
            </a>
          </div>

          <div className="flex items-center px-4 lg:px-1">
            <button
              ref={hamburgerRef}
              type="button"
              className={`block absolute right-4 lg:hidden ${
                isNavVisible ? "hamburger-active" : ""
              }`}
              onClick={() => setIsNavVisible(!isNavVisible)}
            >
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>

            <nav
              ref={navMenuRef}
              className={`absolute right-0 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent text-center ${
                !isNavVisible ? "hidden" : ""
              }`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-black lg:text-white py-2 mx-8 flex group-hover:text-blue-400"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#main"
                    className="text-base text-black lg:text-white py-2 mx-8 flex group-hover:text-blue-400 dark text-black:lg:text-white"
                  >
                    Class
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#structure"
                    className="text-base text-black lg:text-white py-2 mx-8 flex group-hover:text-blue-400 dark text-black:lg:text-white"
                  >
                    Structure
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#member"
                    className="text-base text-black lg:text-white py-2 mx-8 flex group-hover:text-blue-400 dark text-black:lg:text-white"
                  >
                    Member
                  </a>
                </li>
                {/* <li className="group">
                  <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 bg-blue-500 text-black lg:text-white rounded-md hover:bg-blue-600"
                  >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
