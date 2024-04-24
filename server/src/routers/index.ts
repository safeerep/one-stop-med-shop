import { Router } from "express";
const router = Router()

// controllers;
import { fetchProducts } from "../controllers";

// all the routes;
router.get('/get-products', fetchProducts)
router.post('/add-product', )


export default router;