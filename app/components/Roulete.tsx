"use client";
import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { ModalPrize } from "./ModalPrize";
import { CustomButton } from "./CustomButton";

const data = [
  { option: "Знижка 10%" },
  { option: "Безкоштовна консультація" },
  { option: "Знижка на лендінг" },
  { option: "Знижка на інтернет магазин" },
];

export const Roulette: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
    }
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);

      setTimeout(() => {
        setMustSpin(false);
        setIsModalOpen(true);
      }, 10000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center flex-col mb-10">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setIsModalOpen(true);
        }}
        radiusLineWidth={3}
        textDistance={50}
        fontSize={15}
        outerBorderWidth={3}
      />
      <CustomButton
        title="Отримуй бонус від нас"
        condition={() => handleSpinClick()}
        style="bg-black h-[50px] w-[220px] rounded-full text-white hover:bg-white hover:border-[2px] hover:text-black hover:ease-out transition-all transform"
      />

      <ModalPrize
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        prize={data[prizeNumber]?.option}
      />
    </div>
  );
};
