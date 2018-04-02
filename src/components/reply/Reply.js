/**
 * Created by b on 2018/3/30.
 */

import React from 'react';
import {connect} from 'react-redux';
import Input  from '../Input/Input';
import Button  from '../Button/Button';

import './Reply.less';


class Reply extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Reply'>
                <Input type="textarea" className="reply-textarea"/>
                <div className="reply-btn">
                    <Button type="primary">发表</Button>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Reply);

