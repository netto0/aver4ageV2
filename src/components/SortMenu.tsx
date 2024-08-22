interface IProps {
  show: boolean;
}

export default function SortMenu({ show }: IProps) {
  return (
    <div
      className={`bg-color1 ${
        !show && "hidden"
      } sm:hidden flex items-center justify-center py-3 gap-3`}
    >
      <select
        name="sortItem"
        id="sortItem"
        className="bg-color2 px-2 py-1.5 rounded-md text-textColor focus:outline-none"
      >
        <option value="semester">Semestre</option>
        <option value="name">Nome</option>
        <option value="ava">AVA</option>
        <option value="pim">PIM</option>
        <option value="exam">Prova</option>
        <option value="avg">Média</option>
        <option value="rtk">Exame</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-arrow-right text-customOrange"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
        />
      </svg>
      <select
        name="sortItem"
        id="sortItem"
        className="bg-color2 px-2 py-1.5 rounded-md text-textColor focus:outline-none"
      >
        <option value="ascending">Crescente</option>
        <option value="descending">Decrescente</option>
      </select>
    </div>
  );
}
