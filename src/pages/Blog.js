/**
 * Created by b on 2018/3/26.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


import './Blog.less';


class Blog extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        let blogList = [];
        for(let i = 0;i<50;i++){
            blogList.push(
                <div className="BlogContentItem" key={i}>
                    <Link to="/article/01">教苹果设计师做设计（CIIA 报告 No.1 预告片）</Link>
                </div>
            )
        }
        return (
            <div className='Blog'>
                <div className='BlogContent'>
                    {blogList}
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Blog);

