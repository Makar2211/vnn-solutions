"use client";
import React from "react";
import { CustomButton } from "./CustomButton";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const LeadMagnet: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-gray-100 p-6 max-w-lg mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4">
        Залиш свою заявку зараз і отримай 30% знижки
      </h2>
      {isSubmitted ? (
        <div className="text-green-500 mb-4">
          Наш менеджер зв'яжеться з вами
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Ваше ім'я
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Поле 'Ваше ім'я' обов'язкове" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="name"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Ваша електронна пошта
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Поле 'Ваша електронна пошта' обов'язкове",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Неправильний формат електронної пошти",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Ваш номер телефону
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Поле 'Ваш номер телефону' обов'язкове" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  id="phone"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-black ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
              )}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <CustomButton
            style="text-white w-28 h-10 bg-black border-1 hover:bg-gray-800"
            title="Детальніше"
          />
        </form>
      )}
    </div>
  );
};
