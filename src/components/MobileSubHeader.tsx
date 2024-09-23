import React from "react";
import Checkbox from "./Checkbox";
import { GlobalContext } from "../providers/GlobalContext";

interface Props {
  show: boolean;
}

export default function MobileSubHeader({ show }: Props) {
  const { completeOnly, showSortMenu, setShowSortMenu, sortParameters } =
    React.useContext(GlobalContext);

  function toggleSortMenu() {
    setShowSortMenu(!showSortMenu);
  }
  return (
    <div
      className={`relative bg-color2 flex sm:hidden text-textColor py-3 px-5 h-12 z-40 justify-around text-lg select-none transition-all ${
        show ? "mt-20" : "mt-8"
      } border border-blue-400 border-none`}
    >
      <div
        className={`flex items-center gap-1.5 transition-colors ${
          showSortMenu && "text-customOrange"
        }`}
        onClick={toggleSortMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className={`bi bi-arrow-down-up ${
            sortParameters.criteria && "text-customOrange"
          }`}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
          />
        </svg>
        <span>Ordenar</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Checkbox Ivalue="completes" Ichecked={completeOnly} />
        <span>Completas</span>
      </div>
    </div>
  );
}
