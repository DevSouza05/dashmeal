import React from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Restaurante Sabor da Casa',
    cuisine: 'Comida Brasileira',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Pizzaria Napolitana',
    cuisine: 'Pizza Italiana',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1593560704721-fa784070fc9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Comida Japonesa',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579871128772-e4237211261f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Cantina Mexicana',
    cuisine: 'Comida Mexicana',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const BestRestaurants = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Melhores Restaurantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.cuisine}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="ml-1 text-gray-700 font-semibold">{restaurant.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestRestaurants;
