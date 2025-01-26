import { Link } from "react-router-dom";

export default function ProductCard(props) {
  console.log(props); // Check the props for debugging
  return (
    <Link to={`/productInfo/${props.product.productID}`}>
      <div className=" bg-secondary w-[300px] h-[400px] m-[10px] rounded-xl shadow-lg shadow-gray-500 hover:shadow-white hover:border-primary hover:border-[3px]" >
        
        
      </div>
    </Link>
  );
}
