import { OrderModel } from '../models/order';
import { addOrder } from '../repository/orderRepo';

const createOrder = (OrderData) => {
   return addOrder(OrderData)
};

export {createOrder}