interface Props {
  texto: string;
  funcao?: () => void;
}

export default function Button({ texto, funcao }: Props) {
  return (
    <button
      className="bg-darkGray px-4 py-2 rounded-md text-gray-800 font-bold drop-shadow-md hover:scale-105 active:bg-darkerGray active:scale-100 transition min-w-12"
      onClick={funcao}
    >
      {texto}
    </button>
  );
}
