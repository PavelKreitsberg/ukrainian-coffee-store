import ProductCard from "./ProductCard";
import imgCard from "../../public/images/8000070030022.png";

const itemInfo = {
  article: "8000070030022",
  isAvailable: true,
  name: "ORO MOUNTAIN GROWN",
  weight: "1kg",
  brand: "Lavazza",
  praiceInKopeks: 75000,
  description: "Арабіка (100%)",
  imgPath: imgCard,
  notes: ["plum", "molasses", "syrupy"],
};

const ProductsGallary = () => {
  return (
    <>
      <h2 className="text-center text-3xl">Оберіть каву</h2>
      <div className="flex flex-col items-center w-full p-4">
        <ProductCard item={itemInfo} />
      </div>
    </>
  );
};

export default ProductsGallary;
