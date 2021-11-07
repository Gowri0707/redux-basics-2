import {  configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import UIReducer from "./UI";

const reduxStore = configureStore({
    reducer: {cart: cartReducer, ui: UIReducer}
});

export default reduxStore;