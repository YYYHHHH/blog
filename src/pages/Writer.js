/**
 * Created by b on 2018/4/2.
 */

import React from 'react';
import {connect} from 'react-redux';


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
                Writer
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Writer);

