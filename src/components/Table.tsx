import React, { useEffect, useRef } from "react";
import TableRow from "./TableRow";
import { getSubjectsService } from "../api/services/subjectServices";
import { GlobalContext } from "../providers/GlobalContext";

function AscendingTrue() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-up-fill"
      viewBox="0 0 16 16"
    >
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
  );
}
function AscendingFalse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-down-fill"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
}

export default function Table() {
  const { subjectsList, setSubjectsList, sortParameters, setSortParameters } =
    React.useContext(GlobalContext);
  const myRef = useRef<any>(null);

  const sortFunc = (a: any, b: any) => {
    if (sortParameters.ascending) {
      return (
        parseFloat(a[sortParameters.criteria]) -
        parseFloat(b[sortParameters.criteria])
      );
    } else {
      return (
        parseFloat(b[sortParameters.criteria]) -
        parseFloat(a[sortParameters.criteria])
      );
    }
  };

  const setCriteria = (value: string) => {
    const { criteria, ascending } = sortParameters;
    if (value !== criteria) {
      setSortParameters({ criteria: value, ascending: true });
    } else {
      if (!ascending) {
        setSortParameters({ criteria: null, ascending: true });
      } else {
        setSortParameters({ criteria: value, ascending: false });
      }
    }
  };

  const sortedList = Array.from(subjectsList);
  const defaultList = Array.from(subjectsList);
  sortedList.sort(sortFunc);

  useEffect(() => {
    if (sortParameters.criteria === null) {
      setSubjectsList(defaultList);
    } else {
      setSubjectsList(sortedList);
    }
  }, [sortParameters]);

  return (
    <div className="overflow-auto shadow-md sm:rounded-lg border-collapse">
      <table
        className="text-base text-center rtl:text-right text-gray-900 w-full"
        ref={myRef}
      >
        <thead className="text-xs uppercase bg-darkerGray text-gray-900 drop-shadow-md">
          <tr className="flex w-full">
            <th
              scope="col"
              className={`px-6 border-x py-3 w-[88px] ${"custom"} hover:cursor-pointer flex`}
              onClick={() => setCriteria("semester")}
            >
              <span>Sem.</span>
              {sortParameters.criteria === "semester" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "semester" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`px-6 border-x py-3 grow ${"custom"}`}
            >
              <span>Matéria</span>
            </th>
            <th
              scope="col"
              className={`px-6 border-x py-3 w-[88px] ${"custom"} hover:cursor-pointer flex`}
              onClick={() => setCriteria("avaGrade")}
            >
              <span>Ava</span>
              {sortParameters.criteria === "avaGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "avaGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`px-6 border-x py-3 w-[88px] ${"custom"} hover:cursor-pointer flex`}
              onClick={() => setCriteria("pimGrade")}
            >
              <span>Pim</span>
              {sortParameters.criteria === "pimGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "pimGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`px-6 border-x py-3 w-[88px] ${"custom"} hover:cursor-pointer flex`}
              onClick={() => setCriteria("examGrade")}
            >
              <span>Prova</span>
              {sortParameters.criteria === "examGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "examGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`px-6 border-x py-3 w-[88px] ${"custom"} hover:cursor-pointer flex`}
              onClick={() => setCriteria("average")}
            >
              <span>Média</span>
              {sortParameters.criteria === "average" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "average" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`px-6 border-x py-3 w-[88px] ${"custom"} hover:cursor-pointer flex`}
              onClick={() => setCriteria("retakeGrade")}
            >
              <span>Exame</span>
              {sortParameters.criteria === "retakeGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "retakeGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`px-6 border-x py-3 w-[100px] ${"custom"}`}
            >
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
