// import { useEffect } from "react";
import TableRow from "./TableRow";
import { subjects } from "../api/services/subjectServices";
import Dot from "./Dot";

export default function Table() {
  function avaSum(list: number[]): number {
    return list.reduce((total, currentElement) => total + currentElement);
  }

  function average(
    ava: number,
    exam: number,
    pim: number | null,
    rtk: number | null
  ): number | null {
    // CÁLCULO PARA MATRÍCULA A PARTIR DE 2023 - Cursos Tecnólógicos
    if (!pim) {
      return null;
    }

    const regularMD = (7 * exam + 2 * pim + ava) / 10;

    if (rtk) {
      const regularMF = (regularMD + rtk) / 2;
      return regularMF;
    }

    return regularMD;
  }
  return (
    <div className="overflow-auto shadow-md sm:rounded-lg border-collapse">
      <table className="text-base text-center rtl:text-right text-gray-900 w-full">
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
        <tbody className="block scroll overflow-y-auto h-[587px] no-scrollbar bg-darkerGray">
          {subjects.map((subject, i) => (
            <TableRow
              key={i}
              id={subject._id}
              semester={subject.semester}
              subject={subject.name}
              ava={avaSum(subject.avaGrades)}
              pim={subject.pimGrade}
              exam={subject.examGrade}
              avg={average(
                avaSum(subject.avaGrades),
                subject.examGrade,
                subject.pimGrade,
                subject.retakeGrade
              )}
              rtk={subject.retakeGrade}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
