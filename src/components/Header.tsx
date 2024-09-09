import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="hidden bg-color1 sm:flex min-h-20 justify-center items-center text-2xl z-10 text-textColor drop-shadow-sm">
      <div className="px-12">
        <a
          href="/"
          className="font-bold text-3xl text-textColor hover:cursor-pointer hover:scale-110 transition"
        >
          AVER<span className="text-customOrange">4</span>AGE
        </a>
      </div>
      <nav className="h-full flex items-center grow">
        <ul className="flex justify-around w-full">
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-customOrange font-semibold" : ""
              }
            >
              MÉDIAS
            </NavLink>
          </li>
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition">
            <NavLink
              to={"/charts"}
              className={({ isActive }) =>
                isActive ? "text-customOrange font-semibold" : ""
              }
            >
              GRÁFICOS
            </NavLink>
          </li>
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition">
            <NavLink
              to={"/settings"}
              className={({ isActive }) =>
                isActive ? "text-customOrange font-semibold" : ""
              }
            >
              CONFIGURAÇÕES
            </NavLink>
          </li>
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition">
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? "text-customOrange font-semibold" : ""
              }
            >
              PERFIL
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
