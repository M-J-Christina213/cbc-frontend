export default function CartCard(props){

    const productID = props.productID
    const qty = props.qty

    return (
        <div className="border w-1/2 flex justify-between items-center">
            <span> {productID} </span>
            <span> X </span>
            <span> {qty} </span>
        </div>
    )
}