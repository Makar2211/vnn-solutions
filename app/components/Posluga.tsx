"use client";
import React, { useState, useEffect } from "react";
import { poslugi } from "../constants";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { poslugaPage } from "../redux/PoslugaSlice";
import { CustomButton } from "./CustomButton";

export const Posluga: React.FC = () => {
  const poslugaId = useAppSelector((state) => state.posluga.posluga);
  const dispatch = useAppDispatch();
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const initialTitle = poslugi[0].title;

  useEffect(() => {
    setSelectedTitle(initialTitle);
    dispatch(poslugaPage(0));
  }, [initialTitle, dispatch]);

  const handleClick = (index: number) => {
    dispatch(poslugaPage(index));
    setSelectedTitle(poslugi[index].title);
  };

  return (
    <section>
      <div className="my-12 mx-[200px] max-md:m-7 ">
        <div className="text-center text-2xl font-bold md:text-3xl lg:text-4xl mb-10">
          Послуги
        </div>
        <div className="min-h-[550px] border-black rounded-[40px] border-[1px] pb-[10px] ">
          <div className=" mx-auto flex justify-center items-end flex-wrap border-1  rounded-full">
            {poslugi.map((posluga, index) => (
              <ul className="flex items-center h-[80px]" key={index}>
                <li
                  onClick={() => handleClick(index)}
                  className={`text-white cursor-pointer w-[200px] h-[50px] ml-3 bg-black-100  border-current border-[1px] flex justify-center items-center rounded-full ${
                    index === poslugaId ? "active" : ""
                  }`}
                >
                  {posluga.title}
                </li>
              </ul>
            ))}
          </div>

          {selectedTitle && (
            <div className="  mt-4 mx-auto max-w-[80%]">
              {poslugi.map((posluga, index) =>
                posluga.title === selectedTitle ? (
                  <div key={index}>
                    <h2 className="text-2xl mt-4 font-medium">
                      {posluga.title}
                    </h2>
                    {posluga.descriptions.map((description, descIndex) => (
                      <div key={descIndex}>
                        <h3 className="text-lg mt-2 decoration-slate-200">
                          {description.title}
                        </h3>
                        <p>{description.subtitle}</p>
                        <h4 className="text-base mt-2 font-bold">
                          {description?.proprety}
                        </h4>
                        <ul className="flex items-start justify-start flex-col">
                          {description.listOfPropositions.map(
                            (prop, propIndex) => (
                              <li
                                className="flex flex-row items-center mt-4"
                                key={propIndex}
                              >
                                <img
                                  className="block mr-3"
                                  src={prop.imageURL}
                                  alt={prop.text}
                                />
                                {prop.text}
                              </li>
                            )
                          )}
                        </ul>
                        <CustomButton
                          title="Хочу"
                          type={true}
                          style="mt-[20px]  w-[120px] h-[50px] text-black  z-10 bg-gradient-to-r bg-gradient-to-br from-red-600 via-red-500 to-red-900 transition-opacity duration-500 rounded-full "
                        />
                      </div>
                    ))}
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
