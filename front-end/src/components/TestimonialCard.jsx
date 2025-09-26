import React from "react";

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
      <p className="text-lg italic text-gray-600 mb-4">
        "{quote}"
      </p>
      <p className="font-semibold text-[#FF7514]">{author}</p>
    </div>
  );
};

export default TestimonialCard;
