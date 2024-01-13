export default function StudentTableContainer({ children }) {
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        {children}
      </table>
    </div>
  );
}
