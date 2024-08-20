import React from "react";
import Button from "./Button";
import Input from "./Input";
import Table from "./Table";
import { GlobalContext } from "../providers/GlobalContext";

export default function Body() {
  const { setActiveModal, searchStr, setSearchStr } =
    React.useContext(GlobalContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  function clearUrl(url: string) {
    const urlObj = new URL(url);
    urlObj.search = "";
    window.history.replaceState({}, "", urlObj.toString());
  }
  clearUrl(window.location.href);

  return (
    <>
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
        </div>
      </main>
    </>
  );
}
