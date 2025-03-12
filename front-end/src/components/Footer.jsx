import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FF7514] text-white py-8 text-center">
      <div className="container mx-auto">
        <p className="text-lg mb-4">© 2025 Sabor que Vicia. Todos os direitos reservados.</p>
        <div className="space-x-6">
          <a href="#" className="text-white hover:text-[#f3a282] transition duration-300">Facebook</a>
          <a href="#" className="text-white hover:text-[#f3a282] transition duration-300">Instagram</a>
          <a href="#" className="text-white hover:text-[#f3a282] transition duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
