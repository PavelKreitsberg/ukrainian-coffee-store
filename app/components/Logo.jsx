import Image from "next/image";
import LogoIcon from "../../public/coffee-cup.svg";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      {/* <Image
        src={LogoIcon}
        alt="logo-icon"
        className="w-5 mr-1 h-auto fill-red fill-black"
      /> */}

      <p className="text-[24px]">Ukrainian Coffee Store</p>
    </div>
  );
};

export default Logo;
