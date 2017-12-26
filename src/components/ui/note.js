import React from 'react';
import { Alert } from 'react-native';
import { NoteText, CiteText } from '../text/text';

function handleNotePress(note) {
  return function () {
    Alert.alert('', note);
  }
}

export function Note(props) {
  const { note, isEnd, children } = props;
  return (
    <NoteText onPress={handleNotePress(note)} isEnd={isEnd}> {children}</NoteText>
  );
}
