import React from "react";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <a href="/">
        <Image
          src="/images/airbnb-logo.svg"
          alt="Example Image"
          width={500}
          height={300}
        />
      </a>
      Header
    </header>
  );
};
