"use client";

import Carousel from "@/components/dashboard/otherschools/carousel";

interface OtherSchoolsProps {}

// eslint-disable-next-line no-empty-pattern
const OtherSchools: React.FC<OtherSchoolsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-5 justify-around bg-white border border-slate-200 2xl:w-[70vw] xl:w-[80vw] lg:w-[90vw] w-full p-10 rounded-2xl">
      <p className="text-2xl font-bold text-gray-800 text-center md:text-left">
        Outras Instituições perto de você
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-700 text-center md:text-left">
          Mostrando {} próximas a São Paulo
        </p>
        <a
          href="/escola/busca"
          className="text-blue-500 text-xs underline hover:text-blue-700 mt-2 md:mt-0"
        >
          ver todas as escolas
        </a>
      </div>
      <Carousel />
    </div>
  );
};

export default OtherSchools;
