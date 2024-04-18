import React from "react";

export const SearchBar = () => {
  return (
    <div className="mx-auto flex justify-center">
      <div className="h-16 border flex items-center rounded-full py-3.5 pl-8">
        <div className="flex flex-col text-sm font-semibold">
          Where
          <input
            type="text"
            className="w-52 focus:outline-none pt-0.5 placeholder:font-normal"
            placeholder="Search Designations"
          />
        </div>
      </div>
    </div>
  );
};
