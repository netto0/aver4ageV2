interface Props {
  texto: string;
  funcao?: () => void;
}

export default function Button({ texto, funcao }: Props) {
  return (
    <button
      className="bg-gray-400 px-4 py-2 rounded-md text-gray-800 font-bold drop-shadow-md hover:scale-105 active:bg-gray-500 transition-colors"
      onClick={funcao}
    >
      {texto}
    </button>
  );
}
