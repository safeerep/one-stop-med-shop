import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/product.slice";

const store = configureStore({
    reducer: {
        product: productSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType< typeof store.getState>
export default store;