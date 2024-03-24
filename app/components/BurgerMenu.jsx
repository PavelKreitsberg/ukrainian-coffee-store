import clsx from "clsx";
import NavBar from "./NavBar";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <div
      className={clsx(
        "fixed top-[0] left-[0] flex flex-col justify-center items-center [transition:0.5s] overflow-hidden w-screen bg-[white]",
        {
          "h-full delay-[0ms] px-[20px] py-[16px]": open === true,
          "h-0 delay-500 p-0": open === false,
        }
      )}
    >
      <NavBar />
    </div>
  );
};

export default BurgerMenu;
