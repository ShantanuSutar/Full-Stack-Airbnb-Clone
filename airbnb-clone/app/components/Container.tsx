"use client";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div className=" max-w-[2520px] xl:px-20 md:px-10 sm:px-2 px-4 pb-6">
      {children}
    </div>
  );
};
