import React from "react";
import { socialNet } from "../constants";

export const Social: React.FC = () => {
  return (
    <div className=" container mx-auto py-8 px-4 w-[80%] flex justify-between max-md:flex max-md:flex-col max-md:justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full  text-center md:text-left">
          <a
            className="block hover:scale-150 transition-transform duration-300"
            href="mailto:team@vnv.solutions"
          >
            team@vnv.solutions
          </a>
          <hr className="my-4" />
          <a
            href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D…xb2af24fc0f878a18!8m2!3d49.7835443!4d24.0178518!16s%2Fg%2F11fm9tmkkk?hl=uk"
            target="_blank"
            className="block hover:scale-150 transition-transform duration-300"
          >
            Karla Miklʹosha, 7 <br />
            Lviv, Ukraine
          </a>
        </div>
      </div>
      <div className=" text-center md:mt-0 mt-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-md:flex items-center flex-col mt-5">
          {socialNet.map((social) => (
            <a
              href={social.url}
              target="_blank"
              className="w-[130px] h-[50px] hover:scale-150 transition-transform duration-300 text-xl"
            >
              {social.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
