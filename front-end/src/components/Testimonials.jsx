import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#FF7514] mb-8">O que dizem nossos clientes</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600 mb-4">
                "Os melhores hambúrgueres que já comi! Uma explosão de sabores em cada mordida."
              </p>
              <p className="font-semibold text-[#FF7514]">João Silva</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600 mb-4">
                "Atendimento incrível e os hambúrgueres são simplesmente perfeitos!"
              </p>
              <p className="font-semibold text-[#FF7514]">Maria Oliveira</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-600 mb-4">
                "Sempre que quero comer algo delicioso, não penso duas vezes! Muito bom!"
              </p>
              <p className="font-semibold text-[#FF7514]">Carlos Pereira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
