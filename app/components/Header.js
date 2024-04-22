import React from "react";
import Image from "next/image";
import { Avatar } from "@/icons/Avatar";
import { Globe } from "@/icons/Globe";
import { Hamburger } from "@/icons/Hamburger";
export const Header = () => {
  return (
    <header className="hidden md:px-20 h-20 md:flex items-center justify-between">
      <a href="/" aria-label="Airbnb homepage">
        <Image
          src="/images/airbnb-logo.png"
          alt="Example Image"
          width={102}
          height={32}
          priority={true}
        />
      </a>
      <ul className="flex list-none  gap-y-4 px-6">
        <a className="px-4 py-5">
          <li>Stays</li>
        </a>
        <a className="px-4 py-5">
          <li>Experiences</li>
        </a>
        <a className="px-4 py-5">
          <li>Online Experiences</li>
        </a>
      </ul>
      <div className="flex items-center gap-x-4">
        <a className=" py-6 px-2 text-sm">Airbnb your home</a>
        <Globe color={"black"} height={"16px"} />
        <div className="border rounded-full py-1.5 pl-3.5 pr-1.5 flex items-center gap-3.5">
          <Hamburger color={"#666666"} width={"16px"} height={"16px"} />
          <Avatar color={"#666666"} height={"32px"} />
        </div>
      </div>
    </header>
  );
};
