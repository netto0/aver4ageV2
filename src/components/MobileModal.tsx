import React from "react";
import { GlobalContext } from "../providers/GlobalContext";
import Input from "./Input";

export default function MobileModal() {
  const { setActiveModal } = React.useContext(GlobalContext);
  return (
    <div
      className="absolute sm:hidden bg-color2 z-50 w-full h-[150%]"
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
        <button className="bg-customOrange font-semibold text-color1 py-2 px-4 rounded-full">Enviar</button>
      </div>
      <form>
        <Input name="name" type="text" placeholder="Nome" autoComplete="off"/>
        <Input name="name" type="text" placeholder="Semestre" autoComplete="off"/>
        <Input name="name" type="text" placeholder="AVA" autoComplete="off"/>
        <Input name="name" type="text" placeholder="PIM" autoComplete="off"/>
        <Input name="name" type="text" placeholder="Prova" autoComplete="off"/>
        <Input name="name" type="text" placeholder="Exame" autoComplete="off"/>
      </form>
    </div>
  );
}
