import Mongoose from "mongoose"
import validator from 'validator';

let OrderSchema = new Mongoose.Schema({
  name :{
    type: String,
    required: true
  }
})

export const OrderModel =  Mongoose.model('Order', OrderSchema)