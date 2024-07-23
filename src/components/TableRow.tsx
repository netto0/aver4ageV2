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
    if (avg == null) {
      return undefined;
    } else {
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
    }
  };
  return (
    <tr
      className="bg-color3 text-color1 border-b border-color4 flex h-14 hover:cursor-pointer hover:bg-color5 transition-all group text-lg font-semibold"
      key={subject._id}
      ref={fatherRef}
      id={JSON.stringify(subject)}
      onClick={() => handleClick("edit")}
    >
      <td className="w-[10%] h-full flex items-center justify-center">
        {subject.semester}
      </td>
      <td className="w-[40%] h-full flex items-center">
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
        {approved() === false && <Dot color={"red"} />}
        {approved() && <Dot color={"green"} />}
      </td>
      <td className="relative w-[10%] h-full flex items-center justify-center">
        {!subject.retakeGrade ? "x" : subject.retakeGrade}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-circle-fill absolute top-1.5 right-1.5 size-3 text-gray-900 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
          viewBox="0 0 16 16"
          onClick={(e) => {
            e.stopPropagation(), handleClick("del");
          }}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
        </svg>
      </td>
    </tr>
  );
}
