import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';

import allReducers from './redux/reducers';
const store = createStore(allReducers);

require('bootstrap/dist/css/bootstrap.min.css')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);