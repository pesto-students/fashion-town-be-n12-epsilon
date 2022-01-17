import { OrderModel } from '../models/order';

export const addOrder = async (orderData)=>{
    console.log(orderData)
    const newOrder = new OrderModel({...orderData})
    console.log(newOrder)
    const savedOrder = await newOrder.save();
    return savedOrder
}