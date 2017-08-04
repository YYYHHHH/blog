import React from 'react';
import ReactDOM from 'react-dom';

import Routes from '../src/router/routes';

import './main.less';

ReactDOM.render(
    <div>{Routes}</div>,
    document.getElementById('container')
);