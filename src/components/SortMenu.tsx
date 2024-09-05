import React from "react";
import { GlobalContext } from "../providers/GlobalContext";

export default function SortMenu() {
  const { showSortMenu, sortParameters, setSortParameters } = React.useContext(GlobalContext);

  function handleChange(e:any) {
      console.log(e.target.value)
      if(e.target.name === "sortKey") {
        setSortParameters({...sortParameters, criteria: e.target.value})
      } else {
        if(e.target.value === "ascending") {
          setSortParameters({...sortParameters, ascending: true})
        } else {
          setSortParameters({...sortParameters, ascending: false})
        }
      }
  }
  return (
    <div
      // className={`bg-color1 sm:hidden flex items-center justify-center py-3 gap-3 border h-12 border-red-400 z-20 ${showSortMenu ? "mt-20" : "-mt-12"}`}
      className={`bg-color1 sm:hidden flex items-center justify-center py-3 gap-3 border h-12 border-red-400 ${showSortMenu ? "block" : "hidden"}`}
    >
      <select
        name="sortKey"
        id="sortKey"
        className="bg-color2 px-2 py-1.5 rounded-md text-textColor focus:outline-none"
        onChange={handleChange}
      >
        <option value={undefined}></option>
        <option value="semester">Semestre</option>
        <option value="name">Nome</option>
        <option value="avaGrade">AVA</option>
        <option value="pimGrade">PIM</option>
        <option value="examGrade">Prova</option>
        <option value="retakeGrade">Exame</option>
        <option value="avg">Média</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-arrow-right text-customOrange"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
        />
      </svg>
      <select
        name="sortValue"
        id="sortValue"
        className="bg-color2 px-2 py-1.5 rounded-md text-textColor focus:outline-none"
        onChange={handleChange}
      >
        <option value="ascending">Crescente</option>
        <option value="descending">Decrescente</option>
      </select>
    </div>
  );
}
