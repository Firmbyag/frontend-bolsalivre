"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SearchCity,
  Neighborhood,
  SearchSchool,
  SearchSeries,
} from "../basecomponents/searchComponents";
import { IoCloseCircle } from "react-icons/io5";
import Logo from "@/public/assets/images/logo_common.png";

interface SearchListProps {
  menu: number;
  setMenu: (menu: number) => void; // More specific type for setMenu
}

const SearchList: React.FC<SearchListProps> = ({ menu, setMenu }) => {
  const [filters, setFilters] = useState<any>();

  // Determine the width class based on the school state
  const widthClass = filters && filters.school ? "w-1/4" : "w-1/3";

  return (
    <>
      <div className="flex flex-wrap items-center rounded-full bg-white mt-3 2xl:w-[40vw] xl:w-[50vw] lg:w-[60vw] md:w-[87vw] sm:w-[86vw] w-[74vw]">
        <SearchCity
          disp={0}
          className={`lg:flex hidden flex-col relative ${widthClass} border-r-2 border-slate-300 pl-2`}
          filters={filters}
          setFilters={setFilters}
        />
        <Neighborhood
          disp={0}
          className={`lg:flex hidden flex-col relative ${widthClass} border-r-2 border-slate-300 pl-3`}
          filters={filters}
          setFilters={setFilters}
        />
        <SearchSeries
          disp={0}
          className={`lg:flex hidden flex-col relative ${widthClass} pl-3 `}
          filters={filters}
          setFilters={setFilters}
        />

        {/* Mobile Search Menu */}
        <div
          className={`${
            menu === 2 ? "block" : "hidden"
          } fixed lg:hidden top-0 left-0 w-screen h-lvh flex items-center justify-center z-20`}
        >
          <div className="flex flex-col gap-5 border border-slate-400 rounded-lg shadow bg-white p-5">
            <span
              className="self-end cursor-pointer"
              onClick={() => setMenu(0)}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </span>
            <p className="text-xl font-bold">Buscar por uma escola:</p>

            <SearchCity
              disp={1}
              className="flex flex-col gap-1 mx-8"
              filters={filters}
              setFilters={setFilters}
            />
            <Neighborhood
              disp={1}
              className="flex flex-col gap-1 mx-8"
              filters={filters}
              setFilters={setFilters}
            />
            <SearchSchool
              disp={1}
              className="flex flex-col gap-1 mx-8"
              filters={filters}
              setFilters={setFilters}
            />
            <SearchSeries
              disp={1}
              className="flex flex-col gap-1 mx-8"
              filters={filters}
              setFilters={setFilters}
            />

            <button className="mx-14 py-2 bg-orange-500 text-white hover:bg-orange-400 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className={`${
          menu === 1 ? "flex" : "hidden"
        } flex-col p-10 px-[1px] py-2 pb-10 z-50`}
      >
        <div className="flex justify-between text-gray-700 items-center pr-2">
          <Image
            src={Logo}
            alt="this is logo"
            className="w-[57%] h-auto filter drop-shadow-sm shadow-black"
          />
          <span className="cursor-pointer" onClick={() => setMenu(0)}>
            <IoCloseCircle size={38} color="white" />
          </span>
        </div>
        {/* Additional menu content can be added here */}
      </div>
    </>
  );
};

export default SearchList;
