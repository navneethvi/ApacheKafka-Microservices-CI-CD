import createOrder from "../application/usecases/order/createOrder.js";
import orderRepositoryInt from "../application/repositories/order/orderRepositoryInt.js";
import orderRepositoryImp from "../framework/database/mongodb/repositories/order/orderRepositoryImp.js";

const repositories = orderRepositoryInt(orderRepositoryImp());

const handleMessage = async (data, type) => {
  try {
    if (type === "orderedProducts") {
      const response = await createOrder(
        data.products,
        data.userId,
        data.address,
        repositories
      );
      return response;
    }
  } catch (error) {
    console.log("Error in handle Message : ", error.message);
    return null;
  }
};

export default handleMessage
