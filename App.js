/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { BackHandler } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import storeReducers from './src/redux/store';
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import Drawer from './src/components/drawer/navigator';

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <Drawer navigation={navigation} />;
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const ReduxNavigationWithState = connect(mapStateToProps)(ReduxNavigation);

// const initialState = {};
// let store = createStore(storeReducers, initialState);
let store = createStore(storeReducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxNavigationWithState />
      </Provider>
    )
  }
}
