import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { productsReducer, userReducer } from './reducers';

import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';

const allReducers = combineReducers({ products: productsReducer, user: userReducer });
const defaultState = {
	products: ['iPhone'],
	user: 'Partha'
};

const store = createStore(allReducers, defaultState, window.devToolsExtension && window.devToolsExtension());

console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
