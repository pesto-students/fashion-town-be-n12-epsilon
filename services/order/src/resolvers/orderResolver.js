import { OrderModel } from '../models/order';

const createOrder = () => {
    console.log('order input ', input.name);
    const orderByName = new OrderModel({
        name: input.name,
    });

    try {
        const doc = await orderByName.save();
        console.log(doc);
    } catch (error) {
        console.log(error);
        return error;
    }

    return orderByName;
};

export {createOrder}