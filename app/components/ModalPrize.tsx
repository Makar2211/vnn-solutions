"use client";
import React from "react";
import { CustomButton } from "./CustomButton";

interface ModalPrizeProps {
  isOpen: boolean;
  onRequestClose: () => void;
  prize: string;
}

export const ModalPrize: React.FC<ModalPrizeProps> = ({
  isOpen,
  onRequestClose,
  prize,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className="bg-white border-[3px] p-4 rounded-lg shadow-md flex justify-center flex-col items-center">
        <h2 className="text-xl font-bold text-center">Вітаємо!</h2>
        <p className="text-center mt-2">Ви виграли: {prize}</p>
        <CustomButton
          style="text-white cursor-pointer w-[100px] h-[50px] bg-black border-[1px] "
          title="Закрити"
          condition={onRequestClose}
        />
      </div>
    </div>
  );
};
