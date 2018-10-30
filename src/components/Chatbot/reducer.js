import {
  ADD_SENT_MESSAGE,
  ADD_RECEIVED_MESSAGE,
} from './constants';

const initialState = {
  messages: [
    {
      type: 'sent',
      text: 'Hi'
    },
    {
      type: 'received',
      text: 'Hi how are you? Hi how are you? Hi how are you? Hi how are you?'
    }
  ]
}

export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SENT_MESSAGE:
      return {
        messages: [...state.messages, {
          type: 'sent',
          text: action.text
        }],
      }
    case ADD_RECEIVED_MESSAGE:
      return {
        messages: [...state.messages, {
          type: 'received',
          text: action.text
        }],
      }
    default:
      return state;
  }
}