interface Props {
  type?: "submit" | undefined;
  children?: any;
  clickFunc?: () => void;
  color?: "gray" | "green" | "red";
}

export default function Button({
  type,
  clickFunc,
  children,
  color = "gray",
  ...rest
}: Props) {
  let btnClass: string;
  switch (color) {
    case "gray":
      btnClass =
        "text-gray-300 inline-flex items-center bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center drop-shadow-sm";
      break;
    case "green":
      btnClass =
        "text-gray-300 inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center drop-shadow-sm";
      break;
    case "red":
      btnClass =
        "text-gray-300 inline-flex items-center bg-red-600 hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center drop-shadow-sm";
      break;
    default:
      btnClass =
        "text-gray-300 inline-flex items-center bg-gray-600 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center drop-shadow-sm";
  }
  return (
    <button type={type} className={btnClass} onClick={clickFunc} {...rest}>
      {children}
    </button>
  );
}
