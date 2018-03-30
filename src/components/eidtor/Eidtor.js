/**
 * Created by b on 2018/3/30.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Input } from '../Input/Input';

import './Eidtor.less';


class Eidtor extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Eidtor'>
                <Input type="textarea" />
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Eidtor);

