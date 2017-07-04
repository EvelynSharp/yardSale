const proddetails = (state = {}, action) => {
  switch(action.type) {
    case 'PROD_DETAIL':
      return action.product
    default:
      return state;
  }
}

export default proddetails;
