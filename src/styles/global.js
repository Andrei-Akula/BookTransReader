import { StyleSheet } from 'react-native';

export const TEXT_COLOR = '#111';
export const BG_COLOR = '#ecf0f1';
export const VERSE_NUMBER_TEXT_COLOR = '#777';
export const VERSE_TEXT_COLOR = TEXT_COLOR;
export const VERSE_NOTE_TEXT_COLOR = TEXT_COLOR;
export const VERSE_CITE_TEXT_COLOR = TEXT_COLOR;
// export const MUTED_COLOR = '#8e8786';
// export const LINK_COLOR = '#48e9d9';
// export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  chapterView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#e9e9ef',
  },
  chapterScrollView: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
  },
  translationMultiItem: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  chapterScrollViewGridItem: {
    padding: 5,
    flexDirection: 'column',
    
  },
  chapterThreeItems: {
    margin: 2,
    width: '32.8%',
  },
  chapterTwoItems: {
    margin: 4,
    width: '49%',
  },
  chapterGrid: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 4,
  },
  // translationBarView: {
  //   height: 50,
  //   backgroundColor: '#757575',
  // },
  // translationBarContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  baseText: {
    color: TEXT_COLOR,
    fontFamily: 'Helvetica Neue',
    textAlign: 'justify'
  },
  headerText: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.38
  },
  paragraphText: {
    marginBottom: 5,
  },
  verseText: {
    // fontSize: 14,
    // color: VERSE_TEXT_COLOR,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.408
  },
  verseNumberText: {
    color: VERSE_NUMBER_TEXT_COLOR,
  },
  selectedVerseText: {
    backgroundColor: '#ffcc00'
  },
  verseNoteText: {
    // color: VERSE_NOTE_TEXT_COLOR,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408
  },
  verseCiteText: {
    // color: VERSE_CITE_TEXT_COLOR,
    fontStyle: 'italic'
  },
});
