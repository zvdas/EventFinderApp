import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import combineReducers from './components/redux/reducers/combine_reducers';
import thunk from 'redux-thunk';
import { getAllFromAPI } from './components/redux/actions/api_services';
import { Provider } from 'react-redux';
import SendDataToAPI from './components/redux/containers/01.SendDataToAPI';

const store = createStore(combineReducers, applyMiddleware(thunk));
store.dispatch(getAllFromAPI())
store.dispatch(SendDataToAPI())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
