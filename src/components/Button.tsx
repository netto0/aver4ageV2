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
  btnClass = `text-white inline-flex items-center bg-${color}-600 hover:bg-${color}-700 focus:ring-2 focus:outline-none focus:ring-${color}-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center drop-shadow-sm`;
  // btnClass = `text-white inline-flex items-center bg-${color}-600 hover:bg-${color}-700 focus:ring-2 focus:outline-none focus:ring-${color}-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center drop-shadow-sm`;

  return (
    <button type={type} className={btnClass} onClick={clickFunc} {...rest}>
      {children}
    </button>
  );
}
