import Product from "./Product";
import classes from "./ProductList.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "m1",
    name: "Doctor",
    description: "SivaKarthikeyan Movie",
    price: "6.00",
  },
  {
    id: "m2",
    name: "Jai Bhim",
    description: "Surya Movie",
    price: "16.00",
  }
];

const ProductList = () => {
  return (
    <>
      <h1 className={classes['product-quote']}>BUY YOUR FAVOURITE PRODUCTS</h1>
      <div className={classes["product-card"]}>
        {DUMMY_PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
