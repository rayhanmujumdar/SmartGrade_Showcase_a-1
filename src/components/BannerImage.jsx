import hero_graphics from "../assets/hero-graphics.svg";
export default function BannerImage() {
  return (
    <img
      className="md:order-2 object-cover ml-auto animate-updown"
      src={hero_graphics}
      width="500px"
      height="500px"
      alt="Banner"
    />
  );
}
