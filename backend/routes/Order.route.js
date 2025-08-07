import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrdersByUserId,
  getOrdersByFarmerId,
  updateOrderStatus,
  deleteOrder,
  markPaymentAsPaid,
  getPendingOrders,
  getOrdersByDateRange
} from '../controllers/order.controller.js';

const orderRouter = express.orderRouter();

orderRouter.post('/', createOrder);
orderRouter.get('/', getAllOrders);
orderRouter.post('/:id', updateOrderStatus);
orderRouter.post('/:id/payment', markPaymentAsPaid);
orderRouter.post('/:id', deleteOrder);
orderRouter.get('/status/pending', getPendingOrders);
orderRouter.get('/filter/date', getOrdersByDateRange);

export default orderRouter;
