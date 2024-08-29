import React from "react";
import { GlobalContext } from "../providers/GlobalContext";

export default function DebugScreen() {
  const { formFields, activeModal, sortParameters } = React.useContext(GlobalContext);

  return (
    <div className="bg-black text-yellow-300 fixed top-80 left-10 z-[100] w-80 flex-wrap opacity-80">
      <p>Nome: {formFields.name}</p>
      <p>Sem: {formFields.semester}</p>
      <p>AVA: {formFields.avaGrade}</p>
      <p>PIM: {formFields.pimGrade}</p>
      <p>Prova: {formFields.examGrade}</p>
      <p>Média: {formFields.avg}</p>
      <p>Exame: {formFields.retakeGrade}</p>
      ----------------------------------------------
      <p>Modal: {activeModal}</p>
      ----------------------------------------------
      <p>SortParameters: {JSON.stringify(sortParameters)}</p>
    </div>
  );
}
