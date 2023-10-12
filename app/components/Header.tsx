"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HeaderNav, inputs } from "../constants";
import { CustomButton } from "./CustomButton";
import Link from "next/link";
import { Modal } from "./Modal";
import { RxHamburgerMenu } from "react-icons/rx";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  const [open, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div
        className={`z-20  ${
          navOpen
            ? "opacity-100 transition-all duration-300 ease-in-out"
            : "opacity-0"
        }`}
      >
        {navOpen && <BurgerMenu setNavOpen={() => setNavOpen(false)} />}
      </div>
      {navOpen && <BurgerMenu setNavOpen={() => setNavOpen(false)} />}
      <div className="flex justify-between items-center px-10 relative	">
        <Image
          src="/logovnv.png"
          alt="logo"
          width={150}
          height={150}
          className="max-md:w-20 max-md:h-20"
        />
        <div className="flex justify-start items-center">
          <ul className="flex  justify-start max-md:hidden">
            {HeaderNav.map((item) => (
              <Link href={item.url} key={item.title}>
                <li className="text-white ml-4 text-[30px] cursor-pointer hover:text-[#a7a5a5]">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
          <CustomButton
            condition={() => setIsOpen(true)}
            style="text-white cursor-pointer w-[100px] h-[50px] bg-black border-[1px] ml-10"
            title="Замовити"
          />
          <RxHamburgerMenu
            onClick={() => setNavOpen(true)}
            className="hidden max-md:block w-8 h-8 ml-3"
            style={{ color: "white" }}
          />
        </div>
      </div>

      {open && <Modal inputs={inputs} setIsOpen={() => setIsOpen(false)} />}
    </>
  );
};
