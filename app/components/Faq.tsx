"use client";
import React, { useState } from "react";
import { faqArray } from "../constants";

export const FAQ: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 w-[80%]">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Поширені запитання (FAQ)
      </h2>
      <div className="flex  flex-wrap -mx-4">
        {faqArray.map((faq, index) => (
          <div className="w-full md:w-1/2 border-red-700 px-4 mb-4" key={index}>
            <div
              onClick={() => toggleAnswer(index)}
              className="cursor-pointer flex justify-between items-center p-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span
                className={
                  activeIndices.includes(index)
                    ? "transform rotate-180"
                    : "transform rotate-0"
                }
              >
                &#9654;
              </span>
            </div>
            <div
              className={`p-4 border-t ${
                activeIndices.includes(index)
                  ? "block opacity-100 ease-in duration-500 transition-opacity"
                  : "hidden opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
