interface Props {
  func?: () => void;
  children?: any;
  clickFunc: () => void;
  color: "gray" | "green" | "red"
}

export default function Button({ clickFunc, children, color, ...rest }: Props) {
  let btnClass:string
  if(color="green") {
    btnClass = "text-white inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-2 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  }

  
  return (
    <button
      className={btnClass}
      onClick={clickFunc}
      {...rest}
    >
      {children}
    </button>
  );
}
