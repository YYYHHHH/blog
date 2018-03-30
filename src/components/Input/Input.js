/**
 * Created by b on 2018/3/30.
 */
import React from 'react';

import './input.less';

export class Input extends React.Component{
    constructor(){
        super();

    }
    render(){
        let _Input;
        switch(this.props.type){
            case('textarea'):
                _Input = <textarea
                    {...this.props}
                    className="textarea"/>;
                break;
            default:
                _Input = <input
                    {...this.props}
                    className="text"/>;
        }
        return(
            _Input
        )
    }
}