import React, { createContext, useState, useContext } from 'react';
import { menuData as initialMenuData } from '../data/menuData';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(initialMenuData);

  const addMenuItem = (item) => {
    setMenuItems([...menuItems, { ...item, id: Date.now() }]);
  };

  const updateMenuItem = (updatedItem) => {
    setMenuItems(menuItems.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteMenuItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, updateMenuItem, deleteMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
