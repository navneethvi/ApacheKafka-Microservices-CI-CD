const productRepositoryInt = (repositories) => {
  const productExist = (productName) => repositories.productExist(productName)
  const addProduct = (productData) => repositories.addProduct(productData);

  return {
    productExist,
    addProduct
  };
};

export default productRepositoryInt;
