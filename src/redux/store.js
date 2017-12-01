
import { combineReducers } from 'redux';
import navReducer from './reducers/nav-reducer'
import transReducer from './reducers/trans-reducer'

const storeReducers = combineReducers({
  nav: navReducer,
  trans: transReducer
});

export default storeReducers;
