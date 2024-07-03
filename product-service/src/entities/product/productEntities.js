const productData = (productName, category, price, description, image) => {
    return {
        getProductName : () => productName,
        getCategory : () => category,
        getPrice : () => price,
        getDescription : () => description,
        getImage : () => image
    }
}

export default productData