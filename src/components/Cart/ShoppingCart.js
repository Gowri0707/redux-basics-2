import classes from "./ShoppingCart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <section className={classes["shop-cart"]}>
            <h2>Your Shopping Cart</h2>
            {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
        </section>
    )
}

export default ShoppingCart;