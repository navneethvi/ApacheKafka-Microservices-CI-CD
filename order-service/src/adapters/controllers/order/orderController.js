import getOrderDetails from "../../../application/usecases/order/getOrders.js";

const orderController = (
  orderRepositoryInt,
  orderRepositoryImp,
  orderServiceInt,
  orderServiceImp
) => {
  const repositories = orderRepositoryInt(orderRepositoryImp());
  const services = orderServiceInt(orderServiceImp());

  const createOrder = (req, res) => {};

  const getOrder = async (req, res) => {
    try {
      console.log("im hitted");
      const response = await getOrderDetails(repositories, services);
      res.status(200).json(response);
    } catch (error) {
      console.log("Error in get Order controller : ", error.message);
    }
  };

  return {
    createOrder,
    getOrder,
  };
};

export default orderController;
