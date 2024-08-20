"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import AutoCarousel from "../basecomponents/carousel";
import { SearchCity, SearchSeries } from "../basecomponents/searchComponents";

const carouselImageFull = [
  "https://images.educamaisbrasil.com.br/content/internal/marketplace/educamaisbrasil/images/banner/g/banner_home_graduacao.png",
  "https://images.educamaisbrasil.com.br/content/internal/marketplace/educamaisbrasil/images/banner/g/banner_home_pos.png",
  "https://images.educamaisbrasil.com.br/content/internal/marketplace/educamaisbrasil/images/banner/g/banner_home_basico.png",
];

const carouselImageMobile = [
  "https://images.educamaisbrasil.com.br/content/internal/marketplace/educamaisbrasil/images/banner/p/banner_home_graduacao.png",
  "https://images.educamaisbrasil.com.br/content/internal/marketplace/educamaisbrasil/images/banner/p/banner_home_pos.png",
  "https://images.educamaisbrasil.com.br/content/internal/marketplace/educamaisbrasil/images/banner/p/banner_home_basico.png",
];

const TeachStage: React.FC = () => {
  const [filters, setFilters] = useState<any>();
  const [levels, setLevels] = useState<{ _id: string; level: string }[]>([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const url = process.env.NEXT_PUBLIC_BACKEND_DEV + "/api/levels";

      try {
        const result = await fetch(url);
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const data = await result.json();
        setLevels(data);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    fetchLevels();
  }, []);

  const handleLevelClick = (levelId: string) => {
    setFilters({ ...filters, level: levelId });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white w-full">
      <div className="flex flex-col items-center relative">
        <AutoCarousel images={carouselImageFull} className="lg:block hidden" />
        <AutoCarousel
          images={carouselImageMobile}
          className="block lg:hidden"
        />

        <div className="flex flex-col justify-center bottom-0 lg:w-2/3 mx-5 w-lvw mt-5">
          <p className="font-semibold lg:self-start self-center px-4 lg:px-10 py-1 text-purple-500 text-center bg-white rounded-t-3xl ml-5">
            Buscar pela etapa de formação
          </p>
          {levels.length > 0 && (
            <div className="tag-container overflow-auto inline-flex gap-5 bg-white justify-around p-5 rounded-tr-lg">
              <button
                onClick={() => {
                  setFilters({ ...filters, level: levels[0]._id });
                }}
                className="inline-flex -space-x-2 group text-sm text-white lg:text-base font-medium items-center text-center"
              >
                <div
                  className={`bg-purple-700 group-hover:bg-purple-800 focus:outline-none ${
                    filters &&
                    levels &&
                    filters?.level === levels[0]._id &&
                    "ring-4 ring-purple-300"
                  } rounded-full p-2`}
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.5em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    />
                  </svg>
                </div>
                <span
                  className={`bg-purple-700 group-hover:bg-purple-800 focus:outline-none py-1 pl-2 pr-3 rounded-r-lg text-nowrap`}
                >
                  Ensino básico
                </span>
              </button>
              <button
                onClick={() => {
                  setFilters({ ...filters, level: levels[1]._id });
                }}
                className="inline-flex -space-x-2 group text-sm text-white lg:text-base font-medium items-center text-center"
              >
                <div
                  className={`bg-purple-700 group-hover:bg-purple-800 focus:outline-none ${
                    filters &&
                    levels &&
                    filters?.level === levels[1]._id &&
                    "ring-4 ring-purple-300"
                  } rounded-full p-2`}
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.5em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    />
                  </svg>
                </div>
                <span
                  className={`bg-purple-700 group-hover:bg-purple-800 focus:outline-none py-1 pl-2 pr-3 rounded-r-lg text-nowrap`}
                >
                  Curso Técnico
                </span>
              </button>
              <button
                onClick={() => {
                  setFilters({ ...filters, level: levels[2]._id });
                }}
                className="inline-flex -space-x-2 group text-sm text-white lg:text-base font-medium items-center text-center"
              >
                <div
                  className={`bg-purple-700 group-hover:bg-purple-800 focus:outline-none ${
                    filters &&
                    levels &&
                    filters?.level === levels[2]._id &&
                    "ring-4 ring-purple-300"
                  } rounded-full p-2`}
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.5em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                    />
                  </svg>
                </div>
                <span
                  className={`bg-purple-700 group-hover:bg-purple-800 focus:outline-none py-1 pl-2 pr-3 rounded-r-lg text-nowrap`}
                >
                  Graduação
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      {/*}
      <div
        className="lg:flex lg:justify-around items-end lg:w-2/3 grid w-lvw gap-5 p-5 
      border-b-[1px] border-l-[1px] border-r-[1px] rounded-b-lg z-10"
      >
        <div className="flex flex-col gap-1">
          <label className="font-light" htmlFor="">
            Escolha uma cidade:
          </label>
          <SearchCity disp={2} filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-light" htmlFor="">
            Série que deseja estudar:
          </label>
          <SearchSeries disp={2} filters={filters} setFilters={setFilters} />
        </div>
        <Link
          href={`/escola/busca/${
            filters && encodeURIComponent(JSON.stringify(filters))
          }`}
          className="rounded-lg bg-purple-500 px-5 py-2 text-white text-center"
        >
          Buscar bolsas
        </Link>
      </div> */}
    </div>
  );
};

export default TeachStage;
