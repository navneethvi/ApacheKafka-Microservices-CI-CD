import addedProduct from "../../../application/usecases/product/addProduct.js";

const productController = (productRepositoryInt, productRepositoryImp, productServiceInt, productServiceImp) => {
    const repositories = productRepositoryInt(productRepositoryImp())
    const services = productServiceInt(productServiceImp())

    const addProduct = async (req, res) => {
        console.log(req.body);
        const {productName, category, price, description, image} = req.body
        try {
            const response = await addedProduct(productName, category, price, description, image, repositories, services)
            console.log("response in controller : ", response);
            res.status(201).send(response)
        } catch (error) {
            res.status(500).send({message : "Error while product add !!!"})
        }
    }

    return {
        addProduct
    }
}

export default productController