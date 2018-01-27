export const SHOW_INFO_WINDOW = 'SHOW_INFO_WINDOW';
export const CLOSE_INFO_WINDOW = 'CLOSE_INFO_WINDOW';

export function showInfoWindow(message, caption = '') {
  return {
    type: SHOW_INFO_WINDOW,
    message,
    caption,
  }
}

export function closeInfoWindow() {
  return {
    type: CLOSE_INFO_WINDOW,
  }
}