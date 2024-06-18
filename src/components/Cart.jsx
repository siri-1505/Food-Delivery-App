import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgress";
import CartItem from "./CartItem";

export default function Cart(){

    const cartCtx=useContext(CartContext)
    const cartTotal=cartCtx.items.reduce((totalPrice,item)=>
        totalPrice+item.quantity*item.price
    ,0)

    const userProgressCtx=useContext(UserProgressContext);

    function handleClose(){
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout(){
        userProgressCtx.showCheckout();
    }

    return <Modal className="cart" open={userProgressCtx.progress==='cart'} onClose={userProgressCtx.progress==='cart' ? handleClose:null}>
        <h2>Your Cart</h2>
        <ul id="cart">
        {cartCtx.items.map((items)=>(
            <CartItem key={items.id} item={items}></CartItem>
        ))}
    </ul>
    <p className="cart-total">
        {currencyFormatter.format(cartTotal)}
    </p>
    <p className="modal-actions">
        <Button textOnly onClick={handleClose}>Close</Button>
        {cartCtx.items.length>0 && (<Button onClick={handleGoToCheckout}>Check Out</Button>)}
    </p>
    </Modal>
}