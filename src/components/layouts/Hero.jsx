export default function Hero({ children }) {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}
