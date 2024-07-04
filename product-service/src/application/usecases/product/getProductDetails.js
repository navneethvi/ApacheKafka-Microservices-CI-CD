const getProductDetails = async (productId, repositories) => {
    try {
        const productDetails = await repositories.productDetails(productId)
        return ({status : true, productDetails : productDetails})
    } catch (error) {
        console.log("Error while fetching Product Details : ", error.message);
        return ({status : false})
    }
}

export default getProductDetails