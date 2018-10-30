import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Editor from './Editor';
import './style.scss';

class WorkspaceLayout extends Component {
  render() {
    const { tabsHash, tabIds } = this.props.tabsPayload;
    const { activeTab } = this.props.tabsPayload;
    return (
      <div className="editor-wrapper">
        {
          tabIds.map((tab, i) => {
            return <Editor key={i} tab={tabsHash[tab]} activeTab={activeTab} /> 
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tabsPayload: state.tabs
  }
};

const Workspace = connect(
  mapStateToProps,
  null
)(WorkspaceLayout);

export default Workspace;
