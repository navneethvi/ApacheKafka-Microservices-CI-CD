const productRepositoryInt = (repositories) => {
  const productExist = (productName) => repositories.productExist(productName);
  const addProduct = (productData) => repositories.addProduct(productData);
  const getAllProducts = () => repositories.getAllProducts();
  const productDetails = (productId) => repositories.productDetails(productId);

  return {
    productExist,
    addProduct,
    getAllProducts,
    productDetails
  };
};

export default productRepositoryInt;
