const messages = (state = [], action) => {
  switch(action.type) {
    case 'GET_MSGS':
      return action.messages
    default:
      return state;
  }
}

export default messages;
