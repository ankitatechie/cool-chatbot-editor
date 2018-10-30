
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages.
 */

import React from 'react';
import "../stylesheets/main.scss";
import Tabs from './Tabs/TabList';
import Workspace from './Workspace/index';
import Chatbot from './Chatbot/index';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Tabs/>
              <Workspace/>
            </div>
            <div className="col-md-6">
              <Chatbot/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
