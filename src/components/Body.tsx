import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Table from "./Table";
import AddSubModal from "./modals/AddSubModal";
import DelSubModal from "./modals/DelSubModal";
import { GlobalContext } from "../providers/GlobalContext";
import { ToastContainer } from "react-toastify";

export default function Body() {
  const {
    activeModal,
    setActiveModal,
    formFields,
    getSubjects,
    // sortParameters,
  } = React.useContext(GlobalContext);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    getSubjects();
  }, []);

  function clearUrl(url: string) {
    const urlObj = new URL(url);
    urlObj.search = "";
    window.history.replaceState({}, "", urlObj.toString());
  }
  clearUrl(window.location.href);
  
  return (
    <main className="w-full bg-gray-800 grow px-[8%] flex flex-col justify-center">
      <span className="z-50 text-yellow-600 pb-1">
        {/* Modal: {activeModal ? activeModal : "false"} | Form:{" "} */}
        {JSON.stringify(formFields)}
        {/* {JSON.stringify(sortParameters)} */}
      </span>
      <div
        className={`absolute w-screen h-screen left-0 z-40 backdrop-blur-sm ${
          !activeModal && "hidden"
        }`}
        onClick={() => setActiveModal(false)}
      />
      <div className="relative flex flex-col gap-4">
        <div id="searchBarField" className="flex justify-around gap-4">
          <Button clickFunc={() => setActiveModal("add")}>+</Button>
          <Input
            name="search"
            type="text"
            handleChange={handleChange}
            value={search}
            placeholder="Digite o que deseja buscar..."
          />
          <Button clickFunc={() => console.log("Nada ainda")}>OK</Button>
        </div>
        <Table />
        {activeModal == "add" && <AddSubModal />}
        {activeModal == "del" && <DelSubModal />}
        {activeModal == "edit" && <AddSubModal edit={true} />}
      </div>
      <ToastContainer />
    </main>
  );
}
