import { gql } from 'apollo-server';

export default gql`
    type Product {
        id: String
        image: String
        brand: String
        title: String
        size: String
        qty: Int
        price: Int
    }
    type Order {
        id: String
        orderByEmailId: String
        products: [Product]
        totalPrice: Int
    }

    type Query {
        order(name: String): Order
    }
    type razorPayOrder {
        id: String
        entity: String
        amount: Int
        amount_paid: Int
        amount_due: Int
        currency: String
        receipt: String
        status: String
    }
    
    input OrderInput {
        id: String
        orderByEmailId: String
        products: [Product]
        totalPrice: Int
    }
    input razorPayOrderInput {
        amount: Int
        orderId: String
    }
    type Mutation {
        createOrder(input: OrderInput): Order
        createRazorPayOrder(input: razorPayOrderInput): razorPayOrder
    }
`;
