/**
 * Created by b on 2018/3/23.
 */

import React from 'react';
import {connect} from 'react-redux';

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
                Index
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Index);

