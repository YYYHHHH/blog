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
            <Route exact path="/" component={Demo} />
            <Route path="/home" render={() => <h1>Home</h1>} />
            <Route path="/test" render={()=><Test routes ={{path:'/test/aa',component:Demo}}/>} />
            <Route component={NotFount}/>
        </Switch>
    </Router>
)