/**
 * Created by b on 2018/4/4.
 */

import React from 'react';
import {connect} from 'react-redux';
import Markdown from 'react-markdown';
import Input from '../Input/Input';

import './editor.less'

class Editor extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }
    setValue(name,value){
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className='Editor'>
                <div className='title'>
                    <Input defaultValue='react中父组件的操作触发的react中父组件的操作触发的函数需要用到子组件内的数据作为参数函数需要用到子组件内的数据作为参数'/>
                </div>
                <div className='toolbar'>
                    <span className='toolbarL'>
                        <i className='iconfont icon-save'> </i>
                        <i className='iconfont icon-book'> </i>
                    </span>
                    <span className='toolbarR'>
                        <i className='iconfont icon-up_right'> </i>
                        <span>发表文章</span>
                    </span>
                </div>
                <Input
                    value={this.state.content}
                    onChange={(value)=>this.setValue('content',value)}
                    type='textarea'
                    className='editorInput'/>
                <Markdown source={this.state.content}/>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Editor);

