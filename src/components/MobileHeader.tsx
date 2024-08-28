import React from "react";
import { GlobalContext } from "../providers/GlobalContext";

export default function MobileHeader() {
  const { searchStr, setSearchStr, setActiveModal } =
    React.useContext(GlobalContext);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchStr(e.target.value);
  }

  return (
    <header className="bg-[#01080e] flex gap-6 sm:hidden justify-between align-middle text-textColor drop-shadow-sm py-4 px-6">
      <div className="flex self-center gap-3 pl-3 h-10 w-full rounded-md items-center bg-color2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>

        <input
          type="text"
          value={searchStr}
          onChange={handleChange}
          placeholder="Digite o que deseja buscar..."
          className="h-full bg-transparent focus:outline-none placeholder:text-sm placeholder:text-color4 text-textColor focus:text-customOrange"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="bi bi-list hover:text-customOrange transition-colors"
        viewBox="0 0 16 16"
        onClick={() => setActiveModal("side")}
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </header>
  );
}
