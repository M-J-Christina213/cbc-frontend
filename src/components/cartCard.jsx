export default function CartCard(){

    const productId = props.productID
    const qty = props.qty

    return (
        <div className="border w-1/2 flex justify-between items-center">
            <span> {productId} </span>
            <span> X </span>
            <span> {qty} </span>
        </div>
    )
}