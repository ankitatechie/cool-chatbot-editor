import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEditorChanges } from '../Tabs/actions';
import Editor from './Editor';
import './style.scss';

class WorkspaceLayout extends Component {
  render() {
    const { tabsHash, tabIds, activeTab } = this.props.tabsPayload;
    return (
      <div className="editor-wrapper">
        {
          tabIds.map((tab, i) => {
            return <Editor 
              key={i} 
              tab={tabsHash[tab]} 
              activeTab={activeTab}
              handleApplyChange={this.props.handleApplyChange} 
            /> 
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

const mapDispatchToProps = (dispatch) => ({
  handleApplyChange: (data) => {
    dispatch(saveEditorChanges(data));
  }
});

const Workspace = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceLayout);

export default Workspace;
