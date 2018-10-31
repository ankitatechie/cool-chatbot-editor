import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { tabsReducer } from './components/Tabs/reducer';
import { messageReducer } from './components/Chatbot/reducer';
import { moviesReducer } from './components/Api/reducer';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  tabs: tabsReducer,
  messages: messageReducer,
  movies: moviesReducer,
});
