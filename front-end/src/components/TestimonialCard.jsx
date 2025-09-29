import React from "react";

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
      <p className="text-gray-600 italic text-lg mb-4">"{quote}"</p>
      <p className="text-right text-gray-800 font-semibold">- {author}</p>
    </div>
  );
};

export default TestimonialCard;