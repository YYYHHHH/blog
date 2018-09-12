/**
 * Created by b on 2018/3/26.
 */

import React from 'react';
import {connect} from 'react-redux';

import './About.less';


class About extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='About'>
                Abouta
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(About);

