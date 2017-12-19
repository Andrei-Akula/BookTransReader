import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Container, Content, H1, H3, Spinner } from "native-base";

export class OnboardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    gesturesEnabled: false,
  });

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('home');
    }, 3000);
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.title}><H1>Современный перевод новозаветных Посланий</H1></View>
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

  }
});