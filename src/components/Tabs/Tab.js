import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';

export default class Tab extends Component {
  render() {
    const { label } = this.props.tab;
    const activeTab = this.props.activeTab === label ? 'tab__item--active' : '';
    return (
      <li className={`tab__item ${activeTab}`} onClick={this.props.handleSelectTab}>{label}</li>
    )
  }
}
