import { useNavigate } from "react-router";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: number;
}

const ProductCard = ({ image, title, price, id }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow hover:shadow-lg transition-shadow duration-300"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-gray-600 mt-2 mb-4">${price}</p>
        <button className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
