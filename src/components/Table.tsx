import React, { useEffect, useRef } from "react";
import TableRow from "./TableRow";
import { getSubjectsService } from "../api/services/subjectServices";
import { GlobalContext } from "../providers/GlobalContext";
import { setCriteria } from "../utils/functions";

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
  const {
    subjectsList,
    setSubjectsList,
    sortParameters,
    setSortParameters,
    defaultSubs,
    searchStr,
    sortedList,
  } = React.useContext(GlobalContext);
  const myRef = useRef<any>(null);

  useEffect(() => {
    if (searchStr !== "") {
      setSubjectsList(searchResult(searchStr));
    } else {
      setSubjectsList(defaultSubs);
    }
  }, [searchStr]);

  const searchResult = (chars: string) => {
    return defaultSubs.filter((subject: any) =>
      subject.name
        .toUpperCase()
        .normalize("NFD")
        .replace(/[^a-zA-Z\s]/g, "")
        .includes(
          chars
            .toUpperCase()
            .normalize("NFD")
            .replace(/[^a-zA-Z\s]/g, "")
        )
    );
  };

  useEffect(() => {
    if (searchStr !== "") {
      setSubjectsList(searchStr);
    } else {
      if (sortParameters.criteria === null) {
        setSubjectsList(defaultSubs);
      } else {
        setSubjectsList(sortedList);
      }
    }
  }, [sortParameters]);

  return (
    <div className="overflow-auto shadow-md border-collapse rounded-md">
      <table
        className="text-base text-center rtl:text-right text-textColor w-full h-full select-none"
        ref={myRef}
      >
        <thead className="text-sm uppercase bg-color1 text-textColor drop-shadow-md">
          <tr className="flex w-full">
            <th
              scope="col"
              className={`py-3 w-[10%] ${"custom"} hover:cursor-pointer flex justify-center gap-1`}
              onClick={() => setCriteria("semester", sortParameters, setSortParameters)}
            >
              <span>Sem.</span>
              {sortParameters.criteria === "semester" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "semester" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`py-3 w-[40%] ${"custom"} hover:cursor-pointer flex justify-center gap-1`}
              onClick={() => setCriteria("name", sortParameters, setSortParameters)}
            >
              <span>Matéria</span>
              {sortParameters.criteria === "name" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "name" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`py-3 w-[10%] ${"custom"} hover:cursor-pointer flex justify-center gap-1`}
              onClick={() => setCriteria("avaGrade", sortParameters, setSortParameters)}
            >
              <span>Ava</span>
              {sortParameters.criteria === "avaGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "avaGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`py-3 w-[10%] ${"custom"} hover:cursor-pointer flex justify-center gap-1`}
              onClick={() => setCriteria("pimGrade", sortParameters, setSortParameters)}
            >
              <span>Pim</span>
              {sortParameters.criteria === "pimGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "pimGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`py-3 w-[10%] ${"custom"} hover:cursor-pointer flex justify-center gap-1`}
              onClick={() => setCriteria("examGrade", sortParameters, setSortParameters)}
            >
              <span>Prova</span>
              {sortParameters.criteria === "examGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "examGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`py-3 w-[10%] ${"custom"} hover:cursor-pointer flex justify-center gap-1`}
              onClick={() => setCriteria("avg", sortParameters, setSortParameters)}
            >
              <span>Média</span>
              {sortParameters.criteria === "avg" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "avg" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
            <th
              scope="col"
              className={`py-3 w-[10%] ${"custom"} hover:cursor-pointer flex justify-center gap-1`}
              onClick={() => setCriteria("retakeGrade", sortParameters, setSortParameters)}
            >
              <span>Exame</span>
              {sortParameters.criteria === "retakeGrade" &&
                sortParameters.ascending && <AscendingTrue />}
              {sortParameters.criteria === "retakeGrade" &&
                !sortParameters.ascending && <AscendingFalse />}
            </th>
          </tr>
        </thead>
        <tbody
          id="table"
          className="block scroll overflow-y-auto h-[587px] no-scrollbar bg-color3 scroll-smooth"
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
