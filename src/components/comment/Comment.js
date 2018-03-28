/**
 * Created by b on 2018/3/28.
 */

import React from 'react';
import {connect} from 'react-redux';


import './Comment.less';


class Comment extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Comment'>
                Comment
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Comment);

