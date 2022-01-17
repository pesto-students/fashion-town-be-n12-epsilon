import { gql } from 'apollo-server';
export default gql`
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
    input razorPayOrderInput {
        amount: Int
        orderId: String
    }
`;
