const createOrder = async (products, userId, address, repositories) => {
  try {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    const order = await repositories.createOrder(
      products,
      userId,
      address,
      total
    );
    if (order) {
      console.log("Success: Order created successfully");
      return { status: true, order: order };
    } else {
      console.log("Error: Failed to create order");
      return { status: false, order: null };
    }
  } catch (error) {
    console.log("Error in create order usecase : ", error.message);
    return { status: false, orders: null };
  }
};

export default createOrder