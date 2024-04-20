import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Body() {
  const teste = () => {
    console.log("teste");
  };

  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="w-screen bg-zinc-300 grow px-36 py-7">
      <div
        id="searchBarField"
        className="p-2 flex justify-around gap-4"
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
    </main>
  );
}
