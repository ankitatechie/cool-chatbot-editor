import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSentMessage, addReceivedMessage } from './actions';
import Message from './Message';
import MessageInput from './MessageInput';
import respond from '../util';
import './style.scss';

class ChatbotWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.fetchOutput = this.fetchOutput.bind(this);
    this.fetchFuncFromString = this.fetchFuncFromString.bind(this);
  }

  fetchFuncFromString(codeStr, input) {
    eval(`var fn = ${codeStr}`);
    fn(input)
    console.log('sdhsjdhsdjsd', fn(input));
  }

  fetchOutput(input) {
    const { tabIds, tabsHash, activeTab } = this.props.tabsPayload;
    tabIds.map((tab, i) => {
      if (tabsHash[tab].label === activeTab) {
        this.fetchFuncFromString(tabsHash[tab].content, input);
      }
    });
  }

  handleAddMessage(input) {
    // const output = this.fetchOutput(input);
    const output = respond(input);
    this.props.handleAddSentMessage(input);
    this.props.handleAddReceivedMessage(output);
  }

  render() {
    const { messages } = this.props.messagePayload;
    return (
      <div className="chatbot-outer">
        <div className="chatbot-inner">
          {
            messages.map((message, i) => {
              return <Message key={i} message={message} />
            })
          }
        </div>
        <MessageInput onSubmit={this.handleAddMessage} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    messagePayload: state.messages,
    tabsPayload: state.tabs,
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleAddSentMessage: (input) => {
    dispatch(addSentMessage(input));
  },
  handleAddReceivedMessage: (output) => {
    dispatch(addReceivedMessage(output));
  }
});

const Chatbot = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatbotWrapper);

export default Chatbot;
