import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Table from "./Table";
import AddSubModal from "./AddSubModal";

export default function Body() {
  // interface formFields {
  //   name: string,
  //   semester: number,
  //   avaQtt: number,
  //   pim: number,
  //   exam: number,
  //   avaGrades?: [number]
  // }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="w-full bg-lightGray grow px-[8%] flex flex-col justify-center">
      <div
        className={`absolute w-screen h-screen left-0 z-50 backdrop-blur-sm ${
          !showModal && "hidden"
        }`}
        onClick={toggleModal}
      />
      <div className="relative flex flex-col gap-4">
        <div id="searchBarField" className="flex justify-around gap-4">
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
        {showModal && <AddSubModal setShow={toggleModal} />}
      </div>
    </main>
  );
}
