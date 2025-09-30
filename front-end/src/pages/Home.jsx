import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import PromotionCarousel from "../components/PromotionCarousel";
import BestRestaurants from "../components/BestRestaurants";

const HomePage = () => {
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
            Sabor que Vicia!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            O melhor hambúrguer da cidade, feito com ingredientes frescos e muito
            amor.
          </p>
          <Link
            to="/cardapio"
            className="bg-[#FF7514] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#f3a282] transition duration-300"
          >
            Veja o Menu
          </Link>
        </div>
      </section>
      <PromotionCarousel />
      <BestRestaurants />
      <Testimonials />
    </>
  );
};

export default HomePage;