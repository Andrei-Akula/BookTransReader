
import { combineReducers } from 'redux';
import navReducer from './reducers/nav-reducer';
import transReducer from './reducers/trans-reducer';
import textReducer from './reducers/text-reducer';
import infoWindowReducer from './reducers/info-window-reducer';

const storeReducers = combineReducers({
  nav: navReducer,
  text: textReducer,
  trans: transReducer,
  infoWindow: infoWindowReducer,
});

export default storeReducers;
