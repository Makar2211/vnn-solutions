import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CustomButton } from "./CustomButton";
import { PropsModal } from "../types";

export const Modal: React.FC<PropsModal> = ({
  setIsOpen,
  inputs,
}: PropsModal) => {
  return (
    <div
      className={`max-md:w-[90%] fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border-[2px] z-10 rounded-3xl transition-all duration-300 ease-in-out`}
    >
      <form className="max-md:p-4 max-md:w-[100%] max-md:h-[300px]  relative flex justify-start w-[600px] min-h-[400px] flex-col p-10">
        <AiOutlineClose
          onClick={setIsOpen}
          className="absolute top-2 right-2 w-[30px] h-[30px] text-white cursor-pointer"
        />
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/mail.png"
            alt="mail"
            width={100}
            height={100}
            className="white-filter bg-white"
          />
        </div>
        {inputs.map((input) => (
          <input
            className={input.style}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}

        <div className="flex justify-center">
          <CustomButton
            style="text-white w-[300px] h-[50px] bg-black border-[1px] rounded absolute bottom-[10px]"
            title="Замовити"
            type={true}
          />
        </div>
      </form>
    </div>
  );
};
