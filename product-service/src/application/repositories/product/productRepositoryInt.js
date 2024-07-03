const productRepositoryInt = (repositories) => {
  const addProduct = (productData) => repositories.addProduct(productData);

  return {
    addProduct,
  };
};

export default productRepositoryInt;
