import Button from "./Button";

export default function MobileDelModal() {
  return (
    <div className="absolute flex flex-col z-50 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] bg-color3 rounded-lg text-sky-200 font-semibold w-80 text-center">
      <div className="bg-color4 rounded-t-lg py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-x absolute right-1 top-1 hover:cursor-pointer hover:text-color1 transition-all"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
        <h1>Excluir matéria?</h1>
      </div>
      <p className="pt-2 text-2xl">Banco de dados</p>
      <div className="bg-color-4 w-full h-full rounded-b-lg px-4 py-4">
        <Button color="red">Excluir</Button>
      </div>
    </div>
  );
}
