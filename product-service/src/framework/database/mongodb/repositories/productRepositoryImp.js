import Product from "../models/productModel/productSchema.js";

const productRepositoryImp = () => {

  const productExist = async (productName) => Product.findOne({productName})

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

  const getAllProducts = async () => Product.find({})

  const productDetails = async (productId) => await Product.findOne({_id : productId})

  return {
    productExist,
    addProduct,
    getAllProducts,
    productDetails
  }
};

export default productRepositoryImp;
