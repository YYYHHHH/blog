/**
 * Created by b on 2017/8/25.
 */
'use strict';

import { combineReducers } from 'redux';
import test from './test';


import { routerReducer } from 'react-router-redux';


// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
    test,
    routing: routerReducer,
});

export default rootReducer;
