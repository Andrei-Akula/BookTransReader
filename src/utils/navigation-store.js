import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
const CURRENT_ROUTE = 'current_route';

/**
 * Saves navigation route into AsyncStorage
 * @param {*} routeName A destination routeName that has been registered somewhere in the app's router
 * @param {*} params Params to merge into the destination route
 * @param {*} action The sub-action to run in the child router, if the screen is a navigator
 */
export function saveNavRoute(routeName, params, action) {
  try {
    return AsyncStorage.setItem(CURRENT_ROUTE, JSON.stringify({ routeName, params, action }));
  } catch (err) {
    console.error(err);
    return Promise.resolve(null);
  };
}

/**
 * Gets saved navigation route from AsyncStorage
 */
export function getSavedNavRoute() {
  try {
    return AsyncStorage.getItem(CURRENT_ROUTE).then(JSON.parse);
  } catch (error) {
    console.error(err);
    return Promise.resolve(null);
  }
}
