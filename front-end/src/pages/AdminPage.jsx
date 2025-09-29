import React, { useState } from 'react';
import { useMenu } from '../context/MenuContext';
import MenuForm from '../components/MenuForm';

const AdminPage = () => {
  const menuContext = useMenu();
  console.log(menuContext);

  if (!menuContext) {
    return <div>Loading...</div>;
  }

  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem } = menuContext;
  const [editingItem, setEditingItem] = useState(null);

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      deleteMenuItem(id);
    }
  };

  const handleSubmit = (item) => {
    if (item.id) {
      updateMenuItem(item);
    } else {
      addMenuItem(item);
    }
    setEditingItem(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Painel de Administração</h1>

      <MenuForm onSubmit={handleSubmit} initialData={editingItem || {}} />

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Itens do Cardápio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <div key={item.id} className="border p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-lg font-bold mt-2">R$ {item.price}</p>
              <div className="flex justify-end mt-4">
                <button onClick={() => handleEdit(item)} className="bg-blue-500 text-white py-1 px-3 rounded-full mr-2 hover:bg-blue-600 transition duration-300">Editar</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 transition duration-300">Excluir</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;