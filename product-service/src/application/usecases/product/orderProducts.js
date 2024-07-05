const orderProducts = async (productId, userId, address, repositories, services) => {
    try {
        const productDatas = await repositories.orderProduct(productId, userId, address)
        if(productDatas) return ({status : true, productDatas : productDatas})
    } catch (error) {
        console.log("Error in order Products usecase : ", error.message);
    }
}

export default orderProducts