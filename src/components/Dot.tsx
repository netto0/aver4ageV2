interface Props {
  color?: string;
}

export default function Dot({ color = "yellow" }: Props) {
  if(color == "yellow") {
      return <div className={"w-2 h-2 bg-yellow-500 rounded absolute top-2 right-[30%]"} />
  }
  if(color == "red") {
      return <div className={"w-2 h-2 bg-red-500 rounded absolute top-2 right-[30%]"} />
  }
  if(color == "green") {
      return <div className={"w-2 h-2 bg-green-500 rounded absolute top-2 right-[30%]"} />
  }
}
