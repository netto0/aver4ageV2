import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Table from "./Table";
import AddSubModal from "./AddSubModal";
import DelSubModal from "./DelSubModal";
import { GlobalContext } from "../providers/GlobalContext";

export default function Body() {
  const {
    activeModal,
    setActiveModal,
  } = React.useContext(GlobalContext);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="w-full bg-lightGray grow px-[8%] flex flex-col justify-center">
      <span className="z-50">{activeModal ? activeModal : "false"}</span>
      <div
        className={`absolute w-screen h-screen left-0 z-40 backdrop-blur-sm ${
          !activeModal && "hidden"
        }`}
        onClick={() => setActiveModal(false)}
      />
      <div className="relative flex flex-col gap-4">
        <div id="searchBarField" className="flex justify-around gap-4">
          <Button text="+" func={() => setActiveModal("add")} />
          <Input
            placeholder="Digite o que deseja buscar..."
            name="search"
            value={search}
            handleChange={handleChange}
          />
          <Button text="OK" />
        </div>
        <Table />
        {activeModal &&
          (activeModal == "add" ? (
            <AddSubModal />
          ) : (
            <DelSubModal />
          ))}
        {/* {addModal && <AddSubModal setShow={toggleAddModal} />}
        {delModal && <DelSubModal setShow={toggleDelModal} />} */}
      </div>
    </main>
  );
}
