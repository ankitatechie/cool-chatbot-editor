import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import PropTypes from 'prop-types';
import ApplyChange from '../Tabs/ApplyChange';
import './style.scss';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.tab.content
    }
    this.onChange = this.onChange.bind(this);
    this.handleApplyChange = this.handleApplyChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.activeTab === this.props.tab.label) {
      // to focus the MonacoEditor instance
      this.refs.monaco.editor.focus();
    }
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onChange(newValue, e) {
    this.setState({
      code: newValue
    });
  }

  handleApplyChange() {
    console.log('inside editor', this.props);
    const data = {
      id: this.props.tab.id,
      label: this.props.activeTab,
      content: this.state.code,
    }
    this.props.handleApplyChange(data);
  }

  render() {
    const { label, content } = this.props.tab;
    const activeTab = this.props.activeTab === label ? 'editor--active' : '';
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    const isApplyBtnActive = this.state.code !== this.props.tab.content ? true : false;
    return (
      <div className={`editor-layout ${activeTab}`}>
        <ApplyChange
          handleSave={this.handleApplyChange}
          isApplyBtnActive={isApplyBtnActive}
        />
        <MonacoEditor
          ref="monaco"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default Editor;
