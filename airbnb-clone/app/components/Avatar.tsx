"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

export default function Avatar({ src }: AvatarProps) {
  const defaultAvatar = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  
  return (
    <Image
      className=" rounded-full "
      height={30}
      width={30}
      alt="Avatar"
      src={src || defaultAvatar}
    ></Image>
  );
}
