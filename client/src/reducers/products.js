const products = (state = [], action) => {
  switch(action.type) {
    case 'GET_PRODS':
      return action.products
    default:
      return state;
  }
}

export default products;
