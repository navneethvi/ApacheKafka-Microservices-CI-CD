import Order from "../../models/orderModels/orderSchema.js";

const orderRepositoryImp = () => {
  const createOrder = async (products, userId, address, total) => {
    const newOrder = new Order({
      products,
      userId: userId,
      address: address,
      totalPrice: total,
    });
    const savedOrder = await newOrder.save();
    return savedOrder;
  };

  const getOrderDetails = async () => {
    try {
      const orders = await Order.find({})
      return orders
    } catch (error) {
      console.log("Error in fetching order details from repo imp : ", error.message);
    }
  }

  return {
    createOrder,
    getOrderDetails
  };
};

export default orderRepositoryImp;
