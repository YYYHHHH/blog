/**
 * Created by b on 2017/8/3.
 */
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import Demo from '../components/Demo';
import Test from '../components/Test';

import NotFount from '../components/NotFount';

export default (
    <Router>
        <Switch>
            <Route exact path="/" render={()=><Demo />}  />
            <Route path="/home" render={() => <h1>Home</h1>} />
            <Route path="/test/:id" component={Test}/>
            <Route component={NotFount}/>
        </Switch>
    </Router>
)