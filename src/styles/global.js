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
     marginTop: 10,
     marginHorizontal: 10,
     padding: 10,
   },
   translationBarView: {
     height: 50,
     backgroundColor: '#757575',
   },
   baseText: {
     color: TEXT_COLOR,
     fontFamily: 'Helvetica Neue',
     textAlign: 'justify'
   },
   headerText: {
     fontFamily: 'Helvetica Neue',
     fontSize: 20,
     marginBottom: 10,
     textAlign: 'center'
   },
   paragraphText: {
     marginBottom: 5,
   },
   verseText: {
     // fontSize: 14,
     // color: VERSE_TEXT_COLOR,
   },
   verseNumberText: {
     color: VERSE_NUMBER_TEXT_COLOR,
   },
   verseNoteText: {
     // color: VERSE_NOTE_TEXT_COLOR,
     fontWeight: '700',
   },
   verseCiteText: {
     // color: VERSE_CITE_TEXT_COLOR,
     fontStyle: 'italic'
   },
});
