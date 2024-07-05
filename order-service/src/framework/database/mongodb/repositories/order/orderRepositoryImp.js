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
    return newOrder;
  };

  return {
    createOrder,
  };
};

export default orderRepositoryImp;
