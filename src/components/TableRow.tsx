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
    <tr
      className="bg-darkGray border-b border-gray-500 flex items-center h-14 text-center"
      key={id}
    >
      <td className="w-[10%] h-full flex flex-col justify-center">
        {semester}
      </td>
      <td className="w-[30%] truncate h-full flex flex-col justify-center">
        {subject}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!ava ? "∅" : ava}
        {!ava && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!pim ? "∅" : pim}
        {!pim && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!exam && <Dot />}
        {!exam ? "∅" : exam}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!avg ? "∅" : avg}
        {!avg && <Dot />}
        {avg && avg! < 7 && <Dot color={2} />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        {!rtk ? "∅" : rtk}
        {!rtk && <Dot />}
      </td>
      <td className="relative w-[10%] h-full flex flex-col justify-center">
        <div className="flex w-full max-w-24 self-center justify-around items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            // fill="darkerGray"
            className="bi bi-pencil-fill fill-gray-600  hover:cursor-pointer transition-all hover:fill-green-500"
            viewBox="0 0 16 16"
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-trash-fill fill-gray-600 hover:cursor-pointer transition-all hover:fill-red-500"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </div>
      </td>
    </tr>
  );
}
