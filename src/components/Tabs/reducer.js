import {
  ADD_TAB,
  SELECT_TAB,
  SAVE_CODE,
} from './constants';
import respond from '../util';

const code = `
/**
* Enter your every-time code here.
* This function will run every time when user performs some action.
*/

${respond.toString()}`;

const initialState = {
  tabIds: ['1'],
  tabsHash: {
    '1': {
      id: '1',
      label: 'index.js',
      content: code
    },
  },
  activeTab: 'index.js',
}

export function tabsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TAB:
      const { label } = action;
      return {
        tabIds: [...state.tabIds, action.id],
        tabsHash: {
          ...state.tabsHash,
          [action.id]: action.payload,
        },
        activeTab: action.payload.label,
      }
    case SELECT_TAB:
      return {
        ...state,
        activeTab: action.label,
      }
    case SAVE_CODE:
      state.tabsHash[action.id] = {
        id: action.id,
        ...action.payload
      }
      return {
        ...state
      }
    default:
      return state;
  }
}