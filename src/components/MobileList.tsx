import React, { useRef } from "react";
import ISubject from "../interfaces/ISubject";
import { GlobalContext } from "../providers/GlobalContext";
import MobileAddButton from "./MobileAddButton";

interface IItemProps {
  subject: ISubject;
}

function ListItem({ subject }: IItemProps) {
  const { setActiveModal, setFormFields } = React.useContext(GlobalContext);
  const fatherRef = useRef<any>(null);

  function handleClick(modalType: "del" | "edit") {
    const subjectInfos = JSON.parse(fatherRef.current.id);
    setFormFields(subjectInfos);
    setActiveModal(modalType);
  }

  return (
    <li
      className="relative text-textColor bg-color2 border-b border-textColor list-none px-5 py-3 flex flex-col"
      ref={fatherRef}
      id={JSON.stringify(subject)}
      onClick={() => handleClick("edit")}
    >
      <div className="flex justify-between gap-5 items-center w-full">
        <div className="flex flex-col w-full overflow-hidden">
          <span className="mb-[-4px] text-sm">
            {subject.semester}º Semestre
          </span>
          <h3 className="text-xl truncate">{subject.name}</h3>
          <span className="text-xs">{`${subject.avaGrade ? subject.avaGrade?.toFixed(2) : "x"} | 
                  ${subject.pimGrade ? subject.pimGrade?.toFixed(2) : "x"} | 
                  ${subject.examGrade ? subject.examGrade?.toFixed(2) : "x"} | 
                  ${
                    subject.retakeGrade ? subject.retakeGrade?.toFixed(2) : "x"
                  }`}</span>
        </div>
        <span className="text-2xl w-fit px-3 text-left">
          {!subject.avg ? "S/M" : subject.avg!.toFixed(2)}
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-x absolute right-2 top-1 hover:cursor-pointer hover:text-color1 transition-all"
        viewBox="0 0 16 16"
        onClick={(e) => {
          e.stopPropagation();
          handleClick("del");
        }}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg>
    </li>
  );
}

export default function MobileList() {
  const { subjectsList, completeOnly } = React.useContext(GlobalContext);
  return (
    <div className="sm:hidden select-none h-full overflow-scroll">
      {!completeOnly
        ? subjectsList.map((sbj, i) => <ListItem subject={sbj} key={i} />)
        : subjectsList.map(
            (sbj, i) => sbj.avg && <ListItem subject={sbj} key={i} />
          )}
      <MobileAddButton />
    </div>
  );
}
