import React, { useEffect, useRef } from "react";
import TableRow from "./TableRow";
import { getSubjectsService } from "../api/services/subjectServices";
import { GlobalContext } from "../providers/GlobalContext";

export default function Table() {
  const { subjectsList, getSubjects } = React.useContext(GlobalContext);
  const myRef = useRef<any>(null);
  //=============================================================
  const sortFunc = (a: any, b: any) => {
    return a - b;
  };
  //=============================================================
  useEffect(() => {
    getSubjects();
  }, []);

  subjectsList.sort(sortFunc);
  return (
    <div className="overflow-auto shadow-md sm:rounded-lg border-collapse">
      {JSON.stringify(subjectsList)}
      <table
        className="text-base text-center rtl:text-right text-gray-900 w-full"
        ref={myRef}
      >
        <thead className="text-xs uppercase bg-darkerGray text-gray-900 drop-shadow-md">
          <tr className="flex w-full">
            <th scope="col" className={`px-6 py-3 w-[10%] ${"custom"}`}>
              Semestre
            </th>
            <th scope="col" className={`px-6 py-3 w-[30%] ${"custom"}`}>
              Matéria
            </th>
            <th scope="col" className={`px-6 py-3 w-[10%] ${"custom"}`}>
              Ava
            </th>
            <th scope="col" className={`px-6 py-3 w-[10%] ${"custom"}`}>
              Pim
            </th>
            <th scope="col" className={`px-6 py-3 w-[10%] ${"custom"}`}>
              Prova
            </th>
            <th scope="col" className={`px-6 py-3 w-[10%] ${"custom"}`}>
              Média
            </th>
            <th scope="col" className={`px-6 py-3 w-[10%] ${"custom"}`}>
              Exame
            </th>
            <th scope="col" className={`px-6 py-3 w-[10%] ${"custom"}`}>
              Ação
            </th>
          </tr>
        </thead>
        <tbody
          id="table"
          className="block scroll overflow-y-auto h-[587px] no-scrollbar bg-darkerGray scroll-smooth"
        >
          {subjectsList.map((subject, i) => (
            <TableRow key={i} subject={subject} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { getSubjectsService };
