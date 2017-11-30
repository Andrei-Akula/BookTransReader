
import { combineReducers } from 'redux';
import navReducer from './reducers/nav-reducer'

// function simple(state = {}, action) {
//   return state;
// }

const storeReducers = combineReducers({
  nav: navReducer
});

export default storeReducers;
