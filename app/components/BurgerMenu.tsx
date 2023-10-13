"use client";
import React from "react";
import { HeaderNav } from "../constants";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

interface PropsBurger {
  setNavOpen: () => void;
}

export const BurgerMenu: React.FC<PropsBurger> = ({ setNavOpen }) => {
  return (
    <div className="hidden max-md:fixed max-md:block z-20 top-0 right-0 w-screen h-[100vh] bg-black transition-all duration-300 ease-in-out">
      <div className="relative">
        <AiOutlineClose
          onClick={setNavOpen}
          className="absolute top-[-14px] right-10 w-8 h-8"
          style={{ color: "white" }}
        />
        <div className="flex justify-center flex-col mt-10">
          {HeaderNav.map((item) => (
            <ul className="flex justify-center items-center">
              <Link href={item.url} key={item.title}>
                <li className="text-white mb-4  text-[30px] cursor-pointer hover:text-[#a7a5a5]">
                  {item.title}
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
