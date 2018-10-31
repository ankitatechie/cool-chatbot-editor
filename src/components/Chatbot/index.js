import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import safeEval from 'safe-eval';
import { addSentMessage, addReceivedMessage } from './actions';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../Api/actions';
import { AwesomeApis } from '../Helpers/api';
import Message from './Message';
import MessageInput from './MessageInput';
import './style.scss';

class ChatbotWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.fetchOutput = this.fetchOutput.bind(this);
    this.fetchFuncFromString = this.fetchFuncFromString.bind(this);
  }

  async fetchFuncFromString(codeStr, input) {
    const evaluated = safeEval(codeStr);
    // const evaluated = async (codeStr) => {
    //   const output = await AwesomeApis.loadMovieInfo(input);
    //   return output;
    // }
    return await evaluated(input);
  }

  // async fetchFuncFromString(codeStr, input) {
  //   const maker = (code) => safeEval(`(function la(){ return ${code} })()`);
  //   const evaluated = maker(codeStr);
  //   return evaluated(input);
  // }

  async fetchOutput(input) {
    const { tabIds, tabsHash, activeTab } = this.props.tabsPayload;
    let output;
    for(let i = 0; i < tabIds.length; i++) {
      if (tabsHash[tabIds[i]].label === activeTab) {
        output = await this.fetchFuncFromString(tabsHash[tabIds[i]].content, input);
      }
    }
    return output;
  }

  async handleAddMessage(input) {
    this.props.handleAddSentMessage(input);
    this.props.fetchDataRequest();  // to show loader while responding to request
    const output = await this.fetchOutput(input);
    this.props.handleAddReceivedMessage(output);
    this.props.fetchDataSuccess(); // to stop loader while request has been responded
  }

  render() {
    const { messages } = this.props.messagePayload;
    const { isFetching } = this.props.moviesPayload;
    console.log('isFetching....', isFetching);
    return (
      <div className="chatbot-outer">
        <div className="chatbot-inner">
          {
            messages.map((message, i) => {
              return <Message key={i} message={message} isFetching={isFetching} />
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
    moviesPayload: state.movies,
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleAddSentMessage: (input) => {
    dispatch(addSentMessage(input));
  },
  handleAddReceivedMessage: (output) => {
    dispatch(addReceivedMessage(output));
  },
  fetchDataRequest: () => {
    dispatch(fetchDataRequest());
  },
  fetchDataSuccess: () => {
    dispatch(fetchDataSuccess())
  },
});

const Chatbot = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatbotWrapper);

export default Chatbot;
