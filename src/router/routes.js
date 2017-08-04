/**
 * Created by b on 2017/8/3.
 */
import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'

import Demo from '../components/Demo';
import Test from '../components/Test';


export default (
    <Router>
        <div>
            <Route exact path="/" component={Demo} />
            <Route exact path="/:id" component={Test} />
        </div>
    </Router>
)