import React from "react";
import Image from "next/image";
export const Header = () => {
  return (
    <header className="md:px-20 h-20 flex items-center justify-between">
      <a href="/" aria-label="Airbnb homepage">
        <Image
          src="/images/airbnb-logo.png"
          alt="Example Image"
          width={102}
          height={32}
          priority={true}
        />
      </a>
      <ul className="flex list-none gap-x-5 gap-y-4">
        <a>
          <li>Stays</li>
        </a>
        <a>
          <li>Experiences</li>
        </a>
        <a>
          <li>Online Experiences</li>
        </a>
      </ul>
      <div className="flex items-center gap-x-4">
        <a className="text-sm py-6 px-4">Airbnb your home</a>
        <Image src={"/images/globe.svg"} width={16} height={16} />
        <div className="border rounded-full py-2 pl-3.5 pr-2 flex items-center gap-4">
          <Image src={"/images/hamburger.svg"} width={16} height={16} />
          <Image src={"/images/avatar.svg"} width={32} height={32} />
        </div>
      </div>
    </header>
  );
};
