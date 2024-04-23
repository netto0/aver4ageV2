interface Props {
    semester: number;
    subject: string;
    ava: number;
    pim: number;
    exam: number;
    avg: number;
    rtk: number
}

export default function TableRow({semester, subject, ava, pim, exam, avg, rtk}: Props) {
    return (
        <tr className="bg-white border-b dark:bg-darkerGray dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900 min-w-fit truncate"
            >
              {semester}
            </th>
            <td className="px-6 py-4 truncate bg-red-500">{subject}</td>
            <td className="px-6 py-4">{ava}</td>
            <td className="px-6 py-4">{pim}</td>
            <td className="px-6 py-4">{exam}</td>
            <td className="px-6 py-4">{avg}</td>
            <td className="px-6 py-4">{rtk}</td>
            {/* <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td> */}
          </tr>
    )
}