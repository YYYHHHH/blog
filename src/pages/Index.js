/**
 * Created by b on 2018/3/23.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import './Index.less';


class Index extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Index'>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/blog">文章</Link></li>
                    <li><Link to="/message">留言</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Index);

