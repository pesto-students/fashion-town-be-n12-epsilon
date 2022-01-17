import Razorpay from 'razorpay'

const createRazorPayOrder = async (amount, orderId) => {
    return new Promise((resolve, reject) => {
        try {
            var instance = new Razorpay({
                key_id: 'rzp_test_QufTPfjwjSmSGC',
                key_secret: 'JmM6KIi0HQ5oF06sNqSzvbIH',
            });
            var options = {
                amount: amount, // amount in the smallest currency unit
                currency: 'INR',
                receipt: orderId,
            };
            
            instance.orders.create(options, function (err, order) {
                console.log(order);
                resolve(order);
            });
        } catch (error) {
            reject
        }
    });
};
export {createRazorPayOrder}
