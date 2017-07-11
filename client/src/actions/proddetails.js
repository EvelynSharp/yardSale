
export const prodDetails = (prodId) => {
  return(dispatch) => {
    console.log(prodId);
    fetch(`/api/product/${prodId}`)
      .then( res => res.json() )
      .then( productArr =>  {
        console.log( productArr );
        let { id, name, price, category } = productArr[0];
        let imageUrls = productArr.map( prod => {
          return prod.imageurl;
        })
        let product = {id, name, price, category, imageUrls};
        dispatch({ type: 'PROD_DETAIL', product})
      })
    }
  }

//dispatch({ type: 'PROD_DETAIL', product})
