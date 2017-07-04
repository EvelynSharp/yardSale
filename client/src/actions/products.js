
export const getProds = () => {
  return(dispatch) => {
    fetch('/api/products')
      .then( res => res.json() )
      .then( products => dispatch({ type: 'GET_PRODS', products}) )
  }
}

export const addProd = (prodDetails) => {
  return(dispatch) => {
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...prodDetails })
    }).then( res => res.json() )
      .then( products => dispatch({ type: 'GET_PRODS', products}))
  }
}





//       .then( newEvent => dispatch({ type: 'ADD_EVENT', newEvent }))
//   }
// }
