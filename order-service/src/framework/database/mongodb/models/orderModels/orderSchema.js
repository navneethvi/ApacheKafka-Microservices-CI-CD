import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      producttId: String,
    },
  ],
  userId: String,
  totalPrice: Number,
  address: {
    username: String,
    housename: String,
    pincode: Number,
    town: String,
    phone: Number,
    email: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", orderSchema)

export default Order