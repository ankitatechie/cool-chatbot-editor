import {
  ADD_TAB,
  SELECT_TAB,
  SAVE_CODE,
} from './constants';
import respond from '../util';

const initialState = {
  tabIds: ['1'],
  tabsHash: {
    '1': {
      id: '1',
      label: 'index.js',
      content: respond.toString()
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
        ...state[action.id],
        ...action.payload
      }
      console.log('dhhsdksdksd', {...state});
      return {
        ...state
      }
    default:
      return state;
  }
}