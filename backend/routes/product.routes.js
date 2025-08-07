import express from "express";
import { addProduct, deleteProduct, getAllProducts, getMyProducts } from "../controller/Product.controller.js";
import isAuthenticated from "../middleware/isAutheticated.js";



const productRoute = express.Router();

productRoute.post("/add-product",isAuthenticated, addProduct);
productRoute.post("/delete-product",isAuthenticated, deleteProduct);
productRoute.post("/get-product",isAuthenticated, getMyProducts);

productRoute.post("/get-all-products", getAllProducts);

export default productRoute;