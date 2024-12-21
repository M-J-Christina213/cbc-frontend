export default function ProductCart(props){
    return (
        <div>
            <img src={props.src} />
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