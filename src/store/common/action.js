import * as types from './actionTypes';

export const setLayout = ({ commit }, layout) => 
  commit(types.LAYOUT_SWAP, layout)
