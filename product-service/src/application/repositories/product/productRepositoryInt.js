const productRepositoryInt = (repositories) => {
  const productExist = (productName) => repositories.productExist(productName)
  const addProduct = (productData) => repositories.addProduct(productData);
  const getAllProducts = () => repositories.getAllProducts()

  return {
    productExist,
    addProduct,
    getAllProducts
  };
};

export default productRepositoryInt;
