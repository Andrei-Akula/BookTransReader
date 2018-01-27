import { SHOW_INFO_WINDOW, CLOSE_INFO_WINDOW } from '../actions/info-window';

const initialState = {
  message: '',
  caption: '',
  isClosed: true,
};

export default function infoWindowReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_INFO_WINDOW:
      return {
        message: action.message,
        caption: action.caption,
        isClosed: false,
      };
    
    default:
    // case CLOSE_INFO_WINDOW:
      return {
        ...state,
        isClosed: true
      };

    // default:
    //   return state;
  }
}