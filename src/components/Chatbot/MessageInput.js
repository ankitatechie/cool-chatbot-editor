import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddMessage(e) {
    const input = e.target.value;
    this.setState({input});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({input: ''});
  }

  render() {
    return (
      <div className="input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.input} 
            className="chatbot-input" 
            placeholder="type message here..." 
            onChange={this.handleAddMessage}>
          </input>
          <button type="submit" className="hidden-btn"></button>
        </form>
      </div>
    )
  }
}

export default MessageInput;
