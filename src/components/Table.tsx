import React, { useEffect, useRef, useState } from "react";
import TableRow from "./TableRow";
import { getSubjectsService } from "../api/services/subjectServices";
import { GlobalContext } from "../providers/GlobalContext";

export default function Table() {
  const { subjectsList, setSubjectsList, getSubjects } =
    React.useContext(GlobalContext);
  const myRef = useRef<any>(null);
  const [orderParameters, setOrderParameters] = useState({
    criteria: "examGrade",
    ascending: false,
  });
  //=============================================================
  const sortFunc = (a: any, b: any) => {
    if (orderParameters.ascending) {
      return (
        parseFloat(a[orderParameters.criteria]) -
        parseFloat(b[orderParameters.criteria])
      );
    } else {
      return (
        parseFloat(b[orderParameters.criteria]) -
        parseFloat(a[orderParameters.criteria])
      );
    }
  };

  function teste() {
    setSubjectsList(sortedList);
  }
  const sortedList = Array.from(subjectsList);
  sortedList.sort(sortFunc);
  //=============================================================
  // useEffect(() => {
  //   getSubjects();
  // }, []);

  return (
    <div className="overflow-auto shadow-md sm:rounded-lg border-collapse">
      {/* {JSON.stringify(subjectsList)} */}
      <button className="bg-red-500" onClick={teste}>
        Sort
      </button>
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
