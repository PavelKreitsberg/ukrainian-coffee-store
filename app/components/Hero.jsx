import Button from "./Button";

const Hero = () => {
  return (
    <div
      className={`w-full h-[360px] bg-hero3 bg-cover bg-no-repeat bg-center `}
    >
      <div className="bg-[hsla(0,0%,0%,0.6)] h-full pb-4 flex flex-col justify-end items-center">
        {/* <Image
        src={heroImage}
        alt="coffee"
        placeholder="blur"
        quality={100}
        fill
        className="absolute top-0 right-0 -z-10 w-full"
      /> */}
        <h1 className="text-center text-[white] text-4xl">
          Welcome to BeanBrew
        </h1>
        <p className="text-center text-[white] p-[16px]">
          Savor the pleasure of freshly roasted coffee delivered straight to
          your doorstep. Explore our world of aromatic blends and single-origin
          specials.
        </p>
        <div className="flex">
          <Button text="Order Now" />
          <Button text="Discover More" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
