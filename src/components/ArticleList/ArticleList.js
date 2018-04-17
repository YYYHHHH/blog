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
        this.getArticleList();
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
            console.log(err)
        })
    }
    newArticle(){
        let { article } = this.props;
        let obj = {
            title:'',
            content:''
        };
        this.props.dispatch(actions.editArticle(obj));
    }
    render() {
        let list = [];
        if(this.state.articleList){
            list = this.state.articleList.map((val,index) => {
                return(
                    <div className='article' key={index}>
                        <div className="title">
                            {val.title}
                        </div>
                        <div className="time">
                            {tools.formatDate(val.create_time,'yyyy-MM-dd hh:mm:ss')}
                        </div>
                        <div className="method">
                            <Button><i className="iconfont icon-delete"> </i>删除</Button>
                            <Button type="secondary"><i className="iconfont icon-top"> </i>置顶</Button>
                            <Button type="primary"><i className="iconfont icon-cc-lock"> </i>设为私密</Button>
                        </div>
                    </div>
                )
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

