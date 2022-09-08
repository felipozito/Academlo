import { configureStore } from "@reduxjs/toolkit";
import products from "./Slices/product.slice";

export default configureStore({
      reducer: {
            products,
      },
});
