import ImageSlider from "./ImageSlider";

const slides = [
  {
    url: "https://res.cloudinary.com/drexqibru/image/upload/v1716559926/b13nylaihdm2lccuxw9c.jpg",
    title: "hero-image-1",
  },
  { url: "https://res.cloudinary.com/drexqibru/image/upload/v1716560136/j584ldodx3hgwosrjgp1.jpg", title: "hero-image-2" },
  { url: "https://res.cloudinary.com/drexqibru/image/upload/v1716560248/wlyef62vnoez3gjua14e.jpg", title: "hero-image-3" },
];

export type Slides = {
  url: string;
  title: string;
};
const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-60px)] my-0 mx-auto">
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Hero;
