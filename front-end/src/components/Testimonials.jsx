import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    quote: "Os melhores hambúrgueres que já comi! Uma explosão de sabores em cada mordida.",
    author: "João Silva",
  },
  {
    quote: "Atendimento incrível e os hambúrgueres são simplesmente perfeitos!",
    author: "Maria Oliveira",
  },
  {
    quote: "Sempre que quero comer algo delicioso, não penso duas vezes! Muito bom!",
    author: "Carlos Pereira",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-[#FF7514] mb-8">
          O que dizem nossos clientes
        </h2>
        <div className="flex flex-wrap justify-center items-stretch -mx-4">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;