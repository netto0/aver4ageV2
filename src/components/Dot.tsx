interface Props {
  color?: number;
}

export default function Dot({ color = 1 }: Props) {
    if(color == 1) {
        return <div className={"w-2 h-2 bg-yellow-500 rounded absolute top-2 right-[30%]"} />
    } else {
        return <div className={"w-2 h-2 bg-red-500 rounded absolute top-2 right-[30%]"} />
    }
}
