import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../redux/store/index'
import Routes from '../router/routes';

import './main.less';

ReactDOM.render(
    <Provider store={store}>
        {Routes}
    </Provider>,
    document.getElementById('container')
);