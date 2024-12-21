export default function ProductCart(props){
    return (
        <div>
            <h1>
                { props.name}
            </h1>
            <h2>
                Price: {props.price}
            </h2>
            <button>
                Add to Cart
            </button>
        </div>
    )
}