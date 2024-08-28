export default function Header() {
  return (
    <header className="hidden bg-color1 sm:flex min-h-20 justify-center items-center text-2xl text-textColor drop-shadow-sm">
      <div className="px-12">
        <h1 className="font-bold text-3xl text-textColor hover:cursor-pointer hover:scale-110 transition-transform">
          AVER<span className="text-customOrange">4</span>AGE
        </h1>
      </div>
      <nav className="h-full flex items-center grow">
        <ul className="flex justify-around w-full">
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition text-customOrange font-semibold">
            <a>MÉDIAS</a>
          </li>
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition">
            <a>GRÁFICOS</a>
          </li>
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition">
            <a>CONFIGURAÇÕES</a>
          </li>
          <li className="hover:cursor-pointer hover:scale-105 hover:text-customOrange hover:font-semibold transition">
            <a>PERFIL</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
