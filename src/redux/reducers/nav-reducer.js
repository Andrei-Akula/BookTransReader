import { addNavigationHelpers } from 'react-navigation';
import { Drawer } from '../../components/drawer/navigator';


const initialState = Drawer.router.getStateForAction(Drawer.router.getActionForPathAndParams('onboard'));

export default function navReducer(state = initialState, action) {
  const nextState = Drawer.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
