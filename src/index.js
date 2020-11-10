import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import appReducers from './reducers/combine_reducers.js';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore(
  appReducers,applyMiddleware(thunk),
  // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // sau em cai extent redux k su dung no... de fixbug  e co cai tren chorrm maf chua cai no tren vs code a. khong phai no phai cai them bang cdoe nua
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
