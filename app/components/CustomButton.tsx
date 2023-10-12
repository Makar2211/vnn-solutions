"use client";
import React from "react";
import { PropsButtom } from "../types";

export const CustomButton: React.FC<PropsButtom> = ({
  title,
  style,
  condition,
  type,
}: PropsButtom) => {
  return (
    <button
      type={type ? "submit" : undefined}
      onClick={() => condition && condition()}
      className={style}
    >
      {title}
    </button>
  );
};
