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
};

const ProductsGallary = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <ProductCard item={itemInfo} />
    </div>
  );
};

export default ProductsGallary;
