import React from "react";

const MenuItem = ({ name, description, price }) => {
  return (
    <div className="py-4 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-xl font-semibold text-[#FF7514]">R$ {price}</p>
      </div>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default MenuItem;
