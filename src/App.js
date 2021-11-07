import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import "./App.css";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Header from "./components/Header/Header";
import ProductList from "./components/Product/ProductList";
import Notification from "./components/Notification/Notification";
// import { uiActions } from "./store/UI";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const { cartItems, totalQuantity, showShoppingCart, changed } = useSelector(
    (state) => state.cart
  );
  const notification = useSelector((state) => state.ui.notificationData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(changed) {
      dispatch(
        sendCartData({
          items: cartItems,
          totalQuantity: totalQuantity,
        })
      );
    }
  }, [cartItems, changed, totalQuantity, dispatch]);

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     try {
  //       dispatch(
  //         uiActions.showNotifications({
  //           status: "Pending",
  //           title: "Pending",
  //           message: "waiting for response!!",
  //         })
  //       );
  //       await axios({
  //         url: "https://shop-redux-e6ab8-default-rtdb.firebaseio.com/redux.json",
  //         data: JSON.stringify({
  //           items: cartItems,
  //           totalQuantity: totalQuantity,
  //         }),
  //         method: "PUT",
  //       });
  //     } catch(error) {
  //       throw new Error("something went wrong")
  //     }
  //   };
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   sendRequest()
  //     .then((response) => {
  //         dispatch(
  //           uiActions.showNotifications({
  //             status: "success",
  //             title: "Success",
  //             message: "Cart data successfully saved!!",
  //           })
  //         );
  //     })
  //     .catch((error) => {
  //       dispatch(
  //         uiActions.showNotifications({
  //           status: "error",
  //           title: "Error",
  //           message: "SendCart data failed!!",
  //         })
  //       );
  //     });
  // }, [cartItems, totalQuantity, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Header />
      {showShoppingCart && <ShoppingCart />}
      <ProductList />
    </div>
  );
}

export default App;
