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
            onEditId:'',
            articleList:[],
            pageSize:10,
            droploadFlag:false

        };
        this.getArticleList = this.getArticleList.bind(this);
    }

    componentDidMount() {
        this.getArticleList(1);
    }
    setValue(name,value){
        this.setState({
            [name]:value
        })
    }
    getArticleList(pageIndex){
        let params = {
            method: 'post',
            url: HOST+'/article/getList',
            data: {
                pageIndex,
                pageSize:this.state.pageSize
            },
        };
        http.ajax(params).then(res => {
            if(res.success){
                if(res.data&&res.data.length>0){
                    let { articleList } = this.state;
                    this.setState({
                        articleList:articleList.concat(res.data)
                    })
                }else{
                    this.setState({
                        droploadFlag:true                    //说明已经没有更多可以加载的了
                    })
                }
            }
        }).catch((err)=>{
            alert('error',err)
        })
    }
    render() {
        return (
            <div className='Writer'>
                <div className="WriterL">
                    <ArticleList
                        droploadFlag={this.state.droploadFlag}
                        articleList={this.state.articleList}
                        getArticleList={this.getArticleList}/>
                </div>
                <div className="WriterR">
                    <Editor
                        getArticleList={this.getArticleList}/>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Writer);

