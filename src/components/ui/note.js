import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { NoteText, CiteText } from '../text/text';
import { closeInfoWindow, showInfoWindow } from '../../redux/actions/info-window'

function handleNotePress(note, showMessage) {
  return function () {
    // Alert.alert('', note);
    showMessage(note, 'Примечание');
  }
}

function NoteUI(props) {
  const { note, isEnd, children, showMessage } = props;
  return (
    <NoteText onPress={handleNotePress(note, showMessage)} isEnd={isEnd}> {children}</NoteText>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  showMessage: (msg, cap) => dispatch(showInfoWindow(msg, cap)),
});

export const Note = connect(mapStateToProps, mapDispatchToProps)(NoteUI);