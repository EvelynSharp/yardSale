
export const getProds = () => {
  return(dispatch) => {
    fetch('/api/products')
      .then( res => res.json() )
      .then( products => dispatch({ type: 'GET_PRODS', products}) )
  }
}
