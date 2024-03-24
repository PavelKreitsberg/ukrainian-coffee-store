import Button from "./Button";

const Hero = () => {
  return (
    <div
      className={`flex flex-col justify-end items-center w-full h-[360px] bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-cover bg-center`}
    >
      <h1 className="text-center text-[white] text-[36px]">
        Welcome to BeanBrew
      </h1>
      <p className="text-center text-[white] p-[16px]">
        Savor the pleasure of freshly roasted coffee delivered straight to your
        doorstep. Explore our world of aromatic blends and single-origin
        specials.
      </p>
      <div className="flex">
        <Button text="Order Now" />
        <Button text="Discover More" />
      </div>
    </div>
  );
};

export default Hero;
