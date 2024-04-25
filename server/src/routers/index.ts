import { Router } from "express";
const router = Router()

// controllers;
import { 
    addProduct, 
    fetchProducts, 
    fetchSpecificProduct
} from "../controllers";

// to fetch all the products;
router.get('/fetch-products', fetchProducts)
// to fetch the details of a specific product;
router.get('/fetch-product-details/:productId', fetchSpecificProduct)
// to add product;
router.post('/add-product', addProduct)


export default router;