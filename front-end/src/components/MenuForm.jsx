import React, { useState, useEffect } from 'react';

const MenuForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ name: '', description: '', price: '', image: '', category: '' });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData.id) {
      setFormData({ name: '', description: '', price: '', image: '', category: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">{initialData.id ? 'Editar Item' : 'Adicionar Item'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome do Prato"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Categoria"
          className="p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descrição"
          className="p-2 border rounded md:col-span-2"
          required
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Preço"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="URL da Imagem"
          className="p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-[#FF7514] text-white py-2 px-4 rounded-full mt-4 hover:bg-[#f3a282] transition duration-300">
        {initialData.id ? 'Atualizar' : 'Adicionar'}
      </button>
    </form>
  );
};

export default MenuForm;
