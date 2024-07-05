const orderController =  (orderRepositoryInt, orderRepositoryImp, orderServiceInt, orderServiceImp) => {
    const repositories = orderRepositoryInt(orderRepositoryImp())
    const services = orderServiceInt(orderServiceImp())

    const createOrder = (req, res) => {

    }

    return {
        createOrder
    }
}  

export default orderController