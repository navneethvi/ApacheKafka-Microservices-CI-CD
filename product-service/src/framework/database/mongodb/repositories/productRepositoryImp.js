import Product from "../models/productModel/productSchema.js";
import productProducer from "../../../../events/productProducer.js";

const productRepositoryImp = () => {
  const productExist = async (productName) => Product.findOne({ productName });

  const addProduct = async (productData) => {
    try {
      const product = new Product({
        productName: productData?.getProductName(),
        category: productData?.getCategory(),
        price: productData?.getPrice(),
        description: productData?.getDescription(),
        image: productData?.getImage(),
      });
      const savedProduct = await product.save();
      return savedProduct;
      console.log("Product added successfully:", savedProduct);
    } catch (error) {
      console.log("Error in addProduct : ", error.message);
    }
  };

  const getAllProducts = async () => Product.find({});

  const productDetails = async (productId) =>
    await Product.findOne({ _id: productId });

  const orderProduct = async (productId, userId, address) => {
    try {
        console.log("datas in repo imp : ",productId, userId, address);
      const products = await Product.find({ _id: { $in: productId } });
      let orderData = {
        products,
        userId,
        address,
      };
      console.log("Order Data : ", orderData);
      await productProducer(orderData, "order", "orderedProducts");
      return orderData;
    } catch (error) {
      console.log("Error in orderProduct repository : ", error.message);
    }
  };

  return {
    productExist,
    addProduct,
    getAllProducts,
    productDetails,
    orderProduct
  };
};

export default productRepositoryImp;
