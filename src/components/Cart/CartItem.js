import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/Cart";

const CartItem = (props) => {
  const dispatch =useDispatch();

  const addButtonHandler = () => {
    dispatch(cartActions.addToCart({
      name: props.cartItem.name,
      price: props.cartItem.price,
      quantity: 1,
      id: props.cartItem.id
    }))
  }

  const removeButtonHandler = () => {
    dispatch(cartActions.removeFromCart({
      id: props.cartItem.id
    }))
  }

  return (
    <div className={classes["cart-item"]}>
      <section className={classes["cart-item__title"]}>
        <h1>{props.cartItem.name}</h1>
        <h2>x{props.cartItem.quantity}</h2>
      </section>
      <section className={classes["cart-item__price"]}>
        <h1>
          ${(props.cartItem.totalPrice)}
          <i className={classes["italic"]}>(${props.cartItem.price}/item)</i>{" "}
        </h1>
        <div className={classes["cart-button"]}>
          <button onClick={removeButtonHandler}>-</button>
          <button onClick={addButtonHandler}>+</button>
        </div>
      </section>
    </div>
  );
};

export default CartItem;
