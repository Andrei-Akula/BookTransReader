export const SELECT_VERSE = 'SELECT_VERSE';
export const CLEAR_VERSE_SELECTION = 'CLEAR_VERSE_SELECTION';

export function selectVerse(selectedVerse) {
  return {
    type: SELECT_VERSE,
    selectedVerse
  }
}
export function clearVerseSelection() {
  return {
    type: SELECT_VERSE,
    selectedVerse: {
      book: '',
      chapter: '',
      number: 0
    }
  }
}
