/**
 * Created by b on 2018/4/4.
 */

import React from 'react';
import {connect} from 'react-redux';
import Button from '../../components/Button/Button'
import http from '../../tools/ajax';
import HOST from '../../tools/constant';
import tools from '../../tools';

import './ArticleList.less';
import * as actions from "../../redux/actions/article";


class ArticalList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

    }

    newArticle(){
        let obj = {
            title:'',
            content:''
        };
        this.props.setValue('onEditId','');
        this.props.dispatch(actions.editArticle(obj));
    }

    onEdit(data){
        let obj = {
            title:data.title,
            content:data.content
        };
        this.props.setValue('onEditId',data.art_id);
        this.props.dispatch(actions.editArticle(obj))
    }

    deleteArticle(art_id){
        if(confirm('确认删除文章吗？')){
            let params = {
                method: 'post',
                url: HOST+'/article/delete',
                data: { art_id },
            };
            http.ajax(params).then(res => {
                if(res.success){
                    this.props.getArticleList();
                    this.props.setValue('onEditId','');//将“当前选中文章”的id设为空，这样直接点击发表文章按钮时，为新增文章。
                }
                alert(res.msg)
            }).catch((err)=>{
                alert('error',err)
            })
        }
    }

    topArticle(art_id){
        let params = {
            method: 'post',
            url: HOST+'/article/top',
            data: { art_id },
        };
        http.ajax(params).then(res => {
            if(res.success){
                this.props.getArticleList();
            }
            alert(res.msg)
        }).catch((err)=>{
            alert('error',err)
        })
    }

    //通过secret来区分设为私密或公开
    secretArticle(art_id,secret){
        let params = {
            method: 'post',
            url: secret?HOST+'/article/unsecret':HOST+'/article/secret',
            data: { art_id },
        };
        http.ajax(params).then(res => {
            if(res.success){
                this.props.getArticleList();
            }
            alert(res.msg)
        }).catch((err)=>{
            alert('error',err)
        })
    }
    render() {
        let list = [];
        if(this.props.articleList){
            list = this.props.articleList.map((val,index) => {
                if(val.art_id === this.props.onEditId){
                    return(
                        <div className='article choosed' key={index}>
                            <div className="title">
                                {val.title}
                            </div>
                            <div className="time">
                                {tools.formatDate(val.create_time,'yyyy-MM-dd hh:mm:ss')}
                            </div>
                            <div className="method">
                                <Button onClick={()=>{this.deleteArticle(val.art_id)}}>
                                    <i className="iconfont icon-delete"> </i>删除
                                </Button>
                                <Button type="secondary" onClick={()=>{this.topArticle(val.art_id)}}>
                                    <i className="iconfont icon-top"> </i>置顶
                                </Button>
                                {
                                    val.secret?
                                        <Button type="primary" onClick={()=>{this.secretArticle(val.art_id,true)}}>
                                            <i className="iconfont icon-lockunlock"> </i>设为公开
                                        </Button>:
                                        <Button type="primary" onClick={()=>{this.secretArticle(val.art_id)}}>
                                            <i className="iconfont icon-cc-lock"> </i>设为私密
                                        </Button>
                                }
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div className='article' onClick={()=>{this.onEdit(val)}} key={index}>
                            <div className="title">
                                {val.title}
                            </div>
                            <div className="time">
                                {tools.formatDate(val.create_time,'yyyy-MM-dd hh:mm:ss')}
                            </div>
                            <div className="method">
                                <Button onClick={()=>{this.deleteArticle(val.art_id)}}>
                                    <i className="iconfont icon-delete"> </i>删除
                                </Button>
                                <Button type="secondary" onClick={()=>{this.topArticle(val.art_id)}}>
                                    <i className="iconfont icon-top"> </i>置顶
                                </Button>
                                {
                                    val.secret?
                                        <Button type="primary" onClick={()=>{this.secretArticle(val.art_id,true)}}>
                                            <i className="iconfont icon-lockunlock"> </i>设为公开
                                        </Button>:
                                        <Button type="primary" onClick={()=>{this.secretArticle(val.art_id)}}>
                                            <i className="iconfont icon-cc-lock"> </i>设为私密
                                        </Button>
                                }
                            </div>
                        </div>
                    )
                }
            })
        }

        return (
            <div className='ArticleList'>
                <div className='newArticle' onClick={()=>{this.newArticle()}}>
                    <i className="iconfont icon-bianji">
                    </i>
                    <span>写文章</span>
                </div>
                {list}
                <div className='newArticle'>
                    <span>已经到底啦！</span>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        article: state.article
    };
})(ArticalList);

