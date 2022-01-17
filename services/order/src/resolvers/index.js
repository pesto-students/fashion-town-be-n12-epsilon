import { createOrder } from './orderResolver';
import { razorPayOrder } from './createRazorPayOrderResolver';

//Define resolvers

export default {
    Mutation: {
        createOrder: async (parent, { input }) => {
            return createOrder(input)
        },
        createRazorPayOrder: async (parent, { input }) => {
            return razorPayOrder(input);
        },
    },
};
