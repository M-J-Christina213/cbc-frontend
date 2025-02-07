import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <Link
      to={`/productInfo/${props.product.productID}`}
      className="group"
    >
      <div className="bg-white w-[300px] h-[450px] m-[30px] rounded-xl shadow-lg hover:shadow-2xl hover:border-[3px] transition-shadow duration-300 overflow-hidden flex flex-col">
        <div className="h-[60%] overflow-hidden max-h-[400px]">
          <img
            src={props.product.images[0]}
            alt={props.product.productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className=" max-h-[40%] h-[40%]">
       
            <h1 className="text-xl text-center font-bold text-primary group-hover:text-secondary transition-colors">
                {props.product.productName}
            </h1>
            <h2 className="text-lg text-gray-500 text-center">
              {props.product.productID}
            </h2>
            <p className="text-lg  text-left font-semibold"> LKR. 
                {props.product.lastPrice.toFixed(2)}
            </p>
            {
                (props.product.lastPrice < props.product.price) &&

                <p className="text-lg  text-left font-semibold line-through text-gray-500"> LKR. 
                {props.product.price.toFixed(2)}
            </p>
            }
            
            
          
         </div> 
        </div>
      
    </Link>
  );
}
