function loadCart(){
    const cart = localStorage.getItem("cart");
    if(cart!=null){
        return JSON.parse(cart)
    }else {
        return []
    }
}

export function addToCart(productId, qty)
{
    const cart = loadCart()

    const index = cart.findIndex(
        (item)=>{item.productId==productId

        }
    )
    if(index==-1){
        cart.push(
            {productId, qty}
        )
    }
}