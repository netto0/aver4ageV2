import Dot from "./Dot";

interface Props {
  id: string;
  semester: number;
  subject: string;
  ava: number;
  exam: number;
  avg: number | null;
  pim: number | null;
  rtk: number | null;
}

export default function TableRow({
  id,
  semester,
  subject,
  ava,
  pim,
  exam,
  avg,
  rtk,
}: Props) {
  return (
    <tr className="bg-darkGray border-b border-gray-500 flex items-center" key={id}>
      <td className="py-4 w-[10%] ">{semester}</td>
      <td className="w-[30%] px-6 py-2 truncate ">{subject}</td>
      <td className="relative w-[10%] ">
        {!ava ? "∅" : ava}
        {!ava && <Dot />}
      </td>
      <td className="relative w-[10%] ">
        {!pim ? "∅" : pim}
        {!pim && <Dot />}
      </td>
      <td className="relative w-[10%] ">
        {!exam ? "∅" : exam}
        {!exam && <Dot />}
      </td>
      <td className="relative w-[10%] ">
        {!avg ? "∅" : avg}
        {!avg && <Dot />}
      </td>
      <td className="relative w-[10%] ">
        {!rtk ? "∅" : rtk}
        {!rtk && <Dot />}
      </td>
      <td className="relative w-[10%] ">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
    // <tr className="bg-white border-b dark:bg-darkerGray dark:border-gray-700">
    //   <td className="py-4 w-24">
    //     {semester}
    //   </td>
    //   <td className="truncate">{subject}</td>
    //   <td className="relative w-24">
    //     {!ava ? "∅" : ava}
    //     {!ava && <Dot />}
    //   </td>
    //   <td className="relative w-24">
    //     {!pim ? "∅" : pim}
    //     {!pim && <Dot />}
    //   </td>
    //   <td className="relative w-24">
    //     {!exam ? "∅" : exam}
    //     {!exam && <Dot />}
    //   </td>
    //   <td className="relative w-24">
    //     {!avg ? "∅" : avg}
    //     {!avg && <Dot />}
    //   </td>
    //   <td className="relative w-24">
    //     {!rtk ? "∅" : rtk}
    //     {!rtk && <Dot />}
    //   </td>
    // </tr>
  );
}
