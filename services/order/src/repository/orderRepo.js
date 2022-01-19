import { OrderModel } from '../models/order';

export const addOrder = async (orderData)=>{
    const newOrder = new OrderModel({...orderData})
    const savedOrder = await newOrder.save();
    return savedOrder
}

export const getOrderListByEmailId = async (orderByEmailId) =>{
    const orderList = await OrderModel.find({ orderByEmailId });
    return orderList
}