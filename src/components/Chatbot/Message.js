import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Message extends Component {

  getSentMessage(text) {
    return (
      <div className="message-sent">
        <div className="inline-message message-text">{text}</div>
        <div className="inline-message sender-icon"></div>
      </div>
    )
  }

  getReceivedMessage(text) {
    return (
      <div className="message-received">
        <div className="inline-message sender-icon">(-_-)</div>
        <div className="inline-message message-text">
          {text}
        </div>
      </div>
    )
  }

  render() {
    const { type, text } = this.props.message;
    let renderEl;
    if (type === 'sent') {
      renderEl = this.getSentMessage(text);
    } else {
      renderEl = this.getReceivedMessage(text);
    }
    return (
      <div className="message-wrapper">
        {renderEl}
      </div>
    )
  }
}

export default Message;
