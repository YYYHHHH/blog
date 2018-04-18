/**
 * Created by b on 2018/4/2.
 */

import React from 'react';
import {connect} from 'react-redux';
import http from '../tools/ajax';
import HOST from '../tools/constant';
import ArticleList from '../components/ArticleList/ArticleList';
import Editor from '../components/Editor/Editor';

import './Writer.less';


class Writer extends React.Component {
    constructor() {
        super();
        this.state = {
            onEditId:''
        };
        this.getArticleList = this.getArticleList.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    componentDidMount() {
        this.getArticleList();
    }
    setValue(name,value){
        this.setState({
            [name]:value
        })
    }
    getArticleList(){
        let params = {
            method: 'post',
            url: HOST+'/article/getList',
            data: {

            },
        };
        http.ajax(params).then(res => {
            this.setState({
                articleList:res.data
            })
        }).catch((err)=>{
            alert('error',err)
        })
    }
    render() {
        return (
            <div className='Writer'>
                <div className="WriterL">
                    <ArticleList
                        articleList={this.state.articleList}
                        onEditId={this.state.onEditId}
                        setValue={this.setValue}
                        getArticleList={this.getArticleList}/>
                </div>
                <div className="WriterR">
                    <Editor
                        onEditId={this.state.onEditId}
                        getArticleList={this.getArticleList}/>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Writer);

