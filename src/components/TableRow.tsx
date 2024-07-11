import React, { useRef } from "react";
import Dot from "./Dot";
import { GlobalContext } from "../providers/GlobalContext";
import ISubject from "../interfaces/ISubject";

interface Props {
  subject: ISubject;
}

export default function TableRow({ subject }: Props) {
  const { setActiveModal, setFormFields, average } =
    React.useContext(GlobalContext);
  const fatherRef = useRef<any>(null);

  function handleClick(modalType: "del" | "edit") {
    const subjectInfos = JSON.parse(fatherRef.current.id);
    setFormFields(subjectInfos);
    setActiveModal(modalType);
  }

  const avg: number | null | void = average(
    subject.avaGrade!,
    subject.examGrade!,
    subject.pimGrade!,
    subject.retakeGrade!
  );

  const approved = () => {
    if (subject.retakeGrade) {
      if (avg! >= 5) {
        return true;
      } else {
        return false;
      }
    } else {
      if (avg! >= 7) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <tr
      className="bg-darkGray text-gray-950 border-b border-gray-700 flex h-14"
      key={subject._id}
      ref={fatherRef}
      id={JSON.stringify(subject)}
    >
      <td className="w-[10%] h-full flex items-center justify-center">
        {subject.semester}
      </td>
      <td className="w-[30%] h-full flex items-center">
        <p className="truncate">{subject.name}</p>
      </td>
      <td className="relative w-[10%] h-full flex items-center justify-center">
        {!subject.avaGrade?.toFixed(2) ? "∅" : subject.avaGrade}
        {!subject.avaGrade && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex items-center justify-center">
        {!subject.pimGrade?.toFixed(2) ? "∅" : subject.pimGrade}
        {!subject.pimGrade && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex items-center justify-center">
        {!subject.examGrade?.toFixed(2) && <Dot />}
        {!subject.examGrade ? "∅" : subject.examGrade}
      </td>
      <td className="relative w-[10%] h-full flex items-center justify-center">
        {!avg ? "∅" : avg.toFixed(2)}
        {!avg && <Dot />}
        {!approved() && <Dot color={"red"} />}
        {approved() && <Dot color={"green"} />}
      </td>
      <td className="relative w-[10%] h-full flex items-center justify-center">
        {!subject.retakeGrade ? "x" : subject.retakeGrade}
      </td>
      <td className="relative w-[10%] h-full flex items-center justify-center">
        <div className="flex w-full max-w-24 self-center justify-around items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="bi bi-pencil-fill fill-gray-800  hover:cursor-pointer transition-all hover:fill-green-500"
            viewBox="0 0 16 16"
            onClick={() => handleClick("edit")}
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-trash-fill fill-gray-800 hover:cursor-pointer transition-all hover:fill-red-500"
            viewBox="0 0 16 16"
            onClick={() => handleClick("del")}
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </div>
      </td>
    </tr>
  );
}
