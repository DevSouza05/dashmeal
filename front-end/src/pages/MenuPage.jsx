import React from "react";
import MenuSection from "../components/MenuSection";
import { useMenu } from "../context/MenuContext";

const MenuPage = () => {
  const { menuItems } = useMenu();

  const groupedMenu = menuItems.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#FF7514]">Nosso Cardápio</h1>
      </div>
      <div className="max-w-4xl mx-auto">
        {Object.entries(groupedMenu).map(([category, items]) => (
          <MenuSection key={category} title={category} items={items} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;