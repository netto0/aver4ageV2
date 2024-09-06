import React from "react";
import avatarImage from "../../assets/avatar-default.svg";
import { GlobalContext } from "../../providers/GlobalContext";
import { NavLink } from "react-router-dom";

export default function SideMenu() {
  const { closeModal, activeModal } = React.useContext(GlobalContext);

  return (
    <div className={`sm:hidden absolute z-50 rounded-l-xl w-52 bg-color2 text-textColor shadow-2xl select-none transition-all right-0 ${activeModal == "side" ? "top-0" : "-top-full"}`}>
      <div className="bg-color1 flex px-3 py-3 items-center justify-between rounded-tl-xl">
        <div>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-customOrange font-semibold flex items-center gap-3 transition-colors"
                : "flex items-center gap-3 transition-colors"
            }
          >
            <div className="bg-textColor w-9 h-9 rounded-full">
              <img src={avatarImage} alt="avatar" className="scale-75" />
            </div>
            <span className="text-xl">John Doe</span>
          </NavLink>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-x hover:cursor-pointer hover:text-color1 transition-all"
          viewBox="0 0 16 16"
          onClick={closeModal}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </div>
      <div>
        <ul className="text-xl px-6 pt-2 pb-6 flex flex-col gap-2">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-customOrange font-semibold flex items-center gap-3 transition-colors"
                  : "flex items-center gap-3 transition-colors"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-123"
                viewBox="0 0 16 16"
              >
                <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
              </svg>
              <span>Médias</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/charts"
              className={({ isActive }) =>
                isActive
                  ? "text-customOrange font-semibold flex items-center gap-3 transition-colors"
                  : "flex items-center gap-3 transition-colors"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-bar-chart"
                viewBox="0 0 16 16"
              >
                <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
              </svg>
              <span>Gráficos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? "text-customOrange font-semibold flex items-center gap-3 transition-colors"
                  : "flex items-center gap-3 transition-colors"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-sliders2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5M12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8m9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5m1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
                />
              </svg>
              <span>Configurações</span>
            </NavLink>
          </li>
          <li className="flex items-center gap-3 transition-colors">
          <NavLink
              to="/placeholder"
              className={({ isActive }) =>
                isActive
                  ? "text-customOrange font-semibold flex items-center gap-3 transition-colors"
                  : "flex items-center gap-3 transition-colors"
              }
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-braces"
              viewBox="0 0 16 16"
            >
              <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
            </svg>
            <span>PlaceHolder</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
