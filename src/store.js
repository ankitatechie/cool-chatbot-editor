import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import thunkMiddleware from 'redux-thunk';
import { reducers } from "./reducer";

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the thunk middleware
middlewares.push(thunkMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(createBrowserHistory(), store);

// export
export { store, history };
