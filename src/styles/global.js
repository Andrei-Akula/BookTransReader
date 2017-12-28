import { Platform, StyleSheet } from 'react-native';

export const TEXT_COLOR = '#111';
export const BG_COLOR = '#ecf0f1';
export const VERSE_NUMBER_TEXT_COLOR = '#777';
export const VERSE_TEXT_COLOR = TEXT_COLOR;
export const VERSE_NOTE_TEXT_COLOR = '#007AFF';
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
    // backgroundColor: '#e9e9ef',
  },
  chapterScrollView: {
    backgroundColor: '#fff',
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
  chapterOneItem: {
    margin: 6,
  },
  chapterGrid: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 4,
  },
  baseText: {
    color: TEXT_COLOR,
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica Neue'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
    //textAlign: 'justify'
  },
  headerText: {
    ...Platform.select({
      ios: {
        fontFamily: 'Helvetica Neue',
        fontSize: 20,
        fontWeight: "400",
        lineHeight: 25,
        letterSpacing: 20 * 19 / 1000,
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 32,
        letterSpacing: 5,
      }
    }),
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraphText: {
    marginBottom: 8,
  },
  verseText: {
    color: VERSE_TEXT_COLOR,
    ...Platform.select({
      ios: {
        fontSize: 17,
        fontWeight: "400",
        lineHeight: 22,
        letterSpacing: 17 * -24 / 1000,
      },
      android: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        letterSpacing: 10,
      }
    }),
  },
  verseNumberText: {
    color: VERSE_NUMBER_TEXT_COLOR,
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir Next',
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 20,
        letterSpacing: 15 * -16 / 1000,
      },
      android: {
        fontFamily: 'Roboto Thin',
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 20,
        letterSpacing: 10,
      }
    }),
  },
  selectedVerseText: {
    backgroundColor: '#FFF9C4'
  },
  verseNoteText: {
    color: VERSE_NOTE_TEXT_COLOR,
    textDecorationLine: 'underline',
    ...Platform.select({
      ios: {
        fontFamily: 'Georgia',
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 20,
        letterSpacing: 15 * -16 / 1000,
      },
      android: {
        fontFamily: 'Roboto Thin',
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 20,
        letterSpacing: 10,
        textAlignVertical: 'top',
      }
    }),
  },
  verseCiteText: {
    // color: VERSE_CITE_TEXT_COLOR,
    fontStyle: 'italic'
  },
});
