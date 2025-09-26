import React from "react";
import MenuItem from "./MenuItem";

const MenuSection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-left text-gray-800 mb-6 border-b-2 border-[#FF7514] pb-2">
        {title}
      </h2>
      <div>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
