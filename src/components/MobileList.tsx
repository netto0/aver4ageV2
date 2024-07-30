import React from "react";
import ISubject from "../interfaces/ISubject";
import { GlobalContext } from "../providers/GlobalContext";

interface IItemProps {
  subject: ISubject;
}

function ListItem({ subject }: IItemProps) {
  return (
    <li className="relative text-textColor bg-color2 border-b border-textColor list-none p-3 flex flex-col">
      <div className="flex justify-between gap-5 items-center w-full">
        <div className="flex flex-col w-[80%] overflow-hidden">
          <span className="mb-[-4px] text-lg">{subject.semester}º Semestre</span>
          <h3 className="text-2xl truncate">{subject.name}</h3>
        </div>
        <span className="text-3xl w-[20%] text-left">
          {!subject.avg ? "S/M" : subject.avg!.toFixed(2)}
        </span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-three-dots-vertical absolute right-0 top-2"
        viewBox="0 0 16 16"
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      </svg>
    </li>
  );
}

export default function MobileList() {
  const { subjectsList } = React.useContext(GlobalContext);
  return (
    <div className="block sm:hidden">
      {subjectsList.map((sbj) => (
        <ListItem subject={sbj} />
      ))}
    </div>
  );
}
