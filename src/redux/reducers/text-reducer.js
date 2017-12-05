import { merge } from 'lodash';
import { SELECT_VERSE  } from '../actions/text-related'

const initialState = {
  selectedVerseNumber: 0
}
export default function transReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_VERSE:
      return { ...state, selectedVerseNumber: action.verseNumber };
    default:
      return state
  }
};