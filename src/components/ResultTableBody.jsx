import { students } from "../data/students";
import ResultTableRow from "./ResultTableRow";
export default function ResultTableBody() {
  const { classOne, classTwo } = students;
  const classOneResult = classOne.map((student, index) => (
    <ResultTableRow key={student.id} student={student} index={index} />
  ));
  const classTwoResult = classTwo.map((student, index) => (
    <ResultTableRow key={student.id} student={student} index={index} />
  ));
  return (
    <tbody>
      {/* <!-- class two --> */}
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class One
        </td>
      </tr>
      {classOneResult}

      {/* <!-- class two --> */}
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class Two
        </td>
      </tr>
      {classTwoResult}
    </tbody>
  );
}
