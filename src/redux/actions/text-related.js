export const SELECT_VERSE = 'SELECT_VERSE';
export const CLEAR_VERSE_SELECTION = 'CLEAR_VERSE_SELECTION';

export function selectVerse(number) {
  return {
    type: SELECT_VERSE,
    verseNumber: number
  }
}
export function clearVerseSelection() {
  return {
    type: SELECT_VERSE,
    verseNumber: 0
  }
}
