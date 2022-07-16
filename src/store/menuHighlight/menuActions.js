import * as constants from './menuConstants'

export const setCurrentMenuTab = (string) => ({
    type: constants.CURRENT_MENU_TAB,
    payload: string,
  });
  