const productRepositoryInt = (repositories) => {
  const productExist = (productName) => repositories.productExist(productName);
  const addProduct = (productData) => repositories.addProduct(productData);
  const getAllProducts = () => repositories.getAllProducts();
  const productDetails = (productId) => repositories.productDetails(productId);
  const orderProduct = (productId, userId, address) => repositories.orderProduct(productId, userId, address)

  return {
    productExist,
    addProduct,
    getAllProducts,
    productDetails,
    orderProduct
  };
};

export default productRepositoryInt;
