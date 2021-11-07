import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/Cart";

const CartButton = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const cartButtonClickHandler = () => {
        dispatch(cartActions.toggleShoppingCart());
    }

    return (
        <button type="button" onClick={cartButtonClickHandler} className={classes['cart-button']}>
            <span>My Cart</span>
            <span className={classes['cart-button__badge']}>{totalQuantity}</span>
        </button>
    )
}

export default CartButton;