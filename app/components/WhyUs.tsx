"use client";
import React, { useState } from "react";
import { CustomButton } from "./CustomButton";
import { Modal } from "./Modal";
import { PropsInputs } from "../types";
import { inputsWhyUs, perevagu } from "../constants";
import Image from "next/image";

export const WhyUs: React.FC = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="p-8 md:py-16 lg:py-24  relative bottom-0 rounded-bl-full">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4 md:mb-6 lg:mb-8">
            Чому ми?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {perevagu.map((perevaga, index) => (
              <div
                key={index}
                className="flex justify-start items-start flex-col p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="bg-[#eedbdb]  w-[50px] h-[50px] rounded-tl-[10px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[10px] flex items-center  justify-center">
                  <Image
                    src={perevaga.img}
                    alt="Перевага"
                    width={27}
                    height={27}
                  />
                </div>
                <div className="mt-3 text-left ml-2">{perevaga.title}</div>
              </div>
            ))}
          </div>
          <CustomButton
            style="text-white w-[100px] h-[50px] bg-black border-[1px] mt-10"
            title="Замовити"
            condition={() => setIsOpen(true)}
          />
        </div>
      </div>
      {open ? (
        <Modal inputs={inputsWhyUs} setIsOpen={() => setIsOpen(false)} />
      ) : null}
    </div>
  );
};
