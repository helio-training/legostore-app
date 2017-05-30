import { combineReducers } from 'redux';
import figures from './figures';
import cart from './cart';

const rootReducer = combineReducers({
  figures,
  cart
});

export default rootReducer;