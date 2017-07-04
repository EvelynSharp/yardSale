import { combineReducers } from 'redux';
import user from './user';
import products from './products';
import proddetails from './proddetails';

const rootReducer = combineReducers({
   user,
   products,
   proddetails,
});

export default rootReducer;
