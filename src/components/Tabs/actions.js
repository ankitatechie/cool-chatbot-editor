import {
  ADD_TAB,
  SELECT_TAB,
  SAVE_CODE,
} from './constants';

export function addNewTab(data) {
  return {
    type: ADD_TAB,
    id: data.id,
    payload: {
      id: data.id,
      label: data.label,
      content: data.content,
    },
  };
}

export function selectTab(label, id) {
  return {
    type: SELECT_TAB,
    label,
  };
}

export function saveEditorChanges(data) {
  return {
    type: SAVE_CODE,
    id: data.id,
    payload: {
      label: data.label,
      content: data.content,
    }
  }
}

