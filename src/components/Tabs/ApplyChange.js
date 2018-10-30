import React, { Component } from 'react';
import './style.scss';

class ApplyChange extends Component {
  constructor(props) {
    super(props);
    this.handleApplyChange = this.handleApplyChange.bind(this);
  }

  handleApplyChange() {
    this.props.handleSave();
  }

  render() {
    const applyBtnActive = this.props.isApplyBtnActive ? 'apply-btn--active' : '';
    return (
      <div className={`apply-btn ${applyBtnActive}`} onClick={this.handleApplyChange}>Apply change</div>
    )
  }
}

export default ApplyChange;