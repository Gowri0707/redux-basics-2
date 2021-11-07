import axios from "axios";
import { cartActions } from "./Cart";
import { uiActions } from "./UI";

export const sendCartData = (cartData) => {
    return (dispatch) => {
      dispatch(
        uiActions.showNotifications({
          status: "Pending",
          title: "Pending",
          message: "waiting for response!!",
        })
      );
      const sendRequest = async () => {
        try {
          const response = await axios({
            url: "https://shop-redux-e6ab8-default-rtdb.firebaseio.com/redux.json",
            data: JSON.stringify(cartData),
            method: "PUT",
          });
          if(response) {
            dispatch(
              uiActions.showNotifications({
                status: "success",
                title: "Success",
                message: "Cart data successfully saved!!",
              })
            );
          }
        } catch(error) {
          dispatch(
            uiActions.showNotifications({
              status: "error",
              title: "Error",
              message: "SendCart data failed!!",
            })
          );
        }
      }
      sendRequest();
    }
  }

export const fetchCartData = () => {
return dispatch => {
    const fetchData = async() => {
        try{
            const response = await axios({
                url: "https://shop-redux-e6ab8-default-rtdb.firebaseio.com/redux.json",
                method: "GET",
              });
            if(response.data) {
                dispatch(cartActions.replaceCart(response.data))
            }
        } catch(error) {
            dispatch(
                uiActions.showNotifications({
                  status: "error",
                  title: "Error",
                  message: "Fetch cart data failed!!",
                })
              );
        }
    }
    fetchData();
}
}