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
    //onEditId来区分是新增还是编辑，edit来区分是否公开
    report(edit){
        let { article,onEditId } = this.props;
        let params = {
            method: 'post',
            url: onEditId?HOST+'/article/edit':HOST+'/article/report',
            data: {
                title:article.title,
                content:article.content
            },
        };
        if(onEditId){
            params.data.art_id = onEditId
        }
        if(edit){
            params.data.secret = 1
        }else{
            params.data.secret = 0
        }
        http.ajax(params).then(res=>{
            if(res.success){
                alert(res.msg);
                this.props.getArticleList()
            }
        }).catch((err)=>{
            alert('error',err)
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
                        <i className='iconfont icon-save' onClick={()=>this.report('edit')}> </i>
                        <Link to="/preview"><i className='iconfont icon-book'> </i></Link>
                    </span>
                    <span className='toolbarR' onClick={()=>this.report()}>
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

