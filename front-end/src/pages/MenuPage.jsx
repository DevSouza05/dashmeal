import React from "react";
import MenuSection from "../components/MenuSection";

const menuData = {
  burgers: [
    {
      name: "Sabor que Vicia Classic",
      description: "Pão brioche, hambúrguer de 180g, queijo cheddar, alface, tomate, picles e nosso molho especial.",
      price: "R$ 28,00",
    },
    {
      name: "Bacon Explosion",
      description: "Pão brioche, hambúrguer de 180g, dobro de queijo, fatias generosas de bacon crocante e maionese de alho.",
      price: "R$ 34,00",
    },
    {
      name: "Chicken Crispy",
      description: "Pão brioche, filé de frango empanado super crocante, alface, tomate e maionese cítrica.",
      price: "R$ 30,00",
    },
  ],
  drinks: [
    {
      name: "Refrigerante Lata",
      description: "Coca-Cola, Coca-Cola Zero, Guaraná Antarctica, Fanta Laranja (350ml).",
      price: "R$ 6,00",
    },
    {
      name: "Suco Natural",
      description: "Laranja, Abacaxi com Hortelã, Morango (500ml).",
      price: "R$ 9,00",
    },
    {
      name: "Água Mineral",
      description: "Com ou sem gás (500ml).",
      price: "R$ 4,00",
    },
  ],
};

const MenuPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#FF7514]">Nosso Cardápio</h1>
      </div>
      <div className="max-w-4xl mx-auto">
        <MenuSection title="Hambúrgueres" items={menuData.burgers} />
        <MenuSection title="Bebidas" items={menuData.drinks} />
      </div>
    </div>
  );
};

export default MenuPage;