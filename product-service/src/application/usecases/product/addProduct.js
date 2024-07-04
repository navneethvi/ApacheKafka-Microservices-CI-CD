import productData from "../../../entities/product/productEntities.js";

const addedProduct = async (
  productName,
  category,
  price,
  description,
  image,
  repositories
) => {
  try {
    const productExists = await repositories.productExist(productName);
    console.log("product exist : ", productExists);
    if (productExists) {
      console.log("Product with this name already exists");
      return {
        status: false,
        message: "Product with this name already exists!!!",
      };
    }

    const productdata = productData(
      productName,
      category,
      price,
      description,
      image
    );

    const newProduct = await repositories.addProduct(productdata);

    return {
      status: true,
      productData: newProduct,
      message: "Product added successfully!!!",
    };
  } catch (error) {
    console.log("Error while adding new Product : ", error.message);
  }
};

export default addedProduct;
