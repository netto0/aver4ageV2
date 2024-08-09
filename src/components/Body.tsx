import React, { useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Table from "./Table";
import AddSubModal from "./modals/AddSubModal";
import DelSubModal from "./modals/DelSubModal";
import { GlobalContext } from "../providers/GlobalContext";
import { ToastContainer } from "react-toastify";

export default function Body() {
  const { activeModal, setActiveModal, searchStr, setSearchStr, getSubjects } =
    React.useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
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
    <>
      <div
        className={`absolute w-full h-screen left-0 z-40 backdrop-blur-sm ${
          !activeModal && "hidden"
        }`}
        onClick={() => setActiveModal(false)}
      />
      <main className="w-full bg-color2 grow px-[8%] hidden sm:flex flex-col justify-center">
        <div className="relative flex flex-col gap-4">
          <div id="searchBarField" className="flex justify-around gap-4">
            <Button clickFunc={() => setActiveModal("add")}>+</Button>
            <Input
              name="search"
              type="text"
              handleChange={handleChange}
              value={searchStr}
              placeholder="Digite o que deseja buscar..."
            />
          </div>

          <Table />
          {activeModal == "add" && <AddSubModal />}
          {activeModal == "del" && <DelSubModal />}
          {activeModal == "edit" && <AddSubModal edit={true} />}
        </div>
        <ToastContainer />
      </main>
    </>
  );
}
