import { useContext } from "react"
import { currencyFormatter } from "../util/formatting"
import CartContext from "./store/CartContext"

export default function CartItem({item}){

    const cartCtx=useContext(CartContext);

    function handleAddToCart(item){
        cartCtx.addItem(item);
    }

    function handleRemoveFromCart(item){
        cartCtx.removeItem(item);
    }

    return<li className="cart-item">
        <p>
            {item.name}-{item.quantity}*{currencyFormatter.format(item.price)}
        </p>
        <p className="cart-item-actions">
            <button onClick={()=>handleRemoveFromCart(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={()=>handleAddToCart(item)}>+</button>
        </p>
        
    </li>
}