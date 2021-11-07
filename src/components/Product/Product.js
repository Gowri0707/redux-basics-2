import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import classes from "./Product.module.css";

const Product = (props) => {
  const dispatch = useDispatch();
    const addCartButtonHandler = () => {
      dispatch(cartActions.addToCart({
        name: props.product.name,
        price: props.product.price,
        quantity: 1,
        id: props.product.id
      }))
    }

    return (
        <div className={classes["product-item"]}>
        <section className={classes["product-item__title"]}>
          <h1>{props.product.name}</h1>
          <p>{props.product.description}</p>
        </section>
        <section className={classes["product-item__price"]}>
            <h1>${props.product.price}</h1>
            <button type="button" onClick={addCartButtonHandler}>Add to Cart</button>
        </section>
      </div>
    )
}

export default Product;