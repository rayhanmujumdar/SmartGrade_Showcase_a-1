import avatar from "../assets/avatar.jpg";
export default function ResultTableRow({ student, index }) {
  const { name, grade, mark } = student;
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={avatar}
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{grade}</td>
      <td className="p-5 text-sm md:text-xl text-center">{mark}%</td>
    </tr>
  );
}
