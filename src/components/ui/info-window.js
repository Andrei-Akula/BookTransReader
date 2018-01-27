import React from 'react';
import { connect } from 'react-redux';
import { Animated, View, ScrollView, StyleSheet, Text  } from 'react-native';
import { Button, Icon, } from 'native-base';
import { closeInfoWindow, showInfoWindow } from '../../redux/actions/info-window'


class InfoWindowUI extends React.Component {
  constructor(props) {
    super(props);
    this.close = () => this.props.closeWindow();
    this.state = {
      heightOffset: 0
    };
  }

  componentDidMount() {

  }


  render() {
    const { message, caption, isClosed } = this.props;

    if (isClosed) {
      return null;
    }

    return (
      <View style={style.window}>
        <View style={style.closeButton}>
          <Button transparent primary
            onPress={this.close}>
            <Icon name='close-circle' />
          </Button>
        </View>
        <View style={style.container}>
          <View style={style.header}>
            <Text>{caption}</Text>
            
          </View>
          <ScrollView>
            <Text>{message}</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state) => ({
  message: state.infoWindow.message,
  caption: state.infoWindow.caption,
  isClosed: state.infoWindow.isClosed,
});

const mapDispatchToProps = (dispatch) => ({
  // showMessage: (msg, cap) => dispatch(showInfoWindow(msg, cap)),
  closeWindow: () => dispatch(closeInfoWindow())
});

export const InfoWindow = connect(mapStateToProps, mapDispatchToProps)(InfoWindowUI);

const style = StyleSheet.create({
  window: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '20%',
  },
  closeButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: -10,
    top: -8,
    zIndex: 100,
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    marginBottom: 10
  }
});