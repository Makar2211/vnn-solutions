"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { CustomButton } from "./CustomButton";

type FormData = {
  description: string;
  file: File | null;
};

export const PortfolioItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [description, setDescription] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.file) {
      setDescription("");
      setFile(null);
    } else {
    }
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-md text-white flex justify-center">
      <form
        className="w-[90%] p-5 border-[2px] md:p-10 md:w-[700px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <input
            type="file"
            accept="image/*,video/*"
            {...register("file", { required: true })}
            onChange={(e) => handleFileChange(e)}
            className="text-white"
          />
          {errors.file && (
            <p className="text-red-500">Файл обов'язковий для вибору.</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            value={description}
            onChange={(e) => handleDescriptionChange(e)}
            placeholder="Опишіть ваш проект чи портфоліо тут"
            className="w-full h-24 p-2 border rounded-md text-white bg-transparent placeholder-opacity-100"
          ></textarea>
        </div>
        <div>
          <CustomButton
            style="text-white w-[100px] h-[50px] bg-black border-[1px]"
            title="Замовити"
            type={true}
          />
        </div>
      </form>
    </div>
  );
};
