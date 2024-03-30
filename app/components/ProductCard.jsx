import Image from "next/image";
import Button from "./Button";

const ProductCard = ({ item }) => {
  const { name, description, imgPath, praiceInKopeks } = item;
  return (
    <div className="w-[250px] h-[450px] flex-col rounded-l border-2 p-2">
      <div className="w-full flex-col items-center mb-2">
        <Image src={imgPath} alt="coffee img" className="w-[150px] mx-auto" />
      </div>
      <h3 className="text-s">{name}</h3>
      <p className="">{description}</p>
      <p className="">{praiceInKopeks / 100} UAH</p>
      <Button text={"Add to cart"} />
      <Button text={"Buy"} />
      {/* <button
        type="button"
        className="bg-black hover:bg-gray-600 text-white py-1 w-11/12 rounded-xl mb-2"
      >
        Add to Cart
      </button>
      <button
        type="button"
        className="bg-black hover:bg-gray-600 text-white py-1 w-11/12 rounded-xl"
      >
        Buy
      </button> */}
    </div>
  );
};

export default ProductCard;
