import Image from "next/image";
import Button from "./Button";
import { brandonGrotesque } from "../ui/fonts";

const ProductCard = ({ item }) => {
  const { name, description, imgPath, praiceInKopeks, brand, notes } = item;
  return (
    <div className="w-full h-[470px] flex-col items-center justify-center border p-4">
      <div className="w-full flex-col items-center">
        <Image
          src={imgPath}
          alt={name}
          priority={true}
          className="w-[150px] mx-auto"
        />
      </div>
      <h3 className="text-base font-medium text-center text-textColor my-3">
        {name}
      </h3>
      <p
        className={`${brandonGrotesque.className} text-center text-sm uppercase italic mb-4`}
      >
        {brand}
      </p>
      <ul className="flex justify-around mb-3">
        {notes.map((note) => {
          return (
            <li key={note}>
              <p className="uppercase">{note}</p>
            </li>
          );
        })}
      </ul>
      <p className={`${brandonGrotesque.className} text-center mb-3 italic`}>
        {praiceInKopeks / 100} UAH
      </p>
      <div className="flex justify-center">
        <Button text={"Add to cart"} />
        <Button text={"Buy"} />
      </div>
    </div>
  );
};

export default ProductCard;
