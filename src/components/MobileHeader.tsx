import React, { useState } from "react";
import { GlobalContext } from "../providers/GlobalContext";
import MobileSubHeader from "./MobileSubHeader";
import SortMenu from "./SortMenu";

interface Props {
  toggleSubHeader: () => void;
  subHeaderStatus: boolean;
}

export default function MobileHeader({
  toggleSubHeader,
  subHeaderStatus,
}: Props) {
  const [activeSearch, setActiveSearch] = useState(false);
  const { searchStr, setSearchStr, setActiveModal } =
    React.useContext(GlobalContext);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchStr(e.target.value);
  }

  return (
    <>
      <header className="bg-color1 flex gap-3 sm:hidden justify-between items-center text-textColor drop-shadow-sm py-4 px-6 border-b h-20 z-50 border-stone-950 absolute w-full">
        <div className="relative flex w-full justify-end items-center border-2 border-green-500 border-none">
          <span
            className={`absolute left-0 text-2xl font-semibold select-none ${
              activeSearch && "hidden"
            }`}
          >
            <a href="/">
              AVER<span className="text-customOrange">4</span>GE
            </a>
          </span>
          <div
            className={`flex gap-3 h-10 rounded-md items-center bg-color2 transition-all border-2 border-red-400 border-none ${
              activeSearch ? "w-full" : "w-14 bg-transparent"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className={`bi bi-search ml-3 w-10 transition-colors border border-green-500 border-none ${
                activeSearch && "text-customOrange"
              } ${searchStr !== "" && "text-customOrange"} `}
              viewBox="0 0 16 16"
              onClick={() => setActiveSearch(!activeSearch)}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            {activeSearch && (
              <input
                type="text"
                value={searchStr}
                onChange={handleChange}
                placeholder="Digite o que deseja buscar..."
                className="h-full w-full bg-transparent focus:outline-none placeholder:text-sm placeholder:text-color4 text-textColor focus:text-customOrange border border-lime-300 border-none"
                autoFocus
              />
            )}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className={`bi bi-list transition-colors ${
            subHeaderStatus && "text-customOrange"
          }`}
          viewBox="0 0 16 16"
          onClick={toggleSubHeader}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-three-dots-vertical transition-colors"
          viewBox="0 0 16 16"
          onClick={() => setActiveModal("side")}
        >
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </header>
      {/* {subHeaderStatus && (
        <>
          <MobileSubHeader />
          <SortMenu />
        </>
      )} */}
      <MobileSubHeader show={subHeaderStatus}/>
      <SortMenu />
    </>
  );
}
