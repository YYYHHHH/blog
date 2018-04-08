/**
 * Created by b on 2018/4/4.
 */

import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions/article';

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

    render() {
        let { article } = this.props;
        return (
            <div className='Editor'>
                <div className='title'>
                    <Input
                        value={article.title}
                        onChange={(value)=>{this.editTitle(value)}}/>
                </div>
                <div className='toolbar'>
                    <span className='toolbarL'>
                        <i className='iconfont icon-save'> </i>
                        <Link to="/preview"><i className='iconfont icon-book'> </i></Link>
                    </span>
                    <span className='toolbarR'>
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
        );
    }
}

export default connect((state) => {
    return {
        article: state.article
    };
})(Editor);

