import { merge } from 'lodash';
import { TOGGLE_SINLE_TRANSLAION, TOGGLE_MULTI_TRANSLAION } from '../actions/translations'

const initialState = {
  single: "OP",
  multi: {
    "TPV": true,
    "TPK": true,
    "OP": true
  }
}
export default function transReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SINLE_TRANSLAION:
      return { ...state, single: action.trans };
    case TOGGLE_MULTI_TRANSLAION:
      return merge({}, state, {
        multi: {
          [action.trans]: !state.multi[action.trans]
        }
      });
    default:
      return state
  }
};