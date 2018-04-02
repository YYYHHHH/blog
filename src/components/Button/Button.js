/**
 * Created by b on 2018/4/2.
 */
import React from 'react';

import './Button.less';

export default class Button extends React.Component{
    constructor(){
        super()
    }
    render(){
        let _Button,props = {};
        switch(this.props.type){
            case('primary'):
                for(let i in this.props){
                    if(i !== 'className'){
                        props[i] = this.props[i]
                    }
                }
                props.className = this.props.className?`${ this.props.className } btn Button-primary`:'btn Button-primary';
                _Button = <button {...props}>{this.props.children}</button>;
                break;
            case('secondary'):
                for(let i in this.props){
                    if(i !== 'className'){
                        props[i] = this.props[i]
                    }
                }
                props.className = this.props.className?`${ this.props.className } btn Button-secondary`:'btn Button-secondary';
                _Button = <button {...props}>{this.props.children}</button>;
                break;
            default:
                for(let i in this.props){
                    if(i !== 'className'){
                        props[i] = this.props[i]
                    }
                }
                props.className = this.props.className?`${ this.props.className } btn Button-default`:'btn Button-default';
                _Button = <button {...props}>{this.props.children}</button>;
        }
        return(
            _Button
        )
    }
}