import { gql } from 'apollo-server';
import razorPay from './razorPay';
import order from './order';
import Item from './item';

export default gql`
    ${razorPay}
    ${order}
    ${Item}

    type Query {
        order(name: String): Order
    }

    type Mutation {
        createOrder(input: OrderInput): Order
        createRazorPayOrder(input: razorPayOrderInput): razorPayOrder
    }
`;
