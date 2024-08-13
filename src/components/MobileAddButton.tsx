import React from "react";
import { GlobalContext } from "../providers/GlobalContext";

export default function MobileAddButton() {
  const { setActiveModal } = React.useContext(GlobalContext);
  
  return (
    <button
      className="sticky block sm:hidden bottom-6 ml-auto mr-6"
      onClick={() => setActiveModal("add")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="currentColor"
        className="bi bi-plus-circle-fill text-customOrange"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
      </svg>
    </button>
  );
}
