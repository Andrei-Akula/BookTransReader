import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { selectVerse } from '../../redux/actions/text-related'
import { VerseText } from '../text/text';
import { commonStyles } from '../../styles/global';

class VerseUI extends React.Component {

  shouldComponentUpdate(nextProps) {
    const { book, chapter, number, selectedVerse } = this.props;
    const verse = { book, chapter, number };
    // update if selection changed and the verse was selected or will be selected
    return !isEqual(nextProps.selectedVerse, selectedVerse)
      && (isEqual(selectedVerse, verse) 
      || isEqual(nextProps.selectedVerse, verse));
  }
  
  render () {
    const { book, chapter, number, selectedVerse, children } = this.props;
    const verse = { book, chapter, number };
    const isSelected = isEqual(selectedVerse, verse);
    const style = isSelected ? commonStyles.selectedVerseText : [];
    return (
      <VerseText 
        onPress={() => this.props.selectVerse(isSelected ? { book: '', chapter: '', number: 0} : verse)} 
        style={style}>{children}</VerseText>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedVerse: state.text.selectedVerse
});
const mapDispatchToProps = (dispatch) => ({
  selectVerse: verse => dispatch(selectVerse(verse))
});

export const Verse = connect(mapStateToProps, mapDispatchToProps)(VerseUI);