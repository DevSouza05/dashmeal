import React from "react";
import bgImage from "../assets/bg.jpg"; 

const Home = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center pt-10" 
      style={{ backgroundImage: `url(${bgImage}`,
      backgroundPosition: "center 30%"  
    }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
          Sabor que Vicia!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6">
          O melhor hambúrguer da cidade, feito com ingredientes frescos e muito amor.
        </p>
        <a
          href="#menu"
          className="bg-[#FF7514] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#f3a282] transition duration-300"
        >
          Veja o Menu
        </a>
      </div>
    </section>
  );
};

export default Home;
