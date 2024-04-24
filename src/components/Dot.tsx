interface Props {
    color?: string
}

export default function Dot({color = "yellow"}: Props) {
    return (
        <div className={`w-2 h-2 bg-${color}-500 rounded absolute top-2 right-4`} />
    )
}