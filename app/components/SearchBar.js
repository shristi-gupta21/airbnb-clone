import React from "react";
import { Search } from "@/icons/Search";

export const SearchBar = () => {
  return (
    <div>
      <div className="mx-auto hidden md:flex justify-center ">
        <div className="h-16 border flex items-center shadow border-[#CCCCCC] rounded-full py-3.5 ">
          <div className="flex flex-col text-xs font-medium px-8">
            Where
            <input
              type="text"
              className="w-52  focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
              placeholder="Search Designations"
            />
          </div>
          <div className="bg-[#DDDDDD] w-px h-full"></div>
          <div className="flex flex-col text-xs font-medium px-6">
            Check in
            <input
              type="text"
              className="w-24 focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
              placeholder="Add Dates"
            />
          </div>
          <div className="bg-[#DDDDDD] w-px h-full"></div>
          <div className="flex flex-col text-xs font-medium px-6">
            Check out
            <input
              type="text"
              className="w-24 focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
              placeholder="Add Dates"
            />
          </div>
          <div className="bg-[#DDDDDD] w-px h-full"></div>
          <div className="flex flex-col text-xs font-medium px-6">
            Who
            <input
              type="text"
              className=" w-44 focus:outline-none pt-0.5 placeholder:font-normal placeholder:text-darkGray"
              placeholder="Add Guests"
            />
          </div>
          <button className="h-12 w-12 rounded-full bg-darkOrange flex items-center justify-center mr-2">
            <Search color={"white"} />
          </button>
        </div>
      </div>
      <hr className="my-5" />
    </div>
  );
};
