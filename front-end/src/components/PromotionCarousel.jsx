import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const promotions = [
  {
    title: 'Combo Duplo',
    description: '2 Hambúrgueres, 2 Batatas Fritas e 2 Refrigerantes por um preço especial!',
    image: 'https://images.unsplash.com/photo-1568901346379-8ce8e1c961ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Terça do Hambúrguer',
    description: 'Toda terça-feira, compre um hambúrguer e ganhe 50% de desconto no segundo.',
    image: 'https://images.unsplash.com/photo-1550547648-32277b72b778?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Fim de Semana em Família',
    description: 'Combo família com 4 hambúrgueres, porção de anéis de cebola e refrigerante 2L.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const PromotionCarousel = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Destaques e Promoções</h2>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {promotions.map((promo, index) => (
            <SwiperSlide key={index} className="text-center p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={promo.image} alt={promo.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-700">{promo.title}</h3>
                  <p className="text-gray-600 mt-2">{promo.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PromotionCarousel;