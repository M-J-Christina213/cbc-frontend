import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(props); // Check the props for debugging
  return (
    <Link className="minw-[300px] bg-accent h-[450px] "to={`/productInfo/${props.product.productID}`}>
      
    </Link>
  );
}
