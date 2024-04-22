export default function Header() {
  return (
    <header className="bg-darkGray h-20 flex justify-center items-center text-2xl text-gray-900 drop-shadow-sm shadow-black">
      <div className="px-12">
        <h1 className="font-bold text-3xl text-gray-800 hover:cursor-pointer hover:scale-110 transition-transform">
          AVER<span className="text-cyan-700">4</span>AGE
        </h1>
      </div>
      <nav className="h-full flex items-center grow">
        <ul className="flex justify-around w-full">
          <li className="text-gray-900 hover:cursor-pointer hover:scale-105 hover:text-cyan-700 hover:font-bold transition">
            <a>INÍCIO</a>
          </li>
          <li className="text-gray-900 hover:cursor-pointer hover:scale-105 hover:text-cyan-700 hover:font-bold transition">
            <a>MÉDIAS</a>
          </li>
          <li className="text-gray-900 hover:cursor-pointer hover:scale-105 hover:text-cyan-700 hover:font-bold transition">
            <a>CONFIGURAÇÕES</a>
          </li>
          <li className="text-gray-900 hover:cursor-pointer hover:scale-105 hover:text-cyan-700 hover:font-bold transition">
            <a>PERFIL</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
