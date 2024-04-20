import React from "react";
import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="mx-auto flex justify-center">
      <div className="h-16 border flex items-center rounded-full py-3.5 ">
        <div className="flex flex-col text-sm font-medium px-8">
          Where
          <input
            type="text"
            className="w-52  focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
            placeholder="Search Designations"
          />
        </div>
        <div className="bg-[#DDDDDD] w-px h-full"></div>
        <div className="flex flex-col text-sm font-medium px-6">
          Check in
          <input
            type="text"
            className="w-24 focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
            placeholder="Add Dates"
          />
        </div>
        <div className="bg-[#DDDDDD] w-px h-full"></div>
        <div className="flex flex-col text-sm font-medium px-6">
          Check out
          <input
            type="text"
            className="w-24 focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
            placeholder="Add Dates"
          />
        </div>
        <div className="bg-[#DDDDDD] w-px h-full"></div>
        <div className="flex flex-col text-sm font-medium px-6">
          Who
          <input
            type="text"
            className=" w-56 focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
            placeholder="Add Guests"
          />
        </div>
        <button className="h-12 w-12 rounded-full bg-darkOrange flex items-center justify-center mr-2">
          <Image
            src={"/images/search-logo.svg"}
            width={12}
            height={12}
            className="text-white"
            alt="Search Icon"
          />
        </button>
      </div>
    </div>
  );
};
