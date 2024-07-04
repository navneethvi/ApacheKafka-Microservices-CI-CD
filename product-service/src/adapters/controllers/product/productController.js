import addedProduct from "../../../application/usecases/product/addProduct.js";
import getProducts from "../../../application/usecases/product/getProducts.js";
import getProductDetails from "../../../application/usecases/product/getProductDetails.js";

const productController = (
  productRepositoryInt,
  productRepositoryImp,
  productServiceInt,
  productServiceImp
) => {
  const repositories = productRepositoryInt(productRepositoryImp());
  const services = productServiceInt(productServiceImp());

  const addProduct = async (req, res) => {
    console.log(req.body);
    const { productName, category, price, description, image } = req.body;
    try {
      const response = await addedProduct(
        productName,
        category,
        price,
        description,
        image,
        repositories
      );
      console.log("response in controller : ", response);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send({ message: "Error while product add !!!" });
    }
  };

  const getProduct = async (req, res) => {
    try {
      const response = await getProducts(repositories, services);
      console.log(response);
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({ message: "Error while fetching products !!!" });
    }
  };

  const getProductDetail = async (req, res) => {
    try {
      const productId = req.params.id;
      const response = await getProductDetails(productId, repositories);
      console.log(response);
      res.status(200).send(response);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error while fetching product details !!!" });
    }
  };

  return {
    addProduct,
    getProduct,
    getProductDetail
  };
};

export default productController;
