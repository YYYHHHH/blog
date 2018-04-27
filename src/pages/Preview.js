/**
 * Created by b on 2018/4/8.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import * as actions from '../redux/actions/article';

import Input from '../components/Input/Input';

import './Preview.less';
import HOST from "../tools/constant";
import http from "../tools/ajax";


class Preview extends React.Component {
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
                if(edit){
                    alert('保存成功！')
                }else{
                    alert('发表成功！')
                }
                history.go(-1);
            }

        }).catch((err)=>{
            alert('error',err)
        })
    };

    render() {
        let { article } = this.props;
        return (
            <div className='Preview'>
                <div className='PreviewL'>
                    <div className="title">
                        <Input
                            value={article.title}
                            onChange={(value)=>{this.editTitle(value)}}/>
                    </div>
                    <div className='toolbar'>
                        <span className='toolbarL'>
                            <i className='iconfont icon-save' onClick={()=>this.report('edit')}> </i>
                            <Link to="/writer"><i className='iconfont icon-book'> </i></Link>
                        </span>
                            <span className='toolbarR' onClick={()=>this.report()}>
                            <i className='iconfont icon-up_right'> </i>
                            <span>发表文章</span>
                        </span>
                    </div>
                    <Input
                        value={article.content}
                        onChange={(value)=>this.editArticle(value)}
                        type='textarea'
                        className='editorInput'/>
                </div>
                <div className='PreviewR'>
                    <div className="title">{article.title}</div>
                    <Markdown source={article.content}/>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        article: state.article,
        onEditId: state.onEditId
    };
})(Preview);

