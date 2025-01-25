import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(props); // Check the props for debugging
  return (
    <Link to={`/productInfo/${props.product.productID}`}>
      <div className="flex flex-col items-center">
        <img
          src={props.product.image}
          alt={props.product.productName}
          className="h-40 w-40 object-cover"
        />
        <h1>{props.product.productName}</h1>
        <p>{props.product.description}</p>
        <p>{props.product.price}</p>
      </div>
    </Link>
  );
}
