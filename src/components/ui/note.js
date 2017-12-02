import React from 'react';
import { Alert } from 'react-native';
import { Note, Cite } from '../text/text';

function handleNotePress(note) {
  return function () {
    Alert.alert('', note);
  }
}

export function NoteUI(props) {
  const { note, isEnd, children } = props;
  return (
    <Note onPress={handleNotePress(note)} isEnd={isEnd}>{children}</Note>
  );
}
