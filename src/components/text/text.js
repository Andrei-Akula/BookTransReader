import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { commonStyles } from '../../styles/global'


export function HeaderText({ children, ...rest }) {
  return (
    <Text style={commonStyles.headerText} {...rest}>
      {children}
    </Text>
  );
}

HeaderText.propTypes = {
  children: PropTypes.node
};


export function ParagraphText({ children, ...rest }) {
  return (
    <Text style={commonStyles.paragraphText} {...rest}>
    {children}
    </Text>
  );
}

ParagraphText.propTypes = {
  children: PropTypes.node
};


export function VerseText({ style, children, ...rest }) {
  return (
    <Text style={[commonStyles.verseText, style]} {...rest}>
      {children}
    </Text>
  );
}

VerseText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};


export function VerseNumber({ number, ...rest }) {
  return (
    <Text style={commonStyles.verseNumberText} {...rest}>
    {number}<NumberSpace />
    </Text>
  );
}

VerseNumber.propTypes = {
  children: PropTypes.node
};


export function NoteText({ children, isEnd, ...rest }) {
  const space = isEnd ? null : <TextSpace />
  return (
    <Text style={commonStyles.verseNoteText} {...rest}>
      {children}{space}
    </Text>
  );
}

NoteText.propTypes = {
  children: PropTypes.node
};


export function CiteText({ children, ...rest }) {
  return (
    <Text style={commonStyles.verseCiteText} {...rest}>
    {children}
    </Text>
  );
}

CiteText.propTypes = {
  children: PropTypes.node
};



export function TextSpace() {
  const sp = ' ';
  return (
    <VerseText>{sp}</VerseText>
  );
}

function NumberSpace() {
  return (
    <Text style={{color: 'transparent'}}>|</Text>
  );
}
