/**
 * Created by b on 2017/8/3.
 */
import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'

import Demo from '../src/components/Demo';
import Test from '../src/components/Test';


export default (
    <Router>
        <div>
            <Route path="/" component={Demo} />
            <Route path="/test" component={Test} />
        </div>
    </Router>
)