import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import proddetails from './proddetails';
import messages from './messages';

const rootReducer = combineReducers({
   user,
   products,
   proddetails,
   messages,
});

export default rootReducer;
