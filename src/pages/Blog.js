/**
 * Created by b on 2018/3/26.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


import './Blog.less';
import HOST from "../tools/constant";
import http from "../tools/ajax";


class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            pageSize:20,
            pageIndex:1,
            articleList:[],
            droploadFlag:false
        };
    }

    componentDidMount() {
        let { blogList } = this.refs;
        blogList.addEventListener('scroll',()=>this.dropload());
        this.getArticleList(1);
    }
    componentWillUnmount(){
        let { blogList } = this.refs;
        blogList.removeEventListener('scroll',this.dropload)
    }
    dropload(){
        let { blogList } = this.refs;
        let { droploadFlag } = this.state;
        if(!droploadFlag){
            if(blogList.scrollHeight - blogList.clientHeight - blogList.scrollTop <= 20){
                this.getArticleList(this.state.pageIndex+1,true);
                this.setState({
                    pageIndex:this.state.pageIndex+1
                })
            }
        }else{
            blogList.removeEventListener('scroll',this.dropload)
        }
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
        let blogList;
        if(this.state.articleList){
            blogList = this.state.articleList.map((val,index)=>{
                return(
                    <div className="BlogContentItem" key={index}>
                        <Link to={`/article/${val.art_id}`}>{val.title}</Link>
                    </div>
                )
            })
        }
        return (
            <div className='Blog'>
                <div className='BlogContent' ref="blogList">
                    {blogList}
                    <div className='nomore'>
                        <span>没有更多啦！</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Blog);

