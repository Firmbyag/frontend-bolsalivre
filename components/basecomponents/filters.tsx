"use client";

import { useEffect, useState } from "react";
import {
  Neighborhood,
  SearchChecked,
  SearchRadius,
  SearchSeries,
  TeachingState,
} from "./searchComponents";
import { PiBroomFill } from "react-icons/pi";

interface FilterProps {
  type: string;
  level?: any;
  setSearchParam?: any;
}

const Filters: React.FC<FilterProps> = ({ type, level, setSearchParam }) => {
  const [filters, setFilters] = useState<any>();

  const clearFilters = () => {
    setFilters({});
  };

  useEffect(() => {
    setSearchParam(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between w-[270px] items-center">
        <p className="text-2xl text-gray-800 font-bold">Filtros:</p>
        <a
          href="#"
          className="flex text-sm gap-4 items-center text-orange-500"
          onClick={clearFilters}
        >
          <span>Limpar filtros</span>
          <PiBroomFill size={16} className="text-orange-500" />
        </a>
      </div>
      <div className="flex flex-col text-sm gap-4 text-gray-600 ">
        <Neighborhood
          disp={1}
          className=""
          filters={filters}
          setFilters={setFilters}
        />
        {type === "search" && !level && (
          <TeachingState
            disp={1}
            className=""
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <SearchSeries
          disp={1}
          className=""
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <div className="flex flex-col space-y-2 text-sm gap-4 text-gray-600">
        {type === "search" && (
          <SearchRadius
            disp={1}
            className=""
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <SearchRadius
          disp={2}
          className=""
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <div className="flex flex-col text-sm gap-4 text-gray-600">
        {type === "search" && (
          <SearchChecked
            disp={1}
            className=""
            checkedLabel="Ano de vigência:"
            filters={filters}
            setFilters={setFilters}
          />
        )}
        <SearchChecked
          disp={2}
          className=""
          checkedLabel="Horário:"
          filters={filters}
          setFilters={setFilters}
        />
        {/* <SearchChecked
          disp={3}
          className=""
          checkedLabel="Benefícios:"
          filters={filters}
          setFilters={setFilters}
        /> */}
      </div>
    </div>
  );
};

export default Filters;
