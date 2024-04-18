import Button from "./Button";

export default function Body() {
  
  const teste = () => {
    console.log("teste")
  }

  return (
    <main className="w-screen grow px-36 py-7" >
      <div id="searchBarField" className= "border bg-blue-200 border-black p-2 flex justify-around" >
        <Button texto="+" funcao={teste}/>
        <input type="text" placeholder="Digite o que deseja buscar..."/>
        <Button texto="OK" />
      </div>
    </main>
  );
}
