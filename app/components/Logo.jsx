import Image from "next/image";
import LogoIcon from "../../public/chemex.svg";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <Image src={LogoIcon} alt="logo-icon" className="w-5 mr-1 h-auto" />
      <p className="text-[24px] font-bold">Ukrainian Coffee Store</p>
    </div>
  );
};

export default Logo;
