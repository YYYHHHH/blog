/**
 * Created by b on 2018/4/4.
 */

import React from 'react';
import {connect} from 'react-redux';



class Editor extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='Editor'>
                Editor
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Editor);

