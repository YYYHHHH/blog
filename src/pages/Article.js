/**
 * Created by b on 2018/3/26.
 */

import React from 'react';
import {connect} from 'react-redux';
import Markdown from 'react-markdown';
import Comment from '../components/comment/Comment.js'
import Reply from '../components/reply/Reply.js'

import './Article.less';
import HOST from "../tools/constant";
import http from "../tools/ajax";


class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        };
    }

    componentDidMount() {
        this.getArticle(this.props.match.params.id);
        this.getComments(this.props.match.params.id);
    }

    getArticle(art_id){
        let params = {
            method: 'post',
            url: HOST+'/article/getArticleById',
            data: {
                art_id
            },
        };
        http.ajax(params).then(res => {
            if(res.success){
                this.setState({
                    data:res.data
                })
            }
        }).catch((err)=>{
            alert('error',err)
        })
    }
    getComments(art_id){
        let params = {
            method: 'post',
            url: HOST+'/comments/getComments',
            data: {
                art_id
            },
        };
        http.ajax(params).then(res => {
            if(res.success){
                this.setState({
                    comment:res.data
                })
            }
        }).catch((err)=>{
            alert('error',err)
        })
    }
    render() {
        return (
            <div className='Article'>
                <div className='ArticleContent'>
                    <h2>{this.state.data.title}</h2>
                    <Markdown source={this.state.data.content}/>
                </div>
                <div>
                    <div className="advertise"><img src="../../static/imgs/ad.jpg" alt="广告"/></div>
                    <div className="replyTitle">
                        <span className="replySum">51条评论</span>
                        <span className="replyMethod">
                            <i className="iconfont icon-8">刷新评论</i>
                            <i className="iconfont icon-speechbubble">我要评论</i>
                        </span>
                    </div>
                    <Comment components={<Comment border components={<Comment border />}/>}/>
                    <Comment/>
                    <Comment/>
                    <div className="eidtorBox">
                        <div className="reply">发表评论</div>
                        <div className="username">ID:我不听我不听我不听我不听 </div>
                        <Reply/>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect((state) => {
    return {};
})(Article);

