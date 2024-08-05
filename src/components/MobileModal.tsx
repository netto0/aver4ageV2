import React from "react";
import { GlobalContext } from "../providers/GlobalContext";
import Input from "./Input";

export default function MobileModal() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name != "name" && e.target.name != "semester") {
      if (parseFloat(e.target.value) >= 10) {
        setFormFields({
          ...formFields,
          [e.target.name]: 10,
        });
      } else if (parseFloat(e.target.value) <= 0) {
        setFormFields({
          ...formFields,
          [e.target.name]: 0,
        });
      } else {
        setFormFields({
          ...formFields,
          [e.target.name]: parseFloat(e.target.value),
        });
      }
    } else {
      setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
  };
  const { formFields, setFormFields } = React.useContext(GlobalContext);
  const { setActiveModal } = React.useContext(GlobalContext);
  return (
    <div
      className="absolute sm:hidden bg-color2 z-50 w-full h-[120%]"
      onClick={() => setActiveModal("add")}
    >
      <div className="flex text-textColor justify-between items-center p-5 bg-color1 sticky top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-x-lg font-bold"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
        <h1 className="text-xl font-semibold">Adicionar matéria</h1>
        <button className="bg-customOrange font-semibold text-color1 py-2 px-4 rounded-full">
          Enviar
        </button>
      </div>
      <form>
        <Input
          name="name"
          type="text"
          placeholder="Nome"
          handleChange={handleChange}
          autoComplete="off"
        />
        <Input
          name="semester"
          type="text"
          placeholder="Semestre"
          handleChange={handleChange}
          autoComplete="off"
        />
        <Input
          name="avaGrade"
          type="text"
          placeholder="AVA"
          handleChange={handleChange}
          autoComplete="off"
        />
        <Input
          name="pimGrade"
          type="text"
          placeholder="PIM"
          handleChange={handleChange}
          autoComplete="off"
        />
        <Input
          name="examGrade"
          type="text"
          placeholder="Prova"
          handleChange={handleChange}
          autoComplete="off"
        />
        <Input
          name="retakeGrade"
          type="text"
          placeholder="Exame"
          handleChange={handleChange}
          autoComplete="off"
        />
      </form>
      <div className="w-fit ml-auto mr-2 mt-2 bg-color4 rounded-xl px-9 py-2 text-center text-textColor flex flex-col items-center">
        <span className="absolute">Média</span>
        <h1 className="text-4xl mt-5">{formFields.avg ? formFields.avg.toFixed(2) : 0.00.toFixed(2)}</h1>
      </div>
    </div>
  );
}
