import React from "react";
import { testimonials } from "../constants";

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-white text-black p-6">
      <h2 className="text-2xl font-bold mb-4">Відгуки клієнтів</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white text-black p-4 rounded-2xl  border-[3px]"
          >
            <p className="mb-2">{testimonial.text}</p>
            <p className="text-sm font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
