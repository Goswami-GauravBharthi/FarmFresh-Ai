import express from "express";
import {
  createOrder,
  getAllOrders,
  deleteOrder
} from "../controller/Order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllOrders);

orderRouter.post("/:id", deleteOrder);

export default orderRouter;
