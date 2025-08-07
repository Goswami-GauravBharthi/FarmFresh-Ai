import express from "express";
import {
  createOrder,
  getAllOrders,
  deleteOrder
} from "../controllers/order.controller.js";

const orderRouter = express.orderRouter();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllOrders);

orderRouter.post("/:id", deleteOrder);

export default orderRouter;
