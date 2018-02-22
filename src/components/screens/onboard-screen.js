import React from 'react';
import { NavigationActions } from 'react-navigation';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Content, H1, H3, Spinner } from "native-base";
import { getSavedNavRoute } from '../../utils/navigation-store';

const LONG_DELAY = 3000;
const SHORT_DELAY = 1000;

export class OnboardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    gesturesEnabled: false,
  });

  componentDidMount() {
    getSavedNavRoute().then(navRoute => {
      let delay = SHORT_DELAY;
      let resetAction = null;

      if (!navRoute) {
        delay = LONG_DELAY;
      } else if (navRoute.routeName !== 'home') {
        const { routeName, params } = navRoute;
        const actions = [ 
          NavigationActions.navigate({ routeName, params })
        ];

        resetAction = NavigationActions.reset({ index: 0, actions });
      }

      setTimeout(() => {
        if (resetAction) {
          this.props.navigation.dispatch(resetAction);
        } else {
          this.props.navigation.navigate('home');
        }
      }, delay);
    });
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.title}><H1 style={style.h1}>Современный перевод новозаветных Посланий</H1></View>
        <View style={style.author}><H3>Андрей Десницкий</H3></View>
        <View style={style.spinner}><Spinner color="#455A64" /></View>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    // marginBottom: 50
  },
  author: {
    // marginBottom: 30
  },
  spinner: {

  },
  h1: {
    textAlign: 'center'
  }
});
