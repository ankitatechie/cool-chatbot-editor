import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewTab, selectTab } from './actions';
import Tab from './Tab';
import './style.scss';

class TabList extends Component {
  constructor(props) {
    super(props);
    this.addNewTab = this.addNewTab.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  addNewTab() {
    const num = this.props.tabsPayload.tabIds.length;
    const data = {
      id: num + 1,
      label: `untitled${num}`,
      content: '',
    }
    this.props.handleNewTab(data);
  }

  selectTab(e) {
    const label = e.target.innerText;
    this.props.handleSelectTab(label);
  }

  render() {
    const { tabsHash, tabIds } = this.props.tabsPayload;
    const { activeTab } = this.props.tabsPayload;
    return (
      <div className="tabs">
        <ol className="tab-list">
          {
            tabIds.map((tab, i) => {
              return <Tab key={i} tab={tabsHash[tab]} activeTab={activeTab} handleSelectTab={this.selectTab}/>
            })
          }
          <li className="tab__item tab__new" onClick={this.addNewTab}>+</li>
        </ol>
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
  handleNewTab: (label) => {
    dispatch(addNewTab(label));
  },
  handleSelectTab: (label) => {
    dispatch(selectTab(label));
  }
});

const Tabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList);

export default Tabs;
