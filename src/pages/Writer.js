/**
 * Created by b on 2018/4/2.
 */

import React from 'react';
import {connect} from 'react-redux';
import ArticleList from '../components/ArticleList/ArticleList';
import Editor from '../components/Editor/Editor';

import './Writer.less';


class Writer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Writer'>
                <div className="WriterL">
                    <ArticleList/>
                </div>
                <div className="WriterR">
                    <Editor/>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Writer);

