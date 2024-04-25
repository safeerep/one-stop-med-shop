import { createSlice } from "@reduxjs/toolkit";
import { 
    fetchProducts, 
    fetchSpecificProduct, 
    addProduct
} from "../actions/actions";

const INITIAL_STATE: INITIAL_STATE = {
    loading: false,
    data: null,
    error: null
}

const slice = createSlice({
    name: "product",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // fetching all products
        .addCase( fetchProducts.pending, ( state) => {
            state.loading = true;
        })
        .addCase( fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase( fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // fetching single product
        .addCase( fetchSpecificProduct.pending, ( state) => {
            state.loading = true;
        })
        .addCase( fetchSpecificProduct.fulfilled, ( state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase( fetchSpecificProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // adding product
        .addCase( addProduct.pending, ( state) => {
            state.loading = true;
        })
        .addCase( addProduct.fulfilled, ( state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase( addProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default slice.reducer;