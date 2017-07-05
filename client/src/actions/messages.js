export const addMsg = (msgDetails) => {
  return(dispatch) => {
    fetch('/api/messages/send', {
      method: 'POST',
      headers: {
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...msgDetails })
    })
  }
}
