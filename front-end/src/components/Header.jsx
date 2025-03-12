import React, { useState } from "react";
import Logo from "../assets/logo.png"; 

import "boxicons/css/boxicons.min.css"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full py-1 px-8 bg-black bg-opacity-70 z-20 shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
       
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-[80px] sm:h-[100px] md:h-[120px] transition-all duration-300 ease-in-out" />
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-white font-semibold text-lg hover:text-[#FF6F00] transition-all duration-300 ease-in-out flex items-center space-x-2"
              >
                <i className="bx bx-home"></i> 
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white font-semibold text-lg hover:text-[#FF6F00] transition-all duration-300 ease-in-out flex items-center space-x-2"
              >
                <i className="bx bx-phone"></i>
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white font-semibold text-lg hover:text-[#FF6F00] transition-all duration-300 ease-in-out flex items-center space-x-2"
              >
                <i className="bx bx-info-circle"></i> 
                <span>About</span>
              </a>
            </li>
          </ul>
        </nav>

        
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl transition-all duration-300 ease-in-out">
            {menuOpen ? "×" : "☰"}
          </button>

         
          {menuOpen && (
            <div className="absolute top-16 right-8 bg-white p-6 shadow-lg rounded-lg transition-all duration-300 ease-in-out z-50">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#home"
                    className="text-[#FF6F00] font-semibold text-lg hover:text-[#FF9E3A] transition-all duration-300 ease-in-out flex items-center space-x-2"
                    onClick={toggleMenu}
                  >
                    <i className="bx bx-home"></i> 
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[#FF6F00] font-semibold text-lg hover:text-[#FF9E3A] transition-all duration-300 ease-in-out flex items-center space-x-2"
                    onClick={toggleMenu}
                  >
                    <i className="bx bx-phone"></i>
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-[#FF6F00] font-semibold text-lg hover:text-[#FF9E3A] transition-all duration-300 ease-in-out flex items-center space-x-2"
                    onClick={toggleMenu}
                  >
                    <i className="bx bx-info-circle"></i> 
                    <span>About</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
