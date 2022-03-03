import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/main';
import newsReducer from './reducers/news';
import { composeWithDevTools } from 'redux-devtools-extension';

let rootReducer = combineReducers({
  mainPage: mainReducer,
  newsPage: newsReducer,
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;
