const getProducts = async (repositories, services) => {
    try {
        const products = await repositories.getAllProducts()
        return ({status : true, products : products})
    } catch (error) {
        console.log("Error while fetching Products : ", error.message);
        return ({status : false})
    }
}

export default getProducts