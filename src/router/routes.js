/**
 * Created by b on 2017/8/3.
 */
import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import Demo from '../components/Demo';
import Test from '../components/Test';

import Index from '../pages/Index';
import Blog from '../pages/Blog';
import Article from '../pages/Article';
import Message from '../pages/Message';
import About from '../pages/About';
import Writer from '../pages/Writer';
import Preview from '../pages/Preview';

import NotFount from '../components/NotFount';

export default (
    <Router>
        <Switch>
            <Route path="/home" render={() => <h1>Home</h1>} />
            <Route path="/test/:id" component={Test}/>
            <Route path="/demo" render={()=><Demo />}/>

            <Route exact path="/" component={Index} />
            <Route path="/blog" component={Blog} />
            <Route path="/article/:id" component={Article} />
            <Route path="/message" component={Message} />
            <Route path="/about" component={About} />
            <Route path="/writer" component={Writer} />
            <Route path="/preview" component={Preview} />

            <Route component={NotFount}/>
        </Switch>
    </Router>
)