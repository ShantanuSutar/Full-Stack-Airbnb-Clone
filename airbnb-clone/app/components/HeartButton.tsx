"use client";
import React from "react";
import { SafeUser } from "../types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const hasFavourited = false;
  const toggleFavourite = () => {};

  return (
    <div
      onClick={toggleFavourite}
      className=" relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        className=" fill-white absolute -top-[2px] -right-[2px]"
        size={28}
      />
      <AiFillHeart
        size={24}
        className={`${hasFavourited ? "fill-rose-500" : "fill-neutral-500/70"}`}
      />
    </div>
  );
};

export default HeartButton;
