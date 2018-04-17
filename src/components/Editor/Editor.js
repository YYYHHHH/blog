/**
 * Created by b on 2018/4/4.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions/article';
import http from '../../tools/ajax';
import HOST from '../../tools/constant';

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
    editTitle(value){
        let { article } = this.props;
        let obj = {
            title:value,
            content:article.content
        };
        this.props.dispatch(actions.editArticle(obj));
    }
    editArticle(value){
        let { article } = this.props;
        let obj = {
            title:article.title,
            content:value
        };
        this.props.dispatch(actions.editArticle(obj));
    }
    report = ()=>{
        let { article } = this.props;
        let params = {
            method: 'post',
            url: HOST+'/article/report',
            data: {
                title:article.title,
                content:article.content,
                secret:0
            },
        };
        http.ajax(params).then(res=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    };

    render() {
        let { article } = this.props;
        return (
            <div className='Editor'>
                <div className='title'>
                    <Input
                        placeholder="请输入标题..."
                        value={article.title}
                        onChange={(value)=>{this.editTitle(value)}}/>
                </div>
                <div className='toolbar'>
                    <span className='toolbarL'>
                        <i className='iconfont icon-save'> </i>
                        <Link to="/preview"><i className='iconfont icon-book'> </i></Link>
                    </span>
                    <span className='toolbarR' onClick={this.report}>
                        <i className='iconfont icon-up_right'> </i>
                        <span>发表文章</span>
                    </span>
                </div>
                <Input
                    placeholder="请输入内容..."
                    value={article.content}
                    onChange={(value)=>this.editArticle(value)}
                    type='textarea'
                    className='editorInput'/>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        article: state.article
    };
})(Editor);

