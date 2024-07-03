import addedProduct from "../../../application/usecases/product/addProduct.js";

const productController = (productRepositoryInt, productRepositoryImp, productServiceInt, productServiceImp) => {
    const repositories = productRepositoryInt(productRepositoryImp())
    const services = productServiceInt(productServiceImp())

    const addProduct = async (req, res) => {
        console.log(req.body);
    }

    return {
        addProduct
    }
}

export default productController