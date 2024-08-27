/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import CustomSelect from "./selectComponent";
import { isEmpty } from "@/utils/is-empty";
import neighicon from "@/public/assets/images/neigh_hood.svg";
import seriesicon from "@/public/assets/images/serie-icon.svg";
import Image from "next/image";

const checkedData = [
  ["2022", "2023", "2024", "2025"],
  ["Manhã", "Tarde", "Noite"],
  ["Super School"],
];

interface SearchButtonProps {
  disp: number;
  className?: string;
  checkedLabel?: string;
  filters?: any;
  setFilters?: any;
}

const SearchCity: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [city, setCity] = useState<string>();
  const [cities, setCities] = useState<any[]>([]);

  const setSelectedCity = (city: any) => {
    city && city._id && setCity(city._id);
  };

  const renderItem = (item: any) => {
    return item.city;
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/cities`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch (err) {
        console.error("Error: Level loading error!!!");
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    setFilters && setFilters({ ...filters, city: city });
  }, [city]);

  return (
    <div className={`${className}`}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center justify-center">
            <select
              value={city || ""}
              onChange={(e) => setCity(e.target.value)}
              className={`w-48 h-9 pl-2 py-1 bg-transparent border-0 focus:ring-0 focus:outline-none font-light text-sm appearance-none ${
                !city ? "text-slate-500" : "text-black"
              }`}
            >
              <option value="" className="text-slate-500">
                Filtrar por cidade...
              </option>
              {cities.map((item) => (
                <option key={item._id} value={item._id} className="text-black">
                  {item.city}
                </option>
              ))}
            </select>
            <span className="absolute left-2">
              <svg
                className="w-5 h-5 text-slate-600"
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
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
            </span>
          </div>
        </>
      ) : (
        <>
          {disp === 1 && (
            <label htmlFor="" className="font-semibold text-lg">
              Cidade:
            </label>
          )}
          <div className="flex items-center relative rounded-full border">
            <CustomSelect
              items={cities}
              setItem={setSelectedCity}
              renderItem={renderItem}
              className="px-5"
            />
            {disp === 1 && (
              <span className="absolute left-2">
                <svg
                  className="w-5 h-5 text-slate-600"
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
                    d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                  />
                </svg>
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const Neighborhood: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [neigh, setNeigh] = useState<string>();
  const [neighs, setNeighs] = useState<any[]>();

  const setSelectedNeigh = (neigh: string) => {
    setNeigh(neigh);
  };

  const renderItem = (item: any) => {
    return item.neigh;
  };

  useEffect(() => {
    const fetchNeighs = async () => {
      const url =
        filters && filters.city && !isEmpty(filters.city)
          ? `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/neighs?cityId=${filters.city}`
          : `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/neighs`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setNeighs(data);
      } catch (err) {
        console.error("Error: Neigh loading error!!!");
      }
    };
    fetchNeighs();
  }, [filters && filters.city && filters.city]);

  useEffect(() => {
    setFilters && setFilters({ ...filters, neigh: neigh });
  }, [neigh]);

  return (
    <div className={`${className} relative`}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center justify-center">
            <select
              value={neigh || ""}
              onChange={(e) => setNeigh(e.target.value)}
              className={`w-48 h-9 pl-2 py-1 bg-transparent border-0 focus:ring-0 focus:outline-none font-light text-sm appearance-none ${
                !neigh ? "text-slate-500" : "text-black"
              }`}
            >
              <option value="" className="!text-slate-500">
                Filtrar por bairro...
              </option>
              {neighs && neighs.length > 0 ? (
                neighs.map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                    className="!text-black"
                  >
                    {item.neigh}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Nenhum bairro disponível
                </option>
              )}
            </select>
            <span className="absolute left-1">
              <Image
                src={neighicon}
                alt="icon de bairro"
                className="w-6 h-6 text-slate-500"
              ></Image>
            </span>
          </div>
        </>
      ) : (
        <>
          <label htmlFor="" className="font-semibold text-sm">
            Bairro:
          </label>
          <div className="pt-1 flex items-center relative rounded-full">
            <select
              id="neigh-select"
              value={neigh || ""}
              onChange={(e) => setSelectedNeigh(e.target.value)}
              className={`w-full px-10 py-2 border rounded-md text-gray-700 focus:outline-none  appearance-none ${
                !neigh ? "text-slate-500" : "text-black"
              }`}
            >
              <option value="" className="!text-slate-500">
                Filtrar por bairro...
              </option>
              {neighs && neighs.length > 0 ? (
                neighs.map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                    className="!text-black"
                  >
                    {item.neigh}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Nenhum bairro disponível
                </option>
              )}
            </select>
            <span className="absolute left-2">
              <Image
                src={neighicon}
                alt="icon de bairro"
                className="w-6 h-6 text-slate-500"
              ></Image>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

const SearchSchool: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [schools, setSchools] = useState<any[]>([]);
  const [school, setSchool] = useState<string>("");

  const setSelectedSchool = (school: any) => {
    school && school._id && setSchool(school._id);
  };

  const renderItem = (item: any) => {
    return item.title;
  };

  useEffect(() => {
    const fetchSchools = async () => {
      let body;
      if (filters && filters.neigh) {
        body = JSON.stringify({ neigh: filters.neigh });
      }
      if (filters && filters.city) {
        body = JSON.stringify({ city: filters.city });
      }
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools`,
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        console.error("Error: School loading error!!!");
      }
    };
    fetchSchools();
  }, [filters && filters.neigh, filters && filters.city]);

  useEffect(() => {
    setFilters && setFilters({ ...filters, school: school });
  }, [school]);

  return (
    <div className={`${className} relative`}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center">
            <CustomSelect
              items={schools}
              className="px-5"
              setItem={setSelectedSchool}
              renderItem={renderItem}
            />
            <span className="absolute left-1">
              <svg
                className="w-6 h-6 text-slate-500"
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
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <label htmlFor="" className="font-semibold text-sm">
              School:
            </label>
            <div className="flex pt-1.5 items-center relative rounded-full">
              <CustomSelect
                className="px-10"
                items={schools}
                setItem={setSelectedSchool}
                renderItem={renderItem}
              />
              <span className="absolute left-2">
                <svg
                  className="w-6 h-6 text-slate-500"
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
                    d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

type SeriesItem = {
  _id: string;
  series: string;
};

const SearchSeries: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [sereiesList, setSeriesList] = useState<SeriesItem[]>([]);
  const [series, setSeries] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSeriesId = event.target.value;
    setSeries(selectedSeriesId);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      const level = filters && filters.level;
      const school = filters && filters.school;
      const url = school
        ? `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series?schoolId=${school}`
        : level
        ? `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series?levelId=${level}`
        : `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/series`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setSeriesList(data);
      } catch (err) {
        console.error("Error: Level loading error!!!");
      }
    };
    fetchSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters && filters.level, filters && filters.school]);

  useEffect(() => {
    setFilters && setFilters({ ...filters, series: series });
  }, [series]);

  return (
    <div className={`${className} relative`}>
      {disp === 0 ? (
        <>
          <div className="flex gap-1 items-center justify-center">
            <select
              value={series}
              onChange={handleSelectChange}
              className={`w-48 h-9 pl-2 py-1 bg-transparent border-0 focus:ring-0 focus:outline-none font-light text-sm appearance-none ${
                !series ? "text-slate-500" : "text-black"
              }`}
            >
              <option value="" className="!text-slate-500">
                Filtrar por série...
              </option>
              {sereiesList.map((item) => (
                <option key={item._id} value={item._id} className="!text-black">
                  {item.series}
                </option>
              ))}
            </select>
            <span className="absolute left-1">
              <Image
                src={seriesicon}
                alt="icon series"
                className="w-6 h-6 text-slate-500"
              ></Image>
            </span>
            <span className="absolute right-1 bg-orange-500 rounded-full p-[7px]">
              <svg
                className="w-5 h-5 text-white"
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
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>
          </div>
        </>
      ) : (
        <>
          {disp === 1 && (
            <label htmlFor="" className="font-semibold text-sm">
              Series:
            </label>
          )}
          <div className={`pt-1 flex items-center relative rounded-full`}>
            <select
              id="series-select"
              value={series}
              onChange={handleSelectChange}
              className={`w-full px-10 py-2 border rounded-md text-gray-700 focus:outline-none  appearance-none ${
                !series ? "text-slate-500" : "text-black"
              }`}
            >
              <option value="" className="!text-slate-500">
                Filtre pela série...
              </option>
              {sereiesList.map((item) => (
                <option key={item._id} value={item._id} className="!text-black">
                  {item.series}
                </option>
              ))}
            </select>
            {disp === 1 && (
              <span className="absolute left-2">
                <Image
                  src={seriesicon}
                  alt="icon series"
                  className="w-6 h-6 text-slate-500"
                ></Image>
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

interface Level {
  _id: string;
  level: string;
}

const TeachingState: React.FC<SearchButtonProps> = ({
  className,
  filters,
  setFilters,
}) => {
  const [levels, setLevels] = useState<Level[]>([]);
  const [level, setLevel] = useState<string>("");
  const [showValue, setShowValue] = useState<boolean>(false);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/levels`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setLevels(data);
      } catch (err) {
        console.error("Error: Level loading error!!!");
      }
    };
    fetchLevels();
  }, []);

  useEffect(() => {
    setFilters({ ...filters, level });
  }, [level]);

  return (
    <div className={`${className} relative`}>
      <label htmlFor="" className="font-semibold text-sm">
        Etapa de ensino:
      </label>
      <div className="flex pt-1 items-center relative rounded-full">
        <select
          id="level-select"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className={`w-full px-10 py-2 border rounded-md text-gray-700 focus:outline-none appearance-none ${
            !level ? "text-slate-500" : "text-black"
          }`}
        >
          <option value="">Filtrar por ensino...</option>
          {levels.length > 0 ? (
            levels.map((item) => (
              <option key={item._id} value={item._id}>
                {item.level}
              </option>
            ))
          ) : (
            <option value="" disabled>
              Nenhuma etapa disponível
            </option>
          )}
        </select>
        <span className="absolute left-2">
          <svg
            className="w-6 h-6 text-slate-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

const SearchRadius: React.FC<SearchButtonProps> = ({
  disp,
  className,
  filters,
  setFilters,
}) => {
  const [radiusValue, setRadiusValue] = useState<number | any>();

  const handleFilters = () => {
    setFilters({ ...filters, radius: radiusValue });
  };
  return (
    <div className={`${className} relative`}>
      {disp === 1 ? (
        <>
          <label htmlFor="" className="font-semibold text-sm">
            Raio de busca
          </label>
          <p>Até {radiusValue} km</p>
          <input
            type="range"
            onChange={(e) => {
              setRadiusValue(e.target.value);
              handleFilters();
            }}
            value={radiusValue}
            id="currency-input"
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700 accent-indigo-600"
            placeholder="Enter amount"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

interface ApiDataItem {
  _id: string;
  year?: string;
  turno?: string;
}

const SearchChecked: React.FC<SearchButtonProps> = ({
  disp,
  className,
  checkedLabel,
  filters,
  setFilters,
}) => {
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [dataList, setDataList] = useState<ApiDataItem[]>([]);
  const checkedDisp: JSX.Element[] = [];

  const handleFilters = (
    value: string,
    buffer: string[],
    setAction: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (buffer.includes(value)) {
      setAction(buffer.filter((val) => val !== value));
    } else {
      setAction([...buffer, value]);
    }
  };

  useEffect(() => {
    if (disp === 1) {
      setFilters({ ...filters, years: selectedData });
    } else if (disp === 2) {
      setFilters({ ...filters, shift: selectedData });
    } else {
      setFilters({ ...filters, benefit: selectedData });
    }
  }, [selectedData]);

  useEffect(() => {
    let url;
    if (disp === 1) {
      url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/periodo`;
    } else if (disp === 2) {
      url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/turno`;
    } else {
      url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/benefits`;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ApiDataItem[] = await res.json();

        if (disp === 1) {
          setDataList(data);
        } else if (disp === 2) {
          setDataList(
            data.map((item) => ({ _id: item._id, turno: item.turno }))
          );
        } else {
          setDataList(data);
        }
      } catch (err) {
        console.error("Error: Level loading error!!!");
      }
    };
    fetchData();
  }, []);

  const length = dataList.length;
  for (let i = 0; i < length; i++) {
    const element = dataList[i];

    if (disp === 1 || disp === 2) {
      const valueToDisplay = disp === 1 ? element.year : element.turno;
      checkedDisp.push(
        <div key={i} className="flex items-center mb-4">
          <input
            id={`default-checkbox${i}-${disp - 1}`}
            type="checkbox"
            value={valueToDisplay}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) =>
              handleFilters(e.target.value, selectedData, setSelectedData)
            }
          />
          <label
            htmlFor={`default-checkbox${i}-${disp - 1}`}
            className="ms-2 text-sm font-medium text-gray-700"
          >
            {valueToDisplay}
          </label>
        </div>
      );
    } else if (disp === 3) {
      checkedDisp.push(
        <div key={disp} className="flex items-center mb-4">
          <input
            id={`default-checkbox${i}-${disp - 1}`}
            type="checkbox"
            value={element._id}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) =>
              handleFilters(e.target.value, selectedData, setSelectedData)
            }
          />
          <label
            htmlFor={`default-checkbox${i}-${disp - 1}`}
            className="flex justify-between ms-2 text-sm font-medium text-gray-900"
          >
            {element._id}
          </label>
          <a className="pl-3 flex text-purple-700 hover:bg-purple-50">
            <svg
              className="w-[24px] h-[24px] text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </a>
        </div>
      );
    }
  }

  return (
    <div className={`${className} flex flex-col relative`} key={checkedLabel}>
      <label className="font-semibold text-sm mb-2">{checkedLabel}</label>
      <div className="grid grid-cols-2 ">{checkedDisp}</div>
    </div>
  );
};

export {
  SearchCity,
  Neighborhood,
  SearchSchool,
  SearchSeries,
  TeachingState,
  SearchRadius,
  SearchChecked,
};
