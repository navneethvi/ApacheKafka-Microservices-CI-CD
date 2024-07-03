import Product from "../models/productModel/productSchema.js";

const productRepositoryImp = () => {
  const addProduct = async (productData) => {
    try {
      const product = new Product({
        productName: productData?.productName,
        category: productData?.category,
        price: productData?.price,
        description: productData?.description,
        image: productData?.image,
      });
      const savedProduct = await product.save();
      return savedProduct;
      console.log("Product added successfully:", savedProduct);
    } catch (error) {
      console.log("Error in addProduct : ", error.message);
    }
  };

  return {
    addProduct
  }
};

export default productRepositoryImp;
