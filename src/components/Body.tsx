import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Table from "./Table";

export default function Body() {
  const teste = () => {
    console.log("teste");
  };

  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="w-full bg-lightGray grow px-[8%] py-7">
      <div className="relative flex flex-col">
        <div
          id="searchBarField"
          className="flex justify-around gap-4 py-4 bg-green-300"
        >
          <Button texto="+" funcao={teste} />
          <Input
            placeholder="Digite o que deseja buscar..."
            name="search"
            value={search}
            handleChange={handleChange}
          />
          <Button texto="OK" />
        </div>
        <Table />
      </div>
    </main>
  );
}
