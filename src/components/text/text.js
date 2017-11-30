import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { commonStyles } from '../../styles/global'

export function BaseText({ style, children, ...rest }) {
  return (
    <Text style={[commonStyles.baseText, style]} {...rest}>
    {children}
    </Text>
  );
}

BaseText.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};


export function Header({ style, children }) {
  return (
    <BaseText style={[commonStyles.headerText, style]}>
    {children}
    </BaseText>
  );
}

Header.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};


export function Paragraph({ style, children }) {
  return (
    <BaseText style={[commonStyles.paragraphText, style]}>
    <TextSpace />{children}
    </BaseText>
  );
}

Paragraph.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};


export function Verse({ style, children }) {
  return (
    <BaseText style={[commonStyles.verseText, style]}>
    {children}<TextSpace />
    </BaseText>
  );
}

Verse.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};


export function VerseNumber({ style, number }) {
  return (
    <BaseText style={[commonStyles.verseNumberText, style]}>
    {number}<NumberSpace />
    </BaseText>
  );
}

VerseNumber.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};


export function Note({ children }) {
  return (
    <BaseText style={commonStyles.verseNoteText}>
    {children}
    </BaseText>
  );
}

Note.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node
};


export function Cite({ children }) {
  return (
    <BaseText style={commonStyles.verseCiteText}>
    {children}
    </BaseText>
  );
}

Cite.propTypes = {
  children: PropTypes.node
};

// Difference

// MultipleOptions


function TextSpace() {
  const sp = ' ';
  return (
    <BaseText>{sp}</BaseText>
  );
}
function NumberSpace() {
  return (
    <BaseText style={{color: 'transparent'}}>|</BaseText>
  );
}
