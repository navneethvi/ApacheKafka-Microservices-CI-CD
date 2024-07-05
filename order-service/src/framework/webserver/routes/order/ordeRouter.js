import orderController from "../../../../adapters/controllers/order/orderController.js";
import orderRepositoryInt from "../../../../application/repositories/order/orderRepositoryInt.js";
import orderRepositoryImp from "../../../database/mongodb/repositories/order/orderRepositoryImp.js";
import orderServiceInt from "../../../../application/services/order/orderServiceInt.js";
import orderServiceImp from "../../../database/mongodb/repositories/order/orderRepositoryImp.js";

const orderRouter = (express) => {
  const router = express();
  const controller = orderController(
    orderRepositoryInt,
    orderRepositoryImp,
    orderServiceInt,
    orderServiceImp
  );
  router.route("/createOrder").post(controller.createOrder);

  return router;
};

export default orderRouter