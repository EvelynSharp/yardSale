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

  export const currentUser = (user = {}) => {
    return { type: 'USER', user }
  }

  export const authenticateLogin = (email, password, history) => {
  return (dispatch) => {
    fetch(`/api/auth/signin`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({ email, password })
   }).then( res => res.json() )
     .then( user => {
        if(user.username) {
          dispatch(currentUser(user));
          history.push('/shopall');
        } // else {
        //
        //     if (user === 'User not found'){
        //       dispatch({ type: 'USER_ERROR', userError: 'NotAUser' });
        //     } else {
        //       dispatch({ type: 'USER_ERROR', userError: 'wrongPW' });
        //     }
        // }
      }
    )
  }}
