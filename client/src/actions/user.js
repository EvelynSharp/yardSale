export const authenticateNew = (email, password) => {
  return (dispatch) => {
    fetch(`/api/auth/signup`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({email, password })
   }).then( res => res.json() )
     .then( user => {
        // if(user.username) {
        //   dispatch(currentUser(user));
        //   history.push('/dashboard');
        // } else {
        //     dispatch({ type: 'USER_ERROR', userError: 'dupedUser' });
        // }
      }
    )
  }}
