import Checkbox from "./Checkbox";

export default function MobileSubHeader() {
  return (
    <div className="bg-[#010e17] flex sm:hidden text-textColor py-3 px-5 justify-between text-lg">
      <div className="flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-arrow-down-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"
          />
        </svg>
        <span>Ordenar</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Checkbox />
        <span>Completas</span>
      </div>
      <div className="flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-funnel"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
        </svg>
        <span>Filtrar</span>
      </div>
    </div>
    // <div className="bg-[#010e17] flex sm:hidden text-textColor py-3 px-5 justify-between">
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="23"
    //     height="23"
    //     fill="currentColor"
    //     className="bi bi-chevron-left"
    //     viewBox="0 0 16 16"
    //   >
    //     <path
    //       fillRule="evenodd"
    //       d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
    //     />
    //   </svg>
    //   <span className="font-semibold text-customOrange">MÉDIAS</span>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="23"
    //     height="23"
    //     fill="currentColor"
    //     className="bi bi-chevron-right"
    //     viewBox="0 0 16 16"
    //   >
    //     <path
    //       fillRule="evenodd"
    //       d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
    //     />
    //   </svg>
    // </div>
  );
}