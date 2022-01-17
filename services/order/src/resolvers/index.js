import { createOrder } from './orderResolver';
import { razorPayOrder } from './razorPayOrderResolver';

//Define resolvers

export default {
    Mutation: {
        createOrder: async (parent, { input }) => {
            return createOrder
        },
        createRazorPayOrder: async (parent, { input }) => {
            return razorPayOrder(input);
        },
    },
};
