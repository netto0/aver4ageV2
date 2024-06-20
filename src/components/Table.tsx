import React, { useEffect, useRef } from "react";
import TableRow from "./TableRow";
import { getSubjectsService } from "../api/services/subjectServices";
import { GlobalContext } from "../providers/GlobalContext";

export default function Table() {
  const { subjectsList, getSubjects } = React.useContext(GlobalContext)
  const myRef = useRef<any>(null);

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div className="overflow-auto shadow-md sm:rounded-lg border-collapse">
      {/* {JSON.stringify(subjectsList)} */}
      <table className="text-base text-center rtl:text-right text-gray-900 w-full" ref={myRef}>
        <thead className="text-xs uppercase bg-darkerGray text-gray-900 drop-shadow-md">
          <tr className="flex w-full">
            <th scope="col" className="px-6 py-3 w-[10%]">
              Semestre
            </th>
            <th scope="col" className="px-6 py-3 w-[30%]">
              Matéria
            </th>
            <th scope="col" className="px-6 py-3 w-[10%]">
              Ava
            </th>
            <th scope="col" className="px-6 py-3 w-[10%]">
              Pim
            </th>
            <th scope="col" className="px-6 py-3 w-[10%]">
              Prova
            </th>
            <th scope="col" className="px-6 py-3 w-[10%]">
              Média
            </th>
            <th scope="col" className="px-6 py-3 w-[10%]">
              Exame
            </th>
            <th scope="col" className="px-6 py-3 w-[10%]">
              Ação
            </th>
          </tr>
        </thead>
        <tbody id="table" className="block scroll overflow-y-auto h-[587px] no-scrollbar bg-darkerGray scroll-smooth">
          {subjectsList.map((subject, i) => (
            <TableRow
              key={i}
              subject={subject}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { getSubjectsService };
