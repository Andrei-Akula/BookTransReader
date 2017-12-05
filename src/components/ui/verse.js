import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { selectVerse } from '../../redux/actions/text-related'
import { commonStyles } from '../../styles/global';

class VerseWpapper extends React.Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.selectedVerse !== this.props.selectedVerse
      && (this.props.selectedVerse === this.props.number 
          || nextProps.selectedVerse === this.props.number);
  }
  
  render () {
    const { number, selectedVerse, children } = this.props;
    const style = selectedVerse === number ? commonStyles.selectedVerseText : [];
    return (
      <Text 
        onPress={() => this.props.selectVerse(selectedVerse === number ? 0 : number)} 
        style={style}>{children}</Text>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedVerse: state.text.selectedVerseNumber
});
const mapDispatchToProps = (dispatch) => ({
  selectVerse: number => dispatch(selectVerse(number))
});

export const VerseUI = connect(mapStateToProps, mapDispatchToProps)(VerseWpapper);