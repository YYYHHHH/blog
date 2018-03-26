/**
 * Created by b on 2018/3/26.
 */

import React from 'react';
import {connect} from 'react-redux';

import './Message.less';


class Message extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Message'>
                Message
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Message);

