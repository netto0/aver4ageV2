import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Table from "./Table";
import Modal from "./Modal";

export default function Body() {
  const toggleModal = () => {
    setShowModal(!showModal)
  }


  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="w-full bg-lightGray grow px-[8%] flex flex-col justify-center">
      <div className={`absolute w-screen h-screen left-0 z-50 backdrop-blur-sm ${!showModal && "hidden"}`} onClick={toggleModal}/>
      <div className="relative flex flex-col gap-4">
        <div
          id="searchBarField"
          className="flex justify-around gap-4"
        >
          <Button texto="+" funcao={toggleModal} />
          <Input
            placeholder="Digite o que deseja buscar..."
            name="search"
            value={search}
            handleChange={handleChange}
          />
          <Button texto="OK" />
        </div>
          <Table />
          <Modal show={showModal} setShow={toggleModal}/>
      </div>
    </main>
  );
}
