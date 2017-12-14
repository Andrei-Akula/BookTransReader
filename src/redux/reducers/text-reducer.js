import { merge } from 'lodash';
import { SELECT_VERSE  } from '../actions/text-related'

const initialState = {
  selectedVerse: {
    book: '',
    chapter: '',
    number: 0
  }
}
export default function transReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_VERSE:
      return { ...state, selectedVerse: action.selectedVerse };
    default:
      return state
  }
};