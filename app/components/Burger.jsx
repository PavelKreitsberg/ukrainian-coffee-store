"use client";

import clsx from "clsx";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="relative top-[0] right-[0] h-[19px] w-[30px] z-10 hover:cursor-pointer"
      >
        <span
          className={clsx(
            "absolute w-full h-[3px] top-2/4 left-[0] block [transition:0.5s] bg-black",
            {
              "rotate-0 top-[16px]": open === false,
              "rotate-[405deg]": open === true,
            }
          )}
        />
        <span
          className={clsx(
            "absolute w-full h-[3px] top-2/4 left-[0] block [transition:0.5s] bg-black",
            {
              "opacity-100": open === false,
              "opacity-0": open === true,
            }
          )}
        />
        <span
          className={clsx(
            "absolute w-full h-[3px] top-2/4 left-[0] block [transition:0.5s] bg-black",
            {
              "rotate-0 top-[3px]": open === false,
              "-rotate-[405deg]": open === true,
            }
          )}
        />
      </div>
      <BurgerMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Burger;
