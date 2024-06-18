
import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'

import Button from './UI/Button';
import CartContext from './store/CartContext';
import UserProgressContext from './store/UserProgress';

export default function Header(){

    const CartCtx=useContext(CartContext);
    const total_items=CartCtx.items.reduce((total,item)=>{
        return total+item.quantity;
    },0)

    const dialogCtx=useContext(UserProgressContext);

    function handleShowCart(){
        dialogCtx.showCart();
    }

    return (
        <>
        
        <header id="main-header">
            <div id="title">
                <img src={logoImg}></img>
                <h1>
                    React Food
                </h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={handleShowCart}>Cart({total_items})</Button>
            </nav>
        </header>
        </>
    )
}
