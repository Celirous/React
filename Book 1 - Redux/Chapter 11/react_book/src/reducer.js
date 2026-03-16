// Reducer
function cartReducer(state, action) {
  if (state === undefined) {
    return {
      totalCost: 0,
      productCart: [],
    };
  }
  switch (action.type) { //The only time we use this is if we have a lot of things to check. This works like an if statement for functions. We are using it here because we have 2 things that need to be done, so if we call either of the "functions", only one of them will run. 
    case "addProduct":
      return {
        ...state, // this ...state is for grabbing the info from the product state already. So that we can use all the info inside an object or array and then update only what is needed. When it sends out the update object, it is a new object as it gets to the database, then it i will update the actual object on the database. 
        totalCost: state.totalCost + parseInt(action.productData.productPrice),
        productCart: state.productCart.concat({
          productName: action.productData.productName,
          productPrice: action.productData.productPrice,
        }),
      };
    case "deleteProduct":
      const updatedArray = state.productCart.filter(
        (product) => product.productName !== action.productData.productName,
      );
      return {
        ...state,
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
        productCart: updatedArray,
      };
    default:
      return state;
  }
}
export default cartReducer;
