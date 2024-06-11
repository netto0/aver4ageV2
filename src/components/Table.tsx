import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { getSubjectsService } from "../api/services/subjectServices";
import ISubject from "../interfaces/ISubject";

// interface ISubjects {
//   _id: string,
//   name: string,
//   semester: number,
//   avaQtt: number,
//   avaGrades: {},
//   createdAt: string,
//   updatedAt: string,
//   __v: number,
//   examGrade: number | null,
//   pimGrade: number | null,
//   retakeGrade: number | null
// }

export default function Table() {
  
  function avaSum(gradesObject: { [key: string]: number }): number {
    const list = Object.values(gradesObject);
    const sum = list.reduce((total, current) => total + current);
    return sum;
  }

  function average(
    ava: number | null,
    exam: number | null,
    pim: number | null,
    rtk: number | null
  ): number | null {

    if(ava && exam && pim && rtk) {
      let regularMD:number
      // CÁLCULO PARA MATRÍCULA A PARTIR DE 2023 - Cursos Tecnólógicos
      regularMD = (7 * exam + 2 * pim + ava) / 10;
      if(rtk){
        return (regularMD + rtk) / 2;
      } else {
        return regularMD
      }
    } else {
      return null
    }
  }

  const [subjectsList, setSubjectsList] = useState<ISubject[]>([]);

  useEffect(() => {
    const getSubjects = async () => {
      const response = await getSubjectsService();
      if (response) {
        setSubjectsList(response);
      }
    };
    getSubjects()
  }, []);

  return (
    <div className="overflow-auto shadow-md sm:rounded-lg border-collapse">
      {/* {JSON.stringify(subjectsList)} */}
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
          {subjectsList.map((subject, i) => (
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
