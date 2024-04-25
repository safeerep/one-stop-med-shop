import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonRequest } from "../common/api";

export const fetchProducts = createAsyncThunk(
    '/fetch-products', async () => {
        return commonRequest(
            "GET",
            "/fetch-products",
            {},
        )
    }
)

export const fetchSpecificProduct = createAsyncThunk(
    '/fetch-product-details', async (productId: string) => {
        return commonRequest(
            "GET",
            `/fetch-product-details/${productId}`,
            {},
        )
    }
)

export const addProduct = createAsyncThunk(
    '/add-product', async (productDetails: object) => {
        return commonRequest(
            "GET",
            `/add-product`,
            productDetails
        )
    }
)