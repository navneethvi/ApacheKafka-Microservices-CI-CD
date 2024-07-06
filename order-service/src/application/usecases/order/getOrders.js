const getOrderDetails = async(repositories, services) => {
    try {
        const response = await repositories.getOrderDetails()
        return ({status : true, orders : response})
    } catch (error) {
        console.log("Error in get order details usecase : ", error.message);
    }
}

export default getOrderDetails