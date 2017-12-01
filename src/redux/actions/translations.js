export const TOGGLE_SINLE_TRANSLAION = 'TOGGLE_SINLE_TRANSLAION';
export const TOGGLE_MULTI_TRANSLAION = 'TOGGLE_MULTI_TRANSLAION';

export function toggleTranslaion(translation, isMulti = false) {
  return {
    type: isMulti ? TOGGLE_MULTI_TRANSLAION : TOGGLE_SINLE_TRANSLAION,
    trans: translation
  }
}
