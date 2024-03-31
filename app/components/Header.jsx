import Burger from "./Burger";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="absolute z-10 top-[8px] left-[8px] right-[8px]  flex flex-row justify-between items-center p-3 [box-shadow:rgba(0,_0,_0,_0.2)_0px_10px_40px_-10px] rounded-[5px] pt-[8px] bg-white">
      <Logo />
      <Burger />
    </header>
  );
};

export default Header;
