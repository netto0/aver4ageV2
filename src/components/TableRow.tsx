import React, { useRef } from "react";
import Dot from "./Dot";
import { GlobalContext } from "../providers/GlobalContext";
import ISubject from "../interfaces/ISubject";

interface Props {
  subject: ISubject;
}

export default function TableRow({ subject }: Props) {
  const { setActiveModal, setDeleteSubject } = React.useContext(GlobalContext);
  const fatherRef = useRef<any>(null);

  function handleClick() {
    const subjectInfos = JSON.parse(fatherRef.current.id)
    const deleteObj = {_id:subjectInfos._id, name: subjectInfos.name} 
    console.log(subjectInfos._id);
    setDeleteSubject(deleteObj)
    setActiveModal("del");
  }

  function avaSum(gradesObject: { [key: string]: number } | undefined): number {
    if (!gradesObject) {
      return 0;
    }
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
    if (ava && exam && pim) {
      let regularMD: number;
      // CÁLCULO PARA MATRÍCULA A PARTIR DE 2023 - Cursos Tecnólógicos
      regularMD = (7 * exam + 2 * pim + ava) / 10;
      if (rtk) {
        return (regularMD + rtk) / 2;
      } else {
        return regularMD;
      }
    } else {
      return null;
    }
  }

  const ava = avaSum(subject.avaGrades);
  const avg = average(
    ava,
    subject.examGrade,
    subject.pimGrade,
    subject.retakeGrade
  );

  return (
    <tr
      className="bg-darkGray border-b border-gray-500 flex items-center h-14 text-center"
      key={subject._id}
      ref={fatherRef}
      id={JSON.stringify(subject)}
    >
      <td className="w-[10%] h-full flex flex-col justify-center">
        {subject.semester}
        {/* <span className= "text-red-700 bg-blue-300 z-50">{`${subject.semester} ${subject.name} ${subject.pimGrade} ${subject.examGrade}`}</span> */}
      </td>
      <td className="w-[30%] truncate h-full flex flex-col justify-center">
        {subject.name}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!ava ? "∅" : ava}
        {!ava && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!subject.pimGrade ? "∅" : subject.pimGrade}
        {!subject.pimGrade && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!subject.examGrade && <Dot />}
        {!subject.examGrade ? "∅" : subject.examGrade}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!avg ? "∅" : avg}
        {!avg && <Dot />}
        {avg && avg! < 7 && <Dot color={2} />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!subject.retakeGrade ? "∅" : subject.retakeGrade}
        {!subject.retakeGrade && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        <div className="flex w-full max-w-24 self-center justify-around items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="bi bi-pencil-fill fill-gray-600  hover:cursor-pointer transition-all hover:fill-green-500"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-trash-fill fill-gray-600 hover:cursor-pointer transition-all hover:fill-red-500"
            viewBox="0 0 16 16"
            onClick={() => handleClick()}
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </div>
      </td>
    </tr>
  );
}
