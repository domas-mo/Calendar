import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import ResetStyle from './components/styled/Reset';
import GlobalStyle from './components/styled/GlobalStyle';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ResetStyle/>
        <GlobalStyle/>
        <App />
    </Provider>,
    document.querySelector('#root')
);