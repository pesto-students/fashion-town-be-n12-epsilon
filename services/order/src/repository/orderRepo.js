import { OrderModel } from '../models/order';

export const addOrder = async (orderData)=>{
    const newOrder = new OrderModel({...orderData})
    console.log(newOrder)
    const savedOrder = await newOrder.save();
    return savedOrder
}

export const getOrderListByEmailId = async (orderByEmailId) =>{
    console.log(orderByEmailId)
    const orderList = await OrderModel.find({ orderByEmailId });
    console.log(orderList)
    return orderList
}