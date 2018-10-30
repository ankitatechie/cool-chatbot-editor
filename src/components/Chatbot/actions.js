import {
  ADD_SENT_MESSAGE,
  ADD_RECEIVED_MESSAGE,
} from './constants';

export function addSentMessage(text) {
  return {
    type: ADD_SENT_MESSAGE,
    text,
  };
}

export function addReceivedMessage(text) {
  return {
    type: ADD_RECEIVED_MESSAGE,
    text,
  };
}
