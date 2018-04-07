/**
 * Created by b on 2018/3/30.
 */
import React from 'react';

import './Input.less';

export default class Input extends React.Component{
    constructor(){
        super();

    }
    render(){
        let _Input,props = {};
        switch(this.props.type){
            case('textarea'):
                for(let i in this.props){
                    if(i === 'onChange'){
                        props[i] = (e)=>this.props.onChange(e.target.value);
                    }else if(i !== 'className'){
                        props[i] = this.props[i]
                    }
                }
                props.className = this.props.className?`${ this.props.className } Input-textarea`:'Input-textarea';
                _Input = <textarea {...props}/>;
                break;
            default:
                for(let i in this.props){
                    if(i === 'onChange'){
                        props[i] = (e)=>this.props.onChange(e.target.value);
                    }else if(i !== 'className'){
                        props[i] = this.props[i]
                    }
                }
                props.className = this.props.className?`${ this.props.className } Input-text`:'Input-text';
                _Input = <input {...props}/>;
        }
        return(
            _Input
        )
    }
}