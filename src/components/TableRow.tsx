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
    <tr className="bg-white border-b dark:bg-darkerGray dark:border-gray-700">
      <td className="py-4 w-24">
        {semester}
      </td>
      <td className="truncate">{subject}</td>
      <td className="relative w-24">
        {!ava ? "∅" : ava}
        {!ava && <Dot />}
      </td>
      <td className="relative w-24">
        {!pim ? "∅" : pim}
        {!pim && <Dot />}
      </td>
      <td className="relative w-24">
        {!exam ? "∅" : exam}
        {!exam && <Dot />}
      </td>
      <td className="relative w-24">
        {!avg ? "∅" : avg}
        {!avg && <Dot />}
      </td>
      <td className="relative w-24">
        {!rtk ? "∅" : rtk}
        {!rtk && <Dot />}
      </td>
    </tr>
  );
}
