import Dot from "./Dot";

interface Props {
  semester: number;
  subject: string;
  ava: number;
  exam: number;
  avg: number | null;
  pim: number | null;
  rtk: number | null;
}

export default function TableRow({
  semester,
  subject,
  ava,
  pim,
  exam,
  avg,
  rtk,
}: Props) {
  return (
    <tr className="bg-white border-b dark:bg-darkerGray dark:border-gray-700 flex">
      <td className="py-4 w-[10%] bg-blue-400">{semester}</td>
      <td className="w-[30%] px-6 py-2 truncate bg-blue-600">{subject}</td>
      <td className="relative w-[10%] bg-blue-400">
        {!ava ? "∅" : ava}
        {!ava && <Dot />}
      </td>
      <td className="relative w-[10%] bg-blue-600">
        {!pim ? "∅" : pim}
        {!pim && <Dot />}
      </td>
      <td className="relative w-[10%] bg-blue-400">
        {!exam ? "∅" : exam}
        {!exam && <Dot />}
      </td>
      <td className="relative w-[10%] bg-blue-600">
        {!avg ? "∅" : avg}
        {!avg && <Dot />}
      </td>
      <td className="relative w-[10%] bg-blue-400">
        {!rtk ? "∅" : rtk}
        {!rtk && <Dot />}
      </td>
      <td className="relative w-[10%] bg-blue-600">
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
