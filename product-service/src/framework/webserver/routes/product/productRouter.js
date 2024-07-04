import productController from "../../../../adapters/controllers/product/productController.js";
import productServiceImp from "../../../services/product/productServiceImp.js";
import productServiceInt from "../../../../application/services/product/productServiceInt.js";
import productRepositoryImp from "../../../database/mongodb/repositories/productRepositoryImp.js";
import productRepositoryInt from "../../../../application/repositories/product/productRepositoryInt.js";

const productRouter = (express) => {
  const router = express.Router();
  const controller = productController(
    productRepositoryInt,
    productRepositoryImp,
    productServiceInt,
    productServiceImp
  );
  router.route("/addProduct").post(controller.addProduct);
  router.route("/getProducts").get(controller.getProduct)
  router.route("/productDetails/:id").get(controller.getProductDetail)
  return router;
};

export default productRouter;
