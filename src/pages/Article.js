/**
 * Created by b on 2018/3/26.
 */

import React from 'react';
import {connect} from 'react-redux';

import './Article.less';


class Article extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Article'>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Article);

