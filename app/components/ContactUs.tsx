"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CustomButton } from "./CustomButton";

interface FormData {
  name: string;
  contactMethod: "email" | "telegram" | "whatsapp" | "viber";
  email: string;
  telegram: string;
  whatsapp: string;
  viber: string;
  message: string;
}

export const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [selectedContactMethod, setSelectedContactMethod] = useState<
    "email" | "telegram" | "whatsapp" | "viber"
  >("email");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleContactMethodChange = (
    method: "email" | "telegram" | "whatsapp" | "viber"
  ) => {
    setSelectedContactMethod(method);
  };

  return (
    <section className="flex  flex-wrap justify-around bg-black py-20 px-2">
      <div className="mb-10">
        <span className="text-white text-[40px] lg:text-[90px] md:text-[60px] ">
          Have an <br /> idea?
        </span>{" "}
        <br />
        <span className=" text-white text-[40px] lg:text-[90px] md:text-[60px]  ">
          Tell us <br /> about it
        </span>
        <hr className="h-2" />
      </div>
      <div className="block p-7 relative bg-black w-[80%] border-[2px] z-10  md:w-[600px] rounded-lg shadow-md  ">
        <h2 className="text-2xl font-bold text-white mb-4">
          Зв'яжіться з нами
        </h2>
        <div className="mb-4">
          <p className="text-white">
            Контакти: e-mail, telegram, whatsapp, viber
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">
              Ім'я
            </label>
            <input
              type="text"
              {...register("name", { required: "Це поле є обов'язковим" })}
              className="border  rounded-md py-2 px-3 w-full text-black"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white  mb-2">
              Спосіб зв'язку
            </label>
            <select
              {...register("contactMethod")}
              onChange={(e) =>
                handleContactMethodChange(
                  e.target.value as FormData["contactMethod"]
                )
              }
              className="border rounded-md py-2 px-3 w-full text-black"
            >
              <option value="email">E-mail</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="viber">Viber</option>
            </select>
          </div>
          <input
            type={selectedContactMethod === "email" ? "email" : "text"}
            {...register(selectedContactMethod, {
              required: "Це поле є обов'язковим",
            })}
            className="border rounded-md py-2 px-3 w-full text-black"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-white  mb-2">
              {selectedContactMethod === "email"
                ? "E-mail"
                : selectedContactMethod === "telegram"
                ? "Нік Telegram"
                : selectedContactMethod === "whatsapp"
                ? "Номер WhatsApp"
                : "Номер Viber"}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white  mb-2">
              Додаткове поле для тексту
            </label>
            <textarea
              {...register("message", { required: "Це поле є обов'язковим" })}
              className="border rounded-md py-2 px-3 w-full h-24 text-black"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>
          <div className="mt-4">
            <CustomButton
              style="text-white w-full h-[50px] bg-black border-[1px] rounded"
              title="Замовити"
              type={true}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
