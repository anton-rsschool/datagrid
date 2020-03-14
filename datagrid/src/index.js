/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import getData from './utils/getData';
import reducer from './redux/reducer';
import './index.scss';

const savedState = localStorage.getItem('appState');
const initialState = {
  data: getData(1000),
  sort: {},
  searchQuery: null,
  filters: {},
  selectedRows: {},
  lastSelectedRow: null,
  visibleColumns: [
    { value: 'name', label: 'Name', isFixed: true },
    { value: 'age', label: 'Age', isFixed: false },
    { value: 'city', label: 'City', isFixed: false },
    { value: 'status', label: 'Status', isFixed: false },
    { value: 'email', label: 'Email', isFixed: false },
    { value: 'role', label: 'Role', isFixed: false },
    { value: 'registration', label: 'Registration', isFixed: false },
  ],
};

const state = savedState ? { ...initialState, ...JSON.parse(savedState) } : initialState;

const store = createStore(reducer, state);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);

const unloadHandler = () => {
  const state = store.getState();
  const {
    sort, searchQuery, filters, selectedRows, visibleColumns,
  } = state;
  const newState = {
    sort, searchQuery, filters, selectedRows, visibleColumns,
  };
  const currentState = JSON.stringify(newState);
  localStorage.setItem('appState', currentState);
};

window.addEventListener('unload', unloadHandler);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
