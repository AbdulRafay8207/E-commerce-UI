interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: ProductCardProps) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>${price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
